<script lang="ts" setup>
import { cva } from 'class-variance-authority';


const { size = 'middle', type = "default" } = defineProps<{
    type?: "primary" | 'dashed' | 'link' | 'text' | 'default' | null;
    size?: 'small' | 'middle' | 'large';
}>()


const button = cva("rounded p-2", {
    variants: {
        type: {
            default: ["bg-blue-600", "text-white"],
            primary: ["border", "border-black", "bg-white", "text-black"],
            dashed: ["border", "border-dashed", "border-black", "bg-white"],
            link: ["text-blue-600"],
            text: ["text-black"],
        },
        size: {
            small: ["px-2", "py-2"],
            middle: ["px-4", "py-2"],
            large: ["px-6", "py-2"],
        },
    },
    defaultVariants: {
        type: "default",
        size: "middle",
    },
});
</script>



<template>
    <button :class="button({ type, size })">
        <slot></slot>
    </button>
</template>