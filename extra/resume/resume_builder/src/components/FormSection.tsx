// FormSection.tsx
import React, { type ReactNode } from 'react';
import { Plus } from 'lucide-react';

interface FormSectionProps {
  title: string;
  onAdd: () => void;
  children: ReactNode;
}

const FormSection = ({ title, onAdd, children }: FormSectionProps) => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <button
        onClick={onAdd}
        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        <Plus size={16} /> Add {title.replace(/s$/, '')}
      </button>
    </div>
    {children}
  </div>
);

export default FormSection;