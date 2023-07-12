import Button from '@/components/Button'
import DashboardUtil from '@/components/user-dashboard/DashboardUtil'
import React from 'react'

const EditPersonalInfo = () => {
  return (
    <div className='container my-10 flex flex-col gap-y-4'>
        <h2 className='text-xl font-semibold'>Hello, Sadit Shekh</h2>
        <DashboardUtil />
        <form className='border p-5 rounded-lg'>
            <div className='flex gap-4'>
                <div className="mb-6 flex-1">
                    <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                    <input type="text" id="fullName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
                </div>
                <div className="mb-6 flex-1">
                    <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile</label>
                    <input type="text" id="mobile" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile" required />
                </div>
            </div>
            <div className='flex gap-4'>
                
            <div className="flex-1">
                <div>
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select BirthDate</label>
                    <div className='relative bg-red-600'>
                        <div className="absolute inset-y-0 left-0 top-3 pl-3.5 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Select date" />
            </div>

            <div className='flex-1 '>
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Gender</label>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option selected disabled>Choose a Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
            </select>

            </div>

            </div>
            <button className='mt-4 bg-primary-color w-80 py-2 text-white rounded-md hover:bg-primary-hover-color text-sm'>Save Changes</button>
        </form>
    </div>
  )
}

export default EditPersonalInfo