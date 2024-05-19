import BuilderFooter from "./components/BuilderFooter";
import BuilderHeader from "./components/header";
import { headers } from "next/headers";

const BuilderLayout = ({ children }: any) => {
  const headersList = headers();
  const referer = headersList.get("referer");

  return (
    <div className="relative min-h-screen">
      <BuilderHeader />
      {children}
    </div>
  );
};

export default BuilderLayout;
