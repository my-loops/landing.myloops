<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";
import type { linkButtonType } from "../../types/button.type";

withDefaults(defineProps<linkButtonType>(), {
    active: false,
    link: '#'
});

const router = useRouter();


</script>

<template>
  <RouterLink :to="link" :class="[link === router.currentRoute.value.path ? 'bg-[rgba(0,0,0,0.08)]' : 'bg-transparent']" class="text-[14px] leading-5 poppins-medium rounded-sm px-2.5 py-1.5 cursor-pointer hover:bg-[rgba(0,0,0,0.08)] duration-300">{{ content }}</RouterLink>
</template>

<style></style>
