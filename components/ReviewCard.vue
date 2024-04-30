<template>
    <UCard>
        <div class="flex flex-col gap-4 font-[Poppins] text-darkBlue-950 text-sm">
            <div class="flex gap-1">
                <div v-for="i in 5" :key="i" class="grid place-content-center rounded-sm p-[4px]"
                    :class="i <= $props.review.stars ? 'bg-yellow-400' : 'bg-gray-400'">
                    <UIcon class="text-white w-3 h-3" name="i-heroicons-star-solid" />
                </div>
            </div>
            <p class="leading-7">"{{ $props.review.review }}"</p>
            <div class="flex gap-4">
                <img class="rounded-full" :src="$props.review.path" :alt="$props.review.name">
                <div class="flex flex-col my-auto gap-1">
                    <p class="text-base font-semibold">{{ $props.review.name }}</p>
                    <p class="text-gray-600">{{ $props.review.occupation }}</p>
                </div>
            </div>
        </div>
    </UCard>
</template>

<script setup lang="ts">
import { reviews } from '~/data/reviews';

const props = defineProps<{
    review: typeof reviews[0]
}>()
</script>