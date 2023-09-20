import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const BestSellingCard = ({ elem }) => {
  // console.log("test", );
  const [data, setData] = useState({});
  const apiUrl = `${process.env.API_URL}/api/v1/product/${elem.product_id}`;

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(apiUrl);
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }, [apiUrl]);

  useEffect(() => {
    fetchData();
  }, [apiUrl, fetchData]);

  return (
    <div className="border-4 border-secondary-color transition-all duration-500  hover:shadow-[#d6bc67] hover:shadow-lg">
      <Link className="" href={`/products/${data.slug}`}>
        <div>
          <Image
            src={`${elem.url[0]}`}
            alt="bridal_top"
            width={326}
            height={461}
            className="w-full"
          />
        </div>
        <div className="w-full text-center text-primary-color bg-white py-4">
          <p className="text-lg font-semibold">{data.category}</p>
          <p className="text-xs font-semibold pt-1">UP TO 45% OFF</p>
        </div>
      </Link>
    </div>
  );
};

export default BestSellingCard;
