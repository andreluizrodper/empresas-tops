<template>
  <div class="py-8 flex flex-col gap-8">
    <p class="text-center text-xl">Todas as empresas que já apareceram aqui:</p>
    <div class="px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="item in companies" :key="item.id" class="border rounded">
        <p class="text-xl font-bold">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getIssue } from "@/utils/issue";

export default {
  data() {
    return {
      companies: [],
    };
  },
  async mounted() {
    this.companies = await getIssue();
  },
};
</script>
