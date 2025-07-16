import { IconEdit, IconTrash } from "@tabler/icons-react";

export default function TableRole({ roles }) {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Users</th>
          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {roles.map((role) => (
          <tr key={role.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{role.name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{role.description}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{role.userCount}</td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
              <button className="text-blue-600 hover:text-blue-800 transition-colors">
                <IconEdit size={18} />
              </button>
              <button className="text-red-600 hover:text-red-800 transition-colors">
                <IconTrash size={18} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
