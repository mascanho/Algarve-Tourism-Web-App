import { cityArr } from "@/Data/Cities";
import React from "react";

function LiveUploadForm() {
  return (
    <form className="flex flex-col">
      <label className="text-sm mb-1">Name</label>
      <input
        className="bg-transparent placeholder:text-xs text-sm p-1 border rounded-md"
        type="text"
        name="title"
        placeholder="The Rolling Stones"
      />
      <div className="flex flex-nowrap items-center space-x-2 mt-3">
        <label className="text-sm ">Location</label>
        <input
          className="bg-transparent placeholder:text-xs placeholder:pb-2 text-sm p-1 border rounded-md"
          type="text"
          name="location"
          placeholder="The Gold Lion, Faro"
        />
        <label className="text-sm ">City</label>
        <select className="bg-transparent placeholder:text-xs text-sm p-1 border rounded-md w-full">
          <option value="">Select a city</option>
          {cityArr.map((city: any) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
      <label className="text-sm mt-2 mb-1">Description</label>
      <input
        className="bg-transparent placeholder:text-xs text-sm p-1 border rounded-md"
        type="text"
        name="description"
        placeholder="The best band in the galaxy"
      />
      <label className="text-sm mt-2 mb-1">Image</label>
      <input
        className="bg-transparent placeholder:text-xs text-sm p-1 border rounded-md"
        type="text"
        name="description"
        placeholder="https://example.com/yourimage.jpg"
      />
      <div className="flex space-x-3 justify-between mt-4">
        <div className="space-x-1">
          <label className="text-sm mt-2 mb-1">Date</label>
          <input
            className="bg-transparent placeholder:text-xs text-sm p-1 border rounded-md"
            type="date"
            name="date"
          />
        </div>
        <div className="space-x-1">
          <label className="text-sm mt-2 mb-1">Time</label>
          <input
            className="bg-transparent placeholder:text-xs text-sm p-1 border rounded-md"
            type="time"
            name="time"
          />
        </div>
      </div>
      <button
        className="w-full mt-8 rounded-md border bg-key text-white px-2 py-2 "
        type="submit"
      >
        Create
      </button>
    </form>
  );
}

export default LiveUploadForm;
