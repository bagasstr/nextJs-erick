import React from "react";
import { FaBath, FaBed, FaLocationDot } from "react-icons/fa6";
import { GiResize } from "react-icons/gi";
import { BsFillBuildingFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

export const getDataProduct = async () => {
  try {
    const res = await fetch("http://127.0.0.1:8080/api/getdata", {
      method: "GET",
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("gagal fetching data");
    }
    const data = res.json();
    return data;
  } catch (error) {
    console.error("gagal fetching data! ", error);
    return { props: { data: [] } };
  }
};

const Product = async () => {
  const datas = await getDataProduct();

  // console.log(data.listing);
  return (
    <>
      <div className="w-full">
        <div className="containers px-2 py-16">
          {/* Listingan Terbaru */}
          <div className="ListinganTerbaru">
            <h1 className="mobile:text-xl desktop:text-2xl mobile:font-semibold font-semibold text-black/80">
              Listingan Terbaru
              {/* {produk.title} */}
            </h1>
            <div className="mobile:grid-cols-1 desktop:justify-items-center grid desktop:grid-cols-3 mobile:items-center">
              {datas.map((item) => (
                <div
                  key={item.id}
                  className="shadow-lg rounded-md w-fit my-7 pb-4"
                >
                  <div className="relative">
                    <Image
                      src={item.thumnail}
                      width={1000}
                      height={1000}
                      alt="thumnail"
                      className="rounded-md shadow-lg desktop:h-[200px] desktop:w-full"
                    />
                    <h1 className="absolute text-white bg-primary px-3 py-1 rounded-md font-semibold text-base top-0">
                      {item.market}
                    </h1>
                  </div>
                  <div className="p-4 rounded-md text-text">
                    <h1 className="font-semibold desktop:font-medium text-text/60 mb-2">
                      {item.type}
                    </h1>
                    <h1 className="text-2xl desktop:text-lg font-semibold desktop:font-bold">
                      {item.title}
                    </h1>
                    <div className="flex items-center gap-x-2 my-2 text-text/80">
                      <FaLocationDot className="text-xs" />
                      <h2 className="text-sm font-medium">{item.area}</h2>
                    </div>
                    <div className="mb-4">
                      <h1 className="text-lg desktop:text-base font-medium text-text/60">
                        Harga mulai dari
                      </h1>
                      <h3 className="text-xl desktop:text-xl desktop:font-semibold font-semibold">
                        {item.harga}
                      </h3>
                    </div>
                    <hr className="my-2 bg-text/20" />
                    <div className="flex gap-x-4 justify-center">
                      <div className="flex items-center gap-x-2">
                        <FaBath className="text-base" />
                        <h1 className="text-lg font-medium">{item.km}</h1>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <FaBed className="text-base" />
                        <h1 className="text-lg font-medium">{item.kt}</h1>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <GiResize className="text-base" />
                        <h1 className="text-lg font-medium">{item.lb}</h1>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <BsFillBuildingFill className="text-base" />
                        <h1 className="text-lg font-medium">{item?.lbb}</h1>
                      </div>
                    </div>
                    <hr className="my-2 bg-text/20" />
                    <div className="mt-10 flex mobile:justify-around desktop:justify-center desktop:gap-x-5">
                      <Link
                        href={``}
                        className="border-2 border-text text-text mobile:px-4 mobile:py-3 desktop:px-2 desktop:py-1 desktop:text-sm uppercase rounded-md font-semibold shadow-md flex items-center"
                      >
                        Detail Unit
                      </Link>
                      <a
                        href={`https://wa.me/+62xxxxxxxxx?text=Saya ingin beli property ini ${item.title}`}
                        className="bg-text text-white px-4 py-3 desktop:py-[.80rem] desktop:px-[1rem] uppercase rounded-md desktop:text-sm font-semibold flex items-center shadow-md"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
