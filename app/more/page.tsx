import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Building2, Stethoscope, GraduationCap, Palmtree } from "lucide-react";

const directories = [
  {
    title: "Algarve Councils",
    description: "Find local government offices and services",
    icon: Building2,
    color: "bg-blue-500",
    link: "/city-halls",
  },
  {
    title: "Hospitals",
    description: "Locate healthcare facilities and emergency services",
    icon: Stethoscope,
    color: "bg-red-500",
    link: "/hospitals",
  },
  {
    title: "Universities",
    description: "Explore higher education institutions",
    icon: GraduationCap,
    color: "bg-yellow-500",
    link: "/universities",
  },
  {
    title: "Tourism Boards",
    description: "Discover tourist information and local attractions",
    icon: Palmtree,
    color: "bg-green-500",
    link: "/tourism",
  },
];

export default function DirectoryHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-100 p-8 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <div>
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Directory Hub
          </h1>
          <p className="text-lg text-gray-600/50 text-center mb-8 w-10/12 mx-auto">
            Welcome to your comprehensive guide to essential services in the
            Algarve region. From local government offices to healthcare
            facilities, universities, and tourist attractions, we've curated
            everything you need. Navigate through our directory to find detailed
            information about the institutions and services that make the
            Algarve a great place to live and visit.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {directories.map((dir) => (
            <Link
              key={dir.title}
              href={dir.link}
              className="transform transition-transform hover:scale-105"
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div
                    className={`${dir.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto`}
                  >
                    <dir.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-center">
                    {dir.title}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {dir.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
