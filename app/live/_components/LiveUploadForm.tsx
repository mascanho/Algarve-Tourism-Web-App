import { cityArr } from "@/Data/Cities";
import { uploadLiveEvents } from "@/app/actions/uploadLiveEvents";
import React from "react";

function LiveUploadForm() {
  return (
    <form
      action={async (formData: FormData) => {
        uploadLiveEvents(formData);
        console.log("Submitted");
      }}
      className="flex flex-col"
    >
      <label className="text-sm mb-1">Name</label>
      <input
        className="bg-transparent placeholder:text-xs text-sm p-1 pb-2 pl-2 border rounded-md"
        type="text"
        name="title"
        placeholder="The Rolling Stones"
        required
      />
      <label className="text-sm mb-1 mt-2">Website</label>
      <input
        className="bg-transparent placeholder:text-xs text-sm p-1 pb-2 pl-2 border rounded-md"
        type="text"
        name="website"
        placeholder="www.therollingstones.com"
      />
      <div className="flex flex-nowrap items-center space-x-2 mt-3">
        <label className="text-sm ">Location</label>
        <input
          className="bg-transparent placeholder:text-xs placeholder:pb-2 pl-2 pb-2 text-sm p-1 border rounded-md"
          type="text"
          name="location"
          placeholder="The Gold Lion"
          required
        />
        <label className="text-sm ">City</label>
        <select
          name="city"
          className="bg-transparent pl-2 placeholder:text-xs text-sm p-1 border rounded-md w-full"
          required
        >
          <option selected>Select a city</option>
          {cityArr.map((city: any) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
      <label className="text-sm mt-2 mb-1">Description</label>
      <input
        className="bg-transparent placeholder:text-xs text-sm p-1 border rounded-md pb-2 pl-2"
        type="text"
        name="description"
        placeholder="The best band in the galaxy"
        required
      />
      <label className="text-sm mt-2 mb-1">Image</label>
      <input
        className="bg-transparent placeholder:text-xs text-sm p-1 border rounded-md pl-2 pb-2"
        type="text"
        name="image"
        placeholder="https://example.com/yourimage.jpg"
        required
      />
      <div className="flex space-x-3 justify-between mt-4">
        <div className="space-x-1">
          <label className="text-sm mt-2 mb-1">Date</label>
          <input
            className="bg-transparent placeholder:text-xs text-sm p-1 border rounded-md  pl-2"
            type="date"
            name="date"
            required
          />
        </div>
        <div className="space-x-1">
          <label className="text-sm mt-2 mb-1">Time</label>
          <input
            className="bg-transparent placeholder:text-xs text-sm p-1 border rounded-md pl-2"
            type="time"
            name="time"
            required
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
