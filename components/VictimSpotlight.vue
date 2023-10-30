<template>
    <div class="bg-got-gray flex flex-col px-10 lg:px-0 items-center max-w-1450 w-full">
        <h2 class=" flex items-center gap-1 text-xl font-bold w-full lg:w-fit font-sans">Spotlight of the Victims <svg
                viewBox="0 0 15px 15px" class="h-4 w-4 mt-2">
                <line x1="0" y1="7.5" x2="12" y2="7.5" stroke-width="2px" stroke="black" />
            </svg></h2>
        <div class="grid mt-8 gap-8 lg:gap-x-10 lg:gap-y-10 mb-8 lg:mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4  w-full">
            <div v-for="victim in spotlightVictims" :key="victim.id" class="bg-white  pt-8 flex flex-col">
                <div class="flex mb-4 gap-4 px-8">
                    <img :src="victim.image" :alt="victim.name" class="rounded-full" />
                    <div class="flex flex-col">
                        <h3 class="text-xl lg:text-lg font-bold font-sans">{{ victim.name }}</h3>
                        <p class="text-base text-slate-500">{{ victim.profession }}</p>
                    </div>
                </div>
                <p class="px-8">{{ victim.description }}</p>
                <div class="mt-8 px-8">
                    <span class="font-bold">Also targeted:</span>
                    <ul class="mt-4">
                        <li v-for="target in victim.alsoTargeted" :key="target.name" class="flex gap-1">
                                <svg class="h-4 mt-1"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                                    <path
                                        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                                        data-name="Right" />
                                </svg>
                                <span> {{ target.name }} </span>
                                <span> {{ target.relation }}</span>
                        </li>
                    </ul>
                </div>
                <a href="#" class="flex w-40 p-4 gap-1 ml-auto mt-8 bg-got-red text-white font-bold hover:bg-black">Read More <svg class="h-5 mt-1 fill-white"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                                    <path
                                        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                                        data-name="Right" />
                                </svg></a>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    props: {
        victims: Array
    },
    computed: {
        spotlightVictims() {
            return this.victims.slice(0, 8)
        }
    },
}

</script>
