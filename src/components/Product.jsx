"use client";
import React, { useEffect, useState } from "react";
// import { data } from "../Data/ListingTerbaru/DataTerbaru.json";
import { FaBath, FaBed, FaLocationDot } from "react-icons/fa6";
import { GiResize } from "react-icons/gi";
import { BsFillBuildingFill } from "react-icons/bs";
// import { Link, useParams, useSearchParams } from "react-router-dom";

// import ProductDetail from "./ProductDetail";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";

const Product = () => {
  const [getDatas, setDatas] = useState([]);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/getdata");
        const data = await res.data;
        setDatas(data.reverse());
      } catch (error) {
        console.log(`data ga ada ${error}`);
      }
    };
    getData();
  }, []);
  const pesan = `https://wa.me/+6285156490481?text=Saya ingin beli property ini `;
  console.log(getDatas);
  return (
    <div>
      <div className="w-full">
        <div className="containers px-2 py-16">
          {/* Listingan Terbaru */}
          <div className="ListinganTerbaru">
            <h1 className="mobile:text-xl desktop:text-2xl mobile:font-semibold font-semibold text-black/80">
              Listingan Terbaru
            </h1>
            <div className="mobile:grid-cols-1 desktop:justify-items-center grid desktop:grid-cols-3 mobile:items-center">
              {getDatas.map((res, index) => (
                <div
                  key={index}
                  className="shadow-lg rounded-md w-fit my-7 pb-4"
                >
                  <div className="relative">
                    <Image
                      src={res.thumnail}
                      width={1000}
                      height={1000}
                      alt="thumnail"
                      className="rounded-md shadow-lg desktop:h-[200px] desktop:w-full"
                    />
                    <h1 className="absolute text-white bg-primary px-3 py-1 rounded-md font-semibold text-base top-0">
                      {res.market.toUpperCase()}
                    </h1>
                  </div>
                  <div className="p-4 rounded-md text-text">
                    <h1 className="font-semibold desktop:font-medium text-text/60 mb-2">
                      {res.type}
                    </h1>
                    <h1 className="text-2xl desktop:text-lg font-semibold desktop:font-bold">
                      {res.title}
                    </h1>
                    <div className="flex items-center gap-x-2 my-2 text-text/80">
                      <FaLocationDot className="text-xs" />
                      <h2 className="text-sm font-medium">{res.area}</h2>
                    </div>
                    <div className="mb-4">
                      <h1 className="text-lg desktop:text-base font-medium text-text/60">
                        Harga mulai dari
                      </h1>
                      <h3 className="text-xl desktop:text-xl desktop:font-semibold font-semibold">
                        {res.harga}
                      </h3>
                    </div>
                    <hr className="my-2 bg-text/20" />
                    <div className="flex gap-x-4 justify-center">
                      <div className="flex items-center gap-x-2">
                        <FaBath className="text-base" />
                        <h1 className="text-lg font-medium">{res.km}</h1>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <FaBed className="text-base" />
                        <h1 className="text-lg font-medium">{res.kt}</h1>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <GiResize className="text-base" />
                        <h1 className="text-lg font-medium">{res.lb}</h1>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <BsFillBuildingFill className="text-base" />
                        <h1 className="text-lg font-medium">{res?.lbb}</h1>
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
                        href={`https://wa.me/+62xxxxxxxxx?text=Saya ingin beli property ini ${res.title}`}
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
    </div>
  );
};

export default Product;
