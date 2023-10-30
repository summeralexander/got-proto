<template>
    <div class="bg-got-gray flex flex-col items-center max-w-full">
        <CountryHeader :professions = "professions" />
        <VictimSpotlight :victims="victims" />
    </div>
</template>

<script>
import CountryHeader from '~/components/CountryHeader.vue'
import VictimSpotlight from '~/components/VictimSpotlight.vue'

export default {
    components: {
        CountryHeader,
        VictimSpotlight
    },
    props: {
        victims: Array,
        professions: Array
    },
}
</script>