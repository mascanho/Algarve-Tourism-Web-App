import Form from "./Form";
import Image from "next/image";

function page() {
  return (
    <div className="flex flex-col h-screen justify-center w-full -mt-16 sm:-mt-16">
      <section className="sm:w-[90%] md:w-[90%] lg:w-[50%] sm:h-[60%]  mx-auto sm:flex justify-center rounded-md overflow-hidden space-x-2 sm:border">
        <Form />
        <section className="relative w-[100%]">
          <Image
            src="/contact-image.webp"
            alt="contact image"
            // width={600}
            // height={500}
            fill
            className="relative"
          />
          {/* <div className="bg-gradient-to-r from-white h-full w-10 absolute top-0 -left-4" /> */}
        </section>
      </section>
    </div>
  );
}

export default page;
