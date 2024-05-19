import React from "react";

export const AiTripCard = ({ tripData }: any) => {
  console.log(tripData.categories);

  return (
    <>
      <h2 className="text-left w-11/12 max-w-4xl">
        Number of days: {tripData?.days}
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {tripData?.categories?.map((category: any) => {
          return (
            <a
              href="#"
              className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
            >
              <img
                alt=""
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-44 w-full rounded-md object-cover"
              />

              <div className="mt-2">
                <dl>
                  <div>
                    <dd className="text-sm text-gray-500">{category}</dd>
                  </div>

                  <div>
                    <dt className="sr-only">Address</dt>

                    <dd className="font-medium">
                      123 Wallaby Avenue, Park Road
                    </dd>
                  </div>
                </dl>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default AiTripCard;
