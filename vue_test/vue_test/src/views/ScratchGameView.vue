<template>
    <div class="scratchView">
        <ScratchComponents 
        ref="scratchCard" 
        :scratchPercent="70" 
        :maskColor="'skyblue'" 
        :fillStyle="'red'" 
        :font="'30px Arial'" 
        :text="'刮一刮文字'" 
        :imageUrl="imageUrl" 
        :radius="5" 
        :scratchRadius="40"
        @scratchStart="scratchStart" @scratchEnd="scratchEnd" @scratchAll="scratchAll">
            <div class="prize">{{ prize }}</div>
        </ScratchComponents>
        <br/><br/><br/>
        <div class="btn-reset" @click="reset">重置</div>
    </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, onMounted } from 'vue';
import ScratchComponents from '@/components/ScratchComponents.vue';
import {ImagePath} from '../resources/web_image'

const imageUrl = ref(ImagePath.backGroundImage_letizia_1);

const prizeArray = ['戴上紅鼻子', '百變百變5分鐘', '運動拖鞋波比跳', '微笑小蕾蕾']

const prize = ref('1000000 元');
const scratchCard = ref();

function scratchStart() {
    console.log("JN - scratch start");
}

function scratchEnd() {
    console.log('JN - scratch end');
}

function scratchAll() {
    console.log('JN - scratch all');
}

function reset() {
    console.log('JN - scratch reset');
    const currentIndex = getRandomInt(0, prizeArray.length - 1);
    prize.value = prizeArray[Number(currentIndex)];
    console.log(`JN - 隨機選項:${currentIndex + 1} - ${prize.value}`);
    scratchCard.value?.reset();
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

onBeforeMount(() => {
    const currentIndex = getRandomInt(0, prizeArray.length - 1);
    prize.value = prizeArray[Number(currentIndex)];
    console.log(`JN - 隨機選項:${currentIndex + 1} - ${prize.value}`);
});

</script>

<style scoped>

.scratchView {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.prize {
    width: 80vw;
    height: 45vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: lightcoral;
}

.btn-reset {
    display: block;
    width: 10vw;
    height: 2vw;
}



</style>