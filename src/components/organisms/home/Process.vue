<script setup lang="ts">
import Blur from '../../atomes/Blur.vue';


</script>

<template>
    <section class="max-w-300 mx-auto w-full min-h-screen md:pt-[65px] flex flex-col items-start justify-start gap-[65px]">
        <h2 class="max-w-[451px] inter-bold text-[54px] leading-[56px] tracking-[-2%]">Du profil candidat à la shortlist.</h2>
        <div class="flex flex-col w-full gap-[52px]">
            <div class="w-full h-[474px] rounded-[20px] overflow-hidden bg-sun-yellow/10 pt-7 px-7 flex items-end justify-between gap-20 relative">
                <div class="max-w-[522px] w-full h-full flex flex-col items-start justify-center gap-4">
                    <h3 class="inter-bold text-[26px] leading-8 tracking-[-2%]">Structurez les profils</h3>
                    <p class="max-w-[522px] inter-medium text-[20px] leading-[32px] tracking-[-2%]">Les informations des candidats sont organisées pour faciliter leur lecture et leur comparaison</p>
                </div>
                <img src="/shortlist/structurations.png" class="shadow-[0_0_16px_2px_rgba(0,0,0,0.10)] rounded-[20px_20px_0_0]" alt="Structuration des shortlists">
                <Blur/>
            </div>

                        <div class="w-full h-[474px] rounded-[20px] overflow-hidden bg-edu-blue/10 pt-7 pl-3 pr-7 flex items-end justify-between gap-20 relative overflow-hidden">
                                        <img src="/shortlist/examinations.png" class="" alt="Structuration des shortlists">
                <div class="max-w-[522px] w-full h-full flex flex-col items-start justify-center gap-4">
                    <h3 class="inter-bold text-[26px] leading-8 tracking-[-2%]">Examinez les compétences</h3>
                    <p class="max-w-[522px] inter-medium text-[20px] leading-[32px] tracking-[-2%]">Consultez les compétences déclarées et les résultats des évaluations disponibles.</p>
                </div>

                <Blur/>
            </div>
                        <div class="w-full h-[474px] rounded-[20px] overflow-hidden bg-smart-green/10 pt-7 pl-7 pr-3 flex items-end justify-between gap-20 relative overflow-hidden">
                                        
                <div class="max-w-[522px] w-full h-full flex flex-col items-start justify-center gap-4">
                    <h3 class="inter-bold text-[26px] leading-8 tracking-[-2%]">Examinez les compétences</h3>
                    <p class="max-w-[522px] inter-medium text-[20px] leading-[32px] tracking-[-2%]">Consultez les compétences déclarées et les résultats des évaluations disponibles.</p>
                </div>
<img src="/shortlist/identifications.png" class="" alt="Identifications des profils">
                <Blur/>
            </div>
        </div>
    </section>
</template>

<style>
    
</style>