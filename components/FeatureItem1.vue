<template>
    <div class="bg-primary-50 rounded p-8 flex flex-wrap place-items-center gap-4">
        <div class="p-2 bg-primary-200 shrink rounded grid place-items-center">
            <UIcon :name="feature.icon" class="w-6 h-6 text-primary-400" />
        </div>
        <h6 class="grow font-semibold">{{ feature.title }}</h6>
        <p class="">{{ feature.description }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    feature: {
        title: string;
        icon: string;
        description: string;
    }
}>()
</script>