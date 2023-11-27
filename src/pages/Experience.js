import amazonLogo from '../assets/amazon.jpg'
import asbLogo from '../assets/asb.jpg'

export function Experience() {
    return (
        <div className="container pageContainer experienceContainer d-flex flex-column justify-content-center">
            <p className="sectionHeading">Experience</p>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <div className="company-logo">
                                <img className="w-100 h-auto rounded-circle" src={amazonLogo} alt="Company logo" />
                            </div>  
                            <div>
                                <p className="m-0 button-text">
                                    <span className="fw-semibold">Amazon, Software Development Engineer Intern</span><br/>
                                    June 2023 - September 2023<br/>
                                    Seattle, WA
                                </p>
                            </div>
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul>
                                <li>Developed distributed Apache Flink Java application to compute transaction data summaries over various time ranges for Amazon Selling Partners, increasing aggregation types by 300%</li>
                                <li>Implemented configurable aggregation engine for dynamic specification of attributes using Java and AWS AppConfig</li>
                                <li>Persisted data in AWS DynamoDB with optimistic locking in Java, ensuring data consistency during concurrent updates</li>
                                <li>Deployed Flink application in AWS Kinesis Data Analytics to enable real-time data processing and analytics</li>
                                <li>Defined infrastructure as code in TypeScript using AWS CDK to effectively create and manage AWS resources</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <div className="company-logo">
                                <img className="w-100 h-auto rounded-circle" src={amazonLogo} alt="Company logo" />
                            </div>      
                            <div>
                                <p className="m-0">
                                    <span className="fw-semibold">Amazon, Software Development Engineer Intern</span><br/>
                                    June 2022 - September 2022<br/>
                                    Seattle, WA
                                </p>
                            </div>
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <ul>
                                <li>Migrated high-traffic payments reporting API (3B+ monthly requests) to retrieve financial data from a newly introduced backend query service, improving extensibility and reducing operational workload</li>
                                <li>Manipulated request data using Java to integrate with the new query service APIs</li>
                                <li>Transformed and deserialized query service response data, ensuring backwards compatibility with legacy system</li>
                                <li>Authored and presented comprehensive design document outlining design decisions and migration strategy</li>
                            </ul>                        
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <div className="company-logo">
                                <img className="w-100 h-auto rounded-circle" src={asbLogo} alt="Company logo" />
                            </div>      
                            <div>
                                <p className="m-0">
                                    <span className="fw-semibold">American Savings Bank, Information Technology Banking Systems Intern</span><br/>
                                    June 2021 - August 2021<br/>
                                    Honolulu, HI
                                </p>
                            </div>      
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <ul>
                                <li>Corrected data mapping in MuleSoft services to centralize customer information in Salesforce databases</li>
                                <li>Developed scrum order randomizer web application using HTML/CSS, JavaScript in ASP.NET MVC framework</li>
                                <li>Documented troubleshooting steps for MuleSoft project deployments in Anypoint Studio to assist new developers</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}