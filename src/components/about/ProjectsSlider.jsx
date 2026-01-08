import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { portfolioData } from '../../data/portfolio';
import ProjectCard from './ProjectCard';

// Import Swiper styles
import 'swiper/css';

const ProjectsSlider = () => {
    const { projects } = portfolioData;

    return (
        <div className="projects-slider-container">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={'auto'} // Allows variable width
                loop={true}
                speed={5000} // Slow continuous scroll
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true // Optional: pause when user hovers
                }}
                className="mySwiper"
                style={{
                    paddingBottom: '50px',
                    paddingTop: '20px'
                }}
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index} style={{ width: '300px', height: 'auto' }}>
                        <ProjectCard project={project} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <style>{`
                /* Ensure linear animation for continuous scroll */
                .swiper-wrapper {
                    transition-timing-function: linear !important;
                }
                
                /* Optional: Add a fade mask on edges */
                .projects-slider-container {
                    position: relative;
                }
                /*
                .projects-slider-container:before,
                .projects-slider-container:after {
                    content: "";
                    position: absolute;
                    top: 0;
                    width: 100px;
                    height: 100%;
                    z-index: 2;
                    pointer-events: none;
                }
                .projects-slider-container:before {
                    left: 0;
                    background: linear-gradient(to right, var(--bg-dark), transparent);
                }
                .projects-slider-container:after {
                    right: 0;
                    background: linear-gradient(to left, var(--bg-dark), transparent);
                }
                */
            `}</style>
        </div>
    );
};

export default ProjectsSlider;
