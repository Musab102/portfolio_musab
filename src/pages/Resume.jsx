import React from 'react';
import SEO from '../components/common/SEO';
import ResumeContent from '../components/Resume';

const Resume = () => {
    return (
        <>
            <SEO
                title="Resume"
                description="View the professional resume of Musab bin Mukhtar - Flutter Developer with 3+ years of experience. Work history includes Flutter Mentor and Developer roles at leading tech companies."
                keywords="Musab bin Mukhtar Resume, Flutter Developer Resume, Mobile Developer CV, Work Experience, Professional Background, Flutter Mentor, Bigscal Technologies"
                path="/resume"
            />
            <ResumeContent />
        </>
    );
};

export default Resume;

