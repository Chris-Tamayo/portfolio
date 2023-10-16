import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import mail from '../assets/mail.png'

// export function Footer() {
//     return (
//         <footer className="m-4">
//             <a href="mailto:chriswtamayo@gmail.com" target="_blank">
//                 <img className="contactLogo" src={mail} />
//             </a>
//             <a href="https://www.linkedin.com/in/christopher-tamayo/" target="_blank">
//                 <img className="contactLogo" src={linkedin} />
//             </a>
//             <a href="https://github.com/Chris-Tamayo" target="_blank">
//                 <img className="contactLogo" src={github} />
//             </a>
//         </footer>
//     )
// }

export function Footer() {
    return (
        <footer className="m-4 fs-6">
            <a href="mailto:chriswtamayo@gmail.com" target="_blank">
                Email 
            </a>
            <span> | </span>
            <a href="https://www.linkedin.com/in/christopher-tamayo/" target="_blank">
                LinkedIn
            </a>
            <span> | </span>
            <a href="https://github.com/Chris-Tamayo" target="_blank">
                 GitHub
            </a>
        </footer>
    )
}