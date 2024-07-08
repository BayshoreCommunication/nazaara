import SaleContent from "@/components/Sale/SaleContent";
import { fetchServerSideData } from "@/helpers/serverSideDataFetching";

export const metadata = {
  title: "Sale",
};

const SalePage = async ({ params }) => {
  const url = `${process.env.API_URL}/api/v1/sale/${params.slug}`;
  const data = await fetchServerSideData(url);
  return (
    <main>
      <div>
        <SaleContent saleData={data} />
      </div>
    </main>
  );
};

export default SalePage;
