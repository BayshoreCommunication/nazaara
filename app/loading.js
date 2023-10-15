import { BeatLoader } from "react-spinners";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <BeatLoader color="#820000" />
    </div>
  );
}
