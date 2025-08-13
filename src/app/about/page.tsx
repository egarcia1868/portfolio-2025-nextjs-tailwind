import React from "react";
import { FaCode, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <div className="container max-w-7-l mx-auto py-20">
      <h1 className="text-4xl text-center font-bold mb-8">About Eric</h1>

      {/* bio section */}
      <section className="mb-16">
        <p className="text-lg mb-6 text-secondary max-w-3xl mx-auto leading-snug">
          Experienced and versatile software engineer with a front-end leaning,
          full-stack background and a passion for continuous improvement. Known
          for clear communication, empathy, and a big-picture mindset, I thrive
          as a dedicated team player and contributor. Drawing from leadership
          experience in prior roles and a love for mentoring, I bring a
          growth-oriented approach to any engineering team, always eager to
          learn, support others, and deliver impactful solutions.
        </p>
        <p className="text-lg text-secondary max-w-3xl mx-auto leading-snug">
          Front-End + Full-Stack | Responsive Design | Accessibility / WCAG | Object-Oriented Programming | Functional Programming |
          Cross-Browser Compatibility | Performance Optimization | Progressive
          Web Apps | RESTful APIs | GraphQL | Agile/Scrum Methodologies | Version
          Pixel-Perfect Implementation | Microservices | API Design &
          Development | Unit & End-to-End Testing | Monitoring & Observability | UI/UX Design
          Mentoring & Team Development | Infrastructure & CI/CD | Micro Frontends | 
        </p>
      </section>

      {/* skills section */}
      <section className="mb-16">
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-dark/50 p-6 shadow-md">
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
              <li>HTML5 / CSS3</li>
              <li>Cypress</li>
              <li>Jest</li>
              <li>Playwright</li>
              <li>Vue.js</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-dark/50 p-6 shadow-md">
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>REST APIs</li>
              <li>GraphQL</li>
              <li>Auth0</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-dark/50 p-6 shadow-md">
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Platforms</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / Github</li>
              <li>CI/CD</li>
              <li>Figma</li>
              <li>Sentry</li>
              <li>Google Cloud Platform (GCP)</li>
              <li>Postman</li>
              <li>Jira</li>
              <li>LaunchDarkly</li>
            </ul>
          </div>
        </div>
      </section>

      {/* experience section */}
      <section className="mb-16">
        <h2 className="section-title">Experience</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            Frontend / Full-Stack Software Engineer
          </h3>
          <p className="text-primary mb-2">
            ZenBusiness • Date - Date
          </p>
          <ul className="text-secondary space-y-2 list-disc list-inside">
            <li>Breakdown of things done</li>
          </ul>
          </div>
        </div>
      </section>

      {/* education section */}
      <section>
                <h2 className="section-title">Education</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            Frontend / Full-Stack Software Engineer
          </h3>
          <p className="text-primary mb-2">
            ZenBusiness • Date - Date
          </p>
          <p className="text-secondary">Course information</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
