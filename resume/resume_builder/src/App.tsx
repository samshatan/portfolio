import React, { useState, useRef } from 'react';
import { Download, User, Briefcase, GraduationCap, Code, Award, Eye, Edit3, type LucideProps } from 'lucide-react';
import PersonalInfoForm from './components/PersonalInfoForm';
import SummaryForm from './components/SummaryForm';
import ExperienceForm from './components/ExperienceForm';
import EducationForm from './components/EducationForm';
import AchievementsForm from './components/AchievementsForm';
import ProjectsForm from './components/ProjectsForm';
import SkillsForm from './components/SkillsForm';
import ResumePreview from './components/ResumePreview';

export type ResumeData = {
  personal: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    portfolio: string;
  };
  summary: string;
  experience: {
    id: number;
    position: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
  }[];
  education: {
    id: number;
    degree: string;
    institution: string;
    location: string;
    graduationDate: string;
    gpa: string;
  }[];
  skills: {
    technical: string[];
    languages: string[];
    frameworks: string[];
    tools: string[];
  };
  projects: {
    id: number;
    title: string;
    technologies: string;
    description: string;
    link: string;
  }[];
  achievements: string[];
};

type SectionKey = keyof ResumeData;
type ArraySection = 'experience' | 'education' | 'projects';

const App = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>('personal');
  const [previewMode, setPreviewMode] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  const [resumeData, setResumeData] = useState<ResumeData>({
    personal: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      github: '',
      portfolio: ''
    },
    summary: '',
    experience: [
      {
        id: 1,
        position: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        current: false,
        description: ''
      }
    ],
    education: [
      {
        id: 1,
        degree: '',
        institution: '',
        location: '',
        graduationDate: '',
        gpa: ''
      }
    ],
    skills: {
      technical: [],
      languages: [],
      frameworks: [],
      tools: []
    },
    projects: [
      {
        id: 1,
        title: '',
        technologies: '',
        description: '',
        link: ''
      }
    ],
    achievements: []
  });

  const updateField = (
  section: SectionKey,
  field: string | null,
  // The value parameter now accepts an array of strings as well.
  value: string | boolean | string[],
  index: number | null = null
) => {
  setResumeData(prev => {
    if (
      index !== null &&
      (section === 'experience' || section === 'education' || section === 'projects')
    ) {
      const updated = [...(prev[section] as any[])];
      updated[index] = { ...updated[index], [field as string]: value };
      return { ...prev, [section]: updated } as ResumeData;
    } else if (section === 'skills' && field) {
      // Ensure the value is a string array for skills
      if (Array.isArray(value)) {
        return {
          ...prev,
          skills: { ...prev.skills, [field]: value }
        };
      }
      return prev; // Do nothing if the value is not an array for skills
    } else if (section === 'achievements') {
      // Ensure the value is a string array for achievements
      if (Array.isArray(value)) {
        return { ...prev, achievements: value };
      }
      return prev;
    } else if (section === 'personal' && field) {
      return {
        ...prev,
        personal: { ...prev.personal, [field]: value }
      };
    } else if (section === 'summary') {
      return { ...prev, summary: value as string };
    } else {
      return prev;
    }
  });
};

  const addItem = (section: ArraySection) => {
    const newItem =
      section === 'experience'
        ? { id: Date.now(), position: '', company: '', location: '', startDate: '', endDate: '', current: false, description: '' }
        : section === 'education'
        ? { id: Date.now(), degree: '', institution: '', location: '', graduationDate: '', gpa: '' }
        : { id: Date.now(), title: '', technologies: '', description: '', link: '' };

    setResumeData(prev => ({
      ...prev,
      [section]: [...prev[section], newItem] as typeof prev[typeof section]
    }));
  };

  const removeItem = (section: ArraySection, id: number) => {
    setResumeData(prev => ({
      ...prev,
      [section]: prev[section].filter(item => item.id !== id)
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  // First, define the type for a single section item
type SectionItem = {
  id: keyof ResumeData;
  label: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
};

// Then, use that type when defining the array
const sections: SectionItem[] = [
  { id: 'personal', label: 'Personal Info', icon: User },
  { id: 'summary', label: 'Summary', icon: Edit3 },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'projects', label: 'Projects', icon: Code },
  { id: 'achievements', label: 'Achievements', icon: Award }
];

  const renderForm = () => {
    switch (activeSection) {
      case 'personal':
        return <PersonalInfoForm personal={resumeData.personal} updateField={updateField} />;
      case 'summary':
        return <SummaryForm summary={resumeData.summary} updateField={updateField} />;
      case 'experience':
        return <ExperienceForm experience={resumeData.experience} addItem={addItem} removeItem={removeItem} updateField={updateField} />;
      case 'education':
        return <EducationForm education={resumeData.education} addItem={addItem} removeItem={removeItem} updateField={updateField} />;
      case 'skills':
        return <SkillsForm skills={resumeData.skills} updateField={updateField} />;
      case 'projects':
        return <ProjectsForm projects={resumeData.projects} addItem={addItem} removeItem={removeItem} updateField={updateField} />;
      case 'achievements':
        return <AchievementsForm achievements={resumeData.achievements} updateField={updateField} />;
      default:
        return <PersonalInfoForm personal={resumeData.personal} updateField={updateField} />;
    }
  };

  if (previewMode) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b border-gray-200 p-4 print:hidden">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Resume Preview</h1>
            <div className="flex gap-4">
              <button
                onClick={() => setPreviewMode(false)}
                className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <Edit3 size={16} /> Edit Resume
              </button>
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Download size={16} /> Download PDF
              </button>
            </div>
          </div>
        </div>
        <div className="p-8">
          <ResumePreview resumeData={resumeData} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b border-gray-200 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Resume Builder</h1>
          <button
            onClick={() => setPreviewMode(true)}
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            <Eye size={16} /> Preview Resume
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 space-y-2">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-3 w-full p-2 rounded-lg transition-colors ${
                  activeSection === section.id
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon size={16} /> {section.label}
              </button>
            );
          })}
        </div>
        <div className="md:col-span-3 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          {renderForm()}
        </div>
      </div>
    </div>
  );
};

export default App;