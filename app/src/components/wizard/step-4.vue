<template>
  <div class="min-h-[100vh] flex flex-col">
    <div class="flex flex-col gap-2 py-2 px-4">
      <p class="text-2xl text-gray-400">Empresas tops</p>
    </div>
    <div class="min-w-80 flex-1 flex items-center justify-center py-6 px-4">
      <Card class="max-w-md w-full">
        <CardHeader>
          <CardTitle>Tudo certo!</CardTitle>
          <CardDescription>A sua denúncia está pronta!</CardDescription>
        </CardHeader>
        <CardContent class="text-center">
          <p>
            Acesse esses links para fazer a sua denúncia nos canais oficiais!
          </p>
          <a
            href="https://www.gov.br/pt-br/servicos/realizar-denuncia-trabalhista"
            target="_blank"
            class="underline"
            >Aqui</a
          >
          ou
          <a
            href="https://mpt.mp.br/pgt/servicos/servico-denuncie"
            target="_blank"
            class="underline"
            >Aqui</a
          >
          <hr class="my-4" />
          <div class="w-full text-left flex flex-col gap-4">
            <p class="text-sm">A sua denúncia:</p>
            <div class="flex gap-2">
              <span class="text-gray-600">CNPJ:</span>
              <span>{{ dataSent.cnpj }}</span>
            </div>
            <div class="flex gap-2">
              <span class="text-gray-600">Local:</span>
              <span>{{ dataSent.city }} - {{ dataSent.state }}</span>
            </div>
            <div class="flex gap-2">
              <span class="text-gray-600">Resumo:</span>
              <span>{{ dataSent.resume }}</span>
            </div>
            <div class="flex gap-2">
              <span class="text-gray-600">Período da ocorrência:</span>
              <span>{{ dataSent.timeframe }}</span>
            </div>
            <div class="flex gap-2">
              <span class="text-gray-600">Número estimado de afetados:</span>
              <span>{{ dataSent.amountPeople }}</span>
            </div>
            <div class="flex gap-2" v-if="dataSent.names">
              <span class="text-gray-600">Nomes:</span>
              <span>{{ dataSent.names }}</span>
            </div>
            <div class="flex gap-2" v-if="dataSent.roles">
              <span class="text-gray-600">Funções dos afetados:</span>
              <span>{{ dataSent.roles }}</span>
            </div>
            <div class="flex gap-2" v-if="dataSent.nda">
              <span>Envolve informação sigilosa</span>
            </div>
            <div class="flex gap-2" v-if="dataSent.elderly">
              <span>Envolve trabalhadores acima de 60 anos</span>
            </div>
            <div class="flex gap-2" v-if="dataSent.children">
              <span>Envolve crianças</span>
            </div>
            <div class="flex gap-2" v-if="dataSent.pcd">
              <span>Envolve pessoas com deficiência</span>
            </div>
            <div class="flex gap-2">
              <span class="text-gray-600">Modalidade:</span>
              <span
                >{{ dataSent.modality === "office" ? "Presencial" : "" }}
                {{ dataSent.modality === "home" ? "Home office" : "" }}</span
              >
            </div>
          </div>
        </CardContent>
        <CardFooter class="flex justify-center">
          <Button @click="save"> Salvar a denúncia </Button>
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
import { createIssue } from "@/utils/issue";

export default {
  components: {
    Button,
    Label,
    Input,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
  },
  computed: {
    dataSent() {
      return this.$store.state.data;
    },
  },
  methods: {
    save() {
      createIssue({ data: this.dataSent });
      this.$router.push({ name: "home" });
    },
  },
};
</script>
