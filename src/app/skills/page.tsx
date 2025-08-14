import React from "react";
import { FaCode, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="container max-w-7-l mx-auto py-20">
      {/* <h1 className="text-4xl text-center font-bold mb-8">Skills</h1> */}

      {/* skills section */}
      <section className="mb-16">
        <h1 className="text-4xl text-center font-bold mb-8">Skills</h1>
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

      {/* education section */}
      <section>
        <h2 className="section-title">Education</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-2">
              Bootcamp Certificate (Full Stack Web Development)
            </h4>

            <div className="justify-between flex items-center">
              <p className="text-primary">
                <strong>University of Texas at Austin</strong>
              </p>
              <p className="text-primary">Dec 2019 - May 2020</p>
            </div>

            <p className="text-primary mb-2">
              <strong>Grade:</strong> A+
            </p>
            <p className="text-secondary">
              A 24-week, Full Stack, intensive program focused on gaining
              technical programming skills in HTML5, CSS3, JavaScript, jQuery,
              Bootstrap, Node.js, MySQL, MongoDB, Express, Handlebars.js, &
              ReactJS.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
