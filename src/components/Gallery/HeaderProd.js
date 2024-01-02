import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HeaderProd({ prod, element }) {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("");
  const [isInput, setIsInput] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
    setSelectedLabel(e.target.options[e.target.selectedIndex].label);
    setIsInput(true);
  };
  const resetSelection = () => {
    setSelectedValue("");
    setIsInput(false);
    setSearchValue("");
  };
  function Go() {
    navigate(`/${element}/filter${selectedLabel}/${searchValue}`);
  }
  return (
    <div className="pt-28  bg-white">
      <div className="flex justify-between flex-wrap pl-5 shadow-md shadow-slate-400 mb-7 items-center">
        <h1 className="text-4xl font-serif text-gold pb-1 bg-black bg-clip-text text-transparent">
          <i className="fas fa-gem mr-2 ">{prod}</i>
        </h1>

        <div className="p-4">
          {isInput ? (
            <div className="flex">
              <input
                type="text"
                value={searchValue}
                onChange={handleSearchChange}
                placeholder={selectedLabel}
                className="block px-3 w-48 rounded-l-xl border border-neutral-300 bg-transparent py-0 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
              />
              <div className="inset-y-1 right-1 flex justify-end">
                <button
                  type="submit"
                  aria-label="Submit"
                  className="flex px-3 aspect-square w-full h-full items-center justify-center rounded-r-xl bg-neutral-950 text-white border-l border-neutral-300 transition hover:bg-neutral-800"
                  onClick={Go}>
                  <svg viewBox="0 0 16 6" aria-hidden="true" className="w-4">
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 3 10 .5v2H0v1h10v2L16 3Z"></path>
                  </svg>
                </button>
                <button
                  className="w-full ml-4 px-3 bg-white border border-neutral-300 text-neutral-950 rounded-2xl hover:bg-neutral-200 transition"
                  onClick={resetSelection}>
                  Back
                </button>
              </div>
            </div>
          ) : (
            <div className="relative group rounded-lg w-52 bg-neutral-300 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:rounded-full before:blur-lg ">
              <svg
                y="0"
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                width="100"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
                height="100"
                className="w-8 h-8 absolute right-0 -rotate-45 stroke-black top-1.5 group-hover:rotate-0 duration-300">
                <path
                  strokeWidth="4"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fill="none"
                  d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
                  className="svg-stroke-primary"></path>
              </svg>
              <select
                className="appearance-none relative bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900  text-sm font-semibold rounded-lg  block w-full p-2.5"
                value={selectedValue}
                onChange={handleSelectChange}>
                <option className="bg-white" label="" value="">
                  Select a filter
                </option>
                <option className="bg-white" label="Name" value="name">
                  Name
                </option>
                <option
                  className="bg-white"
                  label="Price"
                  value="precio_unidad">
                  Price
                </option>
                <option className="bg-white" label="Size" value="size">
                  Size
                </option>
                <option className="bg-white" label="Weight" value="peso_neto">
                  Weight
                </option>
                <option className="bg-white" label="Purity" value="">
                  Purity
                </option>
              </select>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderProd;
