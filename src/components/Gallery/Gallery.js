import { connect } from "react-redux";
import { useContext, useState } from "react";
import "font-awesome/css/font-awesome.css";
import { CartContext } from "context/CartContext";
import { FaCartPlus } from "react-icons/fa6";

function Gallery({ producto }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { handleAddCart } = useContext(CartContext);

  function gen(sex) {
    if (sex === "Male") {
      return (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="19.000000pt"
          height="19.000000pt"
          viewBox="0 0 256.000000 256.000000"
          preserveAspectRatio="xMidYMid meet">
          <g
            transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none">
            <path
              d="M1975 2337 c-165 -34 -306 -66 -312 -70 -30 -19 -12 -54 77 -142 l90
                -90 -177 -177 -176 -177 -44 31 c-174 119 -448 165 -658 109 -238 -62 -435
                -222 -541 -436 -66 -133 -87 -224 -87 -375 0 -152 22 -244 88 -375 108 -215
                304 -373 541 -436 94 -25 275 -30 369 -10 306 65 564 307 640 600 57 221 29
                444 -81 637 -24 43 -44 80 -44 83 0 4 78 84 173 179 l172 172 90 -90 c49 -49
                97 -90 106 -90 9 0 23 8 31 18 23 27 146 658 132 680 -19 29 -77 23 -389 -41z
                m-870 -742 c227 -48 413 -235 461 -465 29 -137 4 -291 -69 -420 -17 -30 -62
                -87 -101 -125 -236 -234 -602 -232 -836 4 -87 87 -131 164 -160 277 -25 98
                -25 190 0 288 29 113 73 190 160 277 147 148 341 207 545 164z"
            />
          </g>
        </svg>
      );
    } else if (sex === "Female") {
      return (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="19.000000pt"
          height="19.000000pt"
          viewBox="0 0 256.000000 256.000000"
          preserveAspectRatio="xMidYMid meet">
          <g
            transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none">
            <path
              d="M1135 2519 c-183 -36 -332 -117 -456 -246 -123 -127 -194 -267 -224
                -438 -19 -110 -19 -170 0 -280 57 -326 307 -597 621 -671 l74 -18 0 -143 0
                -143 -125 0 -125 0 0 -119 0 -118 61 -7 c34 -3 90 -6 125 -6 l63 0 3 -137 3
                -138 123 -3 122 -3 0 140 0 140 128 3 127 3 3 50 c2 28 1 83 -3 122 l-7 73
                -108 0 c-60 0 -115 3 -124 6 -14 5 -16 28 -16 145 0 132 1 139 20 139 11 0 61
                13 112 30 263 84 462 286 548 555 34 108 39 310 11 430 -72 303 -301 536 -606
                620 -72 19 -280 28 -350 14z m290 -244 c206 -53 368 -212 431 -420 24 -81 24
                -239 0 -320 -45 -150 -146 -281 -277 -358 -101 -59 -155 -72 -304 -72 -112 0
                -139 3 -195 24 -345 127 -498 513 -333 842 70 141 229 267 385 305 74 17 222
                17 293 -1z"
            />
          </g>
        </svg>
      );
    } else {
      return (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="19.000000pt"
          height="19.000000pt"
          viewBox="0 0 256.000000 256.000000"
          preserveAspectRatio="xMidYMid meet">
          <g
            transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none">
            <path
              d="M2100 2390 c-135 -43 -251 -83 -257 -89 -23 -21 -13 -35 67 -100 68
                -55 77 -66 67 -81 -7 -9 -61 -77 -121 -152 l-110 -135 -52 24 c-28 13 -89 33
                -135 44 -102 26 -238 22 -338 -10 l-63 -20 -50 40 c-104 82 -269 139 -403 139
                -88 0 -203 -28 -294 -72 -119 -57 -232 -169 -289 -288 -54 -111 -72 -184 -72
                -296 0 -313 189 -553 510 -646 l45 -13 3 -107 3 -108 -101 0 -100 0 0 -100 0
                -100 94 0 c76 0 95 -3 100 -16 3 -9 6 -57 6 -108 l0 -93 65 -6 c36 -4 79 -4
                95 0 l30 6 0 108 0 109 100 0 101 0 -3 98 -3 97 -97 3 -98 3 0 107 0 107 77
                21 77 22 62 -44 c185 -132 403 -167 608 -96 262 90 431 316 443 592 8 162 -37
                309 -131 431 l-35 47 115 143 c64 79 119 147 123 151 4 5 43 -21 86 -56 80
                -64 103 -70 118 -34 2 7 15 130 28 272 22 253 22 259 4 272 -10 8 -21 14 -24
                13 -3 -1 -116 -36 -251 -79z m-1196 -573 c42 -20 76 -39 76 -42 0 -3 -27 -38
                -61 -78 -65 -78 -129 -199 -150 -287 -8 -30 -13 -102 -13 -160 1 -91 5 -117
                33 -195 17 -49 34 -97 37 -106 4 -12 -3 -18 -33 -22 -326 -54 -604 216 -553
                538 23 144 121 280 248 344 86 44 122 51 238 47 93 -2 108 -6 178 -39z m648
                -108 c88 -29 137 -61 200 -127 90 -94 128 -191 128 -324 0 -273 -235 -488
                -508 -465 -77 6 -171 38 -209 72 l-27 22 56 63 c69 75 120 170 149 275 18 68
                21 97 16 195 -4 96 -10 129 -36 199 -17 47 -31 88 -31 92 0 10 40 16 128 18
                50 1 91 -5 134 -20z m-381 -248 c22 -132 -29 -295 -121 -390 -41 -42 -44 -43
                -57 -25 -20 27 -43 110 -50 179 -11 123 38 265 124 353 l45 47 24 -47 c13 -25
                29 -78 35 -117z"
            />
          </g>
        </svg>
      );
    }
  }

  function images(id) {
    const item = producto.find((prod) => prod.id === id);

    const img = [
      {
        url: `${item.photo2}`,
      },
      {
        url: `${item.photo}`,
      },
      {
        url: `${item.photo3}`,
      },
    ];

    const nextSlide = () => {
      const isLastSlide = currentIndex === img.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
    setTimeout(nextSlide, 4000);

    return (
      <>
        <div
          style={{ backgroundImage: `url(${img[currentIndex].url})` }}
          className=" w-full h-[300px]   text-center bg-center bg-cover duration-500 rounded-t-lg "></div>
      </>
    );
  }
  function size(siz) {
    let sizes = [];
    let arr = siz.split(",");

    for (let i = 0; i < arr.length; i++) {
      sizes.push(arr[i] + " ");
    }
    return sizes;
  }
  function purity(pur) {
    let purezas = [];
    let arr = pur.split(",");
    for (let i = 0; i < arr.length; i++) {
      purezas.push(arr[i] + " ");
    }
    return purezas;
  }
  function weight(pes) {
    let pesos = [];
    let arr = pes.split(",");

    for (let i = 0; i < arr.length; i++) {
      pesos.push(arr[i] + " ");
    }
    return pesos;
  }

  return (
    <>
      <div
        className="p-5 gap-10"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}>
        {producto &&
          producto.map((prod) => (
            <div
              key={prod.id}
              className="shadow-2xl rounded-lg"
              style={{
                width: "100%", // Cambié el ancho al 100% para que sea responsive
                maxWidth: "300px", // Establecí un ancho máximo
                marginBottom: "30px",
              }}>
              <div className="w-full max-w-[300px] h-[300px]  border-b-slate-300 border-b">
                {images(prod.id)}
              </div>
              <div
                style={{
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "5px",
                  marginTop: "10px",
                }}
                className="">
                <h1 className=" font-serif text-4xl text-center">
                  {prod.name}
                </h1>
                <h4
                  style={{ fontSize: "20px" }}
                  className="text-center font-mono flex justify-center">
                  ${prod.precio_unidad}&emsp;
                  {gen(prod.genero_usuario)}
                </h4>
                <div className="flex flex-wrap justify-between px-2">
                  <div className="text-center">
                    <span className="font-bold">Purity</span>:
                    <h1>{purity(prod.pureza)}</h1>
                  </div>
                  <div className="text-center">
                    <span className="font-bold">Weight</span>:
                    <h1>{weight(prod.peso_neto)}</h1>
                  </div>
                  <div className="text-center">
                    <span className="font-bold">Size</span>:
                    <h1>{size(prod.size)}</h1>
                  </div>
                </div>
                <div className="border-t-slate-300 border-t pt-1 flex justify-between">
                  <div className="flex gap-2 justify-start">
                    <img
                      src={`${prod.photo}`}
                      alt="prod"
                      style={{
                        textAlign: "center",
                      }}
                      className=" rounded-sm w-6 h-6 hover:w-36 hover:h-36 ease-out duration-300"
                    />
                    <img
                      src={`${prod.photo2}`}
                      alt="prod"
                      style={{
                        textAlign: "center",
                      }}
                      className="rounded-sm w-6 h-6 hover:w-36 hover:h-36 ease-out duration-300"
                    />
                    <img
                      src={`${prod.photo3}`}
                      alt="prod"
                      style={{
                        textAlign: "center",
                      }}
                      className="rounded-sm w-6 h-6 hover:w-36 hover:h-36 ease-out duration-300"
                    />
                  </div>
                  <div className="">
                    <button onClick={() => handleAddCart(prod)}>
                      <FaCartPlus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Gallery);
