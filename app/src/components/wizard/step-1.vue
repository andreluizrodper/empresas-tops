<template>
  <div class="min-h-[100vh] flex flex-col">
    <div class="flex flex-col gap-2 py-2 px-4">
      <p class="text-2xl text-gray-400">Empresas tops</p>
      <router-link
        :to="{ name: 'home' }"
        class="flex gap-1 text-sm items-center"
        ><ChevronLeft size="14" /> Sair</router-link
      >
    </div>
    <div class="min-w-80 flex-1 flex items-center justify-center py-6 px-4">
      <Card class="max-w-md w-full">
        <CardHeader>
          <CardTitle>Vamos aos fatos</CardTitle>
          <CardDescription>Primeiro qual o CNPJ da empresa</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="flex flex-col gap-2">
            <Label>CNPJ</Label>
            <Input
              @input="getCompany()"
              v-model="cnpj"
              v-mask="'##.###.###/####-##'"
            />
          </div>
          <div
            v-if="hasCompany"
            class="border mt-4 px-4 py-2 flex flex-col gap-2"
          >
            <span class="text-xl font-bold">{{ company.nome_fantasia }}</span>
            <span class="text-sm text-gray-600">{{ company.municipio }}</span>
          </div>
        </CardContent>
        <CardFooter class="flex justify-between">
          <div></div>
          <Button @click="goToNext" :disabled="!isValid">Próximo</Button>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>

<script>
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { mask } from "vue-the-mask";
import { ChevronLeft } from "lucide-vue-next";

export default {
  components: {
    Button,
    ChevronLeft,
    Label,
    Input,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
  },
  directives: { mask },
  data() {
    return {
      cnpj: "",
      company: {},
      hasCompany: false,
    };
  },
  computed: {
    isValid() {
      return this.hasCompany;
    },
  },
  methods: {
    goToNext() {
      this.$store.commit("setData", {
        cnpj: this.cnpj,
        name: this.company.nome_fantasia,
      });
      this.$emit("toggleStep", 1);
    },
    async getCompany() {
      console.log(this.cnpj, this.cnpj.length);
      if (this.cnpj.length === 18) return;
      await fetch(
        `https://brasilapi.com.br/api/cnpj/v1/${this.cnpj.replace(
          /[.|//|-]/g,
          ""
        )}`
      )
        .then((data) => data.json())
        .then((data) => (this.company = data))
        .then(() => (this.hasCompany = true))
        .catch(() => (this.hasCompany = false));
    },
  },
};
</script>
