<template>
    <div class="p-4 flex flex-col gap-2">
        <UIcon :name="feature.icon" class="w-8 h-8 text-primary-400" />
        <h6 class="font-['Patua_One'] text-darkBlue-950">{{ feature.title }}</h6>
        <p class="text-gray-600">{{ feature.description }}</p>
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