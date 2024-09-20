'use client';
import { CheckoutForm, OrderSummary } from '@/components/cartPageComponents';
import { useCartContext } from '@/context/CartContext';
import getStripe from '@/utils/stripe';
import { Elements } from '@stripe/react-stripe-js';

const page = () => {
  const { totalCartPrice, cartStatus } = useCartContext()
  const amount = +(totalCartPrice?.total as number * 100).toFixed(0) || 0
  return (
    <>
      {
        cartStatus === 'done' && amount &&
        <Elements stripe={getStripe()} options={{ mode: 'payment', amount, currency: 'usd' }}>
          <div className='flex flex-col md:flex-row items-start gap-16'>
            <div className='flex-1'>
              <CheckoutForm />
            </div>
            <div className='flex-1 max-w-[443px] mx-auto'>
              <OrderSummary />
            </div>
          </div>
        </Elements>
      }
    </>
  )
}

export default page