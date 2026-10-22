<script setup lang="ts">
import { faqs } from '../../../constants/faq.const';
import FaqItem from '../../atomes/FaqItem.vue';

    
</script>

<template>
    <section class="max-w-300 mx-auto w-full min-h-screen md:pt-[65px] md:pb-[100px] flex flex-col items-start justify-start gap-[89px]">
        <h2 class="max-w-[495px] inter-bold text-[54px] leading-[56px] tracking-[-2%]">Les questions essentielles.</h2>
        <div class="flex flex-col gap-6 w-full relative">
        <img src="/faq-illustration.png" class="absolute right-10 -top-[123px]" alt="">
            <FaqItem v-for="(faq, index) in faqs" :question="faq.question" :answer="faq.answer" :is-open="faq.isOpen" :key="index"/>
        </div>
    </section>
</template>

<style>
    
</style>