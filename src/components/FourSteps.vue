<template lang="FourSteps">
    <div class="FourSteps">
        <div class="container">
            <div class="row">

                <div class="col-12 d-flex align-items-center justify-content-center">

                    <div class="cards">
                        <h1>1</h1>
                        <h2>Скачайте 
                            приложение</h2>
                    </div>
                    <div class="line"><img src='assets/image/circles.png'  alt='oq' /></div>

                    <div class="cards">
                        <h1>2</h1>
                        <h2>Настройте 
                            тариф</h2>
                    </div>
                    <div class="line"><img src='assets/image/circles.png'  alt='oq' /></div>

                    <div class="cards">
                        <h1>3</h1>
                        <h2>Пройдите 
                            идентификацию</h2>
                    </div>
                    <div class="line"><img src='assets/image/circles.png'  alt='oq' /></div>

                    <div class="cards">
                        <h1>4</h1>
                        <h2>Начните 
                            общаться</h2>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "FourSteps"
}
</script>
<style lang="scss">
.FourSteps {
    padding-bottom: 50px;

    .col-12 {
        background: #F5F5F5;
        border-radius: 30px;
        padding: 70px 30px;

        .cards {
            width: 160px;

            h1 {
                font-family: 'Gilroy';
                width: 50px;
                height: 50px;
                background-color: #000;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-style: normal;
                font-weight: 500;
                font-size: 24px;
                line-height: 28px;
                color: #FFFFFF;
                margin: auto;
            }

            h2 {
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 500;
                font-size: 24px;
                line-height: 28px;
                text-align: center;
                color: #000000;
                margin-top: 24px;
            }
        }

        .line {
            margin: 0 39px;
        }
    }
}
</style>