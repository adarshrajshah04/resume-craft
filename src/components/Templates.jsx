import React from 'react'
import TemplateCard from './TemplateCard';

const Templates = () => {

    const resumeData = {
    personal: {
        full_name: "Rahul Sharma",
        job_title: "Python Full Stack Developer",
        email: "rahul.sharma@gmail.com",
        phone: "+91 9876543210",
        address: "Mumbai, Maharashtra",
        linkedin: "linkedin.com/in/rahulsharma",
        github: "github.com/rahulsharma"
    },

    summary: "Motivated Python Full Stack Developer with knowledge of Python, FastAPI, React, MySQL and REST APIs. Passionate about building responsive web applications and scalable backend systems.",

    education: [
        {
            degree: "B.Sc Information Technology",
            college: "Mumbai University",
            year: "2023 - 2026",
            percentage: "7.8 CGPA"
        },
        {
            degree: "Higher Secondary Certificate",
            college: "ABC Junior College",
            year: "2021 - 2023",
            percentage: "75%"
        }
    ],

    experience: [
        {
            company: "Tech Solutions Pvt Ltd",
            role: "Python Developer Intern",
            duration: "Jan 2026 - Apr 2026",
            description: "Developed REST APIs using Python and FastAPI. Worked with MySQL database and tested APIs using Postman."
        }
    ],

    skills: [
        "Python",
        "FastAPI",
        "React.js",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "MySQL",
        "Git",
        "GitHub"
    ],

    projects: [
        {
            title: "E-commerce Application",
            technologies: "FastAPI, MySQL, React",
            description: "Developed an e-commerce application with user authentication, product management and order processing."
        },
        {
            title: "Resume Builder",
            technologies: "React, JavaScript, Tailwind CSS",
            description: "Created a dynamic resume builder with live preview and PDF download functionality."
        }
    ],

    certifications: [
        "Python Programming Certification",
        "SQL Certification"
    ],

    languages: [
        "English",
        "Hindi"
    ]
};
  return (
    <div >
        <h1 className='text-center text-4xl font-bold mb-4 '> chose the template </h1>
        <div className='flex gap-10'>
            <TemplateCard resumeData={resumeData}/>
        </div>

    </div>
  )
}

export default Templates