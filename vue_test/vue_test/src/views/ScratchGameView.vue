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
        :scratchRadius="20"
        @scratchStart="scratchStart" @scratchEnd="scratchEnd" @scratchAll="scratchAll">
            <div class="prize">{{ prize }}</div>
        </ScratchComponents>
        <br/><br/><br/>
        <div class="btn-reset" @click="reset">重置</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ScratchComponents from '@/components/ScratchComponents.vue';
import {ImagePath} from '../resources/web_image'

const imageUrl = ref(ImagePath.backGroundImage_letizia_1);

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
    prize.value = "第二次的1000000 元";
    scratchCard.value?.reset();
}

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