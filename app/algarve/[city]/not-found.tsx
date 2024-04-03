import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="max-w-7xl w-11/12 mx-auto h-screen flex flex-col items-center justify-center my-10">
      <h2 className="text-4xl font-bold text-gray-500">Not Found</h2>
      <p>Could not find requested resource</p>
      <div className="my-4">
        <Link className="btn " href="/">
          Return Home
        </Link>
      </div>
    </div>
  );
}
