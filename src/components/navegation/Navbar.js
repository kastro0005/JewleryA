import { connect } from "react-redux";
import { Fragment, useContext, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { IoConstructOutline, IoDiamondOutline } from "react-icons/io5";
import { CartContext } from "context/CartContext";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Logo } from "components/img/Images";

const products = [
  {
    name: "Rings",
    description: "Shiny and elegant rings that everyone will love",
    href: "/Anillos",
  },
  {
    name: "Chains",
    description: "Gold chains, luxury and exceptional shine",
    href: "/Cadenas",
  },
  {
    name: "Bracelets",
    description: "Gold bracelets, luxury and exceptional shine",
    href: "/Brazaletes",
  },
  {
    name: "Anklets",
    description: "Gold anklets, luxury and exceptional shine",
    href: "/Tobilleras",
  },
  {
    name: "Earrings",
    description: "Modern earrings that enhance your unique style",
    href: "/Aretes",
  },
  {
    name: "Piercings",
    description: "Modern pircings that enhance your unique style",
    href: "/Pircings",
  },
  {
    name: "Charms",
    description: "Charms of art, beauty and personal authenticity",
    href: "/Dijes",
  },
];
const callsToAction = [];

function Navbar() {
  const { length } = useContext(CartContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="">
      <nav
        className="absolute flex w-full items-center  bg-white justify-between p-2 lg:px-8 shadow-md"
        aria-label="Global">
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black hover:text-gold"
            onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-10 ">
          <Popover className="relative">
            <Popover.Button className="inline-flex  items-center gap-x-1 text-sm font-semibold leading-6 text-black hover:text-gold hover:underline hover:underline-offset-4">
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1">
              <Popover.Panel className="absolute -left-10  top-full z-10 mt-5 w-screen max-w-sm overflow-hidden  bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  <div className="border-b border-slate-300">
                    <p className="mt-1 font-extralight text-black ">
                      Products:
                    </p>
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-300">
                        <Link
                          to={item.href}
                          className="flex-auto block font-semibold text-black hover:text-gold">
                          {item.name}
                          <p className="mt-1 font-extralight text-black hover:text-gold">
                            {item.description}
                          </p>
                        </Link>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/Personalizar"
                    className=" font-semibold text-black hover:text-gold group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-300">
                    Personalizar
                  </Link>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            to="/Buy"
            className="items-center inline-flex text-sm font-semibold leading-6 text-black  hover:underline hover:underline-offset-4">
            <span className="sr-only">Notifications</span>
            <BsCart3 className="mr-2" />
            <div className="absolute  items-center justify-center w-5 h-5 text-xs text-center font-semibold text-black bg-sky-100 rounded-full -left-[-110px] -top-[-15px]">
              {length()}
            </div>
          </Link>
        </Popover.Group>
        <div className="">
          <Link to="/" className="lg:flex lg:gap-x-10 ">
            <span className="sr-only">Yuyita's Jewlery</span>
            <img src={Logo} alt="" className="" width={120} height={110} />
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Yani's Jewlery</span>
              <img src={Logo} alt="" className="" width={200} height={120} />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-black"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className=" items-center flex text-sm   -mx-3  rounded-lg px-3 py-2.5  font-semibold  text-black hover:bg-gray-200 hover:text-gray-700">
                        <IoDiamondOutline className="mr-3" />
                        Products
                        <ChevronDownIcon
                          className="h-5 w-5 text-black"
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Link key={item.name} to={item.href}>
                            <Disclosure.Button className=" flex  px-2 py-2 text-sm font-semibold rounded-md ml-20 text-black hover:bg-gray-200 hover:text-gray-700">
                              {item.name}
                            </Disclosure.Button>
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Link
                  to="/Personalizar"
                  className="items-center  inline-flex  -mx-3  rounded-lg px-3 py-2.5 text-sm font-semibold leading-6 text-black hover:bg-gray-200 hover:text-gray-700">
                  <IoConstructOutline className="mr-3" />
                  Personalize
                </Link>

                <Link to="/Buy" className="  flex ">
                  <div className="-mx-3 inline-flex items-center text-sm rounded-lg px-3 py-2.5  font-semibold  text-black hover:bg-gray-200 hover:text-gray-700 ">
                    <span className="sr-only">Notifications</span>
                    <BsCart3 className=" mr-3" />
                    Buy
                    <div className="items-center justify-center w-5 h-5 text-xs text-center font-semibold text-black hover:bg-gray-200 hover:text-gray-700 bg-sky-100 rounded-full">
                      {length()}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Navbar);
