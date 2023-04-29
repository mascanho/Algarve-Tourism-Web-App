import React, { useState } from "react";

function ResultsModal({ setOpenModal, openModal, searchResults }) {
  const [open, setOpen] = useState("");

  console.log(searchResults);

  return (
    <section
      className={` z-20 w-[80%] mx-auto mt-10 rounded-md backdrop-blur-md  h-60 bg-black/50- overflow-auto flex justify-center p-10 `}
    >
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam cum
            corrupti est velit facere ea debitis laudantium voluptatibus soluta
            atque necessitatibus ex labore neque voluptatem modi eos nostrum,
            beatae fugit temporibus. Dignissimos reiciendis a harum magni
            ducimus numquam nemo aliquid facere repellat necessitatibus,
            explicabo quis, dicta consequuntur consectetur quibusdam temporibus.
          </p>
        ))}
        <button onClick={() => setOpenModal(false)}>Close</button>
      </div>
    </section>
  );
}

export default ResultsModal;
