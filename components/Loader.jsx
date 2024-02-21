import { BeatLoader } from "react-spinners";

export function Loader({ height }) {
  return (
    <div className={`w-full ${height} flex justify-center items-center`}>
      <BeatLoader color="#820000" />
    </div>
  );
}
