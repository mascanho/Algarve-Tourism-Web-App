import { cityArr } from "@/Data/Cities";
import { uploadLiveEvents } from "@/app/actions/uploadLiveEvents";
import React from "react";

function LiveUploadForm() {
  return (
    <form
      action={async (formData: FormData) => {
        uploadLiveEvents(formData);
      }}
      className="flex flex-col"
    >
      <label className="mb-1 text-sm">Name</label>
      <input
        className="rounded-md border bg-transparent p-1 pl-2 text-sm placeholder:text-xs"
        type="text"
        name="title"
        placeholder="The Rolling Stones"
        required
      />
      <label className="mb-1 mt-2 text-sm">Website</label>
      <input
        className="rounded-md border bg-transparent p-1 pb-2 sm:pb-1 pl-2 text-sm placeholder:text-xs"
        type="text"
        name="website"
        placeholder="www.therollingstones.com"
      />
      <div className="mt-3 w-full flex-nowrap sm:items-center sm:space-x-2 sm:flex">
        <label className="text-sm ">Location</label>
        <input
          className="rounded-md border bg-transparent p-1 pb-1 pl-2 text-sm placeholder:pb-2 placeholder:text-xs block"
          type="text"
          name="location"
          placeholder="The Gold Lion"
          required
        />
        <div className="w-full sm:flex sm:items-center sm:space-x-2">
          <label className="text-sm ">City</label>
          <select
            name="city"
            className="w-full rounded-md border bg-transparent p-1 pl-2 text-sm placeholder:text-xs"
            required
          >
            <option className="w-full" selected>
              Select a city
            </option>
            {cityArr.map((city: any) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <label className="mb-1 mt-2 text-sm">Description</label>
      <input
        className="rounded-md border bg-transparent p-1  pl-2 text-sm placeholder:text-xs"
        type="text"
        name="description"
        placeholder="The best band in the galaxy"
        required
      />
      <label className="mb-1 mt-2 text-sm">Image</label>
      <input
        className="rounded-md border bg-transparent p-1 pb-2 sm:pb-1 pl-2 text-sm placeholder:text-xs"
        type="text"
        name="image"
        placeholder="https://example.com/yourimage.jpg"
        required
      />
      <div className="mt-4 flex justify-between space-x-3">
        <div className="space-x-1">
          <label className="mb-1 mt-2 text-sm">Date</label>
          <input
            className="rounded-md border bg-transparent p-1 pl-2 text-sm  placeholder:text-xs"
            type="date"
            name="date"
            required
          />
        </div>
        <div className="space-x-1">
          <label className="mb-1 mt-2 text-sm">Time</label>
          <input
            className="rounded-md border bg-transparent p-1 pl-2 text-sm placeholder:text-xs"
            type="time"
            name="time"
            required
          />
        </div>
      </div>
      <button
        className="mt-8 w-full rounded-md border bg-key px-2 py-2 text-white "
        type="submit"
      >
        Create
      </button>
    </form>
  );
}

export default LiveUploadForm;
