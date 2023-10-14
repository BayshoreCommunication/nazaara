import { Util } from '@/util'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function formatDate(inputDateString) {
  const date = new Date(inputDateString)

  // Define an array of month names
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  // Extract the day, month, and year from the date
  const day = date.getDate()
  const month = monthNames[date.getMonth()]
  const year = date.getFullYear()

  // Create the formatted date string
  const formattedDateString = `${day} ${month} ${year}`

  return formattedDateString
}

//hide return button after 7 days
const shouldHideReturnButton = (createdAt) => {
  const updatedDate = new Date(createdAt)
  const sevenDaysLater = new Date(updatedDate)
  sevenDaysLater.setDate(updatedDate.getDate() + 7)
  const currentDate = new Date()
  return currentDate >= sevenDaysLater
}

const MyOrder = ({ orderData }) => {
  return (
    <div className="flex flex-col gap-y-6 text-gray-600">
      {orderData?.length > 0 ? (
        orderData?.map((el, i) => (
          <div key={i} className="rounded-lg border border-gray-300">
            <div className="py-1 border-b border-gray-300">
              <div className="px-4 flex gap-x-6 py-1">
                <p className="border-r pr-6 border-gray-400">
                  <span className="text-gray-700 ">Order No :</span>{' '}
                  <span className="">{el.paymentId}</span>
                </p>
                <p className="border-r pr-6 border-gray-400">
                  <span className="text-gray-700">Payment Method :</span>{' '}
                  <span className="">{el.paymentMethod}</span>
                </p>
                <p className="border-r pr-6 border-gray-400">
                  <span className="text-gray-700">Payment Status :</span>{' '}
                  <span className="">{el.paymentStatus}</span>
                </p>
                <p className="">
                  <span className="text-gray-700">Place on :</span>{' '}
                  <span>{formatDate(el.createdAt)}</span>
                </p>
              </div>
            </div>
            {el.product.map((data, i) => (
              <div
                key={i}
                className="flex justify-around items-center my-4 w-full border-b pb-3 border-gray-300 gap-8 px-5"
              >
                <Image
                  src={data.imageUrl}
                  alt="My Image"
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
                <p>{data.slug}</p>
                <p>Color: {data.color}</p>
                <p>Size: {data.size}</p>
                <p>Price: {data.price}</p>
                <p>Quantity: {data.quantity}</p>
                <p className="bg-gray-300 rounded-full py-1 text-sm px-3 capitalize">
                  {el.deliveryStatus}
                </p>
                {!shouldHideReturnButton(el.createdAt) && (
                  <Link
                    href={`/return-exchange/${el._id}`}
                    className="bg-primary-color text-white rounded-full py-1 text-sm px-3 hover:bg-opacity-80 "
                  >
                    Return Order
                  </Link>
                )}
              </div>
            ))}
          </div>
        ))
      ) : (
        <p className="my-[20vh] text-center text-primary-color">
          No Order Found!😟
        </p>
      )}

      {/* <div className='rounded-lg border'>
            <div className='py-1 border-b'>
                <div className='px-4'>
                    <p>Order <span className=''>#3423438438473</span></p>
                    <p>Place on <span>4 jun 2023</span></p>
                </div>
            </div>
            <div className='flex justify-around items-center my-4 w-full lg:w-4/5'>
                <div className='flex gap-6 items-center'>
                    <Image
                    src="/images/category/bridal_top.png"
                    alt="My Image"
                    width={70}
                    height={60}
                    className='rounded-lg'
                    />
                    <p>Panache Apparel - BLUEBELL</p>
                </div>
                <p>QTY: 1</p>
                <button className='bg-gray-300 rounded-full py-1 text-sm px-2'>Cancelled</button>
            </div>
        </div>
        <div className='rounded-lg border'>
            <div className='py-1 border-b'>
                <div className='px-4'>
                    <p>Order <span className=''>#3423438438473</span></p>
                    <p>Place on <span>4 jun 2023</span></p>
                </div>
            </div>
            <div className='flex justify-around items-center my-4 w-full lg:w-4/5'>
                <div className='flex gap-6 items-center'>
                    <Image
                    src="/images/category/bridal_top.png"
                    alt="My Image"
                    width={70}
                    height={60}
                    className='rounded-lg'
                    />
                    <p>Panache Apparel - BLUEBELL</p>
                </div>
                <p>QTY: 1</p>
                <button className='bg-gray-300 rounded-full py-1 text-sm px-2'>Cancelled</button>
            </div>
        </div> */}
    </div>
  )
}

export default MyOrder
