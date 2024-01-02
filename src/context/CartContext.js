import React, { createContext, useState, useEffect } from "react";

// Crea un contexto
export const CartContext = createContext();

// Exporta un componente que proporcionará los datos a otros componentes
const initialState = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(initialState);

  const handleAddCart = (item) => {
    const itemAgregado = { ...item };
    const newCart = [...cart];
    const isInTheCart = newCart.find((item) => item.name === itemAgregado.name);

    if (isInTheCart) {
      console.log("Esta en el carro");
    } else {
      newCart.push(itemAgregado);
    }
    setCart(newCart);
  };

  const removeFromCart = (item) => {
    const newCart = [...cart];
    const index = newCart.indexOf(item);
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const removeElementsCart = (item) => {
    const newCart = [...cart];
    for (let i = 0; i < item.length; i++) {
      var elem = cart.find((asd) => asd.name === item[i]);
      const index = newCart.indexOf(elem);
      newCart.splice(index, 1);
    }
    setCart(newCart);
  };

  const vaciar = () => {
    setCart([]);
  };

  const length = () => {
    var cont = 0;
    for (let i = 0; i < cart.length; i++) {
      cont++;
    }
    return cont;
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddCart,
        removeElementsCart,
        length,
        vaciar,
        removeFromCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};
