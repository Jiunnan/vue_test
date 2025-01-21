<template>
    <div class="scssTest">
        <div class="scssTest01">
            <h1 class="">這是測試用h1元件</h1>
            <h1 class="bigText redText">這是測試用h1元件 - class為bigText和redText</h1>
            <h1 class="bigText">這是測試用h1元件 - class為bigText</h1>
            <button class="testBtn" @click="testBtnClick">測試按鈕</button>
        </div>
        <div>
            <h1>這是原本的h1元件</h1>
            <img src="images/uto_ed.jpg" />
        </div>
        <br/>
        <div class="cellPhoneView">
            <div class="imageView">
                <img class="showImage" src="images/uto_ed.jpg" />
            </div>
            <div class="buttonView">
                <button class="guidedTourBtn" @click="guidedTourReduceBtnClick">-</button>
                <button class="guidedTourBtn" @click="guidedTourADDBtnClick">+</button>
            </div>
            <img class="showGif" src="https://assets.clibo.tw/images/commissions/N5zmFg-Yjyq.gif?v=05ad18854e7e8b6d8495e33a5ff8a2b7" />
        </div>
        <br/><br/><br/>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const pageIndex = ref(0)

function testBtnClick() {
    console.log('JN - test button click');
}

function guidedTourADDBtnClick() {
    console.log('JN - guidedTourBtnClick');
}

function guidedTourReduceBtnClick() {
    console.log('JN - guidedTourBtnClick');
}
</script>

<style lang="scss" scope>

$grayColor-opacity: #AAAAAA33;

// 巢狀設定樣式
.scssTest01 {
    h1{
        font-size: 20px;
    }
    .textLayout {
        width: 50%;
    }
    .bigText {
        font-size: 80px;
    }
    .redText {
        color: #f00;
        background-color: $grayColor-opacity;
    }
    .testBtn {
        background-color: coral;
        color: black;
        // 滑鼠移動到按鈕時的介面設定
        &:hover {
            background-color: aqua;
            color: black;
        }
        // 滑鼠按下按鈕時的介面設定
        &:active {
            background-color: purple;
            color: white;
        }
    }
};
.scssTest {
    display: block;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
};
.cellPhoneView {
    display: flex;
    position: relative;
    width: 390px;
    height: 844px;
    overflow: auto;
    background-color: $grayColor-opacity;
    align-content: center;
    justify-content: center;
    .buttonView {
        display: flex;
        position: absolute;
        width: 120px;
        height: 50px;
        bottom: 100px;
        justify-content: space-between;
        align-content: center;
        .guidedTourBtn{
            width: 50px;
            height: 50px;
            font-size: 24px;
            border-radius: 50%;
            box-shadow: 2px 2px #212529;
            background-color: aqua;
            color: white;
        };
        z-index: 2;
    }
    .imageView{
        width: 100%;
        height: 100%;
        align-content: center;
        justify-content: center;
        z-index: 1;
    };
    .showImage{
        width: auto;
        height: 100%
    };
    .showGif{
        width: 100px;
        height: 100px;
        top: 0px;
        z-index: 3;
    }
};
</style>