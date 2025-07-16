"use client";

import { IconPlus, IconSearch, IconFilter, IconMapPin, IconBriefcase, IconClock, IconBuilding } from "@tabler/icons-react";
import { useState } from "react";

// Mock data for jobs
const jobsData = [
  {
    id: 1,
    title: "Executive Secretary",
    company: "PT. Hikmah Jaya Sentosa",
    location: "Jakarta",
    type: "Full Time",
    salary: "IDR 5-7 Million",
    posted: "2 days ago",
    applicants: 23,
    status: "Active",
    description: "Looking for an experienced executive secretary...",
    highlighted: true
  },
  {
    id: 2,
    title: "IELTS Instructor",
    company: "PT. Mencari Jomok Sejati",
    location: "Surabaya",
    type: "Part Time",
    salary: "IDR 3-4 Million",
    posted: "5 days ago",
    applicants: 15,
    status: "Active",
    description: "Seeking qualified IELTS instructor...",
    highlighted: false
  },
  {
    id: 3,
    title: "Front Office",
    company: "Grand Hyatt",
    location: "Bali",
    type: "Internship",
    salary: "IDR 2 Million",
    posted: "1 week ago",
    applicants: 45,
    status: "Active",
    description: "Front office internship opportunity...",
    highlighted: false
  },
  {
    id: 4,
    title: "Technician",
    company: "PT. Sany Perkasa",
    location: "Pontianak",
    type: "Contract",
    salary: "IDR 4-6 Million",
    posted: "3 days ago",
    applicants: 12,
    status: "Active",
    description: "Technical position available...",
    highlighted: true
  },
];

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  // Filter jobs
  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || job.type === selectedType;
    const matchesLocation = selectedLocation === "all" || job.location === selectedLocation;
    
    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Job Postings</h1>
        <p className="text-gray-600">Manage and track all job opportunities</p>
      </div>

      {/* Actions Bar */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search jobs by title or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-2">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Types</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>

            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Locations</option>
              <option value="Jakarta">Jakarta</option>
              <option value="Surabaya">Surabaya</option>
              <option value="Bali">Bali</option>
              <option value="Pontianak">Pontianak</option>
            </select>

            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <IconFilter size={20} />
              <span className="hidden sm:inline">More Filters</span>
            </button>
          </div>

          {/* Add Button */}
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <IconPlus size={20} />
            <span>Post New Job</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <IconBriefcase className="text-gray-400" size={24} />
          </div>
          <h3 className="text-sm font-medium text-gray-600 mb-1">Active Jobs</h3>
          <p className="text-2xl font-bold text-gray-900">{jobsData.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h3 className="text-sm font-medium text-gray-600 mb-1">Total Applicants</h3>
          <p className="text-2xl font-bold text-blue-600">
            {jobsData.reduce((sum, job) => sum + job.applicants, 0)}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h3 className="text-sm font-medium text-gray-600 mb-1">New This Week</h3>
          <p className="text-2xl font-bold text-green-600">3</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h3 className="text-sm font-medium text-gray-600 mb-1">Closing Soon</h3>
          <p className="text-2xl font-bold text-orange-600">2</p>
        </div>
      </div>

      {/* Jobs List */}
      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <div 
            key={job.id} 
            className={`bg-white rounded-lg border ${
              job.highlighted ? 'border-blue-300 shadow-md' : 'border-gray-200'
            } p-6 hover:shadow-lg transition-all`}
          >
            {job.highlighted && (
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full mb-3">
                Featured
              </span>
            )}
            
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{job.title}</h3>
                <p className="text-gray-600 font-medium mb-3">{job.company}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <IconMapPin size={16} />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <IconBriefcase size={16} />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <IconClock size={16} />
                    <span>{job.posted}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-3">{job.description}</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-semibold text-gray-900">{job.salary}</span>
                    <span className="text-sm text-gray-500 ml-2">/ month</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">{job.applicants}</span> applicants
                  </div>
                </div>
              </div>
              
              <div className="ml-6 flex flex-col gap-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  View Details
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredJobs.length === 0 && (
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
          <IconBriefcase size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500">No jobs found matching your criteria</p>
        </div>
      )}
    </div>
  );
}