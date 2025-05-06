<template>
  <div>
    <Hero
      heading="ACCESSIBILITY"
      subheading="Designed to meet the standard for web accessibility"
      background-url="Accessibility-header.jpg"
      overlay
    />

    <page-section altrow class="lg:py-8">
      <div class="flex justify-center ">
        <div class="justify-center mb-6">
          <img width="120px" src="Accessibility.svg" alt="" />
        </div>
      </div>
      <div class="px-0 xl:px-6">
        <div class="text-center text-logiclytextgrey">
          <h2 class="text-2xl font-semibold leading-snug text-center pb-2 pt-4 xl:pt-8">Accessible to everyone</h2>
          <p class="font-light text-lg text-link">We integrate accessibility into every stage of our work to create inclusive digital experiences that meet diverse user needs and comply with recognised standards.</p>
        </div>
      </div>
    </page-section>


    <page-section>
      <div class="text-logiclytextgrey px-0 lg:px-4 xl:px-6 text-link">
        <h2 class="text-xl font-bold mb-2">We’ve designed our website to meet the Australian Government standard for web accessibility</h2>        
        <p class="font-light mb-4">Our website aims to meet the Australian Government’s web accessibility requirements. These include the <a href="https://www.w3.org/TR/WCAG20/">World Wide Web Consortium’s Web Content Accessibility Guidelines version 2.0 (WCAG 2.0)</a> at level AA.</p>
        <p class="font-light mb-4">We endeavour to ensure that this service is accessible to everyone.</p>
        <p class="font-light mb-8">Please get in touch with us if anything on this site is inaccessible to you or you experience problems accessing our content.</p>

        <h2 class="text-xl font-bold mb-2">Get in touch</h2>        
        <p class="font-light mb-4">If you have any questions or comments you can get in touch with us at <a href="mailto:support@logicly.com.au">support@logicly.com.au </a></p>
      </div>
    </page-section>


  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Accessibility · Logicly"
    };
  },
};
</script>

<style>
.text-link a {
  color:#E6332A!important;
  font-weight: 400;
  text-decoration: none;
}


.text-link a:hover {
  text-decoration: underline;
}

.text-link a:visited {
  color:#A83914!important;
}
</style>
