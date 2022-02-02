import Image from "next/image";
import { useState } from "react";
import { Layout } from "../../components/common";
import { imagesData } from "./data.js";

export default function SlideShowPage() {
  return (
    <Layout>
      <div className="flex flex-col w-full bg-white p-4">
        <div className="text-2xl font-bold text-gray-800">
          Slideshow/Carousel Component
        </div>
        <div className="flex justify-center mt-16">
          <Slideshow imagesList={imagesData} width={"700px"} height={"300px"} />
        </div>
      </div>
    </Layout>
  );
}

/**
 * imagesList = [{
 *  id: "1",
 *  imgURL: "https://carousel.jpg",
 *  caption: "example text"
 * }]
 */
function Slideshow({ imagesList, width, height }) {
  const [currImage, setCurrImage] = useState(0);
  const { id, url: imgURL, caption } = imagesList[currImage];

  function showPrevImage(e) {
    if (currImage === 0) {
      setCurrImage(imagesList.length - 1);
    } else {
      setCurrImage((currImage) => currImage - 1);
    }
  }
  function showNextImage(e) {
    if (currImage === imagesList.length - 1) {
      setCurrImage(0);
    } else {
      setCurrImage((currImage) => currImage + 1);
    }
  }

  return (
    <div className={`flex flex-col items-center w-[${width}] h-[${height}]`}>
      <div className="relative border w-full h-full">
        <Image src={imgURL} alt={caption} layout="fill" />
        <Button type="left" clickHandler={showPrevImage}>
          ❮
        </Button>
        <Button type="right" clickHandler={showNextImage}>
          ❯
        </Button>
        <Caption>{caption}</Caption>
      </div>
      <Dots
        imagesList={imagesList}
        currImage={currImage}
        setCurrImage={setCurrImage}
      />
    </div>
  );
}

function Button({ children, type, clickHandler }) {
  const className = {
    left: "text-white absolute top-1/2 left-0 -translate-y-1/2 px-2 py-4 transition hover:bg-black/50",
    right:
      "text-white absolute top-1/2 right-0 -translate-y-1/2 px-2 py-4 transition hover:bg-black/50",
  };
  return (
    <button className={className[type]} onClick={clickHandler}>
      {children}
    </button>
  );
}

function Caption({ children }) {
  return (
    <div className="text-white text-sm absolute left-1/2 bottom-2 -translate-x-1/2">
      {children}
    </div>
  );
}

function Dots({ imagesList, currImage, setCurrImage }) {
  return (
    <div className="flex gap-2 mt-4">
      {imagesList.map((item, index) => {
        return (
          <button
            key={item.id}
            className={`w-4 h-4 rounded-full ${
              currImage === index ? "bg-slate-700" : "bg-slate-400"
            }`}
            onClick={() => {
              setCurrImage(index);
            }}
          ></button>
        );
      })}
    </div>
  );
}
