<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>


<script setup lang="ts">
import liff from '@line/liff';
import { onMounted } from 'vue';


onMounted(() => {
  liff.init({liffId: '1551453274-ANYeG98Q', withLoginOnExternalBrowser: true}).then(() => {
    if(!liff.isLoggedIn()) {
      liff.login({redirectUri: window.location.href})
    } else {
      liff.getAccessToken()
    }
  })
})

</script>