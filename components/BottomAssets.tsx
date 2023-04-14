import Image from "next/image";
import React from "react";

function BottomAssets() {
  return (
    <section className="mt-20 sm:mt-52 space-y-12 sm:space-y-32  mx-auto">
      <div className=" mx-auto sm:flex justify-between">
        <div className="w-[100%]  relative sm:w-2/3">
          <img
            src={
              "https://cdn.travel-in-portugal.com/sites/default/files/styles/x_large/public/beaches/praia-santa-eulalia-algarve.jpg"
            }
            // fill
            alt="IMAGE"
            className="rounded-md"
          />
        </div>
        <div className="sm:w-2/3 sm:pl-10 text-left  flex justify-center flex-col">
          <div className="my-3 sm:my-0">
            <h3 className="text-2xl sm:text-4xl  text-black mt-2 mb-4 sm:my-6 font-semibold">
              🏖️ Santa Eulalia Beach
            </h3>
            <p className="leading-7">
              Praia de Santa Eulalia in Albufeira, Portugal is a stunning beach
              with crystal clear waters and golden sand. Surrounded by lush
              greenery, including pine trees, it creates a peaceful and serene
              atmosphere. The beach is perfect for swimming and snorkeling, with
              calm waters and soft sand. With beachside restaurants, bars, and
              amenities, it&apos;s a convenient and enjoyable destination for
              visitors.
            </p>
            <button className="mt-8 border px-3 rounded-md bg-sky text-white py-1 w-full sm:w-fit">
              View Beaches
            </button>
          </div>
        </div>
      </div>
      <div className=" mx-auto sm:flex justify-between hidden">
        <div className="sm:w-2/3 sm:pr-10 text-left flex flex-col justify-center">
          <h3 className="text-xl sm:text-4xl text-black my-6 font-semibold sm:my-0`">
            ⛵️ Benagil Caves
          </h3>
          <p className="sm:pr-4 leading-7">
            They are one of the top attractions in Portugal, offering an
            unforgettable experience for adventurers and those seeking a
            tranquil escape. Located along the picturesque Algarve coast, the
            Benagil Caves are a natural wonder that must be seen to be believed.
            With their unique beauty and captivating ambiance, they are sure to
            leave a lasting impression on all who visit.
          </p>
          <button className="mt-8 border px-3 rounded-md bg-sky text-white py-1 sm:w-fit">
            View Beaches
          </button>
        </div>
        <div className="w-[100%]  relative sm:w-2/3">
          <img
            src={
              "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/42/4d/cd/benagil-cave-visit-we.jpg?w=1200&h=900&s=1"
            }
            // fill
            alt="IMAGE"
            className="rounded-md h-[390px] w-full"
          />
        </div>
      </div>
      <div className=" mx-auto sm:flex justify-between ">
        <div className="w-[100%]  relative sm:w-2/3">
          <img
            src={
              "https://cdn.visitportugal.com/sites/default/files/styles/encontre_detalhe_poi_destaque/public/mediateca/shutterstock_279519770_PraiaCamiloLagos_AG_PX_Pawel%20Kazmierczak_660x371.jpg?itok=d13l5V-j"
            }
            // fill
            alt="IMAGE"
            className="rounded-md"
          />
        </div>
        <div className="sm:w-2/3 sm:pl-10 text-left flex flex-col justify-center">
          <h3 className="text-2xl sm:text-4xl text-black font-semibold mt-4 mb-4 sm:my-6 ">
            🏖️ Camilo Beach
          </h3>
          <p className="leading-7">
            A breathtakingly beautiful beach located in Lagos, Portugal. This
            small but charming beach is known for its turquoise waters, golden
            sand, and stunning rock formations. With its picturesque cliffs and
            clear waters, this beach is a paradise for nature lovers and
            photographers alike. Whether you&apos;re looking for a peaceful
            getaway or an active adventure.
          </p>
          <button className="mt-8 border px-3 rounded-md bg-sky text-white py-1 sm:w-fit">
            View Beaches
          </button>
        </div>
      </div>

      {/* Last one on mobile */}
      <div className=" mx-auto justify-between sm:hidden">
        <div className="w-[100%]  relative sm:w-2/3">
          <img
            src={
              "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/42/4d/cd/benagil-cave-visit-we.jpg?w=1200&h=900&s=1"
            }
            // fill
            alt="IMAGE"
            className="rounded-md"
          />
        </div>
        <div className="sm:w-2/3 sm:pr-10 text-left sm:space-y-10 flex flex-col justify-center">
          <h3 className="text-2xl sm:text-4xl font-semibold text-black my-3 sm:my-0`">
            ⛵️ Benagil Caves
          </h3>
          <p className="mb-6 leading-7">
            The Benagil Caves in Portugal captivate visitors with their stunning
            rock formations, crystal-clear waters, and secluded beaches. They
            are one of the top attractions in Portugal, offering an
            unforgettable experience for adventurers and those seeking a
            tranquil escape. Located along the picturesque Algarve coast, the
            Benagil Caves are a natural wonder that must be seen to be believed.
            With their unique beauty and captivating ambiance, they are sure to
            leave a lasting impression on all who visit.
          </p>
          <button className="mt-4 border px-3 rounded-md bg-sky text-white py-1 sm:w-fit">
            View Beaches
          </button>
        </div>
      </div>
    </section>
  );
}

export default BottomAssets;
