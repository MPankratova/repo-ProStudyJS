Vue.component('filter-el', {
    data(){
      return {
          userSearch: ''
      }
    },
    template: `<form action="#" class="searchWrap" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                <div class="searchBrowse">
                    Browse <i class="fas fa-caret-down"></i>
                </div>            
                <input placeholder="Search for Item..." type="text" class="search-field" v-model="userSearch">
                <button type="submit" >
                    <i class="fas fa-search"></i>
                </button>
            </form>`
})

// Vue.component('filtered', {
//     props: ['value'],
//     template: `<input type="text" class="search-field"
//                     v-bind:value="value"
//                     v-on:input="$emit('input', $event.target.value)">`
//
// });
//
// Vue.component('error', {
//     // props: ['notError'],
//     template: `<div> ERROR - the request to the server was failed - ERROR </div>`
//
// });