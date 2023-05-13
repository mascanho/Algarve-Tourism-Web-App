"use client";
import Image from "next/image";

export function LeadGrid({ filteredData }: any) {
  console.log(filteredData[0].fields.images);

  return (
    <div className="grid sm:grid-cols-3 grid-rows-2 h-[300px] gap-4">
      <div
        className="row-span-2 w-[auto] h-[auto] relative overflow-hidden rounded-lg
        "
      >
        <Image
          src={`https://${filteredData[0].fields.images[0].fields.file.url}`}
          fill
          alt="image"
          className=" rounded-lg"
        />
      </div>
      <div>7</div>
      <div className="col-start-2 row-start-2 w-full h-full rounded-lg overflow-hidden relative">
        <Image
          src={`https://${filteredData[0].fields.images[1].fields.file.url}`}
          fill
          alt="image"
        />
      </div>
      <div className="col-start-3 row-start-1">9</div>
      <div className="col-start-3">10</div>
    </div>
  );
}
