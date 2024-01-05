import { CartContext } from "context/CartContext";
import React, { useContext, useState, Fragment, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Dialog, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";
import { IoCart } from "react-icons/io5";
import { EmptyCart } from "components/img/Images";

const Cart = () => {
  var items = [];
  var elemt = [];
  var cant = 0;
  const { cart, length, removeFromCart, removeElementsCart } =
    useContext(CartContext);
  const [selectedProducts, setSelectedProducts] = useState({});
  const [open, setOpen] = useState(false);
  const form = useRef();
  const [ok, setOk] = useState(false);
  const [fail, setFail] = useState(false);
  const [fail1, setFail1] = useState(false);
  const [fail2, setFail2] = useState(false);
  const [send, setSend] = useState(false);
  const [selectedPur, setSelectedPur] = useState({});
  const [selectedPur1, setSelectedPur1] = useState({});
  const [selectedSize, setSelectedSize] = useState({});
  const [selectedSize1, setSelectedSize1] = useState({});
  const navigate = useNavigate();

  const handleProductSelection = (productId) => {
    setSelectedProducts((prevSelected) => ({
      ...prevSelected,
      [productId]: prevSelected[productId] ? 0 : 1,
    }));
  };
  //Function that controls the increse of the same element in the cart
  const increaseQuantity = (productId) => {
    setSelectedProducts((prevSelected) => ({
      ...prevSelected,
      [productId]: prevSelected[productId] + 1,
    }));
  };
  //Function that controls the decrese of the same element inside the cart and that deselect the element when chenge from 1 to 0
  const decreaseQuantity = (productId) => {
    if (selectedProducts[productId] > 1) {
      setSelectedProducts((prevSelected) => ({
        ...prevSelected,
        [productId]: prevSelected[productId] - 1,
      }));
    } else {
      // Si la cantidad es 1 o menos, desmarca el producto
      setSelectedProducts((prevSelected) => ({
        ...prevSelected,
        [productId]: 0,
      }));
      //Desmarcar el checkbox del elemento que paso de ser 1 a ninguno
      document.getElementById(`checkbox-${productId}`).checked = false;
    }
  };
  //Function that calculates the total amount of all elements selected in the cart
  const calculateTotal = () => {
    let total = 0;
    for (const prod of cart) {
      if (selectedProducts[prod.name] > 0) {
        total += prod.precio_unidad * selectedProducts[prod.name];
      }
    }
    total = total + (total * 8) / 100;
    return total;
  };
  //Function that puts again on empty the fields of the card info
  function reset() {
    document.getElementById("correo").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("cardNumber").value = "";
    document.getElementById("expirationMonth").value = "";
    document.getElementById("expirationYear").value = "";
    document.getElementById("securityCode").value = "";
    document.getElementById("zipCode").value = "";
  }
  //Muestra elemntos seleccionados
  function elements() {
    for (let i = 0; i < cart.length; i++) {
      if (selectedProducts[cart[i].name] > 0) {
        elemt.push(cart[i].name);
        items.push([
          "Name: " +
            cart[i].name +
            " | " +
            "Price: $" +
            cart[i].precio_unidad +
            " | " +
            "Purity:" +
            selectedPur[cart[i].name] +
            " | " +
            "Size:" +
            selectedSize[cart[i].name] +
            " | " +
            "Weigth:" +
            weight(cart[i].name, cart[i].size, cart[i].peso_neto) +
            " | " +
            "Qty: " +
            selectedProducts[cart[i].name] +
            "\n",
        ]);
      }
    }
    return items.toString();
  }

  //El correo
  const sendEmail = (e) => {
    e.preventDefault();
    setSend(false);
    emailjs
      .sendForm(
        "service_dg8jwyc",
        "template_0j1epe5",
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

  //redefine el metodo onSubmit del form
  function handleSubmit(e) {
    e.preventDefault();
    setSend(true);
  }
  //funcion que valida si hay elementos en el carrito
  function val() {
    if (length() > 0) {
      return true;
    } else {
      return false;
    }
  }
  //funcion que valida si hay elementos seleccionados del carrito
  function esVacio() {
    for (let i = 0; i < cart.length; i++) {
      if (selectedProducts[cart[i].name] > 0) {
        cant++;
      }
    }
    if (cant > 0) {
      return true;
    } else {
      return false;
    }
  }
  //precio total sin impuestos de un elemento
  function totalElementSinImpuestos(name, precio) {
    let total = 0;
    total = selectedProducts[name] * precio;
    return total;
  }
  //precio total con impuestos de un elemento
  function totalElementImpuestos(name, precio) {
    let total = 0;
    total = selectedProducts[name] * precio;
    const impuesto = total + (total * 8) / 100;
    return impuesto;
  }
  //precio total sin impuestos
  function totalSinImpuestos() {
    let total = 0;
    for (const prod of cart) {
      if (selectedProducts[prod.name] > 0) {
        total += totalElementSinImpuestos(prod.name, prod.precio_unidad);
      }
    }
    return total;
  }
  //funcion que asigna el valor de pureza selecionado
  function handleChangePur(name) {
    return (e) => {
      setSelectedPur((pureza) => ({
        ...pureza,
        [name]: e.target.value,
      }));
      setSelectedPur1((pure) => ({
        ...pure,
        [name]: 1,
      }));
    };
  }
  //select option de pureza
  function selecPureza(pur, name) {
    let arr = pur.split(",");
    return (
      <>
        <div className="flex-grow">
          <select
            id={`selectPur-${name}`}
            type="text"
            name="pureza"
            required
            className="w-10 bg-slate-50  rounded-md"
            value={selectedPur[name]}
            onChange={handleChangePur(name)}
          >
            <option className="text-black" defaultValue></option>
            {arr.map((prod, index) => (
              <option key={index} className="text-black">
                {prod}
              </option>
            ))}
          </select>
        </div>
      </>
    );
  }
  //funcion que asigna el valor del size selecionado
  function handleChangeSize(name) {
    return (e) => {
      setSelectedSize((size) => ({
        ...size,
        [name]: e.target.value,
      }));
      setSelectedSize1((siz) => ({
        ...siz,
        [name]: 1,
      }));
    };
  }
  //select option del size
  function selecSize(siz, name) {
    let arr = siz.split(",");
    return (
      <>
        <span className="flex-grow">
          <select
            id={`selectSiz-${name}`}
            type="text"
            name="size"
            required
            className="w-10 bg-slate-50 rounded-md"
            value={selectedSize[name]}
            onChange={handleChangeSize(name)}
          >
            <option className="text-black" defaultValue></option>
            {arr.map((prod, index) => (
              <option key={index} className="text-black">
                {prod}
              </option>
            ))}
            ;
          </select>
        </span>
      </>
    );
  }
  //funcion para asignar el peso por el size dado
  function weight(name, size, peso) {
    let arr1 = peso.split(","); //arreglo de pesos
    let arr = size.split(","); //arreglo de tamaños
    let siz = selectedSize[name]; //size del objeto
    const index = arr.indexOf(siz); //indice del size del objeto dentro del arreglo de sizes
    return arr1[index];
  }
  //valida los campos de seleccion
  function validate() {
    for (let i = 0; i < cart.length; i++) {
      if (selectedProducts[cart[i].name] > 0) {
        if (
          selectedPur1[cart[i].name] !== 1 ||
          selectedPur[cart[i].name] === ""
        ) {
          setFail1(true);
        } else if (
          selectedSize1[cart[i].name] !== 1 ||
          selectedSize[cart[i].name] === ""
        ) {
          setFail2(true);
        } else {
          setOpen(true);
        }
      }
    }
  }

  return (
    <div className="p-5">
      {val() ? (
        <div>
          <div className="flex justify-end mb-5 pr-12">
            <button
              onClick={() => {
                navigate("/");
              }}
              className="cursor-pointer flex items-center fill-blue-400 bg-blue-950 hover:bg-blue-900 active:border active:border-blue-400 rounded-md duration-100 p-2"
            >
              <span className="text-sm text-blue-400 font-bold pr-1 flex items-center">
                <IoCart className="mr-2" />
                Continue Shopping
              </span>
            </button>
          </div>
          <div className="">
            {/* Elementos en el carrito */}
            <div className=" pl-5 pr-5 bg-slate-100 rounded-lg">
              <div className="flex mb-4 flex-wrap pb-2  justify-between border-b border-slate-700">
                <h1 className="font-semibold">Items in Cart</h1>
                <h1>Items:{length()}</h1>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                }}
              >
                {cart.map((prod, index) => (
                  <div
                    key={index}
                    style={{
                      width: "100%", // Cambié el ancho al 100% para que sea responsive
                      maxWidth: "250px",
                      display: "flex",
                      marginBottom: "30px",
                    }}
                    className="gap-2 rounded-lg ml-1 mr-1 w-full max-w-80 border-slate-300 border-x border-y shadow-slate-300 shadow-md"
                  >
                    <div className="flex flex-col justify-center items-center ">
                      <div>
                        <input
                          type="checkbox"
                          onChange={() => handleProductSelection(prod.name)}
                          id={`checkbox-${prod.name}`}
                        />
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            removeFromCart(prod);
                          }}
                        >
                          <TiDeleteOutline className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%", // Cambié el ancho al 100% para que sea responsive
                        maxWidth: "300px",
                      }}
                      className="flex  shadow-sm  object-cover shadow-slate-500 bg-white rounded-lg"
                    >
                      <div>
                        <img
                          src={`${prod.photo}`}
                          alt=""
                          className=" h-[80px] w-[80px]"
                        />
                      </div>
                      <div className="ml-2">
                        <p className=" font-serif text-base">{prod.name}</p>
                        <p className=" font-serif text-base">
                          Price: ${prod.precio_unidad}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Elementos seleccionados */}
            {esVacio() ? (
              <div className="pt-8 flex gap-3 flex-wrap justify-around">
                <div className="pt-8 pl-8 pr-8 pb-3 bg-slate-100 rounded-lg mb-5 max-w-[950px] w-full">
                  <div className="flex mb-2 flex-wrap pb-2  justify-between ">
                    <h1 className="font-semibold">Shopping Cart</h1>
                    <h1>Items:{cant}</h1>
                  </div>
                  <div className="flex mb-4 flex-wrap pb-2  justify-center border-b border-slate-600">
                    <h1 className="font-semibold">Description Item</h1>
                  </div>
                  {cart.map((prod, index) => (
                    <div key={index}>
                      {selectedProducts[prod.name] > 0 && (
                        <div
                          key={index}
                          className="shadow-slate-300 px-2 shadow-md bg-slate-50 mb-5 flex overflow-hidden rounded-md border-x border-y border-slate-300 w-full"
                        >
                          <ul className="w-full " id="list">
                            <li className="gap-3 flex justify-between flex-wrap  items-center ">
                              <div className="flex flex-wrap items-end gap-2 max-w-[250px] w-full">
                                <img
                                  src={`${prod.photo}`}
                                  alt=""
                                  className=" h-[90px] w-[90px]"
                                />
                                <div className="">
                                  <p className=" font-serif text-base">
                                    {prod.name}
                                  </p>
                                  <p className=" font-serif text-base">
                                    Price: ${prod.precio_unidad}
                                  </p>
                                </div>
                              </div>
                              <div className="text-center flex flex-wrap gap-2 max-w-[130px] w-full">
                                <span className=" font-serif text-base">
                                  Qty:
                                </span>
                                <div className="flex items-center border-y border-x  rounded-lg">
                                  <div
                                    onClick={() => decreaseQuantity(prod.name)}
                                    className="cursor-pointer w-5 h-5 items-center  rounded-full bg-blue-500 text-white flex justify-center"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="5"
                                      stroke="currentColor"
                                      className="w-6 h-4"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 12h14"
                                      />
                                    </svg>
                                  </div>
                                  <span className="mx-2 text-lg">
                                    {selectedProducts[prod.name]}
                                  </span>
                                  <div
                                    onClick={() => increaseQuantity(prod.name)}
                                    className="cursor-pointer w-5 h-5 items-center text-center rounded-full bg-blue-500 text-white flex justify-center"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="5"
                                      stroke="currentColor"
                                      className="w-6 h-4"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 4.5v15m7.5-7.5h-15"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-wrap items-center max-w-[97px] gap-2 w-full ">
                                <span className=" font-serif text-base">
                                  Purity:
                                </span>
                                <div>{selecPureza(prod.pureza, prod.name)}</div>
                              </div>
                              <div className="flex flex-wrap items-center max-w-[90px] gap-2 w-full ">
                                <span className=" font-serif text-base">
                                  Size:
                                </span>
                                <div>{selecSize(prod.size, prod.name)}</div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="pt-8 pl-8 pr-8 pb-3 bg-slate-100 rounded-lg mb-5 max-w-[350px] w-full">
                  <div className="flex justify-center mb-2">
                    <h1>Order Sumary</h1>
                  </div>
                  <div className="border-b border-slate-400"></div>
                  <div className="flex justify-between mb-3">
                    <h1>Items {cant}</h1>
                    <h1>${totalSinImpuestos()}</h1>
                  </div>
                  <div className="gap-3 border-b border-slate-300 mb-2 pb-1 flex justify-between px-2 flex-wrap">
                    <div className="max-w-[120px] w-full">
                      <span>Name</span>
                    </div>
                    <div className="max-w-[60px] w-full text-center">
                      <span>Total</span>
                    </div>
                    <div className="max-w-[60px] w-full text-center">
                      <span>Tax 8%</span>
                    </div>
                  </div>
                  {cart.map((prod, index) => (
                    <div key={index}>
                      {selectedProducts[prod.name] > 0 && (
                        <div
                          key={index}
                          style={{
                            width: "100%",
                            display: "flex",
                          }}
                          className="shadow-slate-300 shadow-md bg-slate-50 mb-5 overflow-hidden rounded-md border-x border-y border-slate-300"
                        >
                          <ul className="w-full" id="list">
                            <li className="gap-2 flex justify-between px-2 flex-wrap">
                              <div className="max-w-[120px] w-full">
                                <span>{prod.name}</span>
                              </div>
                              <div className="max-w-[60px] w-full text-center">
                                <span></span>
                                <span>
                                  {totalElementSinImpuestos(
                                    prod.name,
                                    prod.precio_unidad
                                  )}
                                </span>
                              </div>
                              <div className="max-w-[60px] w-full text-center">
                                <span></span>
                                <span>
                                  {totalElementImpuestos(
                                    prod.name,
                                    prod.precio_unidad
                                  )}
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                  <div>
                    <h2 className="text-2xl font-semibold mt-6 pt-2 border-t border-slate-300 text-center">
                      Total: ${calculateTotal()}
                    </h2>
                  </div>
                  <div className="flex justify-center mt-4">
                    <button
                      onClick={() => {
                        validate();
                      }}
                      className="cursor-pointer flex items-center fill-blue-400 bg-blue-950 hover:bg-blue-900 active:border active:border-blue-400 rounded-md duration-100 p-2"
                    >
                      <span className="text-sm text-blue-400 font-bold pr-1 flex items-center">
                        Checkout
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <div className="pt-24">
          <div className="">
            <div className="flex justify-center ">
              <img src={EmptyCart} alt="" width={250} height={250} />
            </div>
            <div className="mt-3">
              <div className="flex justify-center">
                <h3 className="text-xl font-semibold leading-6 text-gray-900">
                  Unfortunately, Your Cart Is Empty
                </h3>
              </div>
              <div className="mt-2 ">
                <p className="text-sm text-gray-500 flex justify-center text-center">
                  Looks like you have not added anything to you cart.
                </p>
                <p className="text-sm text-gray-500 flex justify-center text-center">
                  Please Add Something In your Cart.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => {
                navigate("/");
              }}
              className="cursor-pointer flex items-center fill-blue-400 bg-blue-950 hover:bg-blue-900 active:border active:border-blue-400 rounded-md duration-100 p-2"
            >
              <span className="text-sm text-blue-400 font-bold pr-1 flex items-center">
                <IoCart className="mr-2" />
                Return to shop
              </span>
            </button>
          </div>
        </div>
      )}

      {/* Muestra el formulario */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
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
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="max-w-[700px] w-full  flex justify-center mx-10  sm:p-6 sm:pb-4 relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all ">
                  <form
                    ref={form} // Asigna la referencia al formulario
                    onSubmit={(e) => handleSubmit(e)}
                    className=" w-full max-w-2xl border-double border-4 border-slate-500 rounded-2xl"
                  >
                    <div className="p-4">
                      <div className="flex gap-0 mb-4 flex-wrap">
                        <label
                          htmlFor="Info"
                          className="block text-sm font-semibold text-black"
                        >
                          Total to discont from card:
                        </label>
                        <input
                          name="pago"
                          id="pago"
                          value={` $${calculateTotal()}`}
                          readOnly
                          className="block  text-sm font-medium text-black w-20"
                        ></input>
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="Info"
                          className="block mb-1 text-sm font-semibold text-black"
                        >
                          Items in Cart:
                        </label>
                        <textarea
                          className="block  text-sm font-medium text-black w-full"
                          type="text"
                          id="items"
                          name="items"
                          readOnly
                          value={elements()}
                        />
                      </div>

                      <label
                        htmlFor="Info"
                        className="block mb-2 mt-4 text-sm font-bold text-black"
                      >
                        Personal Info:
                      </label>
                      {/* Correo */}
                      <label
                        htmlFor="Email"
                        className="block mb-1 text-sm font-semibold text-black"
                      >
                        Email
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
                        className="block mb-1 text-sm font-semibold text-black"
                      >
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
                        className="block mb-1 text-sm font-semibold text-black"
                      >
                        Address to send
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
                        className="block mb-2 mt-4 text-sm font-bold text-black"
                      >
                        Card Info:
                      </label>

                      {/* Tarjeta */}
                      <label
                        htmlFor="Info"
                        className="block mb-1 text-sm font-semibold text-black"
                      >
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
                        className="block mb-1 text-sm font-semibold text-black"
                      >
                        Expiration Date (MM/YY):
                      </label>
                      <div className="flex flex-wrap gap-1 rounded-md mb-5 w-full text-black mr-0 py-1 px-2 leading-8">
                        <select
                          id="expirationMonth"
                          name="expirationMonth"
                          required
                          className="border rounded p-2 mr-2"
                        >
                          <option defaultValue></option>
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
                          className="border rounded p-2"
                        >
                          <option defaultValue></option>
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
                        className="block mb-1 text-sm font-semibold text-black"
                      >
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
                        className="block mb-1 text-sm font-semibold text-black"
                      >
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
                          setOpen(false);
                        }}
                        className="cursor-pointer flex items-center fill-red-400 bg-red-950 hover:bg-red-900 active:border active:border-red-400 rounded-md duration-100 px-2 py-1.5"
                        title="Save"
                      >
                        <span className="text-sm text-red-400 font-bold ">
                          {" "}
                          Cancel
                        </span>
                      </div>

                      <button
                        type="submit"
                        className="cursor-pointer flex items-center fill-green-400 bg-green-950 hover:bg-green-900 active:border active:border-green-400 rounded-md duration-100 px-2 py-1.5"
                      >
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
      <Transition.Root show={send} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={setSend}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
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
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
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
                          className="text-xl font-semibold leading-6 text-gray-900"
                        >
                          You're sure?!
                        </Dialog.Title>
                      </div>
                    </div>
                  </div>
                  <form
                    onSubmit={sendEmail}
                    className="bg-gray-100 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-2"
                  >
                    <button
                      type="submit"
                      className="cursor-pointer flex items-center fill-green-400 bg-green-950 hover:bg-green-900 active:border active:border-green-400 rounded-md duration-100 px-2 py-1.5"
                    >
                      <span className="text-sm text-green-400 font-bold ">
                        Send
                      </span>
                    </button>
                    <div
                      type="button"
                      onClick={() => {
                        setSend(false);
                        setOpen(true);
                      }}
                      className="cursor-pointer flex items-center fill-red-400 bg-red-950 hover:bg-red-900 active:border active:border-red-400 rounded-md duration-100 px-2 py-1.5"
                      title="Save"
                    >
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
      {/* Sale en caso de se envie */}
      <Transition.Root show={ok} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOk}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
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
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
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
                          className="text-xl font-semibold leading-6 text-gray-900"
                        >
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
                        removeElementsCart(elemt);
                      }}
                      className="cursor-pointer flex items-center fill-blue-400 bg-blue-950 hover:bg-blue-900 active:border active:border-blue-400 rounded-md duration-100 px-2 py-1.5"
                    >
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
            leaveTo="opacity-0"
          >
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
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
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
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Fail
                        </Dialog.Title>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      onClick={() => setFail(false)}
                      type="button"
                      className="cursor-pointer flex items-center fill-red-400 bg-red-950 hover:bg-red-900 active:border active:border-red-400 rounded-md duration-100 px-2 py-1.5"
                    >
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
      {/* Sale en caso de que no se seleccione la pureza */}
      <Transition.Root show={fail1} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setFail1}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
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
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
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
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Still to be selected
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Please select the purity of the selected object.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      onClick={() => setFail1(false)}
                      type="button"
                      className="cursor-pointer flex items-center fill-red-400 bg-red-950 hover:bg-red-900 active:border active:border-red-400 rounded-md duration-100 px-2 py-1.5"
                    >
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
      {/* Sale en caso de que no se seleccione un size */}
      <Transition.Root show={fail2} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setFail2}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
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
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
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
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Still to be selected
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Please select the size of the selected object.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      onClick={() => setFail2(false)}
                      type="button"
                      className="cursor-pointer flex items-center fill-red-400 bg-red-950 hover:bg-red-900 active:border active:border-red-400 rounded-md duration-100 px-2 py-1.5"
                    >
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
    </div>
  );
};

export default Cart;
