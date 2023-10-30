<template >
    <div class="flex flex-col lg:flex-row items-center lg:mt-10 px-10 lg:px-0 pb-20 bg-got-gray max-w-1100">
        <img width="250" height="299" class="w-full" src="../assets/map.webp" />

        <div class="lg:pl-75px">
            <h1 class="text-3xl lg:flex gap-4 align-items-center font-bold text-left lg:text-center font-sans">
                Crimes of West of Essos <span
                    class="bg-got-sand w-10 h-10 rounded-full border-8 border-white text-base text-center ">01</span>
            </h1>
            <p class="mt-6">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                sadipscing
                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem
                ipsum
                dolor sit amet.
            </p>
            <a class=" flex gap-1 items-center mt-8 underline group hover:text-got-red hover:cursor-pointer" href="#">Read full
                reporting <svg class="h-4 mt-1 group-hover:fill-got-red " xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 25 25">
                    <path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                        data-name="Right" />
                </svg></a>
                <div class="lg:hidden mt-10">
                    <h2 class="flex items-center gap-1 text-xl font-bold w-fit mb-4 font-sans">Navigate by the Profession <svg viewBox="0 0 15px 15px" class="h-4 mt-2">
                    <line x1="0" y1="7.5" x2="12" y2="7.5" stroke-width="2px" stroke="black" />
                </svg></h2>
                <ul class="grid grid-cols-2">
                    <li v-for="profession in professions" :key="profession.name" class="mb-2">
                        <a href="#" class="flex gap-1 items-center underline group hover:text-got-red hover:cursor-pointer">
                            {{ profession.name }} <svg class="h-4 mt-1 group-hover:fill-got-red " xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 25 25">
                    <path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                        data-name="Right" />
                </svg>
                        </a>
                    </li>
                </ul>
                </div>
           

    </div>

</div>
</template>

<script>
export default {
    props: {
        professions: Array
    },
}
</script>