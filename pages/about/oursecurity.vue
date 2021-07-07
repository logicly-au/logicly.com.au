<template>
  <div>
    <Hero
      heading="OUR SECURITY"
      subheading="Protecting important data and information"
      background-url="/Logicly-Our-security-Protecting-important-data-and-information.jpg"
      overlay
    />

    <Herotext
      iconurl="A_long_history_of_working_with_highly_sensitive_information.svg"
      imgwidth="90px"
      heading="We have a long history of working with highly sensitive information"
      subheading="At Logicly, security is integrated and prioritised as a core value and capability in our processes and culture. We partner with our clients to help them safely and accurately gather insights from sensitive data that inform high-stakes outcomes."
      altrow
    />

    <page-section>
      <div class="grid grid-cols-8 gap-x-4 text-logiclytextgrey px-0 lg:px-4 xl:px-6">
        <div class="col-span-8 text-center">
          <h1 class="text-2xl font-semibold pb-4">A continuous, systematic approach to risk analysis and security </h1>
          <p class="mb-8 text-lg font-light">To ensure we’re at the cutting edge of security best-practices, and align with their needs, we keep a rigorous routine of continuous review and investment in our methods. Our data solutions are created to respond to each client’s unique information challenge, including their risk requirements.</p>
          <h1 class="text-xl font-semibold mb-6">Security measures we build into our projects include:</h1>
        </div>
        <div class="col-span-8 lg:col-span-4 col-start-1">
          <ul class="text-base lg:text-base font-light list-disc pl-6 lg:pl-0 pr-8">
            <li>24/7 security monitoring</li>
            <li>Vulnerability scanning and penetration testing</li>
            <li>OWASP Top 10 compliancy testing</li>
            <li>Australian Signals Directorate’s (ASD) Essential Eight Strategy assessment</li>
            <li>ASD Information Security Registered	Assessors Program (IRAP) assessment</li>
          </ul>
        </div>
        <div class="col-span-8 lg:col-span-4 lg:col-start-5">
          <ul class="text-base lg:text-base font-light list-disc pl-6 lg:pl-0">
            <li>Development of project-specific security documentation such as: Security Risk Management Plans, Incident Response Plans, Statements of Applicability, and Compliance Audits</li>
            <li>Consultation with external subject-matter	specialists as needed</li>
          </ul>
        </div>
      </div>
    </page-section>

    <Heroright
      midpageheading="We invest significant resources to ensure our systems are secure and robust."
      background-url="/We-invest-significant-resources-to-ensure-our-systems-are-secure-and-robust.png"
      right
    />

    <!-- TODO add links here also fix formatting -->
    <page-section>
      <div class="grid grid-cols-3 gap-x-2 text-logiclytextgrey px-0 xl:px-10">
        <div class="col-span-3 pb-6 lg:pb-4">
          <h1 class="text-2xl font-semibold text-center pb-4 lg:pb-8 -mx-4 sm:-mx-0">Protecting critical information for established organisations</h1>
          <p class="text-lg text-center font-light pb-2">Our comprehensive approach to security has enabled us to foster successful, long-term partnerships with leading organisations such as the Department of Health, National Australia Bank and the University of Melbourne over the course of many years, and many projects. </p>
        </div>
        <div class="col-span-3 lg:col-span-1 text-center flex pb-6 lg:pb-0">
          <div class="m-auto">
            <div class="h-24 flex items-center justify-center">
              <img src="/Australian-Government.jpg" />
            </div>
            <div class="flex justify-center">
              <Button
                buttontext="View Project"
                buttonlink="/projects/?article=3&tab=1"
              />
            </div>
          </div>
        </div>
        <div class="col-span-3 lg:col-span-1 text-center flex pb-6 lg:pb-0">
          <div class="m-auto">
            <div class="h-24 flex items-center justify-center">
              <img src="/University-of-Melbourne.jpg" />
            </div>
            <div class="flex justify-center">
              <Button
                buttontext="View Project"
                buttonlink="/projects/?article=1&tab=0"
              />
            </div>
          </div>
        </div>
        <div class="col-span-3 lg:col-span-1 text-center flex">
          <div class="m-auto">
            <div class="h-24 flex items-center justify-center">
              <img src="/National-Australia-Bank-NAB.jpg" />
            </div>
            <div class="flex justify-center">
              <Button
                buttontext="View Project"
                buttonlink="/projects/?article=0&tab=5"
              />
            </div>
          </div>
        </div>
      </div>
    </page-section>

  </div>
</template>

<script>
</script>

<style>
</style>
