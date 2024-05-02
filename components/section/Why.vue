<template>
    <div class="bg-white py-12">
        <UContainer class="flex gap-16 min-h-screen place-items-center">
            <div class="basis-2/5">
                <TextTitle data-aos="fade-right" class="text-4xl leading-[48px]">Kenapa Kamu Sangat Harus Pakai Aplikasi
                    Yang Keren Ini?
                </TextTitle>
                <p data-aos="fade-right" data-aos-delay="300" class="text-gray-700 leading-8 mt-8">Sejujurnya
                    aplikasi kita ini seringkali
                    bermasalah.
                    Kadang-kadang gak bisa submit data, kadang dibukanya lambat, kadang tiba-tiba logout sendiri, untung
                    gak berdua.</p>
                <DownloadCount data-aos="fade-up" data-aos-delay="300" class="mt-24 w-2/3" />
            </div>
            <div data-aos="fade-left" data-aos-delay="600"
                class="basis-3/5 grid grid-cols-2 grid-rows-2 place-items-center gap-8">
                <FeatureItem1 v-for="feature in features" :key="feature.title" :feature="feature" />
            </div>
        </UContainer>
    </div>
</template>

<script setup lang="ts">
const features = [
    {
        title: "Aplikasi Gratis",
        icon: "i-heroicons-banknotes",
        description: "Semua fitur di aplikasi ini adalah gratis, tapi data privasi kamu akan kami jual ke agen khusus US."
    },
    {
        title: "Kode OTP Error",
        icon: "i-material-symbols-business-messages-outline",
        description: "Pas login kode OTP lo gak kekirim kadang, terus lo harus nyoba berulang kali sampe bisa."
    },
    {
        title: "Data Tidak Aman",
        icon: "i-material-symbols-lock-open-outline",
        description: "Data tidak disimpan dengan baik dan rentan bocor, jangan heran data lo tiba-tiba ada di deepweb."
    },
    {
        title: "Biasanya Error",
        icon: "i-material-symbols-code-rounded",
        description: "Ketika submit data biasanya error di bagian ajax-nya, eh nggak deng itu aplikasi pemerintah~"
    },
]
</script>