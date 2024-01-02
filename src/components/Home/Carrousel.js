import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { C1, C2, C3, C4, C5, C6, C7, C8 } from "components/img/Images";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Carrusel() {
  const [positionIndexes, setPositionIndexes] = useState([
    0, 1, 2, 3, 4, 5, 6, 7,
  ]);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 400);
  const [isMobile2, setIsMobile2] = useState(window.innerWidth <= 768);
  const updateDimensions = () => {
    setIsMobile(window.innerWidth <= 400);
    setIsMobile2(window.innerWidth <= 768);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 8
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 7) % 8
      );

      return updatedIndexes;
    });
  };

  const images = [
    { img: C1, url: "/" },
    { img: C2, url: "Anillos" },
    { img: C3, url: "Brazaletes" },
    { img: C4, url: "Aretes" },
    { img: C5, url: "Cadenas" },
    { img: C6, url: "Dijes" },
    { img: C7, url: "Pircings" },
    { img: C8, url: "Tobilleras" },
  ];

  const positions = [
    "center",
    "left2",
    "left1",
    "left",
    "right3",
    "right",
    "right1",
    "right2",
  ];

  function variants() {
    if (isMobile) {
      const imageVariants = {
        center: { x: "0%", scale: 0.8, zIndex: 5 },
        left2: { x: "-50%", scale: 0.5, zIndex: 4 },
        left1: { x: "-50%", scale: 0.4, zIndex: 3 },
        left: { x: "-80%", scale: 0.3, zIndex: 2 },
        right3: { x: "0%", scale: 0.4, zIndex: 1 },
        right: { x: "80%", scale: 0.3, zIndex: 2 },
        right1: { x: "50%", scale: 0.4, zIndex: 3 },
        right2: { x: "50%", scale: 0.5, zIndex: 4 },
      };
      return imageVariants;
    } else {
      const imageVariants = {
        center: { x: "0%", scale: 0.8, zIndex: 5 },
        left2: { x: "-40%", scale: 0.5, zIndex: 4 },
        left1: { x: "-60%", scale: 0.4, zIndex: 3 },
        left: { x: "-80%", scale: 0.3, zIndex: 2 },
        right3: { x: "0%", scale: 0.4, zIndex: 1 },
        right: { x: "80%", scale: 0.3, zIndex: 2 },
        right1: { x: "60%", scale: 0.4, zIndex: 3 },
        right2: { x: "40%", scale: 0.5, zIndex: 4 },
      };
      return imageVariants;
    }
  }

  return (
    <div className=" flex items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-100 to-gray-700 gap-3 flex-col justify-center pt-20">
      <div className=" w-full px-8 h-[500px] ">
        {images.map((image, index) => (
          <Link to={image.url} key={index} className=" flex justify-center">
            {isMobile ? (
              <>
                <motion.img
                  key={index}
                  src={image.img}
                  alt={image.img}
                  className="rounded-[12px]"
                  initial="center"
                  animate={positions[positionIndexes[index]]}
                  variants={variants()}
                  transition={{ duration: 0.5 }}
                  style={{
                    width: "50%",
                    height: "65%",
                    position: "absolute",
                  }}
                />
              </>
            ) : (
              <>
                {isMobile2 ? (
                  <>
                    <motion.img
                      key={index}
                      src={image.img}
                      alt={image.img}
                      className="rounded-[12px]"
                      initial="center"
                      animate={positions[positionIndexes[index]]}
                      variants={variants()}
                      transition={{ duration: 0.5 }}
                      style={{
                        width: "50%",
                        height: "54%",
                        position: "absolute",
                      }}
                    />
                  </>
                ) : (
                  <>
                    <motion.img
                      key={index}
                      src={image.img}
                      alt={image.img}
                      className="rounded-[12px]"
                      initial="center"
                      animate={positions[positionIndexes[index]]}
                      variants={variants()}
                      transition={{ duration: 0.5 }}
                      style={{
                        width: "50%",
                        height: "60%",
                        position: "absolute",
                      }}
                    />
                  </>
                )}
              </>
            )}
          </Link>
        ))}
      </div>
      <div className="flex flex-row gap-3 bottom-0 mb-5 justify-center">
        <button
          className="cursor-pointer flex items-center fill-blue-400 bg-blue-950 hover:bg-blue-900 active:border active:border-blue-400 rounded-md duration-100 px-2 py-1.5"
          title="Save"
          onClick={handleBack}>
          <span className="text-sm text-blue-400 font-bold ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </span>
        </button>
        <button
          className="cursor-pointer flex items-center fill-blue-400 bg-blue-950 hover:bg-blue-900 active:border active:border-blue-400 rounded-md duration-100 px-2 py-1.5"
          title="Save"
          onClick={handleNext}>
          <span className="text-sm text-blue-400 font-bold ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Carrusel);
