import React from 'react'
import { FaArrowLeft, FaCartShopping } from 'react-icons/fa6'
import { Button } from '../common'
import Link from 'next/link'

const EmptyCart = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] gap-6">
            <FaCartShopping className='w-24 h-24' />
            <div className="grid gap-2 text-center">
                <h1 className="text-2xl font-bold">Your cart is empty</h1>
                <p className="text-muted-foreground">Looks like you haven't added any items to your cart yet.</p>
            </div>
            <Link href="/shop">
                <Button className='flex items-center gap-2'>
                    <FaArrowLeft />
                    Continue Shopping
                </Button>
            </Link>
        </div>
    )
}

export default EmptyCart