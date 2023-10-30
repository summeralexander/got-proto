<template>
    <div class="flex flex-col justify-center items-center px-8 w-full">
        <h2 class=" flex items-center mt-10 lg:mt-20 mb-10 gap-1 text-2xl font-bold w-full lg:w-fit font-sans">All Victims
            of
            West in Essos <svg viewBox="0 0 15px 15px" class="h-4 w-4 mt-2">
                <line x1="0" y1="7.5" x2="12" y2="7.5" stroke-width="2px" stroke="black" />
            </svg></h2>
        <div class="flex flex-col gap-4 lg:flex-row w-full max-w-1000">
            <form id="search" class="grow relative"><input placeholder="Search" name="query" v-model="filterKey"
                    class="w-full py-2 border-b-2 text-slate-500"><svg class="absolute h-5 bottom-2 right-0"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
                    <path
                        d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
                </svg>
            </form>
            <template v-for="(column, index) in  regionsAndProfessions">
                <select v-if="index == 'professions'" v-model="professionsFilterKey" class=" grow bg-white py-2 border-b-2 text-slate-500">
                    <option disabled class="" value="">{{ capitalize(index) }}</option>
                    <option v-for="option in column"> {{ option.name }} </option>
                </select>
                <select v-if="index == 'regions'" v-model="regionsFilterKey" class=" grow bg-white py-2 border-b-2 text-slate-500">
                    <option disabled class="" value="">{{ capitalize(index) }}</option>
                    <option v-for="option in column"> {{ option.name }} </option>
                </select>
            </template>

        </div>

        <div v-if="filteredData.length" :filteredData=fileteredData class="max-w-1000 w-full ">
                <div v-for="entry in filteredData" class="flex flex-col lg:flex-row grow mt-4 pt-4 lg:py-4 border-2 boder-slate-500">
                    <div
                        class="grid grid-rows-2  text-center lg:text-start grid-cols-3 lg:items-start items-center basis-3/4 grow lg:pl-5">
                        <span
                            class="lg:pl-8 col-span-full row-span-1 lg:col-span-1 self-end mb-6 lg:mb-0 font-sans w-full text-xl text-black font-bold">{{
                                entry.name }}</span>
                        <span class="text-center text-black lg:text-slate-500 lg:pl-8 lg:text-start lg:self-start row-start-2">{{ entry.region }}</span>
                        <span class="seperator lg:pl-8 h-full text-center flex justify-center lg:justify-start items-center lg:text-start lg:self-center lg:row-span-full">{{ entry.profession }}</span>
                        <span class="seperator lg:pl-8 h-full text-center flex justify-center lg:justify-start items-center lg:text-start lg:self-center lg:row-span-full">{{ entry.sideProfession }}</span>
                            </div>
                    <div class="basis-full lg:basis-1/4 grow">
                        <a href="#"
                            class="flex  justify-center lg:justify-start w-44 p-3 lg:p-6 gap-4 mr-auto ml-auto lg:mr-0 mt-6 lg:mt-auto lg:mb-auto bg-got-red text-white font-bold hover:bg-black">Read
                            More <svg class="h-5 mt-1 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                                <path
                                    d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                                    data-name="Right" />
                            </svg></a>
                        </div>
                </div>
            </div>
        <p v-else>No matches found.</p>
        <a href="#" class="flex w-40 p-4 gap-1 ml-auto mr-auto mt-10 bg-black text-white font-bold hover:bg-got-red"> Show
            more <svg class="h-5 mt-1 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                <path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                    data-name="Right" />
            </svg></a>
    </div>
</template>

<script>
export default {
    props: {
        data: Array,
        columns: Array,
        regions: Array,
        professions: Array
    },
    data() {
        return {
            filterKey: '',
            sortKey: '',
            regionsFilterKey: '',
            professionsFilterKey: '',
            sortOrders: this.columns.reduce((o, key) => ((o[key] = 1), o), {})
        }
    },
    computed: {
        regionsAndProfessions() {
            return { regions: this.regions, professions: this.professions }
        },
        fileteredColumns() {
            return this.columns.filter((key) => key !== 'name')
        },
        filteredData() {
            
            const sortKey = this.sortKey
            const filterKey = this.filterKey && this.filterKey.toLowerCase()
            const regionsFilterKey = this.regionsFilterKey && this.regionsFilterKey.toLowerCase()
            const professionsFilterKey = this.professionsFilterKey && this.professionsFilterKey.toLowerCase()
            const order = this.sortOrders[sortKey] || 1
            let data = this.data
            if (filterKey) {
                data = data.filter((row) => {
                    return Object.keys(row).some((key) => {
                        return String(row[key]).toLowerCase().indexOf(filterKey) > -1
                    })
                })
            }
            if(regionsFilterKey || professionsFilterKey) {
                const filterCol = professionsFilterKey != ''? 'profession' : 'region';
                const filterKey = professionsFilterKey != ''? professionsFilterKey: regionsFilterKey ;
                data = data.filter((row) => {

                    console.log(filterCol)
                    console.log(filterKey)

                    return Object.keys(row).some((key) => {
                        if (key == filterCol) {
                            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
                        }   
                    })
                })
                
            }

            if (sortKey) {
                data = data.slice().sort((a, b) => {
                    a = a[sortKey]
                    b = b[sortKey]
                    return (a === b ? 0 : a > b ? 1 : -1) * order
                })
            }
            return data
        }
    },
    methods: {
        sortBy(key) {
            this.sortKey = key
            this.sortOrders[key] = this.sortOrders[key] * -1
        },
        capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
        }
    }
}
</script>