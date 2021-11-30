<template>

    <div class="flex flex-col h-full">
    
        <div class="flex content-center justify-center customflex">
            <div class="img-container">
                <img src="~/assets/images/logicly_splash_animation_800600.gif" class="object-contain w-full h-full" />
            </div>
        </div>   
        <div class="flex content-center customflex bg-logiclylightgrey">
            <div class="flex justify-center flex-auto align-middle text-logiclytextgrey">
            
                <div class="self-center">
                    <h1 class="pb-4 text-3xl md:text-5xl">Strategic Data is now called Logicly.</h1><br />
                    <h2 class="text-sm md:text-2xl">Why is Strategic Data now called Logicly? We have  <NuxtLink to="/whylogicly"><span class="font-semibold text-logiclyorange">a good reason</span></NuxtLink>.</h2><br />
                    <h2 class="text-sm md:text-2xl">Trust us and just want to get on with things? Proceed straight to our new website <NuxtLink to="/whylogicly"><span class="font-semibold text-logiclyorange">here</span><br /> or wait to be automatically redirected in {{ timerCount }}...</NuxtLink>
                    </span></h2>
                </div>
                
            </div>
            
        </div>

    </div>

</template>

<script>
export default {
    layout: 'splashpage',
    created() {
        setTimeout( () => this.$router.push({ path: '/'}), 15000);
    },
    head() {
    return {
        title: "Strategic Data is now called Logicly · Logicly"
    };
    },
    data() {
        return {
            timerCount: 15
        }
    },
    watch: {

        timerCount: {
            handler(value) {

                if (value > 0) {
                    setTimeout(() => {
                        this.timerCount--;
                    }, 1500);
                }

            },
            immediate: true // This ensures the watcher is triggered upon creation
        }

    }
};

</script>

<style>

div#__nuxt, div#__layout {
    height:100vh;
    }

.customflex {
    flex: 1 1 50%;
}

.imgcontainer {
    align-self: center;
    width: 100%;
    height: 50vh;

}
</style>
