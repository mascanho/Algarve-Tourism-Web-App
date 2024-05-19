import { useEffect, useState } from "react";
import { cityArr } from "../../../../Data/Cities";

function Demo() {
  const [selectedCities, setSelectedCities] = useState([]);

  const handleDataInputs = (city) => {
    // Check if the city is already present in the selectedCities array
    const cityIndex = selectedCities.indexOf(city);

    // Toggle the presence of the city in selectedCities array
    let updatedCities = [];
    if (cityIndex !== -1) {
      // If city is already present, remove it
      updatedCities = selectedCities.filter((cityName) => cityName !== city);
    } else {
      // If city is not present, add it
      updatedCities = [...selectedCities, city];
    }

    // Update selectedCities state
    setSelectedCities(updatedCities);

    // Update localStorage by appending to existing data
    const existingData = localStorage.getItem("Builder");
    let existingDataObj = {};
    if (existingData) {
      existingDataObj = JSON.parse(existingData);
    }

    const updatedData = { ...existingDataObj, cities: updatedCities };

    // Save updated data to localStorage
    localStorage.setItem("Builder", JSON.stringify(updatedData));
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <section>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 my-36 sm:my-auto">
          {cityArr.map((obj) => {
            return (
              <div key={obj?.name}>
                <label className="card">
                  <input
                    className="card__input"
                    type="checkbox"
                    id={obj?.name}
                    onChange={(e) => handleDataInputs(obj?.name.toLowerCase())}
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
