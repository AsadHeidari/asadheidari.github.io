"use client";

import { useEffect, useState } from "react";

// import data from "@/app/data/posts.json";
import chicken from "./../../public/images/chicken.gif";

type Data = {
  id: number;
  title: string;
  "image-url": string;
  description: string;
  text: string;
  reference: string;
};

function Posts() {
  const [posts] = useState<Data[]>([]);

  useEffect(() => {
    // setPosts(data);
  }, []);

  return (
    <div className="font-vazir border w-full rounded-2xl p-4 flex flex-col items-center backdrop-blur-sm mt-6">
      <h1 className=" font-bold border-b-2 border-yellow-400 p-1 text-lg w-full text-center">
        پست ها | Posts
      </h1>

      <div>
        {posts.length === 0 ? (
          <div className="my-4">
            <img
              alt="chicken"
              className="object-cover object-center h-full w-full"
              src={chicken}
            />
          </div>
        ) : (
          <section className="text-gray-400 body-font">
            <div className="container px-5 py-6 mx-auto">
              <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="p-4 md:w-1/3 sm:mb-0 mb-6 rounded-xl"
                  >
                    <div className="rounded-lg h-64 overflow-hidden">
                      <img
                        alt="poster"
                        width={1204}
                        height={504}
                        className="object-cover object-center h-full w-full"
                        src={post["image-url"]}
                      />
                    </div>
                    <h2 className="text-xl font-medium title-font text-white mt-5">
                      {post.title}
                    </h2>
                    <p className="text-base leading-relaxed mt-2">
                      {post.description}
                    </p>
                    <a
                      className="text-yellow-400 inline-flex items-center mt-3 cursor-pointer"
                      href="#"
                    >
                      خواندن بیشتر
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l14 0" />
                        <path d="M5 12l6 6" />
                        <path d="M5 12l6 -6" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default Posts;
