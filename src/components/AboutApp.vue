<template lang="AboutApp">
    <div class="AboutApp">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-10 mx-auto">
                    <div class="row">
                        <div class="col-lg-6 text-center myCol">
                            <img src='assets/image/iphoneBig.png' class='' alt='oq' />
                            <div class="circle"></div>
                        </div>
                        <div class="col-lg-5 ms-auto">
                            <h1>О приложении</h1>
                            <h2>Настрой телефон 
                                под себя</h2>
                                <h3></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AboutApp'
}
</script>
<style lang="scss">
.AboutApp {
    padding: 120px 0 180px;

    .myCol {
        position: relative;

        .circle {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #F5F5F5;
            width: 500px;
            height: 500px;
            z-index: -1;
            border-radius: 50%;
        }
    }

    h1 {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
    }

    h2 {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 58px;
        color: #000000;
        margin: 16px 0 58px;
    }
}
</style>