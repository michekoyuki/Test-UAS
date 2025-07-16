'use client';

import Link from 'next/link';
import { Briefcase, MapPin, User } from 'tabler-icons-react';

const jobList = [
  {
    title: 'Executive Secretary',
    company: 'PT. Hikmah Jaya Sentosa',
    type: 'Full Time',
    location: 'Jakarta',
  },
  {
    title: 'IELTS Instructor',
    company: 'PT. Palma',
    type: 'Part Time',
    location: 'Surabaya',
  },
  {
    title: 'Front Office',
    company: 'Grand Hyatt',
    type: 'Internship',
    location: 'Bali',
  },
  {
    title: 'Technician',
    company: 'PT. Sany Perkasa',
    type: 'Contract',
    location: 'Pontianak',
  },
];

const feed = [
  'Pt. Pertamina Saham',
  'Wilmar International',
  'PT Thiess Contractors Indonesia',
  'John Holland Group',
];

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">
      {/* Left: Profile and Feed */}
      <div className="lg:col-span-1 space-y-6">
        {/* Profile Card */}
        <div className="bg-gray-200 rounded-md overflow-hidden">
          <div className="bg-blue-500 text-white p-4 flex items-center gap-2">
            <User size={24} />
            <span className="font-semibold">Brando Windah</span>
          </div>
          <div className="p-4 text-sm text-gray-800 space-y-2">
            <div>
              <strong>Career</strong>
              <ul className="list-disc ml-5">
                <li>PT. Lebah Ganteh</li>
                <li>PT. Shakir</li>
              </ul>
            </div>
            <div>
              <strong>Education</strong>
              <ul className="list-disc ml-5">
                <li>Uniba University</li>
              </ul>
            </div>
            <div className="pt-2 text-blue-600 underline text-sm">
              <Link href="/admin/users">Edit Profile</Link>
            </div>
          </div>
        </div>

        {/* Feed Card */}
        <div className="bg-gray-200 rounded-md overflow-hidden">
          <div className="border-b p-4 font-semibold">Feed</div>
          <div className="p-4 space-y-3 text-sm text-gray-800">
            {feed.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="bg-white rounded-full p-1">
                  <User size={16} />
                </div>
                {item}
              </div>
            ))}
            <div className="pt-2 text-blue-600 underline text-sm cursor-pointer">
              view all →
            </div>
          </div>
        </div>
      </div>

      {/* Middle: Job Cards */}
      <div className="lg:col-span-2 space-y-4">
        {jobList.map((job, index) => (
          <div key={index} className="bg-gray-200 rounded-md p-4 space-y-2">
            <div className="font-semibold text-md">{job.title}</div>
            <div className="text-gray-700">{job.company}</div>
            <hr />
            <div className="flex items-center text-sm text-gray-600 gap-2">
              <Briefcase size={16} /> {job.type}
            </div>
            <div className="flex items-center text-sm text-gray-600 gap-2">
              <MapPin size={16} /> {job.location}
            </div>
          </div>
        ))}
      </div>

      {/* Right: Placeholder or Ads */}
      <div className="hidden lg:block lg:col-span-1">
        {/* Optional: Add widgets/ads here later */}
      </div>
    </div>
  );
}
