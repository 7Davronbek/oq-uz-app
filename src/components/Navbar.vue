<template lang="Navbar">
    <div>
        navabr
        <button v-on:click="display">Alert</button>

        <h3 v-if="show">Conditional true</h3>
    </div>
</template>
<script>
export default {
    name: 'ApNavbar',
    methods: {
        hello() {
            alert("HELLOG")
        },
        display() {
            this.show = !this.show
        }
    },
    data() {
        return {
            show: true
        }
    },
}
</script>
<style lang="Navbar">
    
</style>