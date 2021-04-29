<template>
  <div>

    <Hero
      heading="OUR CULTURE"
      subheading="Everyone has a say"
      background-url="Logicly-Our-culture-header-everyone-has-a-say.jpg"
      overlay
    />

    <Herotext
      iconurl="Together-at-logicly.svg"
      heading="Together at Logicly"
      subheading="We are a diverse team who encourages sharing of knowledge and ideas to always improve, streamline our way of working and add value to the systems we design and build for our clients."
      altrow
    />

    <page-section>
      <h1 class="text-2xl font-semibold pb-10 text-center text-logiclytextgrey">We continually build, share and leverage our knowledge</h1>
      <img src="/Continually-build-share-leverage-our-knowledge.jpg" class="p-0 mb-4"/>

      <div class="grid grid-cols-8 gap-6 lg:gap-x-12 lg:gap-y-10 text-logiclytextgrey mt-8 -mb-16 lg:-mb-10">
        <div class="col-span-8 lg:col-span-4">
          <h2 class="font-bold text-lg pb-1">A family environment</h2>
          <p class="font-light">At Logicly, we create a workplace where everyone feels welcome and encouraged to produce their best work. We have a flat structure where discussions and sharing of ideas is encouraged. The directors join in, listening and contributing to the mix of feedback and suggestions for improvements. The senior staff mentor the less experienced to share their skills and knowledge.</p>
        </div>
        <div class="col-span-8 lg:col-span-4 lg:col-start-5">
          <h2 class="font-bold text-lg pb-1">The freedom to try new things</h2>
          <p class="font-light">Logicly is all about the spirit of exploration, being playful with technology and discovering new ways of doing things that are quicker, easier or more suited for our team or clients. We believe that growth and knowledge comes from having a curious nature and we encourage our team to discover, experiment and learn from our successes, failures and each other.</p>
        </div>
        <div class="col-span-8 lg:col-span-4">
          <h2 class="font-bold text-lg pb-1">Work/life balance</h2>
          <p class="font-light">We believe that quality time outside the office is vital to our employees’ satisfaction at work. That’s why we offer flexitime to support family and study needs. A normal working day and taking time off to remain refreshed is encouraged.</p>
        </div>
        <div class="col-span-8 lg:col-span-4 lg:col-start-5">
          <h2 class="font-bold text-lg pb-1">Pride and openness in what we do</h2>
          <p class="font-light">From the start of a project we’re invested in meeting the needs of our clients and making sure we are the best fit for the work. We give realistic expectations and timings for a project or stage and will always communicate any concerns. We go the extra mile to get the product right.</p>
        </div>
      </div>
    </page-section>

    <page-section>
      <div class="grid grid-cols-12 bg-logiclylightgrey mb-10">
        <div class="col-span-12">
          <img src="/Join-our-team.jpg" class="p-0 mb-5"/>
        </div>
        <div class="col-span-10 col-start-2 mt-4 lg:mt-8">
          <h1 class="mb-4 font-semibold text-xl text-logiclytheme4">Join our team</h1>
        </div>
        <div class="col-span-10 col-start-2 lg:col-span-5 lg:col-start-2 mb-4">
          <h2 class="font-semibold text-lg text-logiclytextgrey pr-0 lg:pr-8">Are you excited about learning, sharing knowledge and solving information problems?</h2>
        </div>
        <div class="col-span-10 col-start-2 lg:col-span-5 lg:col-start-7 pb-12 lg:pb-16 mb-5">
          <p class="text-logiclytextgrey pb-6 lg:pb-8">Logicly is always looking for strategic thinkers, designers and technology experts interested in working collaboratively to develop digital systems that improve businesses, government departments and communities.</p>
          <NuxtLink class="block p-3 text-white text-center font-medium bg-logiclyorange" to="/contactus">Enquire about joining us</NuxtLink>
        </div>
      </div>
    </page-section>

  </div>
</template>

<script>

export default {}

</script>

<style>

</style>
