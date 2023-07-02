import Image from "next/image";
import { ProductData } from "@/data/product";
import ProductModal from "../modal/ProductModal";
import { useState } from "react";
import useWindowDimensions from "../useDimensionWindow";

const DetailImage = ({ setOpenModal, openModal }) => {
  const [imgUrl, setImgUrl] = useState();
  const [countUrl, setCountUrl] = useState(0);
  const { width } = useWindowDimensions();

  return (
    <>
      <div className="hidden lg:grid grid-cols-2 gap-4">
        {ProductData.data.map((elem, index) => (
          <button
            key={index}
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <Image
              src={elem.src}
              alt={elem.src}
              width={600}
              height={800}
              onClick={() => {
                setImgUrl(elem.src);
                setCountUrl(index);
              }}
            />
          </button>
        ))}
      </div>
      {width > 991 && openModal && (
        <ProductModal
          setOpenModal={setOpenModal}
          imgUrl={imgUrl}
          setImgUrl={setImgUrl}
          countUrl={countUrl}
          setCountUrl={setCountUrl}
        />
      )}
    </>
  );
};

export default DetailImage;
