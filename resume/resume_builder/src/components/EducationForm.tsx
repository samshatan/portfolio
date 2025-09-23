import React from 'react';
import { Plus, Minus } from 'lucide-react';
import type { ResumeData } from '../App';

interface EducationFormProps {
  education: ResumeData['education'];
  addItem: (section: 'education') => void;
  removeItem: (section: 'education', id: number) => void;
  updateField: (section: 'education', field: string | null, value: string, index: number) => void;
}

const EducationForm = ({ education, addItem, removeItem, updateField }: EducationFormProps) => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h3 className="text-lg font-semibold text-gray-800">Education</h3>
      <button
        onClick={() => addItem('education')}
        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        <Plus size={16} /> Add Education
      </button>
    </div>
    
    {education.map((edu, index) => (
      <div key={edu.id} className="border border-gray-200 rounded-lg p-4 space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-gray-700">Education {index + 1}</h4>
          {education.length > 1 && (
            <button
              onClick={() => removeItem('education', edu.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Minus size={16} />
            </button>
          )}
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) => updateField('education', 'degree', e.target.value, index)}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Institution"
            value={edu.institution}
            onChange={(e) => updateField('education', 'institution', e.target.value, index)}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Location"
            value={edu.location}
            onChange={(e) => updateField('education', 'location', e.target.value, index)}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Graduation Date"
            value={edu.graduationDate}
            onChange={(e) => updateField('education', 'graduationDate', e.target.value, index)}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="GPA (Optional)"
            value={edu.gpa}
            onChange={(e) => updateField('education', 'gpa', e.target.value, index)}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    ))}
  </div>
);

export default EducationForm;