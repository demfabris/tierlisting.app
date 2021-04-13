interface Theme {
  [props: string]: string | unknown
}

export const theme: Theme = {
  shadows: {
    soft:
      'box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
    medium:
      'box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    hard:
      'box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
    ultra: 'box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px'
  },
  font: {
    head: '700 24px Poppins ',
    regular: '500 16px Poppins'
  }
}
