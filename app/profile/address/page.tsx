import React from 'react'
import PagesTitle from '@/components/profilePageComponents/PagesTitle'
import AddressCard from '../../../components/profilePageComponents/AddressCard'

const ADDRESS_DATA =[
  {
    id: 1,
    name: "Billing Address",
    address: "345 Long Island, NewYork, United States",
    city: "Sofia Havertz",
    phoneNumber: '(+1) 234 567 890',
  },
  {
    id: 2,
    name: "Shipping Address",
    address: "345 Long Island, NewYork, United States",
    city: "Sofia Havertz",
    phoneNumber: '(+1) 234 567 890',
  }
]

const Address = () => {
  return (
    <div>
      <PagesTitle>Address</PagesTitle>
      <div className="flex flex-col sm:flex-row gap-6 flex-wrap">
        {
          ADDRESS_DATA.map((item) => (
            <AddressCard key={item.id} address={item} />
          ))
        }
      </div>
    </div>
  )
}

export default Address