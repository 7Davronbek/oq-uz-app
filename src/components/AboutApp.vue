<template lang="AboutApp">
    <div class="AboutApp">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-10 mx-auto">
                    <div class="row align-items-center">
                        <div class="col-lg-6 text-center myCol">
                            <img src='assets/image/iphoneBig.png' class='' alt='oq' />
                            <div class="circle"></div>
                        </div>
                        <div class="col-lg-5 ms-auto">
                            <h1>О приложении</h1>
                            <h3>Настрой телефон 
                                под себя</h3>

                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                          <span><img src="assets/image/rabbit.svg" alt="oq" /></span> Никаких скрытых платежей
                                        </button>
                                      </h2>
                                      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Платишь только за то, что выбрал. Все прозрачно и чисто.
                                        </div>
                                      </div>
                                    </div>
                                    <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <span><img src="assets/image/rabbit.svg" alt="oq" /></span> Конструктор тарифа
                                        </button>
                                      </h2>
                                      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                      </div>
                                    </div>
                                    <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <span><img src="assets/image/rabbit.svg" alt="oq" /></span> Только для пользователей OQ
                                        </button>
                                      </h2>
                                      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                      </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "AboutApp",
};
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
      background: #f5f5f5;
      width: 500px;
      height: 500px;
      z-index: -1;
      border-radius: 50%;
    }
  }

  h1 {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
  }

  h3 {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    color: #000000;
    margin: 16px 0 58px;
  }

  .accordion-item {
    margin-bottom: 16px;

    span {
      margin-right: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 24px;
      border: 0.857143px solid #000000;
      border-radius: 5.14286px;
    }
  }

  .accordion-body {
    padding: 0 30px 30px;
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    padding-top: 16px;
  }

  button {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    padding: 0;
    box-shadow: none !important;
  }

  .accordion-button {
    background-color: #000 !important;
    transition: all 0.2s ease-in-out;
    padding: 30px;
    border-radius: 20px 20px 0 0 !important;
    color: #fff !important;

    span {
      background-color: #fff;
      transition: all 0.2s ease-in-out;
    }

    &::after {
      display: none;
    }

    &.collapsed {
      background: #f5f5f5 !important;
      border-radius: 30px !important;
      color: #000 !important;

      span {
        background-color: transparent;
      }
    }
  }

  .accordion-collapse {
    background-color: #000;
    border-radius: 0px 0px 20px 20px;

    &.show {
      background-color: #000;
    }
  }

  .accordion,
  .accordion-item,
  .accordion-header,
  .accordion-button,
  .accordion-collapse {
    border: none !important;
  }

  .accordion-collapse {
    transform: translateY(-1px);
  }
}
</style>
