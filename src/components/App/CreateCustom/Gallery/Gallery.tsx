import "./Gallery.scss";
import customDonuts1 from "../../../../assets/create-custom/custom-donuts-1.webp";
import customDonuts2 from "../../../../assets/create-custom/custom-donuts-2.webp";
import customDonuts3 from "../../../../assets/create-custom/custom-donuts-3.webp";
import customDonuts4 from "../../../../assets/create-custom/custom-donuts-4.webp";
import customDonuts5 from "../../../../assets/create-custom/custom-donuts-5.webp";
import customDonuts6 from "../../../../assets/create-custom/custom-donuts-6.webp";
import { useEffect, useRef, useState } from "react";

const images = [
  {
    id: 1,
    src: customDonuts4,
  },
  {
    id: 2,
    src: customDonuts5,
  },
  {
    id: 3,
    src: customDonuts6,
  },
  {
    id: 4,
    src: customDonuts1,
  },
  {
    id: 5,
    src: customDonuts2,
  },
  {
    id: 6,
    src: customDonuts3,
  },
  {
    id: 7,
    src: customDonuts4,
  },
  {
    id: 8,
    src: customDonuts5,
  },
  {
    id: 9,
    src: customDonuts6,
  },
  {
    id: 10,
    src: customDonuts1,
  },
];

const Gallery = () => {
  const [offset, setOffset] = useState(1);
  const [isBlocked, setIsBlocked] = useState(false);

  const imagesElementRef = useRef<HTMLDivElement | null>(null);
  const galleryElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (imagesElementRef.current) {
      imagesElementRef.current!.style.setProperty("--counter", `${offset}`);
    }
  }, [offset]);

  useEffect(() => {
    const callback = () => {
      if (screen.width <= 1024) {
        galleryElementRef.current!.style.setProperty("--gallery-width", `${screen.width}px`);
      } else {
        galleryElementRef.current!.style.setProperty("--gallery-width", `${800}px`);
      }
    };

    window.addEventListener("resize", callback);

    return () => {
      window.removeEventListener("resize", callback);
    };
  });

  useEffect(() => {
    if (isBlocked === true) {
      setTimeout(() => {
        if (offset === images.length - 3) {
          imagesElementRef.current!.style.transition = "0ms";
          imagesElementRef.current!.style.setProperty("--counter", `${1}`);

          setTimeout(() => {
            imagesElementRef.current!.style.transition = "1000ms";
            setIsBlocked(false);
          }, 100);

          setOffset(1);
        } else if (offset === 0) {
          imagesElementRef.current!.style.transition = "0ms";
          imagesElementRef.current!.style.setProperty("--counter", `${images.length - 4}`);

          setTimeout(() => {
            imagesElementRef.current!.style.transition = "1000ms";
            setIsBlocked(false);
          }, 100);

          setOffset(images.length - 4);
        } else {
          setIsBlocked(false);
        }
      }, 1000);
    }
  }, [isBlocked]);

  return (
    <div className="gallery" ref={galleryElementRef}>
      <div className="images" ref={imagesElementRef}>
        {images.map((image) => {
          const { id, src } = image;

          return (
            <div className="image" key={id}>
              <img src={src}></img>
            </div>
          );
        })}
      </div>
      <div className="buttons">
        <button
          onClick={() => {
            if (isBlocked === false) {
              setIsBlocked(true);
              setOffset((currentValue) => {
                return currentValue - 1;
              });
            }
          }}>
          <i className="fa-solid fa-caret-left"></i>
        </button>
        <button
          onClick={() => {
            if (isBlocked === false) {
              setIsBlocked(true);
              setOffset((currentValue) => {
                return currentValue + 1;
              });
            }
          }}>
          <i className="fa-solid fa-caret-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Gallery;
