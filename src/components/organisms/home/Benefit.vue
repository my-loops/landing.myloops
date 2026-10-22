<script setup lang="ts">
import Blur from '../../atomes/Blur.vue';

    
</script>

<template>
    <section class="max-w-300 mx-auto w-full min-h-screen md:pt-[65px] flex flex-col items-start justify-start gap-[65px]">
        <h2 class="max-w-[787px] inter-bold text-[54px] leading-[56px] tracking-[-2%]">Le bon candidat ne devrait pas être plus difficile à trouver.</h2>
        <div class="flex flex-col w-full gap-11">
                    <div class="flex items-center justify-center gap-11 w-full">
            <div class="rounded-[20px] bg-black/5 h-[685px] w-full px-7 pt-7 flex flex-col items-center justify-between gap-[65px] relative overflow-hidden">
                <div class="flex flex-col items-start justify-start w-full gap-4">
                    <div class="inter-medium text-[16px] leading-[24px] tracking-[-2%] text-black/80">Sans Myloops</div>
                    <h3 class="inter-bold text-[24px] leading-[32px] tracking-[-2%] text-black">Des CV hétérogènes des informations dispersées et des profils difficiles à comparer.</h3>
                    <div class="flex items-center justify-start gap-[-2px]">
                        <div class="h-10 w-10 rounded-full border border-2 bg-[#FFDC05] flex items-center justify-center"><img src="/without-myloops-character.png" class="h-6 w-auto" alt="Without myloops character"></div>
                        <div class="h-10 w-10 rounded-full border bg-black flex items-center justify-center"><img src="/arrow-right.png" alt="Arrow right"></div>
                    </div>
                </div>
                <img src="/without-myloops.png" class="w-full shadow-[0_0_16px_2px_rgba(0,0,0,0.10)] rounded-[20px_20px_0_0]" alt="">

                <Blur/>

            </div>
            <div class="rounded-[20px] bg-black/5 h-[685px] w-full px-7 pt-7 flex flex-col items-center justify-between gap-[65px] relative overflow-hidden">
                <div class="flex flex-col items-start justify-start w-full gap-4">
                    <div class="inter-medium text-[16px] leading-[24px] tracking-[-2%] text-black/80">Avec Myloops</div>
                    <h3 class="inter-bold text-[24px] leading-[32px] tracking-[-2%] text-black">Des profils strucutrés pour mieux examiner les compétences et leurs parcours.</h3>
                    <div class="flex items-center justify-start gap-[-2px]">
                        <div class="h-10 w-10 rounded-full border border-2 bg-[#0684FD] flex items-center justify-center"><img src="/with-myloops-character.png" class="h-6 w-auto" alt="Without myloops character"></div>
                        <div class="h-10 w-10 rounded-full border bg-black flex items-center justify-center"><img src="/arrow-right.png" alt="Arrow right"></div>
                    </div>
                </div>
                <img src="/with-myloops.png" class="w-full shadow-[0_0_16px_2px_rgba(0,0,0,0.10)] rounded-[20px_20px_0_0]" alt="">
                <Blur/>
            </div>
        </div>
        <div class="md:h-[425px] rounded-[20px] bg-black/5 w-full p-7 overflow-hidden flex flex-col items-start justify-between relative">
            <div class="flex flex-col gap-4 items-start justify-start">
                <div class="inter-medium text-[16px] leading-[24px] tracking-[-2%] text-black/80">Myloops aide à rendre les compétences plus visible</div>
                <h3 class="inter-bold text-[24px] leading-[32px] tracking-[-2%] max-w-[530px] text-black">Un CV ne reflète pas toujours les compétences d’un candidat, et <span class="text-[#F30E0E]">les talents pertinents peuvent passer inaperçus</span> quand les profils sont difficiles à comparer.</h3>
            </div>
            <div class="flex items-center justify-start gap-[-2px]">
                <div class="h-10 w-10 rounded-full border border-2 bg-[#F1A044] flex items-center justify-center"><img src="/cta.png" class="h-6 w-auto" alt="Cta"></div>
                <div class="h-10 w-10 rounded-full border bg-black flex items-center justify-center"><img src="/arrow-right.png" alt="Arrow right"></div>
            </div>
            <img src="/cta-illustration.png" class="absolute right-0 bottom-0" alt="Cta illustration">
        </div>
                <div class="flex flex-col gap-4 items-start justify-start ">
            <div class="inter-medium text-[16px] leading-[24px] tracking-[-2%] text-black/60">Découvrir quoi d’autres vous pouvez faire avec Myloops</div>
            <div class="flex flex-wrap gap-3 items-start justify-start">
                
            </div>
        </div>
        </div>

    </section>
</template>

<style>
    
</style>