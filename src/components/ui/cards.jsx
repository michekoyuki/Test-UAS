// components/ui/card.jsx

export function Card({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-lg shadow p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = '' }) {
  return (
    <div className={`mt-2 text-gray-700 ${className}`}>
      {children}
    </div>
  );
}
