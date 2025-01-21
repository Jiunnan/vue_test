<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <br/>
    <br/>
    <h1>xxxx</h1>
    <LineLoginComponents></LineLoginComponents>
    <h1>xxxx</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import LineLoginComponents from '@/components/LineLoginComponents.vue';

@Options({
  components: {
    HelloWorld,
    LineLoginComponents,
  },
})
export default class HomeView extends Vue {}
</script>
