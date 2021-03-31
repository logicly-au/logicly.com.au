<template>
    <div class="logicly-footer bg-logiclylightgrey text-logiclytextgrey">
        <div class="container mx-auto">
            <footer class="py-16">
            <!-- TODO Add links here -->
                <div class="grid row-end-1 grid-cols-15">
                <div class="col-span-4 text-sm text-left">
                    <!-- TODO Find a tailwindier way of doing this -->
                    <h2 class="text-lg"><logo style="margin-top:-1rem;margin-left:-1rem" /></h2>
                    <a class="block">+61 3 9340 9000</a>
                    <a class="block">info@strategicdata.com.au</a>
                    <span class="block">2nd floor, 51 – 55 Johnston Street,</span>
                    <span class="block">Fitzroy,Victoria 3065, Australia</span>
                    <span class="block">PO Box 1166, Carlton, Victoria 3053, Australia</span>
                </div>
                <div class="grid grid-cols-3 col-span-5 col-start-10 text-sm">
                    <div class="col-span-1">
                        <a class="block" href="">Home</a>
                        <a class="block">Services</a>
                        <a class="block">Solutions</a>
                        <a class="block">How we work</a>
                        <a class="block">Projects</a>
                        <a class="block">Insights</a>
                        <a class="block">Contact us</a>
                    </div>
                    <div class="col-span-1">
                        <a class="block font-bold">Who we help</a>
                        <a class="block">Researchers</a>
                        <a class="block">Government</a>
                        <a class="block">Non-government</a>
                        <a class="block">Health</a>
                        <a class="block">Corporate</a>
                        <a class="block">Educational</a>
                    </div>
                    <div class="col-span-1">
                        <a class="block font-bold">About</a>
                        <a class="block" href="">Our approach</a>
                        <a class="block" href="">Our team</a>
                        <a class="block" href="">Our security</a>
                        <a class="block" href="">Our culture</a>
                    </div>
                </div>
            </div>

                <!-- TODO Find tailwind solution -->
                <div class="grid col-span-15 grid-cols-15" style="align-items: end">
                    <div class="col-span-5 text-sm">
                        <span class="items-end col-span-4 row-start-1 pb-2">
                        <span>Logicly © 2020</span>
                        <NuxtLink to="/privacy" class="text-logiclyorange">Privacy Policy</NuxtLink>
                        </span>
                    </div>
                    <div class="grid h-16 grid-cols-3 col-span-2 col-start-13 pb-1">
                        <div class="col-span-1"><img src="~/assets/images/Facebook.svg" class="h-12"></img></div>
                        <div class="col-span-1"><img src="~/assets/images/Linkedin.svg" class="h-12"></img></div>
                        <div class="col-span-1"><img src="~/assets/images/Twitter.svg" class="h-12"></img></div>
                    </div>
                </div>

            </footer>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
