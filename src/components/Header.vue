<template lang="Header">
    <div class="Header">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <h1>OQ, одно приложение тысячи преимуществ</h1>
                    <h2>Мобильный оператор нового поколения с новейшей технологией eSIM.</h2>
                    <div class="btnWrap">
                        <div class="myBtn full">Скачать приложение</div>
                        <div class="myBtn">Интро</div>
                    </div>
                </div>

                <div class="col-lg-6 ms-auto right">
                    <img src='assets/image/1.jpg' class='w-100' alt='oq' />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderVue",
};
</script>

<style lang="scss">
.Header {
    padding: 80px 0 100px;

    h1 {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 600;
        font-size: 68px;
        line-height: 81px;
    }

    h2 {
        margin: 30px 0 56px;
        font-family: 'Gilroy-light';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 36px;
        color: #000000;
    }

    .btnWrap {
        display: flex;
        align-items: center;

        .myBtn {
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;
            color: #000000;
            padding: 20px 43px;
            border: 1px solid #000000;
            border-radius: 10px;
            cursor: pointer;

            &.full {
                padding: 20px;
                margin-right: 24px;
                background-color: #000;
                color: #fff;
            }
        }
    }

    .right {
        height: 450px;
        text-align: right;

        img {
            border-radius: 30px;
            width: 80% !important;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>
