// @ts-nocheck
import { MapPin, Clock, Phone, Mail, Globe, ChevronRight } from "lucide-react";
import { Hospitals } from "@/Data/Hospitals";

export default function HospitalsDirectory() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-amber-700 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Hospitals Directory</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Hospitals.map((hall: any) => (
            <div
              key={hall.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <img
                  src={hall.imageUrl}
                  alt={`${hall.name} building`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-amber-100 px-4 py-2 border-l-4 border-amber-700">
                <h2 className="text-xl font-semibold text-amber-800">
                  {hall.name}
                </h2>
              </div>
              <div className="p-4 space-y-4">
                <p className="flex items-start">
                  <MapPin className="w-5 h-5 text-amber-700 mr-2 mt-1 flex-shrink-0" />
                  <span>{hall.address}</span>
                </p>
                <p className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-amber-700 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">
                    {hall.directions}
                  </span>
                </p>
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">
                    Features:
                  </h3>
                  <ul className="list-disc list-inside text-sm text-gray-600 pl-2">
                    {hall.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center">
                    <Clock className="w-4 h-4 text-amber-700 mr-2" />
                    <span>{hall.openingHours}</span>
                  </p>
                  <p className="flex items-center">
                    <Phone className="w-4 h-4 text-amber-700 mr-2" />
                    <span>{hall.contactNumber}</span>
                  </p>
                  <p className="flex items-center">
                    <Mail className="w-4 h-4 text-amber-700 mr-2" />
                    <a
                      href={`mailto:${hall.email}`}
                      className="text-amber-700 hover:underline"
                    >
                      {hall.email}
                    </a>
                  </p>
                  <p className="flex items-center">
                    <Globe className="w-4 h-4 text-amber-700 mr-2" />
                    <a
                      href={hall.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-700 hover:underline"
                    >
                      Visit Website
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
