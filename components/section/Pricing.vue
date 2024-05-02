<template>
    <div class="py-12">
        <UContainer class="text-center">
            <div class="mx-auto max-w-xl">
                <TextTitle class="text-4xl">Main catur sambil bersepeda,</TextTitle>
                <TextTitle class="text-4xl mt-2">beda harga beda fitur</TextTitle>
                <p class="text-gray-700 leading-8 mt-8">Aplikasi ini gratis sebenernya, brodie. Tapi kalo mau bayar
                    gapapa juga sih, untuk gantinya kami kasih fitur yang spesial buat kamu!</p>
            </div>
            <div class="flex gap-8 mt-16">
                <Pricetag v-for="price in prices" :key="price.name" :price="price" />
            </div>
            <p class="max-w-xl mx-auto mt-24 opacity-50"><b>Harap Diingat:</b> Harga di atas belum termasuk KKM, dan harga sewaktu-waktu bisa berubah secara
                mendadak
                seperti pengumuman PPKM darurat.</p>
        </UContainer>
    </div>
</template>

<script setup lang="ts">
const prices = [
    {
        "name": "RINDURATU",
        "amount": "Free",
        "description": "Akses ke semua fitur gratis tapi data lo dijual ke agen khusus US.",
        "benefits": [
            "Jadwal Tak Terbatas",
            "Fitur Notifikasi (Kadang Telat)",
            "Mode Gelap",
            "Bisa Topup Pulsa",
            "Bisa Beli Token Listrik",
            "Data Lo Dijual",
        ]
    },
    {
        "name": "SULTAN",
        "amount": "Rp.100.000",
        "description": "Sama aja data lo juga tetep dijual, tapi lo dapet fitur yang lain.",
        "benefits": [
            "Semua Fitur Sebelumnya",
            "Diingetin Makan",
            "Sleepcall Sampe Bobo",
            "Ditemenin Jalan Tiap Minggu",
            "Ditemenin Nonton Eksekswan",
            "Terhindar Razia Rambut",
            "Dapet Izin Bikin Ormas",
        ]
    },
    {
        "name": "RAFATAR",
        "amount": "Rp.10.000.000",
        "description": "Ini juga sama aja, data lo dijual juga. Tapi fitur-fitur nya lebih ok.",
        "benefits": [
            "Semua Fitur Sebelumnya",
            "Dibayarin Kuliah 4 Semester",
            "Dibayarin Cicilan Motor",
            "Dicicilin KPR 12 Tahun",
            "Magang di NASA Cab. Depok",
            "Dapet Skin Alok",
            "Nonton Film Gratis di Ganool",
            "Naik Haji Bila Mampu",
        ]
    }
]


</script>