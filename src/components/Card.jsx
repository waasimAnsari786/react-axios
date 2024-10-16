import React from "react";

export default function Card({ data }) {
  const { cover, description, originalTitle, pages, releaseDate, title } = data;

  return (
    <>
      <div className="bg-gray-200 rounded-lg p-3 text-black space-y-1">
        <img src={cover} alt="cover image" className="w-full h-96 rounded-lg" />
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-xl font-semibold">{originalTitle}</p>
        <p>{pages}</p>
        <p>{releaseDate}</p>
        <p>{description}</p>
      </div>
    </>
  );
}
