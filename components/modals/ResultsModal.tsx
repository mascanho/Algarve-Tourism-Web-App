import React, { useState } from "react";

function ResultsModal({ setOpenModal, openModal, searchResults }) {
  const [open, setOpen] = useState("");

  console.log(searchResults);

  return (
    <section
      className={` z-20 w-[80%] mx-auto mt-10 rounded-md backdrop-blur-md  h-60 bg-black/50- overflow-auto flex justify-center p-10 `}
    >
      <div>
        {searchResults.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
        <button onClick={() => setOpenModal(false)}>Close</button>
      </div>
    </section>
  );
}

export default ResultsModal;
