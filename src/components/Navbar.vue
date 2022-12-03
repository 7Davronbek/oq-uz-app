<template lang="Navbar">
    <div class="Navbar">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-3">
                    <router-link to="/" class="logo">
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
    padding: 30px 0;

    .myBtn {
        font-family: 'Gilroy';
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
        border: 1px solid #000000;
        border-radius: 10px;
        padding: 15px 25px;
    }
}
</style>