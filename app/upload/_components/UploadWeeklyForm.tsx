"use client";
import { Accordion } from "@mantine/core";
import React from "react";

function UploadWeeklyForm() {
  return (
    <form className="flex flex-col w-11/12 mx-auto">
      <Accordion variant="contained">
        <Accordion.Item value="Monday">
          <Accordion.Control>Monday</Accordion.Control>
          <Accordion.Panel>
            <div className="day mb-4">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="monday_dish"
                  placeholder="Dish Name"
                  className="bg-gray-100 p-2 rounded mb-2"
                />
                <input
                  type="text"
                  name="monday_price"
                  placeholder="Price"
                  className="bg-gray-100 p-2 rounded"
                />
              </div>
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Tuesday">
          <Accordion.Control>Tuesday</Accordion.Control>
          <Accordion.Panel>
            <div className="day mb-4">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="tuesday_dish"
                  placeholder="Dish Name"
                  className="bg-gray-100 p-2 rounded mb-2"
                />
                <input
                  type="text"
                  name="tuesday_price"
                  placeholder="Price"
                  className="bg-gray-100 p-2 rounded"
                />
              </div>
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Wednesday">
          <Accordion.Control>Wednesday</Accordion.Control>
          <Accordion.Panel>
            <div className="day mb-4">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="wednesday_dish"
                  placeholder="Dish Name"
                  className="bg-gray-100 p-2 rounded mb-2"
                />
                <input
                  type="text"
                  name="wednesday_price"
                  placeholder="Price"
                  className="bg-gray-100 p-2 rounded"
                />
              </div>
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Thursday">
          <Accordion.Control>Thursday</Accordion.Control>
          <Accordion.Panel>
            <div className="day mb-4">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="thursday_dish"
                  placeholder="Dish Name"
                  className="bg-gray-100 p-2 rounded mb-2"
                />
                <input
                  type="text"
                  name="thursday_price"
                  placeholder="Price"
                  className="bg-gray-100 p-2 rounded"
                />
              </div>
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Friday">
          <Accordion.Control>Friday</Accordion.Control>
          <Accordion.Panel>
            <div className="day mb-4">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="friday_dish"
                  placeholder="Dish Name"
                  className="bg-gray-100 p-2 rounded mb-2"
                />
                <input
                  type="text"
                  name="friday_price"
                  placeholder="Price"
                  className="bg-gray-100 p-2 rounded"
                />
              </div>
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Saturday">
          <Accordion.Control>Saturday</Accordion.Control>
          <Accordion.Panel>
            <div className="day mb-4">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="saturday_dish"
                  placeholder="Dish Name"
                  className="bg-gray-100 p-2 rounded mb-2"
                />
                <input
                  type="text"
                  name="saturday_price"
                  placeholder="Price"
                  className="bg-gray-100 p-2 rounded"
                />
              </div>
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Sunday">
          <Accordion.Control>Sunday</Accordion.Control>
          <Accordion.Panel>
            <div className="day mb-4">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="sunday_dish"
                  placeholder="Dish Name"
                  className="bg-gray-100 p-2 rounded mb-2"
                />
                <input
                  type="text"
                  name="sunday_price"
                  placeholder="Price"
                  className="bg-gray-100 p-2 rounded"
                />
              </div>
            </div>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
}

export default UploadWeeklyForm;
