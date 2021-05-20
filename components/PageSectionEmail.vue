<template>
<div class="h-full bg-logiclybeige">
  <div class="object-contain object-center w-full h-full bg-cover"
  :class="{ 'bg-black bg-opacity-50': overlay}">
    <div class="container h-full mx-auto">
      <div class="grid grid-cols-12 subscriberesponsive">
        <div class="grid items-end grid-cols-4 col-span-10 col-start-2 gap-4 px-16 py-32 md:px-32 lg:px-0 ">
          <div class="col-span-4 lg:col-span-1 -mr-0 lg:-mr-6">
            <div>
              <h2 class="pb-2 text-lg font-semibold text-logiclytheme4">
                New thinking & digital updates
              </h2>
            </div>
            <div class="pb-4 lg:pb-0 text-logiclytextgrey">
              Discover new ways of thinking and innovative digital systems to solve complex information challenges
            </div>
          </div>
          <div id="mc_embed_signup" class="grid grid-cols-6 col-span-4 lg:col-span-3">
            <!-- Begin Mailchimp Signup Form -->
            <form action="https://strategicdata.us1.list-manage.com/subscribe/post?u=663055cd81f98613f231b3880&amp;id=dcc63d296b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="grid grid-cols-6 col-span-6 validate" target="_blank" novalidate>
              <div class="col-span-6 lg:col-span-2 grid content-end mr-4 pb-6 lg:pb-0 lg:pl-6 mc-field-group">
                <span class="self-end block">
                  <label class="hidden" for="mce-NAME">Name</label>
                  <input type="text" value="" name="NAME" placeholder="Name" id="mce-NAME" class="block w-full placeholder-opacity-100 bg-transparent border-b placeholder-logiclytextgrey border-logiclyorange required" />
                </span>
              </div>
              <div class="col-span-6 lg:col-span-2 grid content-end mr-4 pb-8 lg:pb-0 mc-field-group">
                <span class="self-end block">
                  <label class="hidden" for="mce-EMAIL">Email Address</label>
                  <input type="email" placeholder="Email" value="" name="EMAIL" id="mce-EMAIL" class="block w-full placeholder-opacity-100 bg-transparent border-b placeholder-logiclytextgrey border-logiclyorange required email">
                </span>
              </div>
              <div class="self-end block clear">
                <button class="block h-12 px-8 border-2 border-logiclyorange text-logiclytheme2">
                  <input class="font-semibold" type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" style="background:none">
                </button>
              </div>
            </form>
            <!-- End Mailchimp Signup form -->
          </div>
        </div>
      </div>
      <div class="col-span-2">
        <div id="mce-responses" class="clear">
          <div class="response" id="mce-error-response" style="display:none"></div>
          <div class="response" id="mce-success-response" style="display:none"></div>
        </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_663055cd81f98613f231b3880_dcc63d296b" tabindex="-1" value=""></div>
      </div>
      <!--End mc_embed_signup-->
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "PageSectionEmail",
  props: {
    altrow: Boolean,
    normal: Boolean,
    overlay: Boolean,
    nooverlay: Boolean,
    black: Boolean,
    noblack: Boolean,
  }
};
</script>
<style scoped>

@media only screen and (max-width: 530px) {
  .subscriberesponsive div {
    margin-left: -1rem;
    margin-right: -1rem;
  }
}

@media only screen and (max-width: 430px) {
  .subscriberesponsive div {
    margin-left: -1.2rem;
    margin-right: -1.2rem;
  }
}
</style>
