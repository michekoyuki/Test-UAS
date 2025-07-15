export const rolesData = [
  {
    id: 1,
    name: "Admin",
    description: "Full system access with all permissions",
    permissions: ["create", "read", "update", "delete", "manage_users", "manage_roles"],
    status: "Active",
    userCount: 2
  },
  {
    id: 2,
    name: "Employee",
    description: "Standard employee access with limited permissions",
    permissions: ["read", "update_own", "create_limited"],
    status: "Active",
    userCount: 8
  },
  {
    id: 3,
    name: "Manager",
    description: "Department management access",
    permissions: ["create", "read", "update", "delete_own", "manage_team"],
    status: "Active",
    userCount: 4
  },
  {
    id: 4,
    name: "Viewer",
    description: "Read-only access to system",
    permissions: ["read"],
    status: "Active",
    userCount: 15
  },
  {
    id: 5,
    name: "Super Admin",
    description: "System administrator with highest privileges",
    permissions: ["create", "read", "update", "delete", "manage_users", "manage_roles", "system_config"],
    status: "Active",
    userCount: 1
  }
];