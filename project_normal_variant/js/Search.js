Vue.component('searchform', {
    props: ['value'],

    template: `
            <form action="#" class="search-form" @submit.prevent="$root.$refs.products.filter(value)">
                <input type="text" class="search-field" v-bind:value="value"  v-on:input="$emit('input', $event.target.value)"></input>
                <button class="btn-search" type="submit">
                    <i class="fas fa-search"></i>
                </button>
            </form>      
    `
})
