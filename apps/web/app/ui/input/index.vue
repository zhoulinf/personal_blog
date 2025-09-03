<script lang="ts" setup>
import type { InputHTMLAttributes } from 'vue';
import { h } from 'vue'

const props = defineProps<InputHTMLAttributes>()
</script>
<template>
    <component :is="h('input', { ...$attrs, ...props }, $slots)"></component>
</template>



<style lang="scss">
.__input {
    width: 350px;
    height: 40px;
    margin: 4px 0;
    padding-left: 25px;
    font-size: 13px;
    letter-spacing: .15px;
    border: none;
    outline: none;
    font-family: 'Montserrat', sans-serif;
    background-color: #ecf0f3;
    transition: .25s ease;
    border-radius: 8px;
    box-shadow: inset 2px 2px 4px #d1d9e6,
        inset -2px -2px 4px #f9f9f9;
}

.__input:focus {
    box-shadow: inset 4px 4px 4px #d1d9e6,
        inset -4px -4px 4px #f9f9f9;
}
</style>