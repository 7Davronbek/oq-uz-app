<template lang="Footer">
    <div class="Footer">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 mx-auto">
                    <div class="logo"><img src="assets/image/logoBig.svg" /></div>

                    <h1>ничего лишнего</h1>

                    <div class="storeWrap">
                        <img src="assets/image/googleplay.png" />
                        <img class="m-0" src="assets/image/appstore.png" />
                    </div>

                    <div class="socialWrap">
                        <img src="assets/image/tg.svg" />
                        <img src="assets/image/insta.svg" />
                        <img class="m-0" src="assets/image/fb.svg" />
                    </div>

                    <h6>@OQ. 2022 – All right reserved.</h6>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'FooterVue'  
}
</script>
<style lang="scss">
    .Footer {
        background-image: url('../assets/footer.png');
        background-size: cover;
        background-repeat: no-repeat;
        text-align: center;

        .logo {
            padding: 170px 0 29px;
        }

        h1 {
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 500;
            font-size: 35.3962px;
            line-height: 42px;
            margin-bottom: 56px;
            color: #FFFFFF;
        }

        .storeWrap {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 53px;

            img {
                width: 200px;
                margin-right: 24px;
                cursor: pointer;
            }
        }

        .socialWrap {
            margin-bottom: 53px;

            img {
                margin-right: 12px;
                cursor: pointer;
            }
        }

        h6 {
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 500;
            font-size: 17px;
            line-height: 20px;
            margin-bottom: 50px;
            color: #FFFFFF;
        }
    }
</style>