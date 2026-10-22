<script setup lang="ts">
import { navLinks } from '../../constants/nav-links.const.ts';
import Button from '../atomes/Button.vue';
import LinkButton from '../atomes/LinkButton.vue';

    
</script>

<template>
    <nav class="w-full flex items-center justify-between relative">

        <div class="logo"><img src="/logo.png" alt="Logo"></div>

        <ul class="logo flex items-center justify-center gap-1 absolute -translate-1/2 left-1/2 top-1/2">
            <li v-for="(navlink, index) in navLinks" :key="index">
                <LinkButton :link="navlink.link" :content="navlink.content" :active="navlink.active"/>
            </li>
        </ul>

        <div class="flex items-center justify-end gap-1">
            <Button kind="default">Se connecter</Button>
            <Button kind="blue">Rejoindre le pilote</Button>
        </div>

    </nav>
</template>

<style>
    
</style>