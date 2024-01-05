import { connect } from "react-redux";
import "font-awesome/css/font-awesome.css";
import emailjs from "@emailjs/browser";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

//mis imports

import { Personalize } from "components/img/Images";

//ENd

function Componente1() {
  const form = useRef();
  const [ok, setOk] = useState(false);
  const [fail, setFail] = useState(false);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const handleClick = () => {
    setOpen1(true);
  };

  function reset() {
    document.getElementById("correo").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("Products").value = "Garments";
    document.getElementById("Datos").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("cardNumber").value = "";
    document.getElementById("expirationMonth").value = "";
    document.getElementById("expirationYear").value = "";
    document.getElementById("securityCode").value = "";
    document.getElementById("zipCode").value = "";
  }
  function handleSubmit(e) {
    e.preventDefault();
    setOpen(true);
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setOpen(false);
    emailjs
      .sendForm(
        "service_dg8jwyc",
        "template_97o61h9",
        form.current,
        "nvJe-veEEIQFjzjfS"
      )
      .then(
        (result) => {
          console.log(result.text);
          setOk(true);
        },
        (error) => {
          console.log(error.text);
          setFail(true);
        }
      );
    e.target.reset();
    reset();
  };
  //setOpen1(true);
  return (
    <>
      <div className="w-full h-full rounded-sm flex justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-100 to-gray-700">
        <div
          onClick={handleClick}
          className="h-[750px] w-[950px] justify-center flex pt-24 pb-5">
          <img
            src={Personalize}
            alt="Fondo"
            className="cursor-pointer bg-cover w-full h-full rounded-lg"
          />
        </div>
      </div>

      {/* Muestra el formulario */}
      <Transition.Root show={open1} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen1}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed min-h-full inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex  items-end justify-center mt-7 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <Dialog.Panel className="max-w-[700px] w-full flex justify-center mx-10  sm:p-6 sm:pb-4 relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all ">
                  <form
                    ref={form}
                    onSubmit={(e) => handleSubmit(e)}
                    className=" w-full max-w-2xl border-double border-4 border-slate-500 rounded-2xl">
                    <div className="p-4">
                      {/* Productos */}
                      <label
                        htmlFor="Products"
                        className="block mb-1 text-sm font-semibold text-black">
                        Select the garment to customize:
                      </label>
                      <select
                        id="Products"
                        name="product"
                        required
                        className="border-2 rounded-md bg-white w-full mr-0 py-1 px-2 leading-8 mb-5">
                        <option defaultValue=""></option>
                        <option className="text-black">Bracelet</option>
                        <option className="text-black">Anklet</option>
                        <option className="text-black">Chain</option>
                      </select>
                      {/* Productos */}
                      <label
                        htmlFor="Products"
                        className="block mb-1 text-sm font-semibold text-black">
                        Size:
                      </label>
                      <select
                        id="Products"
                        name="size"
                        required
                        className="border-2 rounded-md bg-white w-full mr-0 py-1 px-2 leading-8 mb-5">
                        <option defaultValue=""></option>
                        <option className="text-black">S</option>
                        <option className="text-black">M</option>
                        <option className="text-black">L</option>
                        <option className="text-black">XL</option>
                      </select>
                      {/* Informacion */}
                      <label
                        htmlFor="Info"
                        className="block mb-1 text-sm font-semibold text-black">
                        Write the information to print:
                      </label>
                      <input
                        className="border-2 rounded-md mb-5 bg-white w-full text-black mr-0 py-1 px-2 leading-8"
                        type="text"
                        placeholder="Text or Character for your design"
                        id="Datos"
                        name="dato"
                        required
                      />

                      <label
                        htmlFor="Info"
                        className="block mb-2 text-sm font-bold text-black">
                        Personal Info:
                      </label>
                      {/* Correo */}
                      <label
                        htmlFor="Email"
                        className="block mb-1 text-sm font-semibold text-black">
                        Email:
                      </label>
                      <input
                        className="border-2 rounded-md bg-white w-full text-black mr-0 py-1 px-2 leading-8 mb-5"
                        type="email"
                        placeholder="email@domain.com"
                        name="email"
                        id="correo"
                        required
                      />
                      {/* Telefono */}
                      <label
                        htmlFor="Info"
                        className="block mb-1 text-sm font-semibold text-black">
                        Phone number
                      </label>
                      <input
                        className="border-2 rounded-md mb-5 bg-white w-full text-black mr-0 py-1 px-2 leading-8"
                        type="tel"
                        placeholder="Phone Number"
                        id="phone"
                        name="phone"
                        required
                        pattern="[0-9]{10}"
                      />
                      {/* Direccion */}
                      <label
                        htmlFor="Address"
                        className="block mb-1 text-sm font-semibold text-black">
                        Address:
                      </label>
                      <input
                        className="border-2 rounded-md bg-white w-full text-black mr-0 py-1 px-2 leading-8 mb-5"
                        type="text"
                        placeholder="Address"
                        name="address"
                        id="direccion"
                        required
                      />

                      <label
                        htmlFor="Info"
                        className="block mb-2 mt-4 text-sm font-bold text-black">
                        Card Info:
                      </label>

                      {/* Tarjeta */}
                      <label
                        htmlFor="Info"
                        className="block mb-1 text-sm font-semibold text-black">
                        Card Number:
                      </label>
                      <input
                        className="border-2 rounded-md mb-5 bg-white w-full text-black mr-0 py-1 px-2 leading-8"
                        placeholder="Card Number"
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        required
                        pattern="[0-9]{15,16}"
                      />
                      {/* Fecha de Exp */}
                      <label
                        htmlFor="Info"
                        className="block mb-1 text-sm font-semibold text-black">
                        Expiration Date (MM/YY):
                      </label>
                      <div className="flex flex-wrap rounded-md mb-5 w-full text-black mr-0 py-1 px-2 leading-8">
                        <select
                          id="expirationMonth"
                          name="expirationMonth"
                          required
                          className="border rounded p-2 mr-2">
                          <option defaultValue=""></option>
                          {Array.from({ length: 12 }, (_, i) => {
                            const month = (i + 1).toString().padStart(2, "0");
                            return (
                              <option key={month} value={month}>
                                {month}
                              </option>
                            );
                          })}
                        </select>
                        <select
                          id="expirationYear"
                          required
                          name="expirationYear"
                          className="border rounded p-2">
                          <option defaultValue=""></option>
                          {Array.from({ length: 18 }, (_, i) => {
                            const year = (2023 + i).toString();
                            return (
                              <option key={year} value={year}>
                                {year}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      {/* Codigo de Seg */}
                      <label
                        htmlFor="Products"
                        className="block mb-1 text-sm font-semibold text-black">
                        Security Code:
                      </label>
                      <input
                        className="border-2 rounded-md bg-white w-full text-black mr-0 py-1 px-2 leading-8 mb-5"
                        type="text"
                        required
                        placeholder="xxxx or xxx"
                        id="securityCode"
                        name="securityCode"
                        pattern="[0-9]{3,4}" // Validación adicional para permitir solo números
                      />
                      {/* Codigo Postal */}
                      <label
                        htmlFor="Address"
                        className="block mb-1 text-sm font-semibold text-black">
                        Zip code:
                      </label>
                      <input
                        className="border-2 rounded-md bg-white w-full text-black mr-0 py-1 px-2 leading-8 mb-5"
                        type="text"
                        required
                        placeholder=" Ex: 33406"
                        id="zipCode"
                        name="zipCode"
                        pattern="[0-9]{5}" // Validación adicional para permitir solo números
                      />
                    </div>
                    <div className="flex justify-end pr-5 gap-5 px-2 mb-4 flex-wrap">
                      <div
                        type="button"
                        onClick={() => {
                          reset();
                          setOpen1(false);
                        }}
                        className="cursor-pointer flex items-center fill-red-400 bg-red-950 hover:bg-red-900 active:border active:border-red-400 rounded-md duration-100 px-2 py-1.5"
                        title="Save">
                        <span className="text-sm text-red-400 font-bold ">
                          {" "}
                          Cancel
                        </span>
                      </div>
                      <button
                        type="submit"
                        className="cursor-pointer flex items-center fill-green-400 bg-green-950 hover:bg-green-900 active:border active:border-green-400 rounded-md duration-100 px-2 py-1.5">
                        <span className="text-sm text-green-400 font-bold ">
                          Send
                        </span>
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      {/* Confirmacion de envio */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-center shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="items-center">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 ">
                        <ExclamationTriangleIcon
                          className="h-6 w-6 text-blue-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center ">
                        <Dialog.Title
                          as="h4"
                          className="text-xl font-semibold leading-6 text-gray-900">
                          You're sure?!
                        </Dialog.Title>
                      </div>
                    </div>
                  </div>
                  <form
                    onSubmit={sendEmail}
                    className="bg-gray-50 px-4 gap-2 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="submit"
                      className="cursor-pointer flex items-center fill-green-400 bg-green-950 hover:bg-green-900 active:border active:border-green-400 rounded-md duration-100 px-2 py-1.5">
                      <span className="text-sm text-green-400 font-bold ">
                        Send
                      </span>
                    </button>
                    <div
                      type="button"
                      onClick={() => {
                        reset();
                        setOpen(false);
                      }}
                      className="cursor-pointer flex items-center fill-red-400 bg-red-950 hover:bg-red-900 active:border active:border-red-400 rounded-md duration-100 px-2 py-1.5"
                      title="Save">
                      <span className="text-sm text-red-400 font-bold ">
                        {" "}
                        Cancel
                      </span>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      {/* Sale en caso de que se envie */}
      <Transition.Root show={ok} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOk}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 ">
                        <CheckIcon
                          className="h-6 w-6 text-green-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center ">
                        <Dialog.Title
                          as="h3"
                          className="text-xl font-semibold leading-6 text-gray-900">
                          Success!!
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Your order will arrive within the next 5 days.
                          </p>
                          <p className="text-sm text-gray-500">
                            Thank you for choosing us..
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      onClick={() => {
                        setOk(false);
                      }}
                      className="cursor-pointer flex items-center fill-blue-400 bg-blue-950 hover:bg-blue-900 active:border active:border-blue-400 rounded-md duration-100 px-2 py-1.5">
                      <span className="text-sm text-blue-400 font-bold ">
                        Ok
                      </span>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      {/* Sale en caso de que falle el envio */}
      <Transition.Root show={fail} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setFail}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 ">
                        <XMarkIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center ">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900">
                          Fail
                        </Dialog.Title>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      onClick={() => setFail(false)}
                      className="cursor-pointer flex items-center fill-red-400 bg-red-950 hover:bg-red-900 active:border active:border-red-400 rounded-md duration-100 px-2 py-1.5">
                      <span className="text-sm text-red-400 font-bold ">
                        Ok
                      </span>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Componente1);
