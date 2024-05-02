<template>
    <div class="py-12 bg-white text-sm">
        <UContainer class="grid grid-cols-4 gap-8">
            <div class="flex flex-col gap-2">
                <img class="w-12" src="/images/logoIcon.png" alt="icon">
                <img class="w-16" src="/images/logoText.png" alt="logo text">
                <p class="text-gray-500">Sebuah aplikasi yang membantu kamu untuk membuat jadwal kuliah, jadwal mabar,
                    jadwal makan, jadwal
                    liga inggris, dan jadwal-jadwal lainnya. Walaupun banyak error, setidaknya kami sudah berusaha
                    semaksimal mungkin.</p>
                <div class="flex flex-col">
                    <p class="text-gray-500">&copy; 2021. DESIGN BY <UButton padded="false" label="NAUVAL"
                            variant="link" to="https://twitter.com/mhdnauvalazhar" class="text-gray-500"
                            target="_blank"></UButton>
                    </p>
                    <p class="text-gray-500">&copy; 2024. WEBSITE BY <UButton padded="false" label="JO" variant="link"
                            target="_blank" to="https://github.com/jo0707" class="text-gray-500"></UButton>
                    </p>
                </div>
            </div>
            <div class="flex flex-col gap-3">
                <h6 class="font-semibold">Sitemap</h6>
                <UButton :padded="false" v-for="nav in navigations" :label="nav.name" :to="nav.to" variant="link"
                    class="text-darkBlue-950" />
            </div>
            <div class="flex flex-col gap-3">
                <h6 class="font-semibold">Partners</h6>
                <UButton :padded="false" v-for="partner in partners" :label="partner.name" :to="partner.to"
                    target="_blank" variant="link" class="text-darkBlue-950" />
            </div>
            <div class="flex flex-col gap-2">
                <h6 class="font-semibold">Tetap Terhubung</h6>
                <p class="text-gray-500">Lihat kami pansos di sosial media berikut:</p>
                <div class="flex gap-2">
                    <UButton icon="i-mdi-instagram" variant="ghost" class="rounded-full" size="lg" />
                    <UButton icon="i-mdi-twitter" variant="ghost" class="rounded-full" size="lg" />
                    <UButton icon="i-mdi-facebook" variant="ghost" class="rounded-full" size="lg" />
                    <UButton icon="i-mdi-youtube" variant="ghost" class="rounded-full" size="lg" />
                </div>
            </div>
        </UContainer>
    </div>
</template>

<script setup lang="ts">
import { navigations } from '~/data/navigations';
import { partners } from '~/data/partners';

</script>