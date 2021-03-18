<template>
    <page-section :altrow="altrow">
            <div class="col-span-11 row-span-3 mb-5">
                <div style="height:570px" class="object-contain object-center w-full bg-cover" :style="{ backgroundImage: `url(${imageurl})` }">
                        <div class="relative grid-rows-4 test" style="height: 570px">
                            <div style="height: 570px" class="relative z-10 grid font-bold text-center text-white">
                            <div class="row-span-1 row-start-4 text-xl">{{ text }}</div>
                            </div>
                        </div>
                    </div>
                </div>
    </page-section>
</template>

<script>
export default {
    name: "ImageUrl",
    props: {
    text: String,
    imageurl: String,
    altrow: Boolean,
    }
};
</script>

<style scoped>
.test {
    background-color: rgba(0, 0, 0, 0.5)!important;
    z-index:10;
}
</style>