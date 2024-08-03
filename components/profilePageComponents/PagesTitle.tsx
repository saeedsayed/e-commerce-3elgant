import{ ReactNode } from 'react'

interface Props {
  children : ReactNode;
}

const PagesTitle = ({children}:Props) => {
  return (
    <h1 className="text-xl font-semibold mb-6">{children}</h1>
  )
}

export default PagesTitle