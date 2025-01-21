<template>
    <div class="lineLogin">
        <h2>這是Line登入的操作介面</h2>
        <div v-if="isLogin==false">
            <button @click="loginBtnClick">登入按鈕</button>
            <h2>Line未登入</h2>
        </div>
        <div v-if="isLogin == true">
            <h3>登入資訊</h3>
            <p>使用者暱稱: {{ profile != null ? profile.displayName : ''}}</p>
            <p></p>
            <button @click="logoutBtnClick">登出按鈕</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import liff from '@line/liff';

const isLogin = ref(false);
const profile = ref(null);
const errorMsg = ref('');

const initializeLiff = async() => {
    try {
        await liff.init({liffId: '1551453274-ANYeG98Q'});
        if (!liff.isLoggedIn) {
            console.log('JN - line not login')
            isLogin.value = false
        } else {
            console.log('JN - line is login:', liff.getProfile())
            isLogin.value = true
            profile.value = await liff.getProfile();
        }
    } catch (error) {
        errorMsg.value = 'Failed to initialize LIFF:' + error.message;
        console.log('JN - liff init error:', error)
    }
}

const initializeLiff2 = () => {
    try {
        liff.init({liffId: '1551453274-ANYeG98Q'}).then(async() => {
            if(liff.isLoggedIn()) {
                liff.getProfile().then((profile) => {
                    console.log('JN - line is login:', profile)
                    liff.getAccessToken();
                })
                isLogin.value = true
                profile.value = await liff.getProfile()
            } else {
                console.log('JN - line not login')
                isLogin.value = false
            }
        });
    } catch(error) {
        errorMsg.value = 'Failed to initialize LIFF:' + error.message;
        console.log('JN - liff init error:', error)
    }
}

function loginBtnClick() {
    liff.login()
}

function logoutBtnClick() {
    liff.logout();
    window.location.reload();
}

onMounted(() => {
    // initializeLiff();
    initializeLiff2();
})

</script>