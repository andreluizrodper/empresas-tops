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
          <CardTitle>Fazendo uma denúncia</CardTitle>
          <CardDescription>Dados da denúncia</CardDescription>
        </CardHeader>
        <CardContent class="flex flex-col gap-8">
          <div class="flex flex-col gap-2">
            <Label>Período da ocorrência</Label>
            <Input v-model="timeframe" />
          </div>
          <div class="flex flex-col gap-2">
            <Label>Número estimado de afetados</Label>
            <Input v-model="amountPeople" />
          </div>
          <div class="flex flex-col gap-2">
            <Label>Nome das pessoas (separados em linhas)</Label>
            <Textarea v-model="names" />
          </div>
          <div class="flex flex-col gap-2">
            <Label>Funções dos afetados (separados em linhas)</Label>
            <Textarea v-model="roles" />
          </div>
          <div class="flex gap-2 items-center">
            <Switch :checked="nda" @update:checked="nda = !nda" />
            <Label>Envolve informação sigilosa</Label>
          </div>
          <div class="flex gap-2 items-center">
            <Switch :checked="elderly" @update:checked="elderly = !elderly" />
            <Label>Envolve trabalhadores acima de 60 anos</Label>
          </div>
          <div class="flex gap-2 items-center">
            <Switch
              :checked="children"
              @update:checked="children = !children"
            />
            <Label>Envolve crianças</Label>
          </div>
          <div class="flex gap-2 items-center">
            <Switch :checked="pcd" @update:checked="pcd = !pcd" />
            <Label>Envolve pessoas com deficiência</Label>
          </div>
          <div class="flex gap-2 flex-col">
            <Label>Modalidade de trabalho</Label>
            <div class="flex gap-4">
              <Button
                @click="toggleModality('office')"
                :variant="modality === 'office' ? 'default' : 'outline'"
                >Presencial</Button
              >
              <Button
                @click="toggleModality('home')"
                :variant="modality === 'home' ? 'default' : 'outline'"
                >Home</Button
              >
            </div>
          </div>
        </CardContent>
        <CardFooter class="flex justify-between">
          <Button @click="goToPrevious" variant="outline">Voltar</Button>
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
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { ChevronLeft } from "lucide-vue-next";

export default {
  components: {
    Button,
    Label,
    Input,
    Textarea,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
    Switch,
    ChevronLeft,
  },
  data() {
    return {
      modality: "",
      timeframe: "",
      amountPeople: "",
      names: "",
      roles: "",
      nda: false,
      elderly: false,
      children: false,
      pcd: false,
    };
  },
  computed: {
    isValid() {
      return (
        this.modality.length >= 1 &&
        this.timeframe.length >= 1 &&
        this.amountPeople.length >= 1
      );
    },
  },
  methods: {
    goToPrevious() {
      this.$emit("toggleStep", 1);
    },
    goToNext() {
      this.$store.commit("setData", {
        modality: this.modality,
        timeframe: this.timeframe,
        amountPeople: this.amountPeople,
        roles: this.roles,
        names: this.names,
        children: this.children,
        nda: this.nda,
        elderly: this.elderly,
        pcd: this.pcd,
      });
      this.$emit("toggleStep", 3);
    },
    toggleModality(type) {
      this.modality = type;
      console.log(type);
    },
  },
};
</script>
