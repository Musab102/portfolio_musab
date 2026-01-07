import React from 'react';
import SEO from '../components/common/SEO';
import ExpertiseContent from '../components/Expertise';

const Expertise = () => {
    return (
        <>
            <SEO
                title="Tech Expertise"
                description="Explore the technical expertise of Musab bin Mukhtar in Flutter, Dart, Mobile Development, Firebase, REST APIs, GraphQL, State Management (BLoC, GetX, Provider), and more."
                keywords="Flutter Expert, Dart Developer, Mobile Development Skills, Firebase Integration, BLoC Pattern, GetX, Provider, REST API, GraphQL, Clean Architecture, Mobile Architect"
                path="/expertise"
            />
            <ExpertiseContent />
        </>
    );
};

export default Expertise;

