<template lang="Constructor">
    <div class="Constructor">
        <div class="container">
            <div class="row align-items-center">
                        <div class="col-lg-6 myCol">
                            <div class="cards">
                                <div class="img"><img src="assets/image/1.jpg" alt="oq" /></div>
                                <div>
                                    <h1>Конструктор 
                                        </h1>
                                        <h1>тарифов</h1>
                                        <h2>Настрой тариф под свои нужды.
                                            Никаких лишних трат.</h2>
                                        </div>
                            </div>
                        </div>
                        <div class="col-lg-6 myCol">
                            <div class="cards">
                                <div class="img"><img src="assets/image/1.jpg" alt="oq" /></div>
                                <div>
                                    <h1>Общение 
                                        </h1>
                                        <h1>без границ</h1>
                                        <h2>Общайся со своими близкими 
                                            и ни о чем не волнуйся.</h2>
                                        </div>
                            </div>
                        </div>
                        <div class="col-lg-6 ">
                            <div class="cards">
                                <div class="img"><img src="assets/image/1.jpg" alt="oq" /></div>
                                <div>
                                    <h1>Интеграция 
                                        </h1>
                                        <h1>MYID</h1>
                                        <h2>Для надежности ваших данных,
                                            используем систему MYID.</h2>
                                        </div>
                            </div>
                        </div>
                        <div class="col-lg-6 ">
                            <div class="cards">
                                <div class="img"><img src="assets/image/1.jpg" alt="oq" /></div>
                                <div>
                                    <h1>В ногу 
                                        </h1>
                                        <h1>со временем</h1>
                                        <h2>Наша система настроена под новую технологию eSim.</h2>
                                        </div>
                            </div>
                        </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ConstructorVue'
}
</script>
<style lang="scss">
.Constructor {
    padding: 40px 0 180px;

    .myCol {
        margin-bottom: 100px;
    }

    .cards {
        display: flex;
        align-items: center;
        padding: 10px 50px 10px 10px;

        .img {
            width: 170px;
            height: 170px;
            margin-right: 30px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 30px;
            }
        }

        h1 {
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 700;
            font-size: 28px;
            line-height: 34px;
            color: #000000;
        }

        h2 {
            margin-top: 16px;
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #000000;
        }
    }
}
</style>