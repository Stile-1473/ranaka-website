/**
 * Card component - Reusable for service cards, team profiles, etc.
 */
export default function Card({ children, className = '', onClick = null, hover = true }) {
  const hoverClass = hover ? 'hover:shadow-lg hover:scale-105' : '';
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-lg shadow-md transition-all duration-300 ${hoverClass} ${className}`}
    >
      {children}
    </div>
  );
}
