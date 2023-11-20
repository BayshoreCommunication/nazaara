"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import SecondaryButton from "@/components/SecondaryButton";

const RightCarosel = ({ data }) => {
  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      modules={[Pagination, EffectFade]}
      className="mySwiper"
      spaceBetween={50}
      loop={true}
      effect={"fade"}
      autoplay={{
        delay: 3000,
      }}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <div className="">
        <div className="relative">
          {data.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="flex lg:block lg:relative gap-x-4 bg-white lg:bg-transparent items-center">
                <div className="flex-1">
                  {slide?.image && (
                    <Image
                      src={slide?.image}
                      alt="My Image"
                      width={320}
                      height={600}
                      className="w-full h-[20rem] sm:h-[28rem] md:h-[32rem] lg:h-[36rem] xl:h-[42rem]"
                    />
                  )}
                </div>
                <div className="block lg:flex flex-col items-center flex-1 lg:absolute w-full  bg-white lg:bg-transparent lg:bottom-16  text-black lg:text-white">
                  <p className="text-[17px] lg:text-lg font-medium lg:font-semibold">
                    {slide?.topHeading}
                  </p>
                  <h2 className="my-2 font-semibold lg:font-bold text-2xl lg:text-2xl xl:text-3xl">
                    {slide?.mainHeading}
                  </h2>
                  <SecondaryButton text="Explore More" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </div>
    </Swiper>
  );
};

export default RightCarosel;

// import React, { useEffect, useState } from "react";
// // import "./ScrollingImage.css"; // Import your CSS file
// import Image from "next/image";

// const ScrollingImage = ({ data }) => {
//   const [images, setImages] = useState([]);
//   const [top, setTop] = useState(1);
//   const [cur, setCur] = useState(0);

//   useEffect(() => {
//     // const imageUrls = [
//     //   "https://media.geeksforgeeks.org/wp-content/uploads/20200318142245/CSS8.png",
//     //   "https://media.geeksforgeeks.org/wp-content/uploads/20200318142309/php7.png",
//     //   "https://media.geeksforgeeks.org/wp-content/uploads/20200318142254/html9.png",
//     // ];
//     console.log("image", data.image);
//     setImages(data.image);

//     startImageTransition();

//     function startImageTransition() {
//       for (let i = 0; i < images.length; i++) {
//         const img = new Image();
//         img.src = data.image[i];
//         img.onload = () => {
//           images[i].style.opacity = 1;
//         };
//       }

//       setInterval(changeImage, 3000);
//     }

//     async function changeImage() {
//       const nextImage = (1 + cur) % images.length;

//       images[cur].style.zIndex = top + 1;
//       images[nextImage].style.zIndex = top;

//       await transition();

//       images[cur].style.zIndex = top;
//       images[nextImage].style.zIndex = top + 1;

//       setTop(top + 1);

//       images[cur].style.opacity = 1;
//       setCur(nextImage);
//     }

//     function transition() {
//       return new Promise(function (resolve, reject) {
//         const del = 0.01;

//         const id = setInterval(changeOpacity, 10);

//         function changeOpacity() {
//           images[cur].style.opacity -= del;
//           if (images[cur].style.opacity <= 0) {
//             clearInterval(id);
//             resolve();
//           }
//         }
//       });
//     }
//   }, [images, top, cur]);

//   return (
//     <div className="text-center">
//       <h1 className="text-green-500 text-4xl mb-4">GeeksforGeeks</h1>
//       <b className="block text-xl mb-4">A Computer Science Portal for Geeks</b>
//       <div className="relative" id="scroll-image">
//         {images.map((imageUrl, index) => (
//           <Image
//             key={index}
//             src={imageUrl}
//             width={300}
//             height={600}
//             className="absolute left-0 opacity-0 transition-opacity duration-3000 test"
//             alt={`Image ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ScrollingImage;
