<script setup lang="ts">
import { ref } from 'vue';
import type { FAQItemI } from '../../types/faq.type';

const props = withDefaults(defineProps<FAQItemI>(), {
        isOpen: false,
        question: "Comment fonctionne la phase pilote ?",
  answer: "La phase pilote permet aux entreprises participantes de découvrir MyLoops et de contribuer à son développement. Les modalités précises sont communiquées lors de l'inscription."
});

const open = ref(props.isOpen)
</script>

<template>

<div
  class="w-full rounded-[20px] p-7 flex flex-col items-start justify-start border border-black/15 transition-all duration-500"
  :class="open ? 'gap-0' : 'gap-0'"
>
  <div class="flex items-center justify-between w-full">
    <div class="inter-bold text-[24px] leading-8 tracking-[-2%]">
      {{ question }}
    </div>

    <div v-on:click="open = !open" class="cursor-pointer h-6 w-6 rounded-[4px] duration-300 hover:bg-black/10">
      <img v-if="open" src="/minus.png" alt="Close faq">
      <img v-else src="/add.png" alt="Open faq">
    </div>
  </div>

  <div
    class="grid w-full transition-[grid-template-rows] duration-200"
    :class="open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
  >
    <div class="overflow-hidden">
      <div class="inter-normal text-[20px] leading-8 tracking-[-2%] pt-2.5">
        {{ answer }}
      </div>
    </div>
  </div>
</div>

</template>

<style>
    
</style>