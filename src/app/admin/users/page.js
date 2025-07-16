'use client';

import { useState } from 'react';
import { IconUser } from '@tabler/icons-react';
import { Button } from '@/components/ui/button'; // Shadcn button

const mockPeople = [
  'Putri Ramadhan',
  'Budi Setiawan',
  'Gilang Semangka',
  'Rizky Indomie'
];

export default function ProfilePage() {
  const [fullName] = useState('Brando Windah');

  return (
    <main className="flex flex-col min-h-screen p-6 gap-6 bg-white">
      {/* Header */}
      <div className="flex items-center gap-4 bg-blue-500 text-black px-6 py-4 rounded-md">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <IconUser size={24} className="text-black" />
        </div>
        <span className="text-lg font-medium">{fullName}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Profile Form Section */}
        <section className="w-full lg:w-2/3 border p-6 space-y-6 rounded-xl shadow-sm">
          <div>
            <h2 className="font-semibold text-lg mb-2">Full Name</h2>
            <div className="bg-gray-200 py-2 px-3 rounded-md text-gray-800">
              {fullName}
            </div>
          </div>

          {[
            'Education',
            'Career History',
            'Certifications & Licences',
            'Skills',
            'Languages'
          ].map((section) => (
            <div key={section}>
              <h2 className="font-semibold text-lg mb-2">{section}</h2>
              <Button variant="secondary" className="w-full justify-start">
                + Add {section.replace('&', 'and')}
              </Button>
            </div>
          ))}
        </section>

        {/* Suggestions Section */}
        <aside className="w-full lg:w-1/3 border p-6 space-y-4 rounded-xl shadow-sm">
          <h2 className="font-semibold text-lg mb-4">People you may know</h2>
          <ul className="space-y-3">
            {mockPeople.map((name, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center">
                  <IconUser size={18} />
                </div>
                <span>{name}</span>
              </li>
            ))}
          </ul>
          <Button variant="link" className="px-0 text-sm text-blue-600">
            Show all
          </Button>
        </aside>
      </div>
    </main>
  );
}