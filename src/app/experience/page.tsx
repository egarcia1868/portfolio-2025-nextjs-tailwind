import React from "react";

const Blogs = () => {
  return (
    <div className="container max-w-7-l mx-auto py-20">
      <h1 className="text-4xl text-center font-bold mb-8">Experience</h1>

      {/* experience section */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Frontend / Full-Stack Software Engineer L2
            </h3>
            <div className="justify-between flex items-center mb-2">
              <p className="text-primary mb-2">
                ZenBusiness — Austin, Tx (remote)
              </p>
              <p className="text-primary mb-2">May 2023 - Oct 2024</p>
            </div>
            <ul className="text-secondary  list-disc list-inside">
              <li>
                Developed web applications using JavaScript, React, Vue,
                TypeScript, Jest, and Cypress.
              </li>
              <li>
                Significantly improved core web vitals for the public website,
                increasing traffic and conversion rates.
              </li>
              <li>
                Built reusable React components and contributed to an internal
                component library used across 3 major user flows.
              </li>
              <li>
                Collaborated with UX and accessibility teams to ensure
                WCAG-aligned, responsive UIs.
              </li>
              <li>
                Integrated backend APIs and led migration efforts from legacy
                frontend systems to React microfrontends.
              </li>
              <li>Boosted test coverage by 25% using Cypress and Jest.</li>
              <li>
                Participated in Agile sprints, retrospectives, and demos to
                iterate quickly on customer-facing features.
              </li>
              <li>
                Mentored engineers and led large cross-team projects, driving
                improvements in coding practices, usability, documentation, and
                performance.
              </li>
            </ul>
          </div>
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Frontend / Full-Stack Software Engineer L1
            </h3>
            <div className="justify-between flex items-center mb-2">
              <p className="text-primary mb-2">
                ZenBusiness — Austin, Tx (remote)
              </p>
              <p className="text-primary mb-2">Jan 2022 - May 2023</p>
            </div>
            <ul className="text-secondary  list-disc list-inside">
              <li>
                Developed new features for onboarding and internal tools using
                React and TypeScript
              </li>
              <li>
                Contributed to Node/Express endpoints and SQL migrations
                supporting frontend feature development.
              </li>
              <li>
                Paired with design and QA to validate feature behavior across
                breakpoints and devices.
              </li>
              <li>
                Helped improve CI pipeline and PR/code review best practices.
              </li>
              <li>
                Leveraged prior customer support experience to identify friction
                points and improve user flows,leading to a more intuitive
                onboarding experience and reduced support tickets.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mb-16">
        <h2 className="section-title">Volunteer Experience</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Frontend Devloper</h3>
            <div className="justify-between flex items-center mb-2">
              <p className="text-primary mb-2">NoSchoolViolence.org — remote</p>
              <p className="text-primary mb-2">May 2023 - Oct 2024</p>
            </div>
            <ul className="text-secondary  list-disc list-inside">
              <li>
                Built and styled responsive UI components using React.js, HTML,
                and CSS.
              </li>
              <li>
                Integrated REST APIs to retrieve and display dynamic content.
              </li>
              <li>
                Collaborated with a small remote team to meet weekly sprint
                goals and ensure accessibility across devices.
              </li>
              <li>
                Helped improve user interface consistency, contributing to an
                increase in engagement metrics (if you have a number or
                estimate, we can add it).
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mb-16">
        <h2 className="section-title">Additional Experience</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Customer Care Agent</h3>
            <div className="justify-between flex items-center mb-2">
              <p className="text-primary">
                ZenBusiness — Austin, Tx - (remote)
              </p>
              <p className="text-primary">Apr 2021 - Jan 2022</p>
            </div>
          </div>
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Supervisor</h3>
            <div className="justify-between flex items-center mb-2">
              <p className="text-primary">Nervous Charlies — Austin, Tx</p>
              <p className="text-primary">Mar 2019 - Dec 2020</p>
            </div>
          </div>
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Intake Coordinator</h3>
            <div className="justify-between flex items-center mb-2">
              <p className="text-primary">Bird — Austin, Tx</p>
              <p className="text-primary">Dec 2018 - Mar 2019</p>
            </div>
          </div>
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Food & Beverage Manager
            </h3>
            <div className="justify-between flex items-center mb-2">
              <p className="text-primary">NLand Surf Park — Austin, Tx</p>
              <p className="text-primary">Jun 2017 - Nov 2018</p>
            </div>
          </div>
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Manager</h3>
            <div className="justify-between flex items-center mb-2">
              <p className="text-primary">
                Buford&apos;s Beer Garden — Austin, Tx
              </p>
              <p className="text-primary">Nov 2015 - Nov 2017</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
