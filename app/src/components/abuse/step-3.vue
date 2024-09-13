<template>
  <div class="min-h-[100vh] flex flex-col">
    <div class="flex flex-col gap-2 py-2 px-4">
      <p class="text-2xl text-gray-400">Empresas tops</p>
    </div>
    <div class="min-w-80 flex-1 flex items-center justify-center py-6 px-4">
      <Card class="max-w-md w-full">
        <CardHeader>
          <CardTitle>Tudo certo!</CardTitle>
          <CardDescription>Já temos o seu relato!</CardDescription>
        </CardHeader>
        <CardContent class="text-center">
          <div class="w-full text-left flex flex-col gap-4">
            <div class="flex gap-2">
              <span class="text-gray-600">CNPJ:</span>
              <span>{{ dataSent.cnpj }}</span>
            </div>
            <div class="flex gap-2">
              <span class="text-gray-600">Titulo:</span>
              <span>{{ dataSent.title }}</span>
            </div>
            <div class="flex gap-2">
              <span class="text-gray-600">Resumo:</span>
              <span>{{ dataSent.resume }}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter class="flex justify-center">
          <Button @click="save"> Salvar relato </Button>
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
import { createAbuse } from "@/utils/abuse";

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
      createAbuse({ data: this.dataSent });
      this.$router.push({ name: "home" });
    },
  },
};
</script>
