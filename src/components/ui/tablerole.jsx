import { IconEdit, IconTrash, IconUserCheck } from "@tabler/icons-react";

export default function TableRole({ roles }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left p-4 font-semibold text-gray-700">Role Name</th>
            <th className="text-left p-4 font-semibold text-gray-700">Description</th>
            <th className="text-left p-4 font-semibold text-gray-700">Permissions</th>
            <th className="text-center p-4 font-semibold text-gray-700">Users</th>
            <th className="text-center p-4 font-semibold text-gray-700">Status</th>
            <th className="text-center p-4 font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role, index) => (
            <tr key={role.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <IconUserCheck size={20} className="text-gray-500" />
                  <span className="font-medium text-gray-900">{role.name}</span>
                </div>
              </td>
              <td className="p-4 text-gray-600 text-sm">{role.description}</td>
              <td className="p-4">
                <div className="flex flex-wrap gap-1">
                  {role.permissions.slice(0, 3).map((permission, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-700"
                    >
                      {permission}
                    </span>
                  ))}
                  {role.permissions.length > 3 && (
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600">
                      +{role.permissions.length - 3} more
                    </span>
                  )}
                </div>
              </td>
              <td className="p-4 text-center">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm font-medium text-gray-700">
                  {role.userCount}
                </span>
              </td>
              <td className="p-4 text-center">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    role.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {role.status}
                </span>
              </td>
              <td className="p-4">
                <div className="flex items-center justify-center gap-2">
                  <button
                    className="p-1.5 rounded-md hover:bg-gray-100 transition-colors"
                    title="Edit role"
                  >
                    <IconEdit size={18} className="text-gray-600" />
                  </button>
                  <button
                    className="p-1.5 rounded-md hover:bg-red-50 transition-colors"
                    title="Delete role"
                  >
                    <IconTrash size={18} className="text-red-600" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}