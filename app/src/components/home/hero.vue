<template>
  <div class="py-8 flex flex-col gap-8 items-center px-4">
    <p class="text-base md:text-3xl">Empresas tops do Brasil</p>
    <p class="text-sm lg:text-base text-center">
      Já trabalhou em uma empresa que tinha umas coisas diferenciadas
      acontecendo?
    </p>
    <div class="flex gap-4">
      <Button as-child>
        <router-link :to="{ name: 'abuse' }"> Relatar um abuso </router-link>
      </Button>
      <Button as-child>
        <router-link :to="{ name: 'wizard' }"> Fazer uma denúncia </router-link>
      </Button>
    </div>
  </div>
</template>

<script setup>
import { Button } from "@/components/ui/button";
</script>
