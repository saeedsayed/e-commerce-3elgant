'use client'
import React from 'react'
import { Button } from '../common';
import Link from 'next/link';
import { useCartContext } from '@/context/CartContext';

type Props = {}

const CartSummary = (props: Props) => {
    const { cart, shippingMethods, selectedShippingMethod, setSelectedShippingMethod, totalCartPrice } = useCartContext();
    return (
        <div className='p-6 border rounded-md border-sub-text sticky top-0'>
            <h4 className='mb-4 text-xl'>Cart Summary</h4>
            <div className='flex flex-col gap-4 mb-4'>
                {shippingMethods.map((item) => (
                    <label key={item.id} htmlFor={item.attributes.methodName} className={`py-3 px-4 border border-[#141718] rounded-md
                            flex justify-between ${item.attributes.methodName === selectedShippingMethod.methodName ? 'bg-[#F3F5F7]' : ''}`}>
                        <div>
                            <input type="radio" checked={item.attributes.methodName === selectedShippingMethod.methodName} name="shippingMethod" id={item.attributes.methodName}
                                onChange={() => setSelectedShippingMethod(item.attributes)} />
                            <span className='ml-4'>{item.attributes.methodName}</span>
                        </div>
                        {item.attributes.increases === 0 ?
                            <span>Free</span> :
                            <span>{item.attributes.typeIncrease === 'percentage' ? `%` : `+$`}{item.attributes.increases}</span>}
                    </label>
                ))}
            </div>
            <div className='flex justify-between border-b py-3'>
                <p className=''>Subtotal</p>
                <p className=''>${totalCartPrice?.subTotal}</p>
            </div>
            <div className='flex justify-between py-3'>
                <p className='text-xl font-bold'>Total</p>
                <p className='text-xl font-bold'>${totalCartPrice?.total}</p>
            </div>
            <Link href={"/cart/checkout"}>
                <Button className='w-full mt-10'>Checkout</Button>
            </Link>
        </div>
    )
}

export default CartSummary