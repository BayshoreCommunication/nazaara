import FestivalComponent from "@/components/Festivals/SingleFestivalContent";
import TopBar from "@/components/TopBar";
import { fetchServerSideData } from "@/helpers/serverSideDataFetching";
import { FaGift } from "react-icons/fa";

export const metadata = {
  title: "Festival",
};

const FestivalPage = async ({ params }) => {
  const url = `${process.env.API_URL}/api/v1/festival/slug/${params.slug}`;
  const data = await fetchServerSideData(url);
  return (
    <main>
      <TopBar
        title={`Festival / ${data.data[0].title}`}
        icon={<FaGift className="mb-1" />}
      />
      <div>
        <FestivalComponent festivalData={data} />
      </div>
    </main>
  );
};

export default FestivalPage;
