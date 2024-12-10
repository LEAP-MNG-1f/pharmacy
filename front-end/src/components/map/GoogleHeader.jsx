import Select from "react-select";

const GoogleHeader = ({ districtOptions, handleSelectChange }) => {
  return (
    <div className="flex items-center w-full h-[106px] border-t border-r border-l rounded-t-3xl p-5">
      <div className="flex items-center gap-6">
        <Select
          defaultValue={[]}
          isMulti
          name="districts"
          options={districtOptions}
          className="basic-multi-select w-[626px] text-black"
          classNamePrefix="select"
          onChange={handleSelectChange}
        />
      </div>
    </div>
  );
};

export default GoogleHeader;
