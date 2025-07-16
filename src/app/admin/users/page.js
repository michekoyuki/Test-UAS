'use client';

import { useState } from 'react';
import { IconUser } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import { useUser } from '@/context/UserContext'; // ✅ Import global context

const mockPeople = [
  'Putri Ramadhan',
  'Budi Setiawan',
  'Gilang Semangka',
  'Rizky Indomie',
];

export default function ProfilePage() {
  const { user, setUser } = useUser(); // ✅ Access and update global user
  const sections = [
    { key: 'fullName', label: 'Full Name' },
    { key: 'education', label: 'Education' },
    { key: 'career', label: 'Career History' },
    { key: 'certifications', label: 'Certifications & Licences' },
    { key: 'skills', label: 'Skills' },
    { key: 'languages', label: 'Languages' },
  ];

  const [profileData, setProfileData] = useState({
    fullName: user.name || 'Brando Windah', // initialize from global user
    education: '',
    career: '',
    certifications: '',
    skills: '',
    languages: '',
  });

  const [editing, setEditing] = useState({
    fullName: false,
    education: false,
    career: false,
    certifications: false,
    skills: false,
    languages: false,
  });

  const [tempData, setTempData] = useState({ ...profileData });

  const handleEdit = (key) => {
    setEditing((prev) => ({ ...prev, [key]: true }));
    setTempData((prev) => ({ ...prev, [key]: profileData[key] || '' }));
  };

  const handleSave = (key) => {
    setProfileData((prev) => ({ ...prev, [key]: tempData[key] }));
    setEditing((prev) => ({ ...prev, [key]: false }));

    // ✅ Update global user name when fullName is saved
    if (key === 'fullName') {
      setUser((prev) => ({
        ...prev,
        name: tempData.fullName,
      }));
    }
  };

  const handleCancel = (key) => {
    setTempData((prev) => ({ ...prev, [key]: profileData[key] || '' }));
    setEditing((prev) => ({ ...prev, [key]: false }));
  };

  return (
    <main className="flex flex-col min-h-screen p-6 gap-6 bg-white">
      {/* Header */}
      <div className="flex items-center gap-4 bg-blue-500 text-black px-6 py-4 rounded-md">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <IconUser size={24} className="text-black" />
        </div>
        <span className="text-lg font-medium">{profileData.fullName}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Profile Form Section */}
        <section className="w-full lg:w-2/3 border p-6 space-y-6 rounded-xl shadow-sm">
          {sections.map(({ key, label }) => (
            <div key={key}>
              <h2 className="font-semibold text-lg mb-2">{label}</h2>

              {editing[key] ? (
                <div className="space-y-2">
                  {key === 'fullName' ? (
                    <input
                      type="text"
                      className="w-full p-2 border rounded text-sm"
                      value={tempData[key]}
                      onChange={(e) =>
                        setTempData((prev) => ({
                          ...prev,
                          [key]: e.target.value,
                        }))
                      }
                      placeholder={`Enter ${label.toLowerCase()}...`}
                    />
                  ) : (
                    <textarea
                      className="w-full p-2 border rounded text-sm"
                      rows={4}
                      value={tempData[key]}
                      onChange={(e) =>
                        setTempData((prev) => ({
                          ...prev,
                          [key]: e.target.value,
                        }))
                      }
                      placeholder={`Enter your ${label.toLowerCase()}...`}
                    />
                  )}
                  <div className="flex gap-2">
                    <Button onClick={() => handleSave(key)}>Save</Button>
                    <Button variant="ghost" onClick={() => handleCancel(key)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : profileData[key] ? (
                <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
                  <p className="text-gray-800 whitespace-pre-wrap">
                    {profileData[key]}
                  </p>
                  <Button variant="ghost" onClick={() => handleEdit(key)}>
                    Edit
                  </Button>
                </div>
              ) : (
                <Button
                  variant="secondary"
                  className="w-full justify-start"
                  onClick={() => handleEdit(key)}
                >
                  + Add {label}
                </Button>
              )}
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
