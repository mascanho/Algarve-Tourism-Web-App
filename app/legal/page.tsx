import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Legal",
    template: "%s | Algarve Wonders",
  },
  description: "The place to find the best places in the Algarve",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/icon.png",
    href: "/images/icon.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },

  // verification: {
  //   google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
  //   yandex: "14d2e73487fa6c71",
  // },
};

async function page() {
  const sportsToDo = [
    {
      id: 1,
      name: "Surf Expert - School 🏄",
      image:
        "https://images.ctfassets.net/z8r91y113x4j/2Iosoq1xchir3mnPryMchN/c040f1c3a26f4394e55e362b990e26c3/unnamed.jpg",
      desc: "Since 2002, introducing the culture of surf, stand up paddle and their unique lifestyle, bringing people from all over the world together for unforgettable shared experiences in these amazing surf world. ",
      path: "/sports/surf-expert-school",
    },
    {
      id: 2,
      name: "Kitesurf Algarve 🪁",
      image:
        "https://images.ctfassets.net/z8r91y113x4j/ji8ii1EbGPmkUKbRP30tA/d7fd418f544d2c6dabe1450771b15ff7/g24.png",
      desc: "To be able to take advantage of all the sensations of this sport, you have to know how to use and control the equipment with security.",
      path: "/sports/kitesurf-algarve",
    },
  ];

  const beachesToVisit = [
    {
      id: 1,
      name: "Camilo Beach",
      image:
        "https://a.cdn-hotels.com/gdcs/production119/d895/b91c3722-92d0-4f4e-93de-00d83c6c1fc4.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
      desc: "Camilo Beach (Praia do Camilo to locals) is one of the finest places to enjoy the splendours of the Algarve coast.",
      path: "/beaches/camilo-beach",
    },
    {
      id: 2,
      name: "Marinha Beach",
      image:
        "https://www.iberian-escapes.com/images/praia-da-marinha-hiking.jpg",
      desc: "Praia da Marinha (translation: navy beach) is an iconic beach near Lagoa. It is known as one of the most beautiful beaches of the world.",
      path: "/beaches/marinha-beach",
    },
    {
      id: 3,
      name: "Santa Eulalia Beach",
      image:
        "https://www.granderealsantaeulalia.realhotelsgroup.com/wp-content/uploads/sites/228/2021/11/Quartos-Grande-Real-Santa-Eulalia-Resort-Hotel-Spa-Albufeira-001.jpg",
      desc: "Santa Eulalia Beach is one of the most beautiful beaches of the Algarve.",
      path: "/beaches/praia-de-santa-eulalia",
    },
  ];

  return (
    <section className=" sm:max-w-7xl sm:w-11/12 mx-auto sm:h-full  pt-10 text-black">
      <div className="relative flex justify-center  w-full mx-auto ">
        <div className="sm:border-r sm:w-full block  w-11/12 pt-10 mx-auto justify-center sm:ml-0">
          <h2
            className="sm:w-full mx-auto w-full sm:border-b pb-8 font-bold text-black text-3xl
            sm:text-4xl"
          >
            Legal
          </h2>
          <section className="sm:mt-10 mt-5 sm:pr-8 mb-20 space-y-3">
            <p>
              Please read these Terms and Conditions ("Terms") carefully before
              using our website ("the Website"). Your access to and use of the
              Website is conditioned on your acceptance of and compliance with
              these Terms.
            </p>
            <p>
              By accessing or using the Website, you agree to be bound by these
              Terms. If you disagree with any part of the Terms, then you may
              not access the Website.
            </p>
            <p>
              Data Usage and Privacy - We are committed to protecting your
              privacy and ensuring the security of your personal information. We
              may collect and use certain data to enhance your experience on the
              Website.
            </p>
            <p>
              This data may include, but is not limited to, your IP address,
              browser type, device information, and browsing behavior. We use
              this information solely for internal purposes, such as analyzing
              trends and improving the Website's functionality and content. Your
              data will not be sold, shared, or disclosed to third parties
              without your explicit consent.{" "}
            </p>
            <p>
              User Accounts and Passwords - User accounts and passwords are
              essential for accessing certain features of the Website. We take
              security seriously, and all user account passwords are encrypted
              to ensure their confidentiality.
            </p>
            <p>
              It is your responsibility to keep your account credentials secure
              and confidential. You are solely responsible for any activities
              that occur under your account. If you suspect any unauthorized use
              of your account, please notify us immediately.
            </p>
            <p>
              Content and Intellectual Property - All content provided on the
              Website, including but not limited to text, images, graphics, and
              software, is the intellectual property of the Website and is
              protected by applicable copyright and trademark laws. You may not
              reproduce, distribute, modify, or otherwise use the content
              without our prior written consent.
            </p>
            <p>
              Disclaimer of Warranties - The Website and its content are
              provided "as is" and "as available." We make no representations or
              warranties of any kind, express or implied, regarding the
              accuracy, reliability, or availability of the Website or its
              content. You use the Website at your own risk.
            </p>
            <p>
              Limitation of Liability - To the fullest extent permitted by
              applicable law, we shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, or any
              loss of profits or revenues, whether incurred directly or
              indirectly, or any loss of data, use, goodwill, or other
              intangible losses resulting from your access or use of, or
              inability to access or use, the Website.
            </p>

            <p>
              Changes to Terms - We reserve the right to modify or replace these
              Terms at any time. Changes will be effective immediately upon
              posting on the Website. It is your responsibility to review these
              Terms periodically. By continuing to access or use the Website
              after changes have been made, you agree to be bound by the revised
              Terms.
            </p>
            <p>
              Governing Law - These Terms are governed by and construed in
              accordance with the laws of your country, without regard to its
              conflict of law provisions.
            </p>
            <p>
              Contact Information - If you have any questions about these Terms,
              please {""}
              <Link className="link-primary underline" href={"/contact"}>
                contact us
              </Link>
              . By accessing or using the Website, you acknowledge that you have
              read, understood, and agree to be bound by these Terms and any
              other guidelines or policies referenced herein.{" "}
            </p>
          </section>
        </div>
        <div className="w-[480px] sm:pl-6  hidden sm:block">
          <div className="mt-10">{/* <BlogCarousel /> */}</div>
          <section className="mt-10">
            <div>
              <h4 className="text-lg">Sports to Do</h4>
              {sportsToDo.map((item) => (
                <div className="block mt-4 mb-4" key={item.id}>
                  <div className="flex">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-2">
                      <h5 className="text-black text-sm font-bold">
                        {item?.name}
                      </h5>
                      <div className="flex">
                        <span className="text-xs line-clamp-2 pr-2">
                          {item?.desc}
                        </span>
                        <Link href={item.path}>
                          <button className="border px-3 rounded-md">
                            view
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="mt-10">
            <h2 className="text-lg">Beaches to Visit</h2>
            <div className="mt-5">
              {beachesToVisit.map((item) => (
                <div key={item?.id} className="flex">
                  <Link href={item?.path}>
                    <div className="flex mb-5 space-y-1 cursor-pointer">
                      <div className="rounded-md overflow-hidden">
                        <img
                          src={item?.image}
                          alt=""
                          className="h-16 w-36  rounded-md"
                        />
                      </div>
                      <div className="ml-2 w-full">
                        <p className="text-sm font-semibold text-black">
                          {item.name}
                        </p>
                        <span className="text-xs line-clamp-2 w-full flex-1">
                          {item.desc}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default page;
