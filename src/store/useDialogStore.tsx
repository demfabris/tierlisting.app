import { Fragment, ReactNode } from 'react'
import create from 'zustand'

type DialogState = {
  children: ReactNode
  setChildren: (children: ReactNode) => void
}

export const useDialogStore = create<DialogState>((set) => ({
  children: <Fragment />,
  setChildren: (children) => set(() => ({ children }))
}))
