import Form from "./Form";

function page() {
  return (
    <div className="flex flex-col h-screen justify-center w-full">
      <section className="w-[90%] sm:w-1/4 mx-auto ">
        <h1 className="w-full mb-10 text-6xl font-bold text-sky text-center">
          Let's Get In Touch
        </h1>
        <Form />
      </section>
    </div>
  );
}

export default page;
