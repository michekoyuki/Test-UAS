"use client";

import { IconPlus, IconSearch } from "@tabler/icons-react";
import TableRole from "@/components/ui/tablerole";
import { rolesData } from "../../../../mock/roles-data";
import { useState } from "react";

export default function RolesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter roles based on search term
  const filteredRoles = rolesData.filter(role => 
    role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    role.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Hak Akses</h1>
        <p className="text-gray-600">Kelola hak akses dan permission untuk setiap role</p>
      </div>

      {/* Search and Add Button */}
      <div className="flex justify-between items-center mb-6">
        <div className="relative flex-1 max-w-md">
          <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Cari role..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
          <IconPlus size={20} />
          <span>Tambah Role</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h3 className="text-sm font-medium text-gray-600 mb-1">Total Roles</h3>
          <p className="text-2xl font-bold text-gray-900">{rolesData.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h3 className="text-sm font-medium text-gray-600 mb-1">Active Roles</h3>
          <p className="text-2xl font-bold text-green-600">
            {rolesData.filter(role => role.status === "Active").length}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h3 className="text-sm font-medium text-gray-600 mb-1">Total Users</h3>
          <p className="text-2xl font-bold text-blue-600">
            {rolesData.reduce((sum, role) => sum + role.userCount, 0)}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h3 className="text-sm font-medium text-gray-600 mb-1">Most Used</h3>
          <p className="text-lg font-bold text-gray-900">
            {rolesData.reduce((prev, current) => 
              prev.userCount > current.userCount ? prev : current
            ).name}
          </p>
        </div>
      </div>

      {/* Roles Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {filteredRoles.length > 0 ? (
          <TableRole roles={filteredRoles} />
        ) : (
          <div className="p-8 text-center text-gray-500">
            Tidak ada role yang ditemukan
          </div>
        )}
      </div>
    </div>
  );
}