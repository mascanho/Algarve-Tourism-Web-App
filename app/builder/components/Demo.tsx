import { useState } from "react";
import { Checkbox, UnstyledButton, Text } from "@mantine/core";
import classNameNamees from "./Demo.module.css";
import { NumberInput } from "@mantine/core";

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex justify-around h-full max-w-2xl space-x-10 w-full  ">
        <NumberInput
          label="Number Input"
          description="Number Input"
          placeholder="Enter value"
          onChange={(value) => console.log(value)}
          className="w-full"
        />
        <NumberInput
          label="Number Input"
          description="Number Input"
          placeholder="Enter value"
          onChange={(value) => console.log(value)}
          className="w-full"
        />
      </div>
      <section className="mt-20">
        <div className="grid grid-cols-3 gap-6 ">
          <label className="card">
            <input className="card__input" type="checkbox" />
            <div className="card__body">
              <div className="card__body-cover">
                <img
                  className="card__body-cover-image"
                  src="https://i.ibb.co/zXmHzBk/category-a.png"
                />
                <span className="card__body-cover-checkbox">
                  <svg
                    className="card__body-cover-checkbox--svg"
                    viewBox="0 0 12 10"
                  >
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
              </div>
              <header className="card__body-header">
                <h2 className="card__body-header-title">Category A</h2>
                <p className="card__body-header-subtitle">Motorcycles</p>
              </header>
            </div>
          </label>
          <label className="card">
            <input className="card__input" type="checkbox" />
            <div className="card__body">
              <div className="card__body-cover">
                <img
                  className="card__body-cover-image"
                  src="https://i.ibb.co/cXjw2Gz/category-b.png"
                />
                <span className="card__body-cover-checkbox">
                  <svg
                    className="card__body-cover-checkbox--svg"
                    viewBox="0 0 12 10"
                  >
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
              </div>
              <header className="card__body-header">
                <h2 className="card__body-header-title">Category B</h2>
                <p className="card__body-header-subtitle">Cars and ATVs</p>
              </header>
            </div>
          </label>
          <label className="card">
            <input className="card__input" type="checkbox" />
            <div className="card__body">
              <div className="card__body-cover">
                <img
                  className="card__body-cover-image"
                  src="https://i.ibb.co/nDbfH9B/category-c.png"
                />
                <span className="card__body-cover-checkbox">
                  <svg
                    className="card__body-cover-checkbox--svg"
                    viewBox="0 0 12 10"
                  >
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
              </div>
              <header className="card__body-header">
                <h2 className="card__body-header-title">Category C</h2>
                <p className="card__body-header-subtitle">
                  Large goods vehicle
                </p>
              </header>
            </div>
          </label>
          <label className="card">
            <input className="card__input" type="checkbox" />
            <div className="card__body">
              <div className="card__body-cover">
                <img
                  className="card__body-cover-image"
                  src="https://i.ibb.co/7gSQMmm/category-d.png"
                />
                <span className="card__body-cover-checkbox">
                  <svg
                    className="card__body-cover-checkbox--svg"
                    viewBox="0 0 12 10"
                  >
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
              </div>
              <header className="card__body-header">
                <h2 className="card__body-header-title">Category D</h2>
              </header>
            </div>
          </label>
          <label className="card">
            <input className="card__input" type="checkbox" />
            <div className="card__body">
              <div className="card__body-cover">
                <img
                  className="card__body-cover-image"
                  src="https://i.ibb.co/0F3SdsX/category-t.png"
                />
                <span className="card__body-cover-checkbox">
                  <svg
                    className="card__body-cover-checkbox--svg"
                    viewBox="0 0 12 10"
                  >
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
              </div>
              <header className="card__body-header">
                <h2 className="card__body-header-title">Category T</h2>
                <p className="card__body-header-subtitle">Tractors and SMV</p>
              </header>
            </div>
          </label>
          <label className="card">
            <input
              className="card__input"
              type="checkbox"
              disabled="disabled"
            />
            <div className="card__body">
              <div className="card__body-cover">
                <img
                  className="card__body-cover-image"
                  src="https://i.ibb.co/WDwmPy5/other.png"
                />
                <span className="card__body-cover-checkbox">
                  <svg
                    className="card__body-cover-checkbox--svg"
                    viewBox="0 0 12 10"
                  >
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
              </div>
              <header className="card__body-header">
                <h2 className="card__body-header-title">Other</h2>
              </header>
            </div>
          </label>
        </div>
      </section>
    </div>
  );
}

export default Demo;
