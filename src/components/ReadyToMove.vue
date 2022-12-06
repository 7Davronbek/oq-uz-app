<template lang="ReadyToMove">
    <div class="ReadyToMove">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <h1>Готов перейти в OQ?</h1>
                    <h2>Готов перейти в OQ?</h2>
                </div>

                <div class="col-lg-10 mx-auto">

                    <div class='phoneWrap'>
                        
                        <div class='phone'><img src='assets/image/iphoneBig.png'  alt='oq' /></div>
                        <div class='circle'></div>
                        <div class='shadows'><img src='assets/image/shadow.png'  alt='oq' /></div>

                        <div class='netflixLeftTop wrap'><img src='assets/image/netflix.svg'  alt='oq' /> <h3>Новинки киноиндустрии</h3></div>
                        <div class='netflixLeftMiddle wrap'><img src='assets/image/netflix.svg'  alt='oq' /> <h3>Безлимитный Netflix</h3></div>
                        <div class='netflixLeftBottom wrap'><img src='assets/image/spotify.svg'  alt='oq' /> <h3>Популярные подкасты</h3></div>

                        <div class='netflixRightTop wrap'><img src='assets/image/spotify.svg'  alt='oq' /> <h3>Слушай музыку</h3></div>
                        <div class='netflixRightMiddle wrap'><img src='assets/image/spotify.svg'  alt='oq' /> <h3>Выбор молодежи</h3></div>
                        <div class='netflixRightBottom wrap'><img src='assets/image/netflix.svg'  alt='oq' /> <h3>Лучшие сериалы</h3></div>
    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ReadyToMove",
};
</script>
<style lang="scss">
.ReadyToMove {
    padding: 60px 0 180px;

    h1 {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        color: #000000;
        text-align: center;
    }

    h2 {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 58px;
        text-align: center;
        color: #000000;
        margin-top: 16px;
        margin-bottom: 130px;
    }

    .phoneWrap {
        position: relative;

        .circle {
            position: absolute;
            width: 534px;
            height: 534px;
            background: #F5F5F5;
            border-radius: 50%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: -1;
        }

        h3 {
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            margin-left: 16px;
            color: #000000;
        }

        .wrap {
            padding: 10px;
            background: #FFFFFF;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
        }
        
        .netflixLeftTop {
            top: 34%;
            left: 100px;
        }

        .netflixLeftMiddle {
            top: 51%;
            left: 190px;
        }

        .netflixLeftBottom {
            top: 68%;
            left: 80px;
        }

        .netflixRightTop {
            top: 28%;
            right: 220px;
        }

        .netflixRightMiddle {  
            top: 51%;
            right: 129px;
        }

        .netflixRightBottom {
            top: 71%;
            right: 188px;
        }

        .phone {
            text-align: center;
        }

        .shadows {
            margin-top: 10px;
            text-align: center;
        }
    }
}
</style>
