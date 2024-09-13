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
          <CardTitle>Relatar um abuso</CardTitle>
          <CardDescription>Conte pra gente sobre o abuso</CardDescription>
        </CardHeader>
        <CardContent class="flex flex-col gap-8">
          <div class="flex flex-col gap-2">
            <Label>Dá um titulo breve pro seu relato</Label>
            <Input v-model="title" />
          </div>
          <div class="flex flex-col gap-2">
            <Label>Conta pra gente</Label>
            <Textarea v-model="resume" />
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
    ChevronLeft,
  },
  data() {
    return {
      title: "",
      resume: "",
    };
  },
  computed: {
    isValid() {
      return this.title.length >= 10 && this.resume.length >= 30;
    },
  },
  methods: {
    goToPrevious() {
      this.$emit("toggleStep", 0);
    },
    goToNext() {
      this.$store.commit("setData", {
        title: this.title,
        resume: this.resume,
      });
      this.$emit("toggleStep", 2);
    },
  },
};
</script>
