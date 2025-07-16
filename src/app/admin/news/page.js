"use client";

import { useEffect, useState } from "react";
import {
  IconPlus,
  IconSearch,
  IconFilter,
  IconCalendar,
  IconEye,
  IconEdit,
  IconTrash,
} from "@tabler/icons-react";

const businessArticles = [
  {
    id: 1,
    title: "5 Business Trends to Watch in 2025",
    body: "From AI disruption to hybrid workplaces, explore what's shaping the next wave of global business strategy.",
  },
  {
    id: 2,
    title: "We're Hiring: Frontend Developer",
    body: "Join our engineering team to build world-class interfaces using React, Tailwind CSS, and Next.js.",
  },
  {
    id: 3,
    title: "How to Retain Talent in a Competitive Market",
    body: "Retention is key in today's hiring landscape. Learn what top companies are doing differently.",
  },
  {
    id: 4,
    title: "We're Hiring: Product Manager",
    body: "Looking for someone passionate about building scalable digital products with cross-functional teams.",
  },
  {
    id: 5,
    title: "The ROI of Digital Transformation",
    body: "Why businesses investing in cloud and automation see better returns and agility in 2025.",
  },
];

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewsList, setViewsList] = useState([]);

  useEffect(() => {
    // Generate stable random views on client
    const generatedViews = businessArticles.map(() =>
      Math.floor(Math.random() * 800 + 200)
    );
    setViewsList(generatedViews);
  }, []);

  const filteredPosts = businessArticles.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">News & Opportunities</h1>
        <p className="text-gray-600">
          Stay updated on business trends and open positions at our company
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search business articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Categories</option>
              <option value="business">Business</option>
              <option value="hiring">Hiring</option>
            </select>

            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <IconFilter size={20} />
              <span className="hidden sm:inline">Filters</span>
            </button>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <IconPlus size={20} />
            <span>Post New</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h3 className="text-sm font-medium text-gray-600 mb-1">Total Articles</h3>
          <p className="text-2xl font-bold text-gray-900">{businessArticles.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h3 className="text-sm font-medium text-gray-600 mb-1">Published</h3>
          <p className="text-2xl font-bold text-green-600">{businessArticles.length - 1}</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h3 className="text-sm font-medium text-gray-600 mb-1">Drafts</h3>
          <p className="text-2xl font-bold text-yellow-600">1</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h3 className="text-sm font-medium text-gray-600 mb-1">Views Today</h3>
          <p className="text-2xl font-bold text-blue-600">1.2k</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts.map((post, index) => (
          <article key={post.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative">
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur text-xs font-medium rounded-full text-gray-700">
                  {index % 2 === 0 ? "Business" : "Hiring"}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">{post.body}</p>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <IconCalendar size={14} />
                  <span>Jul {13 + index}, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <IconEye size={14} />
                  <span>{viewsList[index] ?? "..." } views</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  index % 4 === 0 ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"
                }`}>
                  {index % 4 === 0 ? "Draft" : "Published"}
                </span>
                <div className="flex items-center gap-1">
                  <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded transition-colors">
                    <IconEdit size={16} />
                  </button>
                  <button className="p-1.5 text-gray-500 hover:bg-red-50 hover:text-red-600 rounded transition-colors">
                    <IconTrash size={16} />
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
