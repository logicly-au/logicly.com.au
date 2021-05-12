<template>
  <div>
    <Hero
      heading="ABOUT US"
      subheading="We are innovative thinkers who solve information challenges"
      background-url="/Logicly-about-us-header-we-are-innovative-thinkers-who-solve-informative-challenges.jpg"
      right
      black
      overlay
    />

    <Herotext
      iconurl="We-partner-with-clients-to-simplify-complex-processes.svg"
      heading="We partner with clients to simplify complex processes"
      subheading="We achieve our best when we partner with you to research, design, build and maintain your information and digital systems. We are flexible and collaborative while taking a thorough and detailed approach to research, strategy, design and security."
      imgheight="100px"
      altrow
    />

    <Herotext
      iconurl="25-years-shaping-large-complicated-projects.svg"
      heading="25 years shaping large complicated projects"
      subheading="Our background originates in research and psychology with experience in statistics. This knowledge of research and ethics around data is the foundation of every project. After working for twenty years with government and on large health projects we understand the contractual requirements for reporting, legal and privacy constraints and meeting security standards."
    />

    <Heroblacktext
      heading="We review projects continually as they evolve"
      background-url="/We-review-projects-continually-as-they-evolve.jpg"
    />

    <Herotext
      iconurl="Process_diagram.svg"
      subheading="When we design and build digital systems we look at the short and long term outcomes. We build systems that can grow and expand as the information needs and challenges change within a business or organisation. Clients may require more efficiencies as they grow, or make additions and changes to a process. We continually work together with clients to assess, manage and ensure the system meets their current needs."
      altrow
    />

    <CTA
      text="Learn more about who we work with"
      buttonText="Who we help"
      buttonLink="/whowehelp"
     />
  </div>

</template>

<script>

import backgroundUrl from '~/assets/images/test.jpg'
export default {
  data() {
    return { backgroundUrl }
  }
}

</script>

<style>

  .logicly-footer {
    --bg-opacity: 1;
    background-color: #F6F5F1;
    background-color: rgba(246, 245, 241, var(--bg-opacity));
  }

</style>
