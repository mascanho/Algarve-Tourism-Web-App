"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Users,
  Play,
  Share2,
  Link,
  Facebook,
  Twitter,
} from "lucide-react";

// Mock data structure for cities
const cityData = {
  "new-york": {
    name: "New York City",
    description:
      "The city that never sleeps, where dreams come alive amidst towering skyscrapers and vibrant neighborhoods.",
    population: "8.3M",
    founded: "1624",
    highlights: [
      "Times Square",
      "Central Park",
      "Brooklyn Bridge",
      "Statue of Liberty",
    ],
    media: [
      {
        id: 1,
        type: "image",
        url: "/placeholder.svg?height=400&width=600",
        title: "Manhattan Skyline",
        description: "Iconic view of Manhattan from Brooklyn Bridge",
      },
      {
        id: 2,
        type: "video",
        url: "/placeholder.svg?height=400&width=600",
        title: "Times Square Timelapse",
        description: "24 hours in the heart of NYC",
      },
      {
        id: 3,
        type: "image",
        url: "/placeholder.svg?height=400&width=600",
        title: "Central Park",
        description: "Green oasis in the urban jungle",
      },
      {
        id: 4,
        type: "image",
        url: "/placeholder.svg?height=400&width=600",
        title: "Brooklyn Bridge",
        description:
          "Historic suspension bridge connecting Manhattan and Brooklyn",
      },
      {
        id: 5,
        type: "video",
        url: "/placeholder.svg?height=400&width=600",
        title: "NYC Street Life",
        description: "The energy of New York streets",
      },
      {
        id: 6,
        type: "image",
        url: "/placeholder.svg?height=400&width=600",
        title: "Statue of Liberty",
        description: "Symbol of freedom and democracy",
      },
      {
        id: 7,
        type: "video",
        url: "/placeholder.svg?height=400&width=600",
        title: "Wall Street Rush Hour",
        description: "The bustling financial district during peak hours",
      },
      {
        id: 8,
        type: "image",
        url: "/placeholder.svg?height=400&width=600",
        title: "High Line Park",
        description: "Elevated park built on former railway tracks",
      },
      {
        id: 9,
        type: "video",
        url: "/placeholder.svg?height=400&width=600",
        title: "NYC Subway System",
        description: "Underground transportation network in motion",
      },
    ],
    news: [
      {
        id: 1,
        title: "NYC Announces Major Infrastructure Investment",
        excerpt:
          "The city plans to invest $2.5 billion in modernizing subway systems and improving public transportation.",
        date: "2024-01-15",
        category: "Infrastructure",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 2,
        title: "New Cultural District Opens in Brooklyn",
        excerpt:
          "A vibrant new arts and culture hub featuring galleries, theaters, and performance spaces.",
        date: "2024-01-12",
        category: "Culture",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 3,
        title: "Green Initiative Transforms Manhattan Parks",
        excerpt:
          "Sustainable landscaping and renewable energy installations enhance the city's green spaces.",
        date: "2024-01-10",
        category: "Environment",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  tokyo: {
    name: "Tokyo",
    description:
      "A mesmerizing blend of ancient traditions and cutting-edge technology, where cherry blossoms meet neon lights.",
    population: "13.9M",
    founded: "1457",
    highlights: [
      "Shibuya Crossing",
      "Tokyo Tower",
      "Senso-ji Temple",
      "Tsukiji Market",
    ],
    media: [
      {
        id: 1,
        type: "image",
        url: "/placeholder.svg?height=400&width=600",
        title: "Shibuya Crossing",
        description: "The world's busiest pedestrian crossing",
      },
      {
        id: 2,
        type: "video",
        url: "/placeholder.svg?height=400&width=600",
        title: "Tokyo Neon Nights",
        description: "The electric atmosphere of Tokyo after dark",
      },
      {
        id: 3,
        type: "image",
        url: "/placeholder.svg?height=400&width=600",
        title: "Cherry Blossoms",
        description: "Sakura season in Ueno Park",
      },
      {
        id: 4,
        type: "image",
        url: "/placeholder.svg?height=400&width=600",
        title: "Tokyo Tower",
        description: "Iconic red tower overlooking the city",
      },
    ],
    news: [
      {
        id: 1,
        title: "Tokyo Prepares for Smart City Initiative",
        excerpt:
          "Advanced IoT systems and AI integration to improve urban living and sustainability.",
        date: "2024-01-14",
        category: "Technology",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 2,
        title: "Traditional Festivals Return to Tokyo",
        excerpt:
          "After pandemic restrictions, traditional matsuri festivals are back in full swing.",
        date: "2024-01-11",
        category: "Culture",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
};

interface CityShowcaseProps {
  cityId?: string;
}

export default function CityShowcase({
  cityId = "new-york",
}: CityShowcaseProps) {
  const [currentMediaPage, setCurrentMediaPage] = useState(0);
  const [selectedMedia, setSelectedMedia] = useState<
    (typeof cityData)["new-york"]["media"][0] | null
  >(null);
  const [showSubmissionModal, setShowSubmissionModal] = useState(false);

  const openModal = (media: (typeof cityData)["new-york"]["media"][0]) => {
    setSelectedMedia(media);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  const shareMedia = async (
    media: (typeof cityData)["new-york"]["media"][0],
    platform?: string,
  ) => {
    const shareData = {
      title: media.title,
      text: media.description,
      url: window.location.href,
    };

    if (platform === "facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
        "_blank",
      );
    } else if (platform === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(media.title)}&url=${encodeURIComponent(window.location.href)}`,
        "_blank",
      );
    } else if (platform === "copy") {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy link:", err);
      }
    } else {
      // Native share API
      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch (err) {
          console.error("Error sharing:", err);
        }
      } else {
        // Fallback - copy to clipboard
        try {
          await navigator.clipboard.writeText(window.location.href);
          alert("Link copied to clipboard!");
        } catch (err) {
          console.error("Failed to copy link:", err);
        }
      }
    }
  };

  const city = cityData[cityId as keyof typeof cityData];
  const mediaPerPage = 12;

  if (!city) {
    return <div>City not found</div>;
  }

  const totalMediaPages = Math.ceil(city.media.length / mediaPerPage);
  const currentMedia = city.media.slice(
    currentMediaPage * mediaPerPage,
    (currentMediaPage + 1) * mediaPerPage,
  );

  const nextMediaPage = () => {
    setCurrentMediaPage((prev) => (prev + 1) % totalMediaPages);
  };

  const prevMediaPage = () => {
    setCurrentMediaPage(
      (prev) => (prev - 1 + totalMediaPages) % totalMediaPages,
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero/Introduction Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="h-6 w-6 text-emerald-400" />
              <Badge
                variant="secondary"
                className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
              >
                Featured City
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              {city.name}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              {city.description}
            </p>

            {/* City Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-emerald-400" />
                <span className="text-slate-300">
                  Population: {city.population}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-emerald-400" />
                <span className="text-slate-300">Founded: {city.founded}</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap justify-center gap-3">
              {city.highlights.map((highlight, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Explore {city.name}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover the beauty and essence of {city.name} through our curated
              collection of images and videos
            </p>
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentMedia.map((item) => (
              <Card
                key={item.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
              >
                <div
                  className="relative aspect-video overflow-hidden cursor-pointer"
                  onClick={() => openModal(item)}
                >
                  <Image
                    src={item.url || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                      <div className="bg-white/90 rounded-full p-3 group-hover:scale-110 transition-transform">
                        <Play className="h-6 w-6 text-slate-900 ml-1" />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <Badge
                      variant={item.type === "video" ? "default" : "secondary"}
                      className="capitalize"
                    >
                      {item.type}
                    </Badge>
                  </div>
                  {/* Share button overlay */}
                  <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/90 hover:bg-white text-slate-900 p-2 h-8 w-8"
                      onClick={(e) => {
                        e.stopPropagation();
                        shareMedia(item);
                      }}
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevMediaPage}
              disabled={currentMediaPage === 0}
              className="flex items-center gap-2 bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalMediaPages }, (_, i) => (
                <Button
                  key={i}
                  variant={i === currentMediaPage ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentMediaPage(i)}
                  className="w-8 h-8 p-0"
                >
                  {i + 1}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextMediaPage}
              disabled={currentMediaPage === totalMediaPages - 1}
              className="flex items-center gap-2 bg-transparent"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* News Articles Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Latest News from {city.name}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Stay updated with the latest developments, events, and stories
              from {city.name}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {city.news.map((article) => (
              <Card
                key={article.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-emerald-500 hover:bg-emerald-600">
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <CardTitle className="text-lg group-hover:text-emerald-600 transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {article.excerpt}
                  </CardDescription>
                  <Button
                    variant="link"
                    className="p-0 h-auto mt-3 text-emerald-600 hover:text-emerald-700"
                  >
                    Read more →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* User Submission CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Capture {city.name} Through Your Lens
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Every corner of {city.name} tells a story. Whether it's the
                  golden hour hitting the skyline, street life in motion, or
                  hidden gems only locals know about – your perspective matters.
                </p>
                <p className="text-slate-600 mb-8">
                  Join thousands of photographers and videographers who've
                  already shared their unique view of {city.name}. Your content
                  could be featured in our gallery and inspire travelers from
                  around the world.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-emerald-600">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium">
                    Quick & Easy Upload
                  </span>
                </div>
                <div className="flex items-center gap-2 text-emerald-600">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium">Get Featured</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-600">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium">
                    Join the Community
                  </span>
                </div>
              </div>

              <Button
                onClick={() => setShowSubmissionModal(true)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Share Your {city.name} Experience
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Button>

              <p className="text-sm text-slate-500 mt-4">
                Takes less than 2 minutes • Free to submit • Instant review
                process
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Submission Modal */}
      {showSubmissionModal && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setShowSubmissionModal(false)}
        >
          <div
            className="relative max-w-2xl max-h-[90vh] w-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader className="text-center pb-6 relative">
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute right-0 top-0 bg-transparent"
                  onClick={() => setShowSubmissionModal(false)}
                >
                  ✕
                </Button>
                <CardTitle className="text-2xl text-slate-900">
                  Submit Your Content
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Upload your best images and videos to be featured in our{" "}
                  {city.name} gallery
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Upload Area */}
                <div className="border-2 border-dashed border-emerald-300 rounded-lg p-8 text-center hover:border-emerald-400 transition-colors bg-emerald-50/50">
                  <div className="flex flex-col items-center gap-4">
                    <div className="bg-emerald-100 rounded-full p-4">
                      <svg
                        className="h-8 w-8 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg font-medium text-slate-900 mb-2">
                        Drop your files here
                      </p>
                      <p className="text-sm text-slate-600 mb-4">
                        or click to browse
                      </p>
                      <Button className="bg-emerald-600 hover:bg-emerald-700">
                        Choose Files
                      </Button>
                    </div>
                    <p className="text-xs text-slate-500">
                      Supports: JPG, PNG, MP4, MOV (Max 50MB)
                    </p>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Title *
                    </label>
                    <input
                      type="text"
                      placeholder="Give your content a catchy title"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Description *
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe what makes this content special..."
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Location (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Where was this taken? (e.g., Central Park, Manhattan)"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Terms and Submit */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1 h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-slate-300 rounded"
                    />
                    <label htmlFor="terms" className="text-sm text-slate-600">
                      I agree to the{" "}
                      <a
                        href="#"
                        className="text-emerald-600 hover:text-emerald-700 underline"
                      >
                        Terms of Service
                      </a>{" "}
                      and grant permission to feature my content in the{" "}
                      {city.name} gallery
                    </label>
                  </div>

                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg font-medium">
                    Submit Content
                  </Button>
                </div>

                {/* Guidelines */}
                <div className="bg-slate-50 rounded-lg p-4 mt-6">
                  <h4 className="font-medium text-slate-900 mb-2">
                    Submission Guidelines:
                  </h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Content must be original and taken by you</li>
                    <li>• Images should be high quality (minimum 1920x1080)</li>
                    <li>• Videos should be under 2 minutes long</li>
                    <li>• No inappropriate or offensive content</li>
                    <li>• All submissions are subject to review</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
      {/* Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Close and Share */}
            <div className="absolute -top-16 left-0 right-0 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 flex items-center gap-2"
                  onClick={() => shareMedia(selectedMedia)}
                >
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>

                {/* Share dropdown options */}
                <div className="flex items-center gap-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 p-2"
                    onClick={() => shareMedia(selectedMedia, "facebook")}
                    title="Share on Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 p-2"
                    onClick={() => shareMedia(selectedMedia, "twitter")}
                    title="Share on Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 p-2"
                    onClick={() => shareMedia(selectedMedia, "copy")}
                    title="Copy link"
                  >
                    <Link className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={closeModal}
              >
                ✕ Close
              </Button>
            </div>

            {selectedMedia.type === "video" ? (
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 rounded-full p-4">
                    <Play className="h-8 w-8 text-slate-900 ml-1" />
                  </div>
                </div>
                <Image
                  src={selectedMedia.url || "/placeholder.svg"}
                  alt={selectedMedia.title}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                <Image
                  src={selectedMedia.url || "/placeholder.svg"}
                  alt={selectedMedia.title}
                  fill
                  className="object-contain"
                />
              </div>
            )}

            <div className="bg-white p-6 rounded-b-lg">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {selectedMedia.title}
                  </h3>
                  <p className="text-slate-600 mb-3">
                    {selectedMedia.description}
                  </p>
                  <Badge
                    variant={
                      selectedMedia.type === "video" ? "default" : "secondary"
                    }
                    className="capitalize"
                  >
                    {selectedMedia.type}
                  </Badge>
                </div>

                {/* Share buttons in modal footer */}
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => shareMedia(selectedMedia)}
                    className="flex items-center gap-2"
                  >
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
