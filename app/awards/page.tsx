// @ts-nocheck
"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  MapPin,
  Utensils,
  Hotel,
  Plane,
  Camera,
  Coffee,
  Palmtree,
  Waves,
} from "lucide-react";
import Link from "next/link";

const categories = [
  { name: "Beaches", icon: Waves },
  // { name: "Destinations", icon: MapPin },
  // { name: "Restaurants", icon: Utensils },
  // { name: "Hotels", icon: Hotel },
  // { name: "Airlines", icon: Plane },
  // { name: "Landmarks", icon: Camera },
];

const awards = {
  Beaches: [
    {
      name: "Falesia Beach, Albufeira",
      description:
        "Praia da Falésia in Albufeira, Algarve, is an award-winning beach celebrated for its breathtaking beauty and pristine environment. Renowned for its striking red and ochre cliffs, soft golden sands, and clear blue waters, it has been consistently ranked among the top beaches in the world, including a spot in *TripAdvisor's Travelers’ Choice Awards*. Stretching over 6 kilometers, it offers a peaceful retreat ideal for sunbathing, swimming, and scenic walks along the dramatic cliffside trails. Its natural charm and accolades make it a must-visit destination in Portugal.",
      rating: 4.9,
      image:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/8c/2f.jpg",
      url: "beaches/falesia-beach",
    },
    {
      name: "Marinha Beach,  Lagos ",
      description:
        "Praia da Marinha, located near Lagos in the Algarve region of Portugal, is renowned as one of the most beautiful beaches in the world. Famous for its golden cliffs, crystal-clear turquoise waters, and natural rock formations, including sea arches and caves, it offers a stunning and tranquil setting. This idyllic beach is perfect for swimming, snorkeling, and photography, with breathtaking views both from the cliffs above and the shore below. A symbol of Portugal's coastal charm, Praia da Marinha is a must-visit destination for nature lovers and beach enthusiasts.",
      rating: 4.8,
      image:
        "https://image.jimcdn.com/app/cms/image/transf/none/path/s0f5f735504bb85e5/image/ibde7b07921235768/version/1595494455/praia-marinha-beach-lagoa-algarve.jpg",
      url: "/beaches/marinha-beach",
    },
    {
      name: "Camilo Beach,  Lagos",
      description:
        "Praia do Camilo in Lagos, Algarve, is a picturesque beach known for its intimate charm and stunning natural beauty. Nestled between dramatic golden cliffs, it features soft sands, crystal-clear turquoise waters, and a unique set of wooden stairs leading down to the shore. Popular for snorkeling and exploring hidden coves, it offers a tranquil escape and breathtaking views of the coastline. Praia do Camilo is a true gem of Lagos, perfect for those seeking a serene and scenic beach experience.",
      rating: 4.7,
      image:
        "https://images.ctfassets.net/z8r91y113x4j/1lg1FOfi09Q9zRtRSAFros/182ffc530cebf879e8d959cf8fc82a78/praia-do-camilo.jpg",
      url: "/beaches/camilo-beach",
    },
    {
      name: "São Rafael Beach,  Albufeira",
      description:
        "São Rafael Beach in Albufeira is a stunning coastal paradise known for its golden sands, crystal-clear turquoise waters, and unique limestone rock formations. Surrounded by dramatic cliffs and natural caves, this beach offers a tranquil and picturesque setting perfect for swimming, snorkeling, and sunbathing. Its well-maintained facilities and family-friendly atmosphere make it a favorite destination for visitors seeking both relaxation and scenic beauty in the Algarve.",
      rating: 4.6,
      image:
        "https://images.ctfassets.net/z8r91y113x4j/9VMGry7lwCKoSZvRmSEkr/92d20fd27bc45a9dad79192bccc34618/Praia-de-Sao-Rafael-crowded.webp",
      url: "/beaches/sao-rafael-beach",
    },
    {
      name: "Cacela Velha, V.R.S.A",
      description:
        "Cacela Velha, a charming village in the eastern Algarve, is a hidden gem known for its unspoiled beauty and rich history. Perched on a hill overlooking the Ria Formosa Natural Park and its stunning lagoon, it offers breathtaking views and a serene atmosphere. The village is famous for its traditional whitewashed houses, a historic church, and a centuries-old fortress. Nearby, its pristine beach, accessible by a short boat ride, provides a peaceful escape, making Cacela Velha a must-visit destination for those seeking tranquility and authentic Algarvean charm.",
      rating: 4.5,
      image:
        "https://images.ctfassets.net/z8r91y113x4j/2fDV7LxNgn7VObvyLbxQoP/8440ed07a0591cb75f4dd3bb07fb948e/Cacela-Velha.jpg",
      url: "/beaches/cacela-velha",
    },
  ],

  Restaurants: [
    {
      name: "Le Petit Bistro, Paris",
      description: "Exquisite French cuisine in the heart of Paris",
      rating: 4.8,
      image: "https://placehold.co/200x100",
      url: "/restaurant/le-petit-bistro",
    },
    {
      name: "Osteria Francescana, Modena",
      description: "Innovative Italian dishes in a cozy setting",
      rating: 4.9,
      image: "https://placehold.co/200x100",
      url: "/restaurant/osteria-francescana",
    },
    {
      name: "Noma, Copenhagen",
      description: "Pioneering New Nordic cuisine with foraged ingredients",
      rating: 4.7,
      image: "https://placehold.co/200x100",
      url: "/restaurant/noma",
    },
    {
      name: "Gaggan, Bangkok",
      description: "Progressive Indian cuisine with a creative twist",
      rating: 4.6,
      image: "https://placehold.co/200x100",
      url: "/restaurant/gaggan",
    },
    {
      name: "Central, Lima",
      description: "Peruvian biodiversity showcased through gastronomy",
      rating: 4.5,
      image: "https://placehold.co/200x100",
      url: "/restaurant/central",
    },
  ],
  Hotels: [
    {
      name: "Burj Al Arab, Dubai",
      description: "Luxury redefined with stunning views of the Arabian Gulf",
      rating: 4.9,
      image: "https://placehold.co/200x100",
      url: "/hotel/burj-al-arab",
    },
    {
      name: "Aman Tokyo, Japan",
      description: "Urban sanctuary blending traditional and modern aesthetics",
      rating: 4.8,
      image: "https://placehold.co/200x100",
      url: "/hotel/aman-tokyo",
    },
    {
      name: "Belmond Hotel Caruso, Italy",
      description: "11th-century palace on the Amalfi Coast",
      rating: 4.7,
      image: "https://placehold.co/200x100",
      url: "/hotel/belmond-caruso",
    },
    {
      name: "Four Seasons Resort Bora Bora",
      description: "Overwater bungalows in a tropical paradise",
      rating: 4.6,
      image: "https://placehold.co/200x100",
      url: "/hotel/four-seasons-bora-bora",
    },
    {
      name: "Ritz Paris, France",
      description: "Iconic luxury in the City of Light",
      rating: 4.5,
      image: "https://placehold.co/200x100",
      url: "/hotel/ritz-paris",
    },
  ],
};

