<template lang="Navbar">
    <div class="Navbar">
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <router-link to="/" class="logo">
                        qweqe
                        <img src="assets/image/logo.svg" alt="oq" />
                    </router-link>
                </div>
                <div class="col-3 ms-auto">
                    <a href="#" class="myBtn">
                        Скачать приложение
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ApNavbar'
}
</script>
<style lang="scss">
.Navbar {
}
</style>