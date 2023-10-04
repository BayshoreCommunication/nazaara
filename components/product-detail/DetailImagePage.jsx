import Image from "next/image";
import { useSelector } from "react-redux";

import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const DetailImage = ({ productData }) => {
  // console.log(
  //   "details",
  //   productData.variant.map((data) => data.imageUrl.map((url) => url))
  // );
  // console.log("details", productData.variant[0].imageUrl[0]);

  const currentColor = useSelector((state) => state.imgFilter.color);

  let currentProduct;
  if (currentColor)
    currentProduct = productData.variant.filter(
      (el) => el.color === currentColor
    );
  else currentProduct = productData.variant;

  const images = currentProduct?.flatMap((elem) =>
    elem.imageUrl.map((url) => ({
      original: url,
      thumbnail: url,
    }))
  );

  // console.log("images", images);
  return (
    <>
      <ImageGallery thumbnailPosition={"left"} items={images} />

      <>
        {/* <div className="hidden lg:grid grid-cols-2 gap-4">
          {currentProduct.map((elem) =>
            elem.imageUrl.map((url, index) => (
              <button key={index}>
                <Image key={url} src={url} alt={url} width={600} height={800} />
              </button>
            ))
          )}
        </div> */}
      </>
    </>
  );
};

export default DetailImage;
