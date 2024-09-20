import React from 'react'

const dots = () => {
    return (
        <div className="flex flex-row gap-2">
            <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:.7s]" />
            <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:.3s]" />
            <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:.7s]" />
        </div>
    )
}

export default dots