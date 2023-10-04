import amazonLogo from '../assets/amazon.jpg'
import asbLogo from '../assets/asb.jpg'

export function Experience() {
    return (
        <div className="container pageContainer experienceContainer d-flex flex-column justify-content-center">
            <p className="sectionHeading">Experience</p>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
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
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul>
                                <li>Implemented real-time Apache Flink Java application to perform pre-computed aggregations on transaction data for generating Selling Partner summarized reports, increasing aggregation types by 300%</li>
                                <li>Developed highly flexible aggregation engine, utilizing AWS AppConfig configurations to dynamically specify aggregate attributes and aggregation types (e.g., daily, monthly, yearly) to easily expand aggregation use cases</li>
                                <li>Ingested business events from AWS Kinesis Data Stream, persisted aggregate data in AWS DynamoDB with optimistic locking to handle concurrent updates, deployed application in AWS Kinesis Data Analytics</li>
                                <li>Created and managed AWS resources using AWS CDK to define cloud infrastructure as code in TypeScript</li>
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
                                <li>Manipulated request data to call new query service APIs and transformed and deserialized response data in Java</li>
                                <li>Constructed unit tests with &gt;95% line coverage using JUnit and Mockito testing frameworks</li>
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