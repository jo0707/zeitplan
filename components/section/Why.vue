<template>
    <div class="bg-white">
        <UContainer class="flex gap-16 min-h-screen py-12 place-items-center">
            <div class="basis-1/3">
                <TextTitle class="text-4xl leading-[48px]">Kenapa Kamu Sangat Harus Pakai Aplikasi Yang Keren Ini?</TextTitle>
                <p class="text-gray-700 leading-8 mt-8">Sejujurnya aplikasi kita ini seringkali bermasalah.
                    Kadang-kadang gak bisa submit data, kadang dibukanya lambat, kadang tiba-tiba logout sendiri, untung
                    gak berdua.</p>
                <DownloadCount class="mt-24 w-2/3" />
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