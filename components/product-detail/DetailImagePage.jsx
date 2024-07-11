"use client";

import useWindowDimensions from "@/customhooks/useDimensionWindow";
import Image from "next/image";
import { useState, useMemo, useCallback } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useSelector } from "react-redux";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const DetailImage = ({ productData }) => {
  const { width } = useWindowDimensions();
  const currentColor = useSelector((state) => state.imgFilter.color);

  const currentProduct = useMemo(() => {
    if (currentColor) {
      return productData.variant.filter((el) => el.color === currentColor);
    }
    return productData.variant;
  }, [currentColor, productData.variant]);

  const currentProductImages = useMemo(() => {
    return currentProduct?.flatMap((elem) =>
      elem.imageUrl.map((url) => ({
        original: url.image,
        thumbnail: url.image,
      }))
    );
  }, [currentProduct]);

  const imageGalleryItems = useMemo(() => {
    return currentProductImages.map((image) => ({
      original: image.original,
      thumbnail: image.thumbnail,
      magnify: image.original,
    }));
  }, [currentProductImages]);

  const [transformOrigin, setTransformOrigin] = useState("37.663% 9.07859%");

  const handleMouseMove = useCallback((e) => {
    const boundingBox = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - boundingBox.left) / boundingBox.width) * 100;
    const y = ((e.clientY - boundingBox.top) / boundingBox.height) * 100;
    setTransformOrigin(`${x}% ${y}%`);
  }, []);

  return (
    <div>
      {currentProductImages && (
        <ImageGallery
          thumbnailPosition={width < 992 ? "bottom" : "left"}
          items={imageGalleryItems}
          showFullscreenButton={false}
          showPlayButton={false}
          renderItem={(item) => (
            <>
              {width >= 992 ? (
                <div
                  style={{
                    position: "relative",
                    transition: "transform 0.5s ease-out 0s",
                    transformOrigin: transformOrigin,
                  }}
                  className="hover:scale-[2] transition-transform"
                  onMouseMove={handleMouseMove}
                >
                  <Image
                    alt="dress"
                    src={item.original}
                    width={1080}
                    height={1350}
                    quality={100}
                    priority
                    blurDataURL="/images/placeholder_image.jpg"
                    placeholder="blur"
                    className="w-full h-auto"
                  />
                </div>
              ) : (
                <Zoom>
                  <Image
                    alt="dress"
                    src={item.original}
                    width={1080}
                    height={1350}
                    quality={100}
                    priority
                    blurDataURL="/images/placeholder_image.jpg"
                    placeholder="blur"
                    className="w-full h-auto"
                  />
                </Zoom>
              )}
            </>
          )}
        />
      )}
    </div>
  );
};

export default DetailImage;
