<template>
    <div class="py-12">
        <UContainer class="text-center">
            <div class="mx-auto max-w-xl">
                <TextTitle class="text-4xl">Apa kata umat manusia tentang </TextTitle>
                <TextTitle class="text-4xl mt-2">aplikasi keren ini?</TextTitle>
                <p class="text-gray-700 leading-8 mt-8">Kami tidak memfilter semua review, males soalnya. Jadi semua
                    yang ditampilkan di sini semuanya asli tanpa reksadana.</p>
            </div>
            <div class="flex gap-8 mt-16">
                <ReviewCard v-for="review in showedReviews" :key="review.name" :review="review" />
            </div>
        </UContainer>
    </div>
</template>

<script setup lang="ts">
import { reviews } from '~/data/reviews';

const showedReviews = reviews.slice(1, -1);
</script>