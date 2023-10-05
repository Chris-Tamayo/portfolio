import smartwalk from '../assets/smartwalk.png'
import portfolio from '../assets/portfolio.jpg'

export function Projects() {
    return (
        <div className="container pageContainer experienceContainer m-auto d-flex flex-column justify-content-center">
            <p className="sectionHeading d-inline-block">Projects</p>
            <div className="project-row">
                <div className="project-logo-container h-100">
                    <img className="w-100 project-logo" src={portfolio} />
                </div>
                <div className="project-text-container m-3">
                    <p>
                        <span className="fw-semibold">Portfolio</span>
                        <span className="skills"> | </span>
                        <span className="skills fst-italic">React, JavaScript, HTML/CSS</span>
                    </p>
                    <p>This website! Created to display work experience, projects, and contact information</p>
                    <a href="https://github.com/Chris-Tamayo/portfolio" target="_blank">View Code</a>
                </div>
            </div>

            <div className="project-row">
                <div className="project-logo-container h-100">
                    <img className="w-100 project-logo" src={smartwalk} />
                </div>
                <div className="project-text-container m-3">
                    <p>
                        <span className="fw-semibold">SmartWalk</span>
                        <span className="skills"> | </span>
                        <span className="skills fst-italic">JavaScript, HTML/CSS, Inrix API</span>
                    </p>
                    <p>
                        Inrix Hackathon<br/>
                        Website that routes the safest pedestrian paths between two locations
                    </p>
                    <a href="https://devpost.com/software/safewalk-0yf4ue?ref_content=my-projects-tab&ref_feature=my_projects" target="_blank">View Project</a> | <a href="https://github.com/rjquiban/inrix-hack" target="_blank">View Code</a>
                </div>
            </div>
        </div>
    )
}