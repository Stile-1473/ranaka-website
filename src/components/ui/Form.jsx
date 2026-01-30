/**
 * Form components - Input, Textarea, Select, FormGroup
 */

export function FormInput({ label, id, type = 'text', placeholder = '', required = false, ...props }) {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition-all"
        {...props}
      />
    </div>
  );
}

export function FormTextarea({ label, id, placeholder = '', required = false, rows = 4, ...props }) {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        id={id}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition-all resize-none"
        {...props}
      />
    </div>
  );
}

export function FormSelect({ label, id, options = [], required = false, ...props }) {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <select
        id={id}
        required={required}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition-all appearance-none bg-white cursor-pointer"
        {...props}
      >
        <option value="">-- Select --</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function FormCheckbox({ label, id, ...props }) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="flex items-center gap-2 cursor-pointer">
        <input
          id={id}
          type="checkbox"
          className="w-4 h-4 text-green-700 rounded focus:ring-2 focus:ring-green-700 cursor-pointer"
          {...props}
        />
        <span className="text-sm text-gray-700">{label}</span>
      </label>
    </div>
  );
}
