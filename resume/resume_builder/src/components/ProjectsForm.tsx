import React from 'react';
import { Plus, Minus } from 'lucide-react';
import type { ResumeData } from '../App';

interface ProjectsFormProps {
  projects: ResumeData['projects'];
  addItem: (section: 'projects') => void;
  removeItem: (section: 'projects', id: number) => void;
  updateField: (section: 'projects', field: string | null, value: string, index: number) => void;
}

const ProjectsForm = ({ projects, addItem, removeItem, updateField }: ProjectsFormProps) => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h3 className="text-lg font-semibold text-gray-800">Projects</h3>
      <button
        onClick={() => addItem('projects')}
        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        <Plus size={16} /> Add Project
      </button>
    </div>
    
    {projects.map((project, index) => (
      <div key={project.id} className="border border-gray-200 rounded-lg p-4 space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-gray-700">Project {index + 1}</h4>
          {projects.length > 1 && (
            <button
              onClick={() => removeItem('projects', project.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Minus size={16} />
            </button>
          )}
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Project Title"
            value={project.title}
            onChange={(e) => updateField('projects', 'title', e.target.value, index)}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Technologies Used"
            value={project.technologies}
            onChange={(e) => updateField('projects', 'technologies', e.target.value, index)}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="url"
            placeholder="Project Link (Optional)"
            value={project.link}
            onChange={(e) => updateField('projects', 'link', e.target.value, index)}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent md:col-span-2"
          />
        </div>
        
        <textarea
          placeholder="Project description and key features..."
          value={project.description}
          onChange={(e) => updateField('projects', 'description', e.target.value, index)}
          rows={3}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    ))}
  </div>
);

export default ProjectsForm;