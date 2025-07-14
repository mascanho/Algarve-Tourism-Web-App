"use client";

import {
  Users,
  AlertTriangle,
  TrendingUp,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

// Sample data for cities affected by tourism's dark side
const TourismImpactedCities = [
  {
    id: 1,
    name: "Venice, Italy",
    imageUrl: "/placeholder.svg?height=300&width=400",
    population: "50,000 residents",
    touristRatio: "20M visitors annually",
    mainIssues: [
      "Overtourism causing resident displacement",
      "Rising sea levels accelerated by cruise ships",
      "Historic architecture deterioration",
      "Local culture commercialization",
    ],
    impactLevel: "Critical",
    description:
      "Once a thriving maritime republic, Venice now struggles under the weight of mass tourism, with locals fleeing and authentic culture disappearing.",
    keyStats: {
      residentDecrease: "-70% since 1950",
      housingCosts: "+300% in tourist areas",
      environmentalDamage: "High",
    },
  },
  {
    id: 2,
    name: "Barcelona, Spain",
    imageUrl: "/placeholder.svg?height=300&width=400",
    population: "1.6M residents",
    touristRatio: "32M visitors annually",
    mainIssues: [
      "Housing crisis from short-term rentals",
      "Neighborhood gentrification",
      "Overcrowded public spaces",
      "Loss of local businesses",
    ],
    impactLevel: "Severe",
    description:
      "Barcelona's charm attracts millions, but residents face displacement as their neighborhoods transform into tourist playgrounds.",
    keyStats: {
      residentDecrease: "-15% in city center",
      housingCosts: "+68% since 2014",
      environmentalDamage: "Medium",
    },
  },
  {
    id: 3,
    name: "Santorini, Greece",
    imageUrl: "/placeholder.svg?height=300&width=400",
    population: "15,000 residents",
    touristRatio: "2M visitors annually",
    mainIssues: [
      "Water scarcity from overconsumption",
      "Waste management crisis",
      "Infrastructure strain",
      "Traditional architecture threatened",
    ],
    impactLevel: "Critical",
    description:
      "This volcanic island paradise faces environmental collapse as tourism demand far exceeds its natural capacity.",
    keyStats: {
      residentDecrease: "-20% year-round population",
      housingCosts: "+400% for locals",
      environmentalDamage: "Critical",
    },
  },
  {
    id: 4,
    name: "Dubrovnik, Croatia",
    imageUrl: "/placeholder.svg?height=300&width=400",
    population: "42,000 residents",
    touristRatio: "1.3M visitors annually",
    mainIssues: [
      "UNESCO heritage site overcrowding",
      "Cruise ship pollution",
      "Local services overwhelmed",
      "Authentic culture erosion",
    ],
    impactLevel: "Severe",
    description:
      "The 'Pearl of the Adriatic' struggles to preserve its medieval charm while managing overwhelming tourist crowds.",
    keyStats: {
      residentDecrease: "-25% in old town",
      housingCosts: "+250% in historic areas",
      environmentalDamage: "High",
    },
  },
  {
    id: 5,
    name: "Amsterdam, Netherlands",
    imageUrl: "/placeholder.svg?height=300&width=400",
    population: "870,000 residents",
    touristRatio: "22M visitors annually",
    mainIssues: [
      "Red light district exploitation",
      "Drug tourism problems",
      "Noise pollution and disruption",
      "Historic canal system strain",
    ],
    impactLevel: "Severe",
    description:
      "Amsterdam's liberal reputation attracts problematic tourism, creating safety and livability issues for residents.",
    keyStats: {
      residentDecrease: "-12% in center",
      housingCosts: "+180% since 2010",
      environmentalDamage: "Medium",
    },
  },
  {
    id: 6,
    name: "Machu Picchu, Peru",
    imageUrl: "/placeholder.svg?height=300&width=400",
    population: "Local indigenous communities",
    touristRatio: "1.5M visitors annually",
    mainIssues: [
      "Ancient site structural damage",
      "Trail erosion and degradation",
      "Cultural appropriation",
      "Economic inequality",
    ],
    impactLevel: "Critical",
    description:
      "This sacred Incan site faces irreversible damage from mass tourism while local communities see little benefit.",
    keyStats: {
      residentDecrease: "Traditional communities displaced",
      housingCosts: "Local economy disrupted",
      environmentalDamage: "Critical",
    },
  },
];

const getImpactColor = (level: string) => {
  switch (level) {
    case "Critical":
      return "text-red-700 bg-red-100 border-red-300";
    case "Severe":
      return "text-orange-700 bg-orange-100 border-orange-300";
    default:
      return "text-yellow-700 bg-yellow-100 border-yellow-300";
  }
};

export default function DarkTourismDirectory() {
  const [selectedCity, setSelectedCity] = useState<number | null>(null);

  const handleCityClick = (cityId: number) => {
    setSelectedCity(cityId);
    // In a real app, this would navigate to a detailed city page
    console.log(`Navigating to city ${cityId} details...`);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-4xl font-bold mb-2">The Dark Side of Tourism</h1>
          <p className="text-slate-300 text-lg">
            Exploring how mass tourism is destroying the world's most beloved
            destinations
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8 bg-slate-800 text-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-3">The Crisis</h2>
          <p className="text-slate-300 leading-relaxed">
            While tourism brings economic benefits, it's also causing
            irreversible damage to cities, cultures, and communities worldwide.
            Click on any city below to explore the specific challenges they face
            and the urgent need for sustainable tourism practices.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TourismImpactedCities.map((city) => (
            <div
              key={city.id}
              onClick={() => handleCityClick(city.id)}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={city.imageUrl || "/placeholder.svg"}
                  alt={`${city.name} tourism impact`}
                  className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${getImpactColor(city.impactLevel)}`}
                  >
                    {city.impactLevel}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xl font-bold text-slate-800">
                    {city.name}
                  </h2>
                  <ExternalLink className="w-5 h-5 text-slate-400" />
                </div>

                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {city.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm">
                    <Users className="w-4 h-4 text-slate-500 mr-2 flex-shrink-0" />
                    <span className="text-slate-600">{city.population}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <TrendingUp className="w-4 h-4 text-slate-500 mr-2 flex-shrink-0" />
                    <span className="text-slate-600">{city.touristRatio}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold text-slate-800 mb-2 flex items-center">
                    <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                    Major Issues:
                  </h3>
                  <ul className="space-y-1">
                    {city.mainIssues.slice(0, 3).map((issue, index) => (
                      <li
                        key={index}
                        className="text-sm text-slate-600 flex items-start"
                      >
                        <ChevronRight className="w-3 h-3 text-slate-400 mr-1 mt-0.5 flex-shrink-0" />
                        {issue}
                      </li>
                    ))}
                    {city.mainIssues.length > 3 && (
                      <li className="text-sm text-slate-500 italic">
                        +{city.mainIssues.length - 3} more issues...
                      </li>
                    )}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Click to explore solutions</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-slate-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-slate-800 mb-3">
            Take Action
          </h3>
          <p className="text-slate-600 mb-4">
            These cities need sustainable tourism practices now. Learn how you
            can travel responsibly and support local communities.
          </p>
          <button className="bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition-colors">
            Learn About Sustainable Tourism
          </button>
        </div>
      </main>
    </div>
  );
}
