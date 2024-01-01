import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="max-w-7xl w-11/12 mx-auto h-full flex flex-col items-center justify-center my-10">
      <Image
        src="/images/404.jpg"
        alt="404"
        width={600}
        height={600}
        className="-mt-8"
      />
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
