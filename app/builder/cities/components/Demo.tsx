import { useEffect, useState } from "react";
import { cityArr } from "../../../../Data/Cities";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import { BuilderActionCities } from "@/app/actions/BuilderAction";

function Demo() {
  const router = useRouter();

  return (
    <form
      action={async (formData: FormData) => {
        await BuilderActionCities(formData);
        router.push("/builder/summary");
      }}
      className="w-full flex flex-col justify-center items-center"
    >
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
                    name={obj?.name}
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

      <footer className="fixed bottom-0 left-0 right-0 flex w-ful justify-between p-4 bg-white">
        <div className="w-full flex justify-end max-w-4xl mx-auto px-8">
          <button
            className="bg-key text-white px-2 w-20 py-1 rounded-md"
            type="submit"
          >
            Next
          </button>
        </div>
      </footer>
    </form>
  );
}

export default Demo;
