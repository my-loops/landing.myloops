<script setup lang="ts">
import Button from '../../atomes/Button.vue';

    
</script>

<template>
    <section class="max-w-300 mx-auto w-full min-h-screen md:pt-[121px] flex flex-col items-center justify-start gap-[82px]">
        <div class="flex flex-col items-center justify-start gap-7.5">
            <div class="flex flex-col gap-3.5 items-center justify-start">
                <img src="/home-hero.png" alt="Home hero">
                <h1 class="poppins-bold text-[96px] leading-25 tracking-[-2%]">Recrutez mieux.</h1>
                <p class="inter-medium text-[20px] leading-[28px] tracking-[-2%] max-w-[634px] text-center">Identifiez les étudiants qui correspondent à vos besoins grâce à des profils structurés et des compétences mieux mises en évidence.</p>
            </div>
            <div class="flex items-center justify-center gap-3">
                <Button kind="blue">Rejoindre le pilote</Button>
            <Button kind="light">Découvrir myloops</Button>
            </div>
        </div>
        <img src="/home-hero-dashboard.png" class="w-300 h-auto" alt="Home hero dashboard">
    </section>
</template>

<style>
    
</style>