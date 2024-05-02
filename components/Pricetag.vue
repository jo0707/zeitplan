<template>
    <UCard class="text-start px-8">
        <div class="flex flex-col gap-3">
            <h6 class="font-mono text-primary-500 text-sm">{{ price.name }}</h6>
            <h4 class="font-['Patua_One'] text-darkBlue-950 text-4xl mt-2">{{ price.amount }}</h4>
            <p class="text-gray-600 leading-7">{{ price.description }}</p>
            <div class="flex flex-col gap-2 mt-2">
                <ul class="flex flex-col gap-4">
                    <li v-for="benefit in price.benefits" :key="benefit" class="flex gap-4">
                        <div class="rounded-full bg-green-100 grid place-items-center w-5 h-5">
                            <UIcon name="i-material-symbols-check-small-rounded" class="w-5 h-5 text-green-400" />
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