import SearchInput from '@/components/Form/SearchInput'
import OrderModal from '@/components/Modal/OrderModal'
import React from 'react'

const OrderPage = () => {
  return (
    <div className='p-4'>
      <div className='flex items-center justify-between'>
        <SearchInput placeholder={"Search orders..."}/>
        <OrderModal />
      </div>
    </div>
  )
}

export default OrderPage
