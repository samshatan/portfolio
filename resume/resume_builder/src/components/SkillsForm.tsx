import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import type { ResumeData } from '../App';

interface SkillsFormProps {
  skills: ResumeData['skills'];
  updateField: (section: 'skills', field: string, value: string[]) => void;
}

const SkillsForm = ({ skills, updateField }: SkillsFormProps) => {
  const [newSkill, setNewSkill] = useState<{ technical: string; languages: string; frameworks: string; tools: string }>({ technical: '', languages: '', frameworks: '', tools: '' });

  const addSkill = (category: keyof typeof newSkill) => {
    if (newSkill[category].trim()) {
      const updatedSkills = [...skills[category], newSkill[category].trim()];
      updateField('skills', category, updatedSkills);
      setNewSkill(prev => ({ ...prev, [category]: '' }));
    }
  };

  const removeSkill = (category: keyof typeof newSkill, index: number) => {
    const updatedSkills = skills[category].filter((_: string, i: number) => i !== index);
    updateField('skills', category, updatedSkills);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-800">Skills</h3>
      
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="space-y-3">
          <h4 className="font-medium text-gray-700 capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</h4>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder={`Add ${category} skill`}
              value={newSkill[category as keyof typeof newSkill]}
              onChange={(e) => setNewSkill(prev => ({ ...prev, [category as keyof typeof newSkill]: e.target.value }))}
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onKeyPress={(e) => e.key === 'Enter' && addSkill(category as keyof typeof newSkill)}
            />
            <button
              onClick={() => addSkill(category as keyof typeof newSkill)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillList.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center gap-2"
              >
                {skill}
                <button
                  onClick={() => removeSkill(category as keyof typeof newSkill, index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Minus size={12} />
                </button>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsForm;