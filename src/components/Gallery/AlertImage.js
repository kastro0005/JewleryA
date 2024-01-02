import { NotFound } from "components/img/Images";

function AlertImage({ element }) {
  return (
    <div className="pt-24 mb-10">
      <div className="">
        <div className="flex justify-center ">
          <img src={NotFound} alt="" width={300} height={300} />
        </div>
        <div className="mt-3">
          <div className="flex justify-center">
            <h3 className="text-xl font-semibold leading-6 text-gray-900">
              Item not found
            </h3>
          </div>
          <div className="mt-2 ">
            <p className="text-sm text-gray-500 flex justify-center text-center">
              Verify your search.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlertImage;
