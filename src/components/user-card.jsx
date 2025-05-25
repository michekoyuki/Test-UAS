export default function UserCard({ name, email, roles, status }) {
  return (
    <div className="border rounded-lg p-4 flex justify-between items-center text-black">
      <div>
        <p className="font-bold font-sans">{name}</p>
        <p className="text-sm text-gray-500">{email}</p>
        <div className="flex space-x-2 mt-2">
          <span className="bg-black text-white text-xs px-2 py-1 rounded">
            {roles}
          </span>
        </div>
      </div>
      <span className="font-bold font-sans">{status}</span>
    </div>
  );
}