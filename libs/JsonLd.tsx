import Script from "next/script";

const JsonLd = ({ data }: any) => {
  return <Script type="application/ld+json">{JSON.stringify(data)}</Script>;
};

export default JsonLd;
