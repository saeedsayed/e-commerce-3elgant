'use client'
import React, { useEffect, useState } from 'react'

const InternetChecker = () => {
    const [isOnline, setIsOnline] = useState<boolean>(true)
    useEffect(() => {
        window.addEventListener('offline', () => {
            setIsOnline(false)
        })
        window.addEventListener('online', () => {
            setIsOnline(true)
        })
        return () => {
            window.removeEventListener('offline', () => {
                setIsOnline(false)
            })
            window.removeEventListener('online', () => {
                setIsOnline(true)
            })
        }
    }, [])
    return (
        <>
            {!isOnline && (
                <p className="
                    fixed bottom-0 inset-x-0 text-white bg-red-500 bg-opacity-75 py-4 z-50 text-center text-2xl animate-pulse
                ">You do'nt have an internet connection !</p>
            )}
        </>
    )
}

export default InternetChecker