<template>
    <button class="floatingButton" @click="floatingBtnClick">OOO</button>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import { useTestAlert } from '../models/useComposable';

const emits = defineEmits(['floatingButtonViewClick'])

const {callAlert} = useTestAlert()

function floatingBtnClick() {
    console.log('floatingBtnClick');
    callAlert();
    emits('floatingButtonViewClick')
}
</script>

<style scope>
.floatingButton {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #007bff;
    color: white;
    font-size: 24px;
    text-align: center;
    line-height: 60px;
    border: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: background-color 0.3s;
}

.floatingButton:hover {
    background-color: #0056b3;
}
</style>