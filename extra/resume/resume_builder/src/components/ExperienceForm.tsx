import React from 'react';
import { Plus, Minus } from 'lucide-react';
import type { ResumeData } from '../App';

interface ExperienceFormProps {
  experience: ResumeData['experience'];
  addItem: (section: 'experience') => void;
  removeItem: (section: 'experience', id: number) => void;
  updateField: (section: 'experience', field: string | null, value: string | boolean, index: number) => void;
}

const ExperienceForm = ({ experience, addItem, removeItem, updateField }: ExperienceFormProps) => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h3 className="text-lg font-semibold text-gray-800">Work Experience</h3>
      <button
        onClick={() => addItem('experience')}
        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        <Plus size={16} /> Add Experience
      </button>
    </div>
    
    {experience.map((exp, index) => (
      <div key={exp.id} className="border border-gray-200 rounded-lg p-4 space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-gray-700">Experience {index + 1}</h4>
          {experience.length > 1 && (
            <button
              onClick={() => removeItem('experience', exp.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Minus size={16} />
            </button>
          )}
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Position Title"
            value={exp.position}
            onChange={(e) => updateField('experience', 'position', e.target.value, index)}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Company Name"
            value={exp.company}
            onChange={(e) => updateField('experience', 'company', e.target.value, index)}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Location"
            value={exp.location}
            onChange={(e) => updateField('experience', 'location', e.target.value, index)}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Start Date"
            value={exp.startDate}
            onChange={(e) => updateField('experience', 'startDate', e.target.value, index)}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="End Date"
            value={exp.endDate}
            onChange={(e) => updateField('experience', 'endDate', e.target.value, index)}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={exp.current}
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              id={`current-${exp.id}`}
              checked={exp.current}
              onChange={(e) => updateField('experience', 'current', e.target.checked, index)}
              className="mr-2"
            />
            <label htmlFor={`current-${exp.id}`} className="text-sm text-gray-600">Currently working here</label>
          </div>
        </div>
        
        <textarea
          placeholder="Describe your responsibilities and achievements..."
          value={exp.description}
          onChange={(e) => updateField('experience', 'description', e.target.value, index)}
          rows={3}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    ))}
  </div>
);

export default ExperienceForm;