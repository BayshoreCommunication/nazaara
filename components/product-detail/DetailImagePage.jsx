"use client";
import useWindowDimensions from "@/customhooks/useDimensionWindow";
import Image from "next/image";
import { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useSelector } from "react-redux";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

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
                onMouseMove={handleMouseMove}
              >
                {width >= 992 ? (
                  <Image
                    alt="dress"
                    src={item.original}
                    width={600}
                    height={800}
                    priority
                    blurDataURL={"/images/placeholder_image.jpg"}
                    placeholder="blur"
                    className="w-full h-auto"
                  />
                ) : (
                  <TransformWrapper>
                    <TransformComponent>
                      <Image
                        alt="dress"
                        src={item.original}
                        width={600}
                        height={800}
                        priority
                        blurDataURL={"/images/placeholder_image.jpg"}
                        placeholder="blur"
                        className="w-full h-auto"
                      />
                    </TransformComponent>
                  </TransformWrapper>
                )}
              </div>
            </>
          )}
        />
      )}
    </div>
  );
};

export default DetailImage;