export default function Awards() {
  const router = useRouter();

  return (
    <div className="min-h-screen overflow-x-hidden max-w-7xl mx-auto">
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 sm:-mt-6">
        <Button onClick={() => router.back()} className="mb-4 hidden sm:inline">
          Go Back
        </Button>
        <div className="mb-12 space-y-6 text-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-center text-gray-900">
            Travel Gems: Top 5 Awards 2024
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto px-2 sm:p-0">
            Embark on a journey through the world's most exceptional travel
            experiences. From hidden gems to luxury escapes, explore our curated
            selection of award-winning destinations, accommodations, and
            adventures that defined excellence in 2024.
          </p>
        </div>
        <Tabs
          defaultValue="Beaches"
          className="w-full -mt-4 pb-10 sm:mb-0 sm:mt-0"
        >
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mb-20 sm:mb-8">
            {categories.map((category) => (
              <TabsTrigger
                key={category.name}
                value={category.name}
                className="flex-1 flex items-center justify-center"
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category.name} value={category.name}>
              <div className="grid gap-0 sm:gap-6 md:grid-cols-2 lg:grid-cols-2">
                {awards[category.name].map((item, index) => (
                  <Link key={item.name} href={item.url}>
                    <Card
                      key={item.name}
                      className="overflow-hidden mt-10 sm:mt-5 hover:border-red-500 hover:shadow-black"
                    >
                      <CardHeader className="p-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-64 object-cover"
                        />
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900">
                            {item.name}
                          </h3>
                          <Badge
                            variant={index === 0 ? "destructive" : "secondary"}
                          >
                            {index === 0 ? "Winner" : `#${index + 1}`}
                          </Badge>
                        </div>
                        <CardDescription className="mb-4">
                          {item.description}
                        </CardDescription>
                        <div className="flex items-center">
                          <Star className="h-5 w-5 text-yellow-400 mr-1" />
                          <span className="font-bold text-gray-900">
                            {item.rating}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  );
}
