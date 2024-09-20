import React from 'react'
import { CiDiscount1 } from 'react-icons/ci'

type Props = {}

const CouponInput = (props: Props) => {
  return (
    <div className='max-w-full'>
        <h4 className='text-xl font-semibold'>Have a coupon?</h4>
        <p className='text-sub-text py-3'>Add your code for an instant cart discount</p>
        <div className='inline-flex items-center border border-sub-text py-3 px-4 max-w-full'>
        <span className='text-sub-text'><CiDiscount1 /></span>
        <input type="text" placeholder='Coupon code' className='border-none focus:outline-none min-w-12' />
        <button className='bg-transparent ms-2'>Apply</button>
        </div>
    </div>
  )
}

export default CouponInput