<template>
    <div class="twoButton">
        <FloatingButtonComponents @floatingButtonViewClick="floatingBtnViewClick"></FloatingButtonComponents>
        <br/>
        <NormalButtonComponents @normalBtnViewClick="normalButtonViewClick"></NormalButtonComponents>
        <br/>
        <h1>下方為API測試顯示的結果</h1>
        <div v-if="apiResponse != null">
            <p>aaa => {{ apiResponse.reqData.aaa }}</p>
            <p>bbb => {{ apiResponse.reqData.bbb }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FloatingButtonComponents from '@/components/FloatingButtonComponents.vue';
import NormalButtonComponents from '@/components/NormalButtonComponents.vue';
import { useUserAPI } from '../models/useComposable'

const { getTestPOST } = useUserAPI();
var apiResponse = ref();

function floatingBtnViewClick() {
    console.log('In two button view click floating button.')
    getTestPOST('floating button click to api').then((value) => {
        apiResponse.value = value;
        console.log('JN - api response 000:', apiResponse.value.reqData)
    });
}

function normalButtonViewClick() {
    console.log('In two button view click normal button.');
    getTestPOST('normal button click to api').then((value) => {
        apiResponse.value = value;
        console.log('JN - api response 000:', apiResponse.value.reqData)
    });
}
</script>