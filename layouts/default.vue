<template>
    <div>
        <header class="pt-8" data-aos="fade-down">
            <UContainer>
                <nav
                    class="rounded shadow-xl shadow-neutral-300/30 bg-white flex justify-between p-8 place-items-center">
                    <img src="/images/logo.png" alt="Zeitplan" class="h-10" />
                    <div class="flex place-items-center gap-8 text-neutral-600">
                        <NuxtLink v-for="nav in navigations" :key="nav.name" :to="nav.to"
                            class="hover:text-primary-500 transition"
                            :class="{ 'text-primary-500': $route.hash == nav.to }">{{ nav.name }}</NuxtLink>
                        <NuxtLink to="#download">
                            <UButton trailing class="px-6 py-3" icon="i-heroicons-arrow-right" label="Download"
                                to="#download" />
                        </NuxtLink>
                    </div>
                </nav>
            </UContainer>
        </header>

        <main>
            <slot />
        </main>

        <footer>
            <SectionFooter />
        </footer>
    </div>
</template>

<script setup>
import { navigations } from '~/data/navigations';
</script>