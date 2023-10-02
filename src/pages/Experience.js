import amazonLogo from '../assets/amazon.jpg'
import asbLogo from '../assets/asb.jpg'

function ExperienceRow({ logo, company, jobTitle, dates, location, skills }) {
    return (
        <div className="d-flex my-3">
            <div className="company-logo">
                <img className="w-100 h-auto rounded-circle" src={logo} alt="Company logo" />
            </div>      
            <div>
                <p className="fw-semibold">{company}, {jobTitle}</p>
                <p>
                    {dates}<br/>
                    {location}<br/>
                    {skills}
                </p>
            </div>          
        </div>
    )
}

export function Experience() {
    return (
        <div className="container pageContainer experienceContainer">
            <p className="sectionHeading">Experience</p>
            <div className="d-flex flex-column">
                <ExperienceRow 
                    logo={amazonLogo} 
                    company="Amazon"
                    jobTitle="Software Development Engineer Intern"
                    dates="June 2023 - September 2023"
                    location="Seattle, WA"
                    skills="Java | Apache Flink | AWS | JUnit | Mockito | Git"
                />
                <ExperienceRow 
                    logo={amazonLogo} 
                    company="Amazon"
                    jobTitle="Software Development Engineer Intern"
                    dates="June 2022 - September 2022"
                    location="Seattle, WA"
                    skills="Java | JUnit | Mockito | Git"
                />
                <ExperienceRow 
                    logo={asbLogo} 
                    company="American Savings Bank"
                    jobTitle="Information Technology Banking Systems Intern"
                    dates="June 2021 - August 2021"
                    location="Honolulu, HI"
                    skills="MuleSoft | JavaScript | HTML/CSS | Salesforce"
                />
            </div>
        </div>
    )
}