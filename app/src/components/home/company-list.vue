<template>
  <div class="py-8 flex flex-col gap-8">
    <p class="text-center text-xl">
      Todas as empresas que já apareceram aqui em denúncias:
    </p>
    <div class="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div
        v-for="item in companiesIssues"
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
    <p class="text-center text-xl">
      Todas as empresas que já apareceram aqui em abusos:
    </p>
    <div class="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <router-link
        v-for="item in companiesAbuses"
        :key="item.id"
        :to="{ name: 'abuse_company', params: { cnpj: item.cnpj } }"
        class="border rounded px-4 py-2 flex justify-between items-center"
      >
        <p class="text-xl font-bold">{{ item.name }}</p>
        <div class="flex flex-col gap-1 justify-center items-center">
          <p class="text-sm font-bold">{{ item.amount }}</p>
          <p class="text-xs">abusos</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { getIssue } from "@/utils/issue";
import { getAbuses } from "@/utils/abuse";

export default {
  data() {
    return {
      companiesIssues: [],
      companiesAbuses: [],
    };
  },
  mounted() {
    this.getIssues();
    this.getAbuses();
  },
  methods: {
    async getIssues() {
      const companies = await getIssue();
      if (companies.empty) return;
      const names = [...new Set(companies.map((company) => company.name))];
      names.forEach((name, index) => {
        this.companiesIssues.push({
          name,
          id: index,
          amount: companies.filter((company) => company.name === name).length,
        });
      });
    },
    async getAbuses() {
      const companies = await getAbuses({ where: [] });
      if (companies.empty) return;
      const names = [...new Set(companies.map((company) => company.name))];
      names.forEach((name, index) => {
        const company = companies.find((company) => company.name === name);
        this.companiesAbuses.push({
          name,
          cnpj: company.cnpj,
          id: index,
          amount: companies.filter((company) => company.name === name).length,
        });
      });
    },
  },
};
</script>
