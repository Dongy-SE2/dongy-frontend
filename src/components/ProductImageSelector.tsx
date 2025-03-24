"use client";

import { useState, useRef, useContext } from "react";
import Image from "next/image";
import { UploadIcon } from "lucide-react";
import { uploadImageContext } from "./ProductEditor";

interface UploadProps extends React.InputHTMLAttributes<HTMLInputElement> {
  image?: string[];
  changeImage: React.Dispatch<React.SetStateAction<string[]>>;
  select: number;
}

const ImageUpload: React.FC<UploadProps> = (props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const uploadImageData = useContext(uploadImageContext);
  return (
    <>
      <button
        className="relative w-[385px] h-[221px] block"
        onClick={(e) => {
          e.preventDefault();
          if (fileInputRef && fileInputRef.current) {
            fileInputRef.current.click();
          }
        }}
      >
        {props.image && props.image[props.select] ? (
          <>
            <Image
              src={props.image[props.select]}
              alt="product"
              width={385}
              height={221}
              className="object-cover w-full h-full rounded-[10px]"
            />
            <div className="absolute text-transparent bg-transparent  w-full h-full rounded-[10px] top-0 duration-300 transition-[color, background-color] hover:text-gray-300 hover:bg-black opacity-30">
              <UploadIcon className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
            </div>
          </>
        ) : (
          <>
            <div className="absolute w-full h-full top-0 bg-white rounded-[10px]" />
            <div className="absolute text-gray-400 w-full h-full rounded-[10px] top-0 duration-300 transition-[color] hover:text-sky-400">
              <UploadIcon className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
            </div>
          </>
        )}
      </button>
      <input
        type="file"
        accept="image/*"
        name="images"
        id="image"
        ref={fileInputRef}
        hidden
        onChange={(e) => {
          // TODO: Change most of this
          const fReader = new FileReader();
          if (
            !e.currentTarget.files ||
            !e.currentTarget.files[0] ||
            !uploadImageData
          ) {
            return;
          }
          const { uploadImage, changeUploadImage } = uploadImageData;
          changeUploadImage([...uploadImage, e.currentTarget.files[0]]);
          fReader.readAsDataURL(e.currentTarget.files[0]);
          fReader.onloadend = (n) => {
            if (
              n.target &&
              n.target.result &&
              typeof n.target.result === "string"
            ) {
              const newImage: string[] = [];
              if (props.image) {
                newImage.push.apply(newImage, props.image);
                if (newImage.length < 6) {
                  newImage.push(n.target.result);
                } else {
                  newImage[props.select] = n.target.result;
                }
                props.changeImage(newImage);
              }
            }
          };
        }}
      />
    </>
  );
};

interface ImageProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  image?: string;
}

const ImageCard: React.FC<ImageProp> = (props) => {
  const { image, ...buttonProps } = props;
  return (
    <button {...buttonProps}>
      {image ? (
        <Image
          src={image}
          alt="small_product"
          width={107}
          height={73}
          className="w-[107px] h-[73px] object-cover"
        />
      ) : (
        <div className="w-[107px] h-[73px] bg-white" />
      )}
    </button>
  );
};

interface Props {
  image: string[];
}

const ProductImageSelector: React.FC<Props> = ({ image }) => {
  const [select, changeSelect] = useState<number>(0);
  const [currentImage, changeImage] = useState<string[]>(image);
  return (
    <div className="w-[386px] flex flex-col">
      <h2 className="font-semibold text-2xl">ภาพสินค้า</h2>
      <p className="text-gray-400 my-3 text-sm">อัพโหลดภาพสินค้า 1-6 ภาพ</p>
      <ImageUpload
        id="imageUpload"
        image={currentImage}
        changeImage={changeImage}
        select={select}
      />
      <div className="flex flex-wrap justify-evenly mt-7">
        {[...Array(3).keys()].map((i) => (
          <ImageCard
            image={currentImage[i]}
            key={i}
            onClick={(e) => {
              e.preventDefault();
              changeSelect(i);
            }}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-evenly mt-3">
        {[...Array(3).keys()].map((i) => (
          <ImageCard
            image={currentImage[i + 3]}
            key={i + 3}
            onClick={(e) => {
              e.preventDefault();
              changeSelect(i + 3);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageSelector;
