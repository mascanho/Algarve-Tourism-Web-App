import { useEffect, useState } from "react";
import { cityArr } from "../../../../Data/Cities";
import { useRouter } from "next/navigation";
import { BuilderActionCities } from "@/app/actions/BuilderAction";
import PreviousButton from "@/app/planner/components/PreviousButton";

function Demo() {
  const [selectedCities, setSelectedCities] = useState([]);
  const router = useRouter();

  const handleCityChange = (event) => {
    const { name, checked } = event.target;
    setSelectedCities((prev) =>
      checked ? [...prev, name] : prev.filter((city) => city !== name),
    );
  };

  return (
    <form
      action={async (formData) => {
        await BuilderActionCities(formData);
        router.push("/builder/summary");
      }}
      className="w-full flex flex-col justify-center items-center"
    >
      <section>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 my-24 sm:my-auto">
          {cityArr.map((obj) => (
            <div key={obj?.name}>
              <label className="card">
                <input
                  className="card__input"
                  type="checkbox"
                  id={obj?.name}
                  name={obj?.name}
                  onChange={handleCityChange}
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
                  <header className="card__body-header flex">
                    <h2 className="card__body-header-title my-auto">
                      {obj?.name}
                    </h2>
                  </header>
                </div>
              </label>
            </div>
          ))}
        </div>
      </section>

      <footer className="fixed bottom-0 left-0 right-0 flex w-ful justify-between p-4 bg-white">
        <div className="w-full flex justify-between max-w-4xl mx-auto sm:px-8">
          <PreviousButton />
          <button
            className="bg-key text-white px-2 w-28 py-1 rounded-md disabled:bg-gray-200 disabled:cursor-not-allowed"
            type="submit"
            disabled={selectedCities.length === 0}
          >
            Next
          </button>
        </div>
      </footer>
    </form>
  );
}

export default Demo;
