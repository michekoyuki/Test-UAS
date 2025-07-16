"use client";

import { IconPlus, IconSearch, IconFilter, IconShield, IconUsers } from "@tabler/icons-react";
import TableRole from "@/components/ui/tablerole";
import { rolesData } from "../../../../mock/roles-data";
import { useState } from "react";

export default function RolesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  
  // Filter roles based on search term
  const filteredRoles = rolesData.filter(role => 
    role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    role.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Roles & Permissions</h1>
        <p className="text-gray-600">Manage user roles and their access permissions</p>
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
                placeholder="Search roles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <IconFilter size={20} />
              <span className="hidden sm:inline">Filters</span>
            </button>
          </div>

          {/* Add Button */}
          <button 
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <IconPlus size={20} />
            <span>Add Role</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <IconShield className="text-gray-400" size={24} />
            <span className="text-xs text-green-600 font-medium">+2 new</span>
          </div>
          <h3 className="text-sm font-medium text-gray-600 mb-1">Total Roles</h3>
          <p className="text-2xl font-bold text-gray-900">{rolesData.length}</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <IconUsers className="text-gray-400" size={24} />
            <span className="text-xs text-blue-600 font-medium">Active</span>
          </div>
          <h3 className="text-sm font-medium text-gray-600 mb-1">Total Users</h3>
          <p className="text-2xl font-bold text-blue-600">
            {rolesData.reduce((sum, role) => sum + role.userCount, 0)}
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h3 className="text-sm font-medium text-gray-600 mb-1">Most Used Role</h3>
          <p className="text-lg font-bold text-gray-900">
            {rolesData.reduce((prev, current) => 
              prev.userCount > current.userCount ? prev : current
            ).name}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {rolesData.reduce((prev, current) => 
              prev.userCount > current.userCount ? prev : current
            ).userCount} users
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h3 className="text-sm font-medium text-gray-600 mb-1">Permission Types</h3>
          <p className="text-2xl font-bold text-purple-600">7</p>
          <p className="text-xs text-gray-500 mt-1">Unique permissions</p>
        </div>
      </div>

      {/* Roles Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {filteredRoles.length > 0 ? (
          <TableRole roles={filteredRoles} />
        ) : (
          <div className="p-8 text-center text-gray-500">
            <IconShield size={48} className="mx-auto text-gray-300 mb-4" />
            <p>No roles found matching your search</p>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <IconShield className="text-blue-600 mt-1" size={20} />
          <div>
            <h4 className="font-medium text-blue-900">Security Tip</h4>
            <p className="text-sm text-blue-700 mt-1">
              Regularly review and update role permissions to maintain system security. 
              Consider implementing the principle of least privilege.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}