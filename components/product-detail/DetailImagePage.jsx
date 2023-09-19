import Image from "next/image";
import { useSelector } from "react-redux";
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

  return (
    <>
      <>
        <div className="hidden lg:grid grid-cols-2 gap-4">
          {currentProduct.map((elem) =>
            elem.imageUrl.map((url, index) => (
              <button key={index}>
                <Image key={url} src={url} alt={url} width={600} height={800} />
              </button>
            ))
          )}
        </div>
      </>
    </>
  );
};

export default DetailImage;
