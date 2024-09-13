<template>
  <div class="py-8 flex flex-col gap-8">
    <p class="text-center text-xl">Todas as empresas que já apareceram aqui:</p>
    <div class="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div
        v-for="item in companies"
        :key="item.id"
        class="border rounded px-4 py-2 flex justify-between items-center"
      >
        <p class="text-xl font-bold">{{ item.name }}</p>
        <div class="flex flex-col gap-1 justify-center items-center">
          <p class="text-sm font-bold">{{ item.amount }}</p>
          <p class="text-xs">denúncias</p>
        </div>
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
    const companies = await getIssue();
    const names = [...new Set(companies.map((company) => company.name))];
    names.forEach((name, index) => {
      this.companies.push({
        name,
        id: index,
        amount: companies.filter((company) => company.name === name).length,
      });
    });
  },
};
</script>
