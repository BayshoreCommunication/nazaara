"use client";
import useWindowDimensions from "@/customhooks/useDimensionWindow";
import Image from "next/image";
import { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useSelector } from "react-redux";

const DetailImage = ({ productData }) => {
  // console.log("products data", productData);
  const { width } = useWindowDimensions();
  const currentColor = useSelector((state) => state.imgFilter.color);

  let currentProduct;
  if (currentColor)
    currentProduct = productData.variant.filter(
      (el) => el.color === currentColor
    );
  else currentProduct = productData.variant;

  // console.log("current product", currentProduct);

  const currentProductImages = currentProduct?.flatMap((elem) =>
    elem.imageUrl.map((url) => ({
      original: url.image,
      thumbnail: url.image,
    }))
  );
  const imageGalleryItems = currentProductImages.map((image) => ({
    original: image.original,
    thumbnail: image.thumbnail,
    magnify: image.original,
  }));

  const [transformOrigin, setTransformOrigin] = useState("37.663% 9.07859%");

  const handleMouseMove = (e) => {
    const boundingBox = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - boundingBox.left) / boundingBox.width) * 100;
    const y = ((e.clientY - boundingBox.top) / boundingBox.height) * 100;
    setTransformOrigin(`${x}% ${y}%`);
  };

  return (
    <div className="detail-image-container">
      {currentProductImages && (
        <ImageGallery
          thumbnailPosition={`${width < 992 ? "bottom" : "left"}`}
          items={imageGalleryItems}
          showFullscreenButton={false}
          showPlayButton={false}
          renderItem={(item) => (
            <>
              <div
                style={{
                  position: "relative",
                  transition: "transform 0.5s ease-out 0s",
                  transformOrigin: transformOrigin,
                }}
                className="hoverImage hover:scale-[2]"
                // className="hoverImage h-[34rem] sm:h-[64rem] lg:h-[50rem] xl:h-[58rem] 2xl:h-[70rem] hover:scale-[2]"
                onMouseMove={handleMouseMove}
              >
                <Image
                  alt="dress"
                  src={item.original}
                  // fill
                  // quality={80}
                  // style={{
                  //   objectFit: "cover",
                  // }}
                  width={600}
                  height={800}
                  priority
                  blurDataURL={"/images/placeholder_image.jpg"}
                  placeholder="blur"
                  className="w-full h-auto"
                />
              </div>
            </>
          )}
        />
      )}
    </div>
  );
};

export default DetailImage;
