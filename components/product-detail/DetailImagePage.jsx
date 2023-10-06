import Image from 'next/image'
import { useSelector } from 'react-redux'

import ImageGallery from 'react-image-gallery'
// import stylesheet if you're not already using CSS @import
import 'react-image-gallery/styles/css/image-gallery.css'
import useWindowDimensions from '@/customhooks/useDimensionWindow'

const DetailImage = ({ productData }) => {
  const { width } = useWindowDimensions()
  const currentColor = useSelector((state) => state.imgFilter.color)

  let currentProduct
  if (currentColor)
    currentProduct = productData.variant.filter(
      (el) => el.color === currentColor,
    )
  else currentProduct = productData.variant

  const images = currentProduct?.flatMap((elem) =>
    elem.imageUrl.map((url) => ({
      original: url,
      thumbnail: url,
    })),
  )
  return (
    <>
      <ImageGallery
        thumbnailPosition={`${width < 992 ? 'bottom' : 'left'}`}
        items={images}
      />
    </>
  )
}

export default DetailImage
