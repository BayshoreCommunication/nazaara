"use client";
import React from 'react'
import { order, profile, returns } from '@/services/selectDashboardSlice';
import { useDispatch } from 'react-redux';

const DashboardUtil = () => {
const dispatch = useDispatch();
  return (
    <div className='flex gap-4 text-sm font-medium text-gray-600'>
        <button onClick={()=>dispatch(profile())} className='text-primary-hover-color text-sm'>My profile</button>
        <button onClick={()=>dispatch(order())} className='text-sm'>My Order</button>
        <button onClick={()=>dispatch(returns())} className='text-sm'>My Return</button>
    </div>
  )
}

export default DashboardUtil