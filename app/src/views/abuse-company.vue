<template>
  <div class="flex flex-col gap-2 py-2 px-4 border-b">
    <p class="text-2xl text-gray-400">Empresas tops</p>
    <router-link :to="{ name: 'home' }" class="flex gap-1 text-sm items-center"
      ><Home size="14" /> Home</router-link
    >
  </div>
  <div class="flex flex-col gap-2 pt-8 px-4">
    <p v-if="company" class="text-xl">
      {{ company.nome_fantasia || this.company.razao_social }}
    </p>
  </div>

  <div class="flex flex-col gap-6 px-4 mt-4">
    <RouterView />
  </div>
</template>

<script>
import { getAbuses } from "@/utils/abuse";
import { RouterView } from "vue-router";
import ListItem from "@/components/abuse/list-item.vue";
import { Home } from "lucide-vue-next";

export default {
  components: {
    ListItem,
    Home,
    RouterView,
  },
  data() {
    return {
      company: null,
      abuses: null,
    };
  },
  methods: {
    toggleStep(step) {
      this.step = step;
    },
  },
  async mounted() {
    await fetch(
      `https://brasilapi.com.br/api/cnpj/v1/${this.$route.params.cnpj}`
    )
      .then((data) => data.json())
      .then((data) => (this.company = data))
      .then(() => (this.hasCompany = true))
      .catch(() => (this.hasCompany = false));
  },
};
</script>
