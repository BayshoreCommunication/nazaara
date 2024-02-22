import { BeatLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="w-full h-[50vh] flex justify-center items-center">
      <BeatLoader color="#820000" />
    </div>
  );
}
