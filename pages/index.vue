<template>
    <TopContainer :professions="professions" :victims="victims" />
    <VictimTable :data="victims" :columns="gridColumns" :regions="regions" :professions="professions" />
</template>


<script>
import TopContainer from '~/components/TopContainer.vue'
import CountryHeader from '~/components/CountryHeader.vue'
import VictimSpotlight from '~/components/VictimSpotlight.vue'
import VictimTable from '~/components/VictimTable.vue'

export default {
    components: {
        CountryHeader,
        VictimSpotlight,
        VictimTable,
        TopContainer
    },
    data: () => ({
        gridColumns: ['name', 'region', 'profession'],
        victims: [
            {name: 'Test User', region: 'North America', profession: 'Lawyer', sideProfession: 'Politician', image: "https://i.pravatar.cc/70", description: "Lorem ipsum blablalblalbl", alsoTargeted: [{name: 'B', relation: "Son"}, {name: 'C', relation: "Father"}]},
            {name: 'User Test', region: 'South America', profession: 'Politician', sideProfession: 'Activist', image: "https://i.pravatar.cc/70?id=2" , description: "Lorem ipsum blablalblalbl", alsoTargeted: [{name: 'A', id: 1}, {name: 'C', relation: "Sister"}]},
            {name: 'C', region: 'Europe', profession: 'Journalist', sideProfession: 'Other', image: "https://i.pravatar.cc/70?id=3" , description: "Lorem ipsum blablalblalbl", alsoTargeted: [{name: 'A', id: 1}, {name: 'B', relation: "Son"}]},
            {name: 'D', region: 'Asia', profession: 'Activist', sideProfession: 'Lawyer', image: "https://i.pravatar.cc/70?id=4" , description: "Lorem ipsum blablalblalbl", alsoTargeted: [{name: 'E', relation: "Morther"}]},
            {name: 'E', region: 'Africa', profession: 'Doctor', sideProfession: 'Politician', image: "https://i.pravatar.cc/70?id=5" , description: "Lorem ipsum blablalblalbl", alsoTargeted: [{name: 'D', relation: "Son"}]},
            {name: 'F', region: 'Australia', profession: 'Other',  sideProfession: 'Lawyer', image: "https://i.pravatar.cc/70?id=6" , description: "Lorem ipsum blablalblalbl", alsoTargeted: [{name: 'G', relation: "Son"}]},
            {name: 'G', region: 'North America', profession: 'Lawyer',  sideProfession: 'Journalist', image: "https://i.pravatar.cc/70?id=7" , description: "Lorem ipsum blablalblalbl", alsoTargeted: [{name: 'F', relation: "Mother"}]},
            {name: 'H', region: 'South America', profession: 'Politician', sideProfession: 'Activist', image: "https://i.pravatar.cc/70?id=8" , description: "Lorem ipsum blablalblalbl", alsoTargeted: [{name: 'I', relation: "Father"}]},
            {name: 'I', region: 'Europe', profession: 'Journalist', sideProfession: 'Politician', image: "https://i.pravatar.cc/70?id=9" , description: "Lorem ipsum blablalblalbl", alsoTargeted: [{name: 'H', relation: "Son"}]},
        ],
        regions: [
            { name: 'North America' },
            { name: 'South America' },
            { name: 'Europe' },
            { name: 'Asia' },
            { name: 'Africa' },
            { name: 'Australia' },
        ],
        professions: [
            { name: 'Lawyer' },
            { name: 'Politician' },
            { name: 'Journalist' },
            { name: 'Activist' },
            { name: 'Doctor' },
            { name: 'Other' },
        ]
    }),
}
</script>