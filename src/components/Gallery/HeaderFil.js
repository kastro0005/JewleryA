import { useNavigate } from "react-router-dom";

function HeaderFil({ element }) {
  const navigate = useNavigate();
  return (
    <div className="pt-28 mb-7  bg-white">
      <div className="flex justify-between px-5 shadow-md shadow-slate-400 ">
        <h1 className="text-4xl font-serif text-gold pb-1 bg-black bg-clip-text text-transparent">
          <i className="fas fa-gem mr-2 ">Search Results: {element}</i>
        </h1>
        <div className="p-4">
          <button
            className="w-full ml-4 px-3 py-2 bg-white border border-neutral-300 text-neutral-950 rounded-2xl hover:bg-neutral-200 transition"
            onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderFil;
