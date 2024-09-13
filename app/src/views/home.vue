<template>
  <div class="flex flex-col gap-8">
    <Hero />
    <CompanyList />
    <Footer />
  </div>
</template>

<script setup>
import Hero from "@/components/home/hero.vue";
import CompanyList from "@/components/home/company-list.vue";
import Footer from "@/components/ui/footer.vue";
</script>
