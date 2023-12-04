"use client";
import { useSelector } from "react-redux";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import useWindowDimensions from "@/customhooks/useDimensionWindow";
import { useState } from "react";
import Image from "next/image";

const DetailImage = ({ productData }) => {
  const { width } = useWindowDimensions();
  const currentColor = useSelector((state) => state.imgFilter.color);

  let currentProduct;
  if (currentColor)
    currentProduct = productData.variant.filter(
      (el) => el.color === currentColor
    );
  else currentProduct = productData.variant;
  const currentProductImages = currentProduct?.flatMap((elem) =>
    elem.imageUrl.map((url) => ({
      original: url,
      thumbnail: url,
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
                className="hoverImage h-[34rem] sm:h-[64rem] lg:h-[50rem] xl:h-[58rem] 2xl:h-[70rem] hover:scale-[2]"
                onMouseMove={handleMouseMove}
              >
                <Image
                  alt="dress"
                  src={item.original}
                  fill
                  sizes="(min-width: 808px) 50vw, 100vw"
                  style={{
                    objectFit: "cover",
                  }}
                  className=""
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
