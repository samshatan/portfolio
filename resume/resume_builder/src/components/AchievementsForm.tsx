import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface AchievementsFormProps {
  achievements: string[];
  updateField: (section: 'achievements', field: null, value: string[]) => void;
}

const AchievementsForm = ({ achievements, updateField }: AchievementsFormProps) => {
  const [newAchievement, setNewAchievement] = useState<string>('');

  const addAchievement = () => {
    if (newAchievement.trim()) {
      const updatedAchievements = [...achievements, newAchievement.trim()];
      updateField('achievements', null, updatedAchievements);
      setNewAchievement('');
    }
  };

  const removeAchievement = (index: number) => {
    const updatedAchievements = achievements.filter((_, i) => i !== index);
    updateField('achievements', null, updatedAchievements);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Achievements</h3>
      
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Add achievement"
          value={newAchievement}
          onChange={(e) => setNewAchievement(e.target.value)}
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onKeyPress={(e) => e.key === 'Enter' && addAchievement()}
        />
        <button
          onClick={addAchievement}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </div>
      
      <div className="space-y-2">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
            <span className="text-gray-800">{achievement}</span>
            <button
              onClick={() => removeAchievement(index)}
              className="text-red-500 hover:text-red-700"
            >
              <Minus size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsForm;