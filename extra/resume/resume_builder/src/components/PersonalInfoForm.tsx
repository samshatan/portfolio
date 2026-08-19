import React from 'react';
import type { ResumeData } from '../App';

interface PersonalInfoFormProps {
  personal: ResumeData['personal'];
  updateField: (section: 'personal', field: string, value: string) => void;
}

const PersonalInfoForm = ({ personal, updateField }: PersonalInfoFormProps) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
    <div className="grid md:grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="Full Name"
        value={personal.fullName}
        onChange={(e) => updateField('personal', 'fullName', e.target.value)}
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <input
        type="email"
        placeholder="Email Address"
        value={personal.email}
        onChange={(e) => updateField('personal', 'email', e.target.value)}
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={personal.phone}
        onChange={(e) => updateField('personal', 'phone', e.target.value)}
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <input
        type="text"
        placeholder="Location"
        value={personal.location}
        onChange={(e) => updateField('personal', 'location', e.target.value)}
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <input
        type="text"
        placeholder="LinkedIn Profile"
        value={personal.linkedin}
        onChange={(e) => updateField('personal', 'linkedin', e.target.value)}
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <input
        type="text"
        placeholder="GitHub Profile"
        value={personal.github}
        onChange={(e) => updateField('personal', 'github', e.target.value)}
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  </div>
);

export default PersonalInfoForm;