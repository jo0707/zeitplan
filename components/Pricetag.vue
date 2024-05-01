<template>
    <UCard class="text-start px-8">
        <div class="flex flex-col gap-3">
            <h6 class="font-mono text-primary-500 text-sm">{{ price.name }}</h6>
            <h4 class="font-['Patua_One'] text-darkBlue-950 text-3xl mt-2">{{ price.amount }}</h4>
            <p class="text-gray-600">{{ price.description }}</p>
            <div class="flex flex-col gap-2 mt-2">
                <ul class="flex flex-col gap-2">
                    <li v-for="benefit in price.benefits" :key="benefit" class="flex gap-2">
                        <div class="rounded-full bg-green-100 grid place-items-center">
                            <UIcon name="i-material-symbols-check-small-rounded" class="w-4 h-4 text-green-500" />
                        </div>
                        <span>{{ benefit }}</span>
                    </li>
                </ul>
            </div>
            <UButton block class="mt-4 py-4" label="Pesan Sekarang" />
        </div>
    </UCard>
</template>

<script setup lang="ts">
const props = defineProps<{
    price: {
        name: string;
        amount: string;
        description: string;
        benefits: string[];
    }
}>()
</script>