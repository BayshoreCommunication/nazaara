import DynamicSubCategoryContent from "@/components/SubCategory/DynamicSubCategory/DynamicSubCategoryContent";
import { fetchServerSideData } from "@/helpers/ServerSideDataFetching";

export const metadata = {
  title: "Category",
};

const SubCategoryPage = async ({ params }) => {
  const url = `${process.env.API_URL}/api/v1/sub-category/slug/${params.slug}`;
  // console.log("url", url);
  const data = await fetchServerSideData(url);
  // console.log("slug", data.data[0]._id);

  const filterUrl = `${process.env.API_URL}/api/v1/product/published?subCategory=${data?.data[0]?._id}`;
  const subCategoryData = await fetchServerSideData(filterUrl);
  // console.log("subCategoryData", subCategoryData);
  return (
    <main>
      <DynamicSubCategoryContent
        data={subCategoryData}
        subCategoryData={data}
      />
    </main>
  );
};

export default SubCategoryPage;
