<template>
    <div>
        <UContainer class="flex gap-8 py-12">
            <div class="basis-2/5">
                <TextTitle class="text-5xl leading-[60px]">Sebuah cara mudah mengatur jadwal kuliah kamu</TextTitle>
                <p class="text-gray-700 leading-8 mt-4">Datang kuliah terlambat karena ketiduran itu tidak masalah; datang
                    kuliah karena lupa jadwal itu
                    sangatlah
                    tidak keren. Aplikasi ini adalah sahabat kamu sekarang, brodie~</p>
                <div class="mt-8 grid grid-cols-2 gap-2 w-3/4 h-12">
                    <UButton block class="h-full" label="Learn More" to="#feature" />
                    <UButton block class="h-full" label="Play Demo" variant="outline" />
                </div>
                <ReviewCard class="mt-12" :review="reviews[0]" />
            </div>
            <div class="grow grid place-items-center">
                <img src="/images/appPreview.png" alt="Preview" />
            </div>
        </UContainer>
    </div>
</template>

<script setup lang="ts">
import { reviews } from '~/data/reviews';
</script>