<template>
    <div>
        <Hero
          heading="OUR TEAM"
          subheading="We share our diverse skills and knowledge"
          background-url="/Logicly-Our-team-header-we-share-our-diverse-skills-and-knowledge.jpg"
          overlay
        />
        <Herotext
          iconurl="Our-team-approaches-problems-from-different-angles.svg"
          heading="Our team approaches problems from different angles"
          subheading="Our diverse skills across strategic thinking, UX design, technology, management and customer support ensures we collectively bring a wholistic approach to every project. This creative thinking helps us conceptualise our client’s vision and provide different options to solvetheir complex information problem."
          altrow
        />

        <!-- TODO fix formatting -->
        <page-section>
          <h1 class="text-2xl font-extrabold text-center pb-8 pt-8">Everyone brings something different to the team</h1>
          <div class="grid grid-cols-12 pb-8">
            <div class="col-span-12 xl:col-span-8 col-start-1 xl:col-start-3 grid grid-cols-3 grid-rows-3 gap-4">
              <div class="items-center col-span-1">
                <img src="/Everyone_brings_something_different_to_the_team/Researchers.svg" class="h-16 md:h-20 m-auto" />
                <h3 class="text-center text-xs md:text-base">Researchers</h3>
              </div>
              <div class="items-center col-span-1">
                <img src="/Everyone_brings_something_different_to_the_team/Psychologists.svg" class="h-16 md:h-20 m-auto" />
                <h3 class="text-center text-xs md:text-base">Psychologists</h3>
              </div>
              <div class="items-center col-span-1">
                <img src="/Everyone_brings_something_different_to_the_team/Mathematicians.svg" class="h-16 md:h-20 m-auto" />
                <h3 class="text-center text-xs md:text-base">Mathematicians</h3>
              </div>
              <div class="items-center col-span-1">
                <img src="/Everyone_brings_something_different_to_the_team/Project_managers.svg" class="h-16 md:h-20 m-auto" />
                <h3 class="text-center text-xs md:text-base">Project Managers</h3>
              </div>
              <div class="items-center col-span-1">
                <img src="/Everyone_brings_something_different_to_the_team/Support.svg" class="h-16 md:h-20 m-auto" />
                <h3 class="text-center text-xs md:text-base">Support</h3>
              </div>
              <div class="items-center col-span-1">
                <img src="/Everyone_brings_something_different_to_the_team/Security_experts.svg" class="h-16 md:h-20 m-auto" />
                <h3 class="text-center text-xs md:text-base">Security experts</h3>
              </div>
              <div class="items-center col-span-1">
                <img src="/Everyone_brings_something_different_to_the_team/User_experience_design_(UX).svg" class="h-16 md:h-20 m-auto" />
                <h3 class="text-center text-xs md:text-base">User experience design (UX)</h3>
              </div>
              <div class="items-center col-span-1">
                <img src="/Everyone_brings_something_different_to_the_team/Interface_design_(UI).svg" class="h-16 md:h-20 m-auto" />
                <h3 class="text-center text-xs md:text-base">Interface design (UI)</h3>
              </div>
              <div class="items-center col-span-1">
                <img src="/Everyone_brings_something_different_to_the_team/developers.svg" class="h-16 md:h-20 m-auto" />
                <h3 class="text-center text-xs md:text-base">Developers</h3>
              </div>
            </div>
          </div>
        </page-section>


        <page-section altrow>

          <div class="pb-4">
            <h1 class="text-2xl font-extrabold text-center pb-8 pt-8">Meet the people who will advise and manage your projects</h1>
          </div>

          <!-- Main grid -->
          <div class="flex flex-col grid grid-cols-3 col-gap-4">
            <!-- Sub grid 1 -->
            <div class="col-span-3 xl:col-span-1 xl:col-start-1 pb-12">

              <div class="col-span-1 pb-6">
                <img src="/300.png" class="p-0">
              </div>

              <div class="col-span-1">
                <h2 class="text-xl xl:text-lg font-bold">
                  Adam Clarke
                </h2>
              </div>

              <div class="col-span-1 pb-2">
                <h3 class="text-sm font-bold">
                  Director / Senior Consultant / CTO <br>
                  (B.A. (Hons))
                </h3>
              </div>
              <br class="hidden xl:block">

              <div class="col-span-1 text-sm">
                <p class="pb-2">
                  Adam has worked in information technology, data management, and software delivery since 1991 while a Psychology student at Melbourne University. For 10 years prior to that it was his hobby. Adam has a diverse set of skills including research methods, programming, database design, internet technologies, and data analysis. He is a national leader in the design, implementation and support of IT systems for minimum data sets. Adam co-founded Logicly (then Strategic Data) in 1996 and is also our CTO and technical lead, managing all the work to keep systems relevant, running, and consistent with their security requirements.
                </p>
                <p>
                  When away from work Adam can often be found attending local gigs and music festivals. He has also recently rekindled a childhood obsession with planted aquaria, largely in lieu of the former, thanks to COVID-19.
                </p>
              </div>
            </div>
            <!-- End subgrid -->

            <!-- Sub grid 2 -->
            <div class="col-span-3 xl:col-span-1 xl:col-start-2 pb-12">

              <div class="col-span-1 pb-6">
                <img src="/300.png" class="p-0">
              </div>

              <div class="col-span-1">
                <h2 class="text-xl xl:text-lg font-bold">
                  Andrew Gordon
                </h2>
              </div>

              <div class="col-span-1 pb-2">
                <h3 class="text-sm font-bold">
                  Business Development Manager <br>
                  B.A., Grad. Dip. App. Psych., M.Mgt. (Org. Sys.)
                </h3>
              </div>

              <div class="col-span-1 text-sm">
                <p class="pb-2">
                  Prior to commencing at Logicly (then Strategic Data) Andrew worked as a psychologist and in management in vocational rehabilitation. His work at Logicly has covered project management, consulting and business management. As we have grown, his focus is now HR, compliance, finance and overseeing the administration and accounts team.
                </p>
                <p>
                  When not at work, he likes to be out on the bay sailing, up the country cycling, overseas travelling or in the mountains skiing, otherwise he’ll be having a quiet drink in a local bar.
                </p>
              </div>
            </div>
            <!-- End subgrid -->

            <!-- Sub grid 3 -->
            <div class="col-span-3 xl:col-span-1 xl:col-start-3">

              <div class="col-span-1 pb-6">
                <img src="/300.png" class="p-0">
              </div>

              <div class="col-span-1">
                <h2 class="text-xl xl:text-lg font-bold">
                  Simon Palmer
                </h2>
              </div>

              <div class="col-span-1 pb-2">
                <h3 class="text-sm font-bold">
                  Director / Senior Consultant <br>
                  B.A. (Hons), B. Com., M.A. (App. Psy.)
                </h3>
              </div>
              <br class="hidden xl:block">

              <div class="col-span-1 text-sm">
                <p class="pb-2">
                  Prior to co-founding Logicly (then Strategic Data), Simon's professional career shifted from social research and program evaluation to issues of computer-interface design, usability and information presentation. For 15 years he was a registered psychologist, bringing a counseling-influenced approach to the collection, management, analysis and presentation of data. Simon’s particular expertise is in identifying the information required to support an objective, and specifying technical infrastructure to enable the collection and application of relevant data.
                </p>
                <p>
                  In his normal life Simon likes playing the guitar, riding his bike, and discussing off-beat topics over fine dinners.
                </p>
              </div>
            </div>
            <!-- End subgrid -->

          </div>
        </page-section>


    <CTA
      text="View projects we've collaborated on"
      buttonText="Projects"
      buttonLink="/projects"
     />
    </div>

</template>

<script>
</script>

<style>
</style>
