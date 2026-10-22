<script setup lang="ts">
import type { buttonType } from "../../types/button.type";

withDefaults(defineProps<buttonType>(), {
  kind: "default",
});

const ButtonStyles = {
  blue: "bg-edu-blue text-white rounded-[6px] px-5 py-2 cursor-pointer text-[16px]",
  light: "bg-edu-blue/10 text-edu-blue rounded-[6px] px-5 py-2 cursor-pointer text-[16px]",
  default: "bg-tranparent text-black px-4.5 py-2 cursor-pointer text-[14px]",
};
</script>

<template>
  <button :class="ButtonStyles[kind]" class="poppins-medium"><slot /></button>
</template>

<style></style>
