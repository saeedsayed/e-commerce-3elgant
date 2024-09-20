import React from 'react'

type Props = {
    readonly children: React.ReactNode
}

const CardBody = ({ children }: Props) => {
    return (
        <div className='border border-[#6C7275] px-6 py-4 rounded-md'>
            {children}
        </div>
    )
}

export default CardBody