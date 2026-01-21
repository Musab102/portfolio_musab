import React, { useRef } from 'react';
import { portfolioData } from '../../data/portfolio';
import ProjectCard from './ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';

const ProjectsSlider = () => {
    const { projects } = portfolioData;

    return (
        <div className="projects-slider-wrapper">
            <Swiper
                modules={[Scrollbar, FreeMode]}
                spaceBetween={20}
                slidesPerView="auto"
                freeMode={true}
                scrollbar={{
                    el: '.custom-swiper-scrollbar',
                    draggable: true,
                    dragSize: 100, // Min size for drag handle
                }}
                className="mySwiper"
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index} className="project-slide">
                        <ProjectCard project={project} />
                    </SwiperSlide>
                ))}

                {/* Custom Scrollbar Container */}
                <div className="custom-swiper-scrollbar"></div>
            </Swiper>

            <style>{`
                .projects-slider-wrapper {
                    position: relative;
                    width: 100%;
                    padding: 20px 0;
                }

                .mySwiper {
                    width: 100%;
                    padding-bottom: 50px !important; /* Space for scrollbar */
                }

                .project-slide {
                    width: 280px; /* Fixed width matching reference */
                    height: auto;
                }

                /* Custom Scrollbar Styles */
                .custom-swiper-scrollbar {
                    position: absolute;
                    bottom: 10px;
                    left: 25% !important; /* Center the scrollbar */
                    width: 50% !important; /* Shorter width */
                    height: 6px !important;
                    background: #2a2a2a !important;
                    border-radius: 3px;
                    z-index: 50;
                }

                /* Draggable Drag Handle */
                .swiper-scrollbar-drag {
                    background: var(--accent-blue) !important;
                    border-radius: 3px;
                    cursor: pointer;
                }
                
                .swiper-scrollbar-drag:hover {
                    background: #5dade2 !important;
                }
            `}</style>
        </div>
    );
};

export default ProjectsSlider;
