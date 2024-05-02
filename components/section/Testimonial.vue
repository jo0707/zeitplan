<template>
    <div class="py-12">
        <UContainer>
            <div class="mx-auto max-w-xl text-center">
                <TextTitle data-aos="fade-up" class="text-4xl">Apa kata umat manusia tentang </TextTitle>
                <TextTitle data-aos="fade-up" class="text-4xl mt-2">aplikasi keren ini?</TextTitle>
                <p data-aos="fade-up" class="text-gray-700 leading-8 mt-8">Kami tidak memfilter semua review, males
                    soalnya. Jadi semua
                    yang ditampilkan di sini semuanya asli tanpa reksadana.</p>
            </div>
            <div class="grid grid-cols-3 gap-8 mt-24">
                <ReviewCard v-for="review, i in showedReviews" :key="review.name" :review="review" data-aos="fade-up" :data-aos-delay="i * 200" />
            </div>
        </UContainer>
    </div>
</template>

<script setup lang="ts">
import { reviews } from '~/data/reviews';

const showedReviews = reviews.slice(1);
</script>