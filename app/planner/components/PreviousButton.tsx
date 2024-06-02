"use client";

const PreviousButton = () => {
  return (
    <button
      className="w-32 bg-key text-white py-1 rounded-lg px-4 disabled:opacity-20 disabled:cursor-not-allowed"
      onClick={() => window.history.back()}
    >
      Back
    </button>
  );
};

export default PreviousButton;
