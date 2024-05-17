import { useEffect, useState } from "react";
import { NumberInput } from "@mantine/core";
import { catArr } from "@/Data/Categories";

function Demo() {
  const [days, setDays] = useState(0);
  const [attractions, setAttractions] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // check if localstorage contains previous data, if it does then remove it
  useEffect(() => {
    const data = localStorage.getItem("Builder");
    const dataObj = JSON.parse(data || "{}");
    if (dataObj) {
      localStorage.removeItem("Builder");
    }
  }, []);

  const handleDataInputs = (daysValue, attractionsValue, category) => {
    // Check if the category is already present in the selectedCategories array
    const categoryIndex = selectedCategories.indexOf(category);

    // Toggle the presence of the category in selectedCategories array
    let updatedCategories = [];
    if (categoryIndex !== -1) {
      // If category is already present, remove it
      updatedCategories = selectedCategories.filter((cat) => cat !== category);
    } else {
      // If category is not present, add it
      updatedCategories = [...selectedCategories, category];
    }

    // Update selectedCategories state
    setSelectedCategories(updatedCategories);

    // Update days and attractions values
    if (daysValue !== undefined) {
      setDays(daysValue);
    }
    if (attractionsValue !== undefined) {
      setAttractions(attractionsValue);
    }

    // Construct DATA object
    const DATA = {
      days: daysValue !== undefined ? daysValue : days,
      attractions:
        attractionsValue !== undefined ? attractionsValue : attractions,
      categories: updatedCategories,
    };

    // Remove any "null" or "undefined" values from DATA object
    Object.keys(DATA).forEach((key) => {
      if (DATA[key] === null || DATA[key] === undefined) {
        delete DATA[key];
      }
    });

    // Update localStorage
    localStorage.setItem("Builder", JSON.stringify(DATA));
  };

  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen my-32 sm:my-auto">
      <div className="flex justify-around  max-w-4xl px-8 space-x-10 w-full">
        <NumberInput
          placeholder="Number of days"
          onChange={(days) => handleDataInputs(days, undefined, undefined)}
          className="w-full"
          required
          min={1}
        />
        <NumberInput
          placeholder="Number of attractions per day"
          onChange={(attractions) =>
            handleDataInputs(undefined, attractions, undefined)
          }
          className="w-full"
          required
          min={1}
        />
      </div>
      <section className="mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {catArr.map((obj) => {
            return (
              <div key={obj?.name}>
                <label className="card">
                  <input
                    className="card__input"
                    type="checkbox"
                    id={obj?.name}
                    onChange={(e) =>
                      handleDataInputs(
                        undefined,
                        undefined,
                        obj?.name.toLowerCase(),
                      )
                    }
                  />
                  <div className="card__body">
                    <div className="card__body-cover">
                      <img
                        className="card__body-cover-image"
                        src={obj?.image}
                        alt={obj?.name}
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
                      <h2 className="card__body-header-title">{obj?.name}</h2>
                    </header>
                  </div>
                </label>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Demo;
