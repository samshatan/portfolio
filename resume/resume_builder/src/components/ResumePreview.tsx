import React, { forwardRef } from 'react';
import type { ResumeData } from '../App';

interface ResumePreviewProps {
  resumeData: ResumeData;
}

const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(({ resumeData }, ref) => {
  return (
    <div ref={ref} className="bg-white p-8 shadow-lg max-w-4xl mx-auto" style={{ minHeight: '800px' }}>
      {/* Header */}
      <div className="text-center border-b-2 border-gray-200 pb-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{resumeData.personal.fullName || 'Your Name'}</h1>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          {resumeData.personal.email && <span>{resumeData.personal.email}</span>}
          {resumeData.personal.phone && <span>|</span>}
          {resumeData.personal.phone && <span>{resumeData.personal.phone}</span>}
          {resumeData.personal.location && <span>|</span>}
          {resumeData.personal.location && <span>{resumeData.personal.location}</span>}
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mt-2">
          {resumeData.personal.linkedin && <span>LinkedIn: {resumeData.personal.linkedin}</span>}
          {resumeData.personal.github && <span>|</span>}
          {resumeData.personal.github && <span>GitHub: {resumeData.personal.github}</span>}
        </div>
      </div>

      {/* Summary */}
      {resumeData.summary && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">PROFESSIONAL SUMMARY</h2>
          <p className="text-gray-700 leading-relaxed">{resumeData.summary}</p>
        </div>
      )}

      {/* Experience */}
      {resumeData.experience.some((exp: { position: any; company: any; }) => exp.position || exp.company) && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">WORK EXPERIENCE</h2>
          {resumeData.experience.map((exp: { position: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; company: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; id: React.Key | null | undefined; startDate: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; current: any; endDate: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; location: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => (
            (exp.position || exp.company) && (
              <div key={exp.id} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-800">{exp.position}</h3>
                  <span className="text-sm text-gray-600">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                </div>
                <div className="text-gray-700 mb-2">
                  <span className="font-medium">{exp.company}</span>
                  {exp.location && <span> | {exp.location}</span>}
                </div>
                {exp.description && <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>}
              </div>
            )
          ))}
        </div>
      )}

      {/* Education */}
      {resumeData.education.some((edu: { degree: any; institution: any; }) => edu.degree || edu.institution) && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">EDUCATION</h2>
          {resumeData.education.map((edu: { degree: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; institution: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; id: React.Key | null | undefined; graduationDate: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; location: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; gpa: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => (
            (edu.degree || edu.institution) && (
              <div key={edu.id} className="mb-3">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                  <span className="text-sm text-gray-600">{edu.graduationDate}</span>
                </div>
                <div className="text-gray-700">
                  <span className="font-medium">{edu.institution}</span>
                  {edu.location && <span> | {edu.location}</span>}
                  {edu.gpa && <span> | GPA: {edu.gpa}</span>}
                </div>
              </div>
            )
          ))}
        </div>
      )}

      {/* Skills */}
      {Object.values(resumeData.skills).some(skillArray => skillArray.length > 0) && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">TECHNICAL SKILLS</h2>
          {Object.entries(resumeData.skills).map(([category, skills]) => (
            skills.length > 0 && (
              <div key={category} className="mb-2">
                <span className="font-medium text-gray-800 capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}: </span>
                <span className="text-gray-700">{skills.join(', ')}</span>
              </div>
            )
          ))}
        </div>
      )}

      {/* Projects */}
      {resumeData.projects.some((project: { title: any; }) => project.title) && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">PROJECTS</h2>
          {resumeData.projects.map((project: { title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; id: React.Key | null | undefined; link: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; technologies: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => (
            project.title && (
              <div key={project.id} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-800">{project.title}</h3>
                  {project.link && <span className="text-sm text-gray-600">{project.link}</span>}
                </div>
                {project.technologies && (
                  <div className="text-gray-700 mb-2">
                    <span className="font-medium">Technologies: </span>
                    <span>{project.technologies}</span>
                  </div>
                )}
                {project.description && <p className="text-gray-700 text-sm leading-relaxed">{project.description}</p>}
              </div>
            )
          ))}
        </div>
      )}

      {/* Achievements */}
      {resumeData.achievements.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">ACHIEVEMENTS</h2>
          <ul className="list-disc list-inside space-y-1">
            {resumeData.achievements.map((achievement: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
              <li key={index} className="text-gray-700 text-sm">{achievement}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default ResumePreview;