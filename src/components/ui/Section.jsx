/**
 * Section component - Wrapper for page sections with consistent spacing
 */
export default function Section({ children, className = '', id = '' }) {
  return (
    <section 
      id={id}
      className={`py-16 lg:py-20 ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
