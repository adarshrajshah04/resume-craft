
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TemplateCard = ({ resumeData }) => {

    const navigate = useNavigate();

    return (
        <div className="w-65 ">

            {/* Resume Preview */}
            <div className="bg-gray-100 p-3 rounded-xl">
                <div className="bg-white shadow-md aspect-[210/297] overflow-hidden p-5 text-gray-800">

                    {/* Personal Details */}
                    <div className="border-b-2 border-blue-700 pb-3">
                        <h2 className="text-lg font-bold">
                            {resumeData.personal.full_name}
                        </h2>

                        <p className="text-xs font-medium text-blue-700">
                            {resumeData.personal.job_title}
                        </p>

                        <p className="text-[9px] text-gray-600 mt-2">
                            {resumeData.personal.email} | {resumeData.personal.phone}
                        </p>

                        <p className="text-[9px] text-gray-600">
                            {resumeData.personal.address}
                        </p>
                    </div>

                    {/* Summary */}
                    <div className="mt-3">
                        <h3 className="text-[10px] font-bold uppercase border-b pb-1">
                            Professional Summary
                        </h3>
                        <p className="text-[8px] text-gray-600 mt-1 leading-relaxed">
                            {resumeData.summary}
                        </p>
                    </div>

                    {/* Skills */}
                    <div className="mt-3">
                        <h3 className="text-[10px] font-bold uppercase border-b pb-1">
                            Technical Skills
                        </h3>
                        <p className="text-[8px] text-gray-600 mt-1 leading-relaxed">
                            {resumeData.skills.join(' • ')}
                        </p>
                    </div>

                    {/* Experience */}
                    <div className="mt-3">
                        <h3 className="text-[10px] font-bold uppercase border-b pb-1">
                            Experience
                        </h3>

                        {resumeData.experience.map((exp, index) => (
                            <div key={index} className="mt-2">
                                <p className="text-[9px] font-semibold">
                                    {exp.role}
                                </p>
                                <p className="text-[8px] text-blue-700">
                                    {exp.company} | {exp.duration}
                                </p>
                                <p className="text-[8px] text-gray-600 mt-1">
                                    {exp.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Education */}
                    <div className="mt-3">
                        <h3 className="text-[10px] font-bold uppercase border-b pb-1">
                            Education
                        </h3>

                        {resumeData.education.map((edu, index) => (
                            <div key={index} className="mt-2">
                                <p className="text-[9px] font-semibold">
                                    {edu.degree}
                                </p>
                                <p className="text-[8px] text-gray-600">
                                    {edu.college} | {edu.year}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Template Details */}
            <div className="flex items-center justify-between mt-3">
                <div>
                    <h3 className="text-sm font-semibold">
                        Professional Resume
                    </h3>
                    <p className="text-xs text-gray-500">
                        ATS Friendly • A4
                    </p>
                </div>

                <button
                    onClick={() => navigate('/editor', {
                        state: { resumeData: resumeData }
                    })}
                    className="bg-blue-600 text-white text-xs px-3 py-2 rounded-md hover:bg-blue-700"
                >
                    Use Template
                </button>
            </div>

        </div>
    );
};

export default TemplateCard;
