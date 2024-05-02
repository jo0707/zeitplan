<template>
    <div class="bg-white py-12">
        <UContainer class="flex gap-16">
            <div data-aos="fade-right" class="grow grid place-items-center">
                <img src="/images/appPreview2.png" alt="Preview 2" />
            </div>
            <div class="basis-1/2">
                <TextTitle data-aos="fade-left" data-aos-delay="300" class="text-4xl">Memangnya ada fitur apa aja sih di
                    aplikasi yang
                    katanya
                    keren ini? Jadi penasaran nich~</TextTitle>
                <p class="text-gray-700 leading-8 mt-4" data-aos="fade-left" data-aos-delay="600">Aplikasi sekeren ini
                    akan membuat kamu tidak dapat memberi
                    alasan apapun untuk bolos matkul dosen (HAHA MAMPUS!). Lagian lo kuliah tapi jarang masuk, titip
                    absen doang!</p>
                <div class="grid grid-cols-2 grid-rows-2 place-items-center gap-8" data-aos="fade-left"
                    data-aos-delay="900">
                    <FeatureItem2 v-for="feature in features" :key="feature.title" :feature="feature" />
                </div>
            </div>
        </UContainer>
    </div>
</template>

<script setup lang="ts">
const features = [
    {
        title: "Tidak Tersimpan Otomatis",
        icon: "i-material-symbols-cloud-off-outline-rounded",
        description: "Kalo lo pelupa ya udah dah, jadwal lo bakal gak kesimpen tuh."
    },
    {
        title: "Si Rizal Gak Pernah Ngonten",
        icon: "i-material-symbols-videocam-outline-rounded",
        description: "Emang sih dia gak pernah ngonten, do'ain ya biar mau ngonten."
    },
    {
        title: "Terhapus Otomatis",
        icon: "i-material-symbols-delete-outline-rounded",
        description: "Data lo bakal kehapus otomatis tiap hari, biar hemat server kita."
    },
    {
        title: "Nggak Tau Lagi Gw",
        icon: "i-material-symbols-notifications-outline-rounded",
        description: "Mikir teks buat konten susah bro, ini aja ngasal masih susah!"
    },
]
</script>