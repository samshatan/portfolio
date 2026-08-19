import React from 'react';

interface SummaryFormProps {
  summary: string;
  updateField: (section: 'summary', field: null, value: string) => void;
}

const SummaryForm = ({ summary, updateField }: SummaryFormProps) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">Professional Summary</h3>
    <textarea
      placeholder="Write a brief professional summary about yourself..."
      value={summary}
      onChange={(e) => updateField('summary', null, e.target.value)}
      rows={4}
      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  </div>
);

export default SummaryForm;