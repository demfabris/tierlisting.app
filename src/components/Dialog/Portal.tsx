import { Fragment, ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  children: ReactNode
  selector: string
}
export const Portal = ({ children, selector }: Props) => {
  const [mountedSSR, setMountedSSR] = useState(false)
  const ref = useRef<Element>(null!)

  useEffect(() => {
    ref.current = document.querySelector(selector)!
    setMountedSSR(true)
  }, [])

  return mountedSSR ? createPortal(children, ref.current) : <Fragment />
}
