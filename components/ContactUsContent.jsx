"use client";
import Image from "next/image";
import Link from "next/link";
import { AiFillMessage } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import ButtonOnHover from "./ButtonOnHover";
import { MotionDiv } from "./MotionDiv";

const ContactUsContent = () => {
  const { ref, inView } = useInView();
  const variants = {
    hidden: { opacity: 0 },
    inView: { opacity: 1 },
  };
  return (
    <div>
      <MotionDiv
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={inView ? "inView" : "hidden"}
        transition={{
          ease: "linear",
          duration: 1,
        }}
      >
        <div className="grid sm:grid-cols-2 items-center gap-4 lg:gap-10 xl:gap-14">
          <div className="">
            <MotionDiv
              animate={
                inView
                  ? {
                      y: 0,
                      scale: 1,
                      rotate: 0,
                    }
                  : {
                      y: -100,
                      scale: 1,
                      rotate: 0,
                    }
              }
              transition={{
                duration: 1,
              }}
            >
              <div>
                <h1 className="font-semibold tracking-[4px] text-2xl lg:text-3xl text-primary-color">
                  Contact Us
                </h1>
              </div>
              <div className="my-6 text-sm lg:text-base tracking-[4px] font-semibold w-full">
                WE ARE ALWAYS AVAILABLE TO WORK ON YOUR CUSTOMIZED ORDER. FEEL
                FREE TO CONTACT WITH US.
              </div>
              <Link href="/contact-us">
                <div>
                  <ButtonOnHover
                    text={"Contact Now"}
                    icon={<AiFillMessage size={20} />}
                  />
                </div>
              </Link>
            </MotionDiv>
          </div>
          <div className="hidden sm:block">
            <Image
              src="/images/contact_us.png"
              alt="Book Appointment"
              width={700}
              height={500}
              priority
              blurDataURL={"/images/placeholder_image.jpg"}
              placeholder="blur"
              className="rounded-xl w-full h-full"
            />
          </div>
        </div>
        {/* <div className="grid sm:grid-cols-2 items-center gap-4 lg:gap-10 xl:gap-14">
          <div className="">
            <div className="">
              <MotionDiv
                animate={
                  inView
                    ? {
                        y: 0,
                        scale: 1,
                        rotate: 0,
                      }
                    : {
                        y: -200,
                        scale: 1,
                        rotate: 0,
                      }
                }
                transition={{
                  duration: 1.3,
                }}
              >
                <h1 className="font-semibold tracking-[4px] text-2xl lg:text-3xl text-primary-color">
                  Contact Us
                </h1>
              </MotionDiv>
              <MotionDiv
                animate={
                  inView
                    ? {
                        x: 0,
                        scale: 1,
                        rotate: 0,
                      }
                    : {
                        x: -500,
                        scale: 1,
                        rotate: 0,
                      }
                }
                transition={{
                  duration: 1.3,
                }}
                className="my-6 text-sm lg:text-base tracking-[4px] font-semibold w-full"
              >
                WE ARE ALWAYS AVAILABLE TO WORK ON YOUR CUSTOMIZED ORDER. FEEL
                FREE TO CONTACT WITH US.
              </MotionDiv>
              <Link href="/contact-us">
                <MotionDiv
                  animate={
                    inView
                      ? {
                          y: 0,
                          scale: 1,
                          rotate: 0,
                        }
                      : {
                          y: 200,
                          scale: 1,
                          rotate: 0,
                        }
                  }
                  transition={{
                    duration: 1.3,
                  }}
                >
                  <ButtonOnHover
                    text={"Contact Now"}
                    icon={<AiFillMessage size={20} />}
                  />
                </MotionDiv>
              </Link>
            </div>
          </div>
          <div className="hidden sm:block">
            <Image
              src="/images/contact_us.png"
              alt="Book Appointment"
              width={700}
              height={500}
              className="rounded-xl w-full h-full"
            />
          </div>
        </div> */}
      </MotionDiv>
    </div>
  );
};

export default ContactUsContent;
