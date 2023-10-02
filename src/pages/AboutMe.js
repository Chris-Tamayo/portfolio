import headshot from '../assets/headshot.jpg'

export function AboutMe() {
    return (
        <div className="container pageContainer d-flex align-items-center">
            <div className="w-75 fs-5 m-3 lh-lg">
                <p className="sectionHeading">About Me</p>
                <p>
                    Senior at Santa Clara University pursuing a B.S. in Computer Science and Engineering with a minor in Mathematics. 
                    Work experience lies in back-end scalable and distributed systems, but I also enjoy working on personal front-end projects.
                    Looking for challenging opportunities to help me grow both as a person and engineer. 
                </p>
            </div>
            <div className="w-25 m-3">
                <img className="w-100 h-auto rounded-circle" src={headshot} alt="Professional headshot" />
            </div>
        </div>
    )
}