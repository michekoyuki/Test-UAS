import { Pencil, Trash2, Shield, Users } from 'lucide-react';

// Individual role row component
function RoleRow({ role, index }) {
  // Define colors for different roles
  const getRoleColor = (roleName) => {
    const colors = {
      'Administrator': 'bg-red-500',
      'Editor': 'bg-blue-500',
      'Viewer': 'bg-green-500',
      'Support': 'bg-yellow-500',
      'Manager': 'bg-purple-500'
    };
    return colors[roleName] || 'bg-gray-500';
  };

  return (
    <tr className="border-b hover:bg-gray-50 transition-colors">
      <td className="p-4 text-sm text-gray-900 font-medium">{index + 1}</td>
      <td className="p-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-medium ${getRoleColor(role.name)}`}>
            <Shield size={16} />
          </div>
          <div>
            <div className="font-semibold text-gray-900">{role.name}</div>
            <div className="text-sm text-gray-500">{role.description}</div>
          </div>
        </div>
      </td>
      <td className="p-4">
        <div className="flex items-center gap-2">
          <Users size={16} className="text-gray-400" />
          <span className="text-sm font-medium text-gray-900">{role.userCount}</span>
          <span className="text-xs text-gray-500">users</span>
        </div>
      </td>
      <td className="p-4">
        <div className="flex items-center gap-1">
          <button 
            className="p-1.5 hover:bg-gray-100 rounded-md transition-colors group"
            title="Edit role"
          >
            <Pencil size={16} className="text-gray-400 group-hover:text-blue-600" />
          </button>
          <button 
            className="p-1.5 hover:bg-gray-100 rounded-md transition-colors group"
            title="Delete role"
          >
            <Trash2 size={16} className="text-gray-400 group-hover:text-red-600" />
          </button>
        </div>
      </td>
    </tr>
  );
}

// Main table component
export default function TableRole({ roles }) {
  return (
    <div className="overflow-hidden">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              #
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Users
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {roles.map((role, index) => (
            <RoleRow key={role.id} role={role} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}