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
            <h3 className="text-4xl text-black my-3 ">Safely Saved Lists</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, non ratione illo rem qui cumque magni, at, voluptate
              nesciunt ipsam quasi tenetur cupiditate doloribus. Quas doloribus
              quidem saepe laborum placeat unde ipsum est, quia alias temporibus
              architecto, iste eligendi fugiat similique, qui quo! Nostrum
              debitis maxime amet quod iste vel?
            </p>
          </div>
        </div>
      </div>
      <div className=" mx-auto sm:flex justify-between hidden">
        <div className="sm:w-2/3 sm:pr-10 text-left sm:space-y-10 flex flex-col justify-center">
          <h3 className="text-4xl text-black my-3 sm:my-0`">
            Safely Saved Lists
          </h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            non ratione illo rem qui cumque magni, at, voluptate nesciunt ipsam
            quasi tenetur cupiditate doloribus. Quas doloribus quidem saepe
            laborum placeat unde ipsum est, quia alias temporibus architecto,
            iste eligendi fugiat similique, qui quo! Nostrum debitis maxime amet
            quod iste vel?
          </p>
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
        <div className="sm:w-2/3 sm:pl-10 text-left sm:space-y-10 flex flex-col justify-center">
          <h3 className="text-4xl text-black my-3 sm:my-0">
            Safely Saved Lists
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            non ratione illo rem qui cumque magni, at, voluptate nesciunt ipsam
            quasi tenetur cupiditate doloribus. Quas doloribus quidem saepe
            laborum placeat unde ipsum est, quia alias temporibus architecto,
            iste eligendi fugiat similique, qui quo! Nostrum debitis maxime amet
            quod iste vel?
          </p>
        </div>
      </div>

      {/* Last one on mobile */}
      <div className=" mx-auto justify-between sm:hidden">
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
        <div className="sm:w-2/3 sm:pr-10 text-left sm:space-y-10 flex flex-col justify-center">
          <h3 className="text-4xl text-black my-3 sm:my-0`">
            Safely Saved Lists
          </h3>
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            non ratione illo rem qui cumque magni, at, voluptate nesciunt ipsam
            quasi tenetur cupiditate doloribus. Quas doloribus quidem saepe
            laborum placeat unde ipsum est, quia alias temporibus architecto,
            iste eligendi fugiat similique, qui quo! Nostrum debitis maxime amet
            quod iste vel?
          </p>
        </div>
      </div>
    </section>
  );
}

export default BottomAssets;
