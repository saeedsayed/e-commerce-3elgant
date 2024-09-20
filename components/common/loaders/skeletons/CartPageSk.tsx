import { SHIPPING_METHODS } from '@/constants'
import React from 'react'
import Button from '../../Button'
import { CouponInput } from '@/components/cartPageComponents'

const CartPageSk = () => {
    return (
        <div className='flex gap-6 py-20 flex-col md:flex-row animate-pulse'>
            <div className='md:w-7/12 lg:w-8/12'>
                <div className="hidden md:block mb-16">
                    <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                        {/* head */}
                        <thead>
                            <tr>
                                {["Product", "Quantity", "Price", "Subtotal"].map((item) => (
                                    <th
                                        key={item}
                                        className="whitespace-nowrap py-2 font-medium text-sub-text text-start"
                                    >
                                        {item}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        {/* Body */}
                        <tbody className="divide-y divide-gray-200">
                            {[...Array(3)].map((e, i) => (
                                <tr key={i}>
                                    <td className="text-text py-6">
                                        {/* {table data} */}
                                        <div className='h-12 w-40 rounded-md bg-primary' />
                                    </td>
                                    <td className="text-text py-6">
                                        {/* {table data} */}
                                        <div className='h-10 w-28 rounded-md bg-primary' />
                                    </td>
                                    <td className="text-text py-6">
                                        {/* {table data} */}
                                        <div className='h-10 w-28 rounded-md bg-primary' />
                                    </td>
                                    <td className="text-text py-6">
                                        {/* {table data} */}
                                        <div className='h-10 w-28 rounded-md bg-primary' />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* <SmallDevicesCartTable /> */}
                <div className='md:hidden mb-6'>
                    <h3 className='pb-6 font-semibold border-b border-b-black'>Product</h3>
                    {[...Array(3)].map((e, i) => (
                        <div key={i} className="flex py-3 md:py-0 border-b md:border-b-0">
                            <div
                                className="me-4 object-contain w-20 h-20 bg-primary rounded-md"
                            />
                            <div className="flex items-start flex-col gap-2 w-48">
                                <div className="w-14 h-4 rounded-md bg-primary" />
                                <p className="text-xs text-sub-text flex items-center">color: <span className='block w-10 h-4 rounded-md bg-primary' /></p>
                                <div className="w-16 h-4 rounded-md bg-primary">
                                </div>
                            </div>
                            <div className="ms-auto text-end md:hidden block">
                                <p className="w-14 h-4 bg-primary rounded-md mb-2" />
                                <div className="w-[14px] h-[14px]" />
                            </div>
                        </div>
                    ))}
                </div>
                <CouponInput />
            </div>
            <div className='flex-1'>
                <div className='p-6 border rounded-md border-sub-text'>
                    <h4 className='mb-4 text-xl'>Cart Summary</h4>
                    <div className='flex flex-col gap-4 mb-4'>
                        {SHIPPING_METHODS.map((item) => (
                            <div key={item.id} className={`py-5 px-4 border border-[#141718] rounded-md
                            flex justify-between bg-primary`}>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-between items-center border-b py-3'>
                        <p className=''>Subtotal</p>
                        <p className='flex items-center'>$ <span className='bg-primary w-20 h-5 rounded-md inline-block' /></p>
                    </div>
                    <div className='flex justify-between py-3'>
                        <p className='text-xl font-bold'>Total</p>
                        <p className='text-xl font-bold flex items-center'>$<span className='bg-primary w-20 h-5 rounded-md inline-block' /></p>
                    </div>
                    <Button className='w-full mt-10 cursor-not-allowed' disabled>Checkout</Button>
                </div>
            </div>
        </div>
    )
}

export default CartPageSk