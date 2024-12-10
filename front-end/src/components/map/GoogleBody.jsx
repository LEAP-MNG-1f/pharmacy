import { GoogleMap } from "./Google";
import List from "./List";

const GoogleBody = ({ selectedLocation }) => {
  return (
    <div className="flex w-full h-screen border rounded-b-3xl bg-white p-10">
      <List selectedLocation={selectedLocation} />
      <GoogleMap selectedLocation={selectedLocation} />
    </div>
  );
};

export default GoogleBody;
