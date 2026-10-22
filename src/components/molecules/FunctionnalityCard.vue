<script setup lang="ts">
import type { FunctionnalityCardI } from '../../types/functionnality-card.type';


withDefaults(defineProps<FunctionnalityCardI>(), {
    icon: "1.png",
    name: "Trier les candidatures par pertinence",
    link: "#"
});
</script>

<template>
<div class="md:w-[289px] max-md:min-w-[289px] md:h-[192px] border border-black/10 rounded-[16px] p-6 group cursor-pointer">
                    <div class="flex flex-col items-start justify-between h-full">
                        <img :src="`/functionality/${icon}`" alt="Functionality 1">
                        <div class="flex items-end justify-between">
                            <div class="relative w-full inter-bold text-[20px] leading-6 tracking-[-2%]">{{name}}</div>
                            <RouterLink :to="link" class="w-6 h-6 shrink-0 cursor-pointer rounded-[4px] overflow-hidden hover:bg-black/10 duration-300 relative"><img src="/arrow-right-black.png" class="duration-300 absolute opacity-0 -left-2 bottom-0 group-hover:opacity-100 group-hover:left-0" alt="Arrow right black"></RouterLink>
                        </div>
                    </div>
                </div>
</template>

<style>
    
</style>