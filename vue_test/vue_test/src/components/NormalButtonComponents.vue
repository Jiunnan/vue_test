<template>
    <button class="normalButton" @click="normalBtnClick">NNN</button>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import { useTestAlert } from '../models/useComposable';

const emits = defineEmits(['normalBtnViewClick'])
const { callAlert } = useTestAlert();

function normalBtnClick() {
    console.log('JN - normal button click');
    callAlert();
    emits('normalBtnViewClick');
}
</script>