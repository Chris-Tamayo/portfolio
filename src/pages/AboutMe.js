import headshot from '../assets/headshot.jpg'

export function AboutMe() {
    return (
        <div className="container pageContainer d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center">
            <div className="bio-text fs-5 m-3">
                <p className="sectionHeading">About Me</p>
                <p>
                    Senior at Santa Clara University pursuing a B.S. in Computer Science and Engineering with a minor in Mathematics. 
                    Work experience lies in back-end scalable and distributed systems, but I also enjoy working on personal front-end projects.
                    Looking for challenging opportunities to help me grow both as a person and engineer. 
                </p>
            </div>
            <img className="headshot m-3 h-auto rounded-circle" src={headshot} alt="Professional headshot" />
        </div>
    )
}