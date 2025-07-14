import { IconBodyScan } from "@tabler/icons-react";

export default function NewsCard({ userid, id, body, title }) {
  return (
    <div className="border rounded-lg p-4 flex justify-between items-center text-black">
      <div>
        <p className="font-bold font-sans">{userid}</p>
        <p className="text-sm text-gray-500">{id}</p>
        <div className="flex space-x-2 mt-2">
          <span className="bg-black text-white text-xs px-2 py-1 rounded">
            {body}
          </span>
        </div>
      </div>
      <span className="font-bold font-sans">{title}</span>
    </div>
  );
}