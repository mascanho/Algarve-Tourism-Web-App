import BuilderFooter from "./components/BuilderFooter";
import BuilderHeader from "./components/header";

const BuilderLayout = ({ children }: any) => {
  return (
    <div className="relative min-h-screen">
      <BuilderHeader />
      {children}
      <BuilderFooter />
    </div>
  );
};

export default BuilderLayout;
