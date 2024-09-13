<template>
  <ListItem v-for="abuse in abuses" :key="abuse.id" :abuse="abuse" />
</template>

<script>
import { getAbuses } from "@/utils/abuse";
import ListItem from "@/components/abuse/list-item.vue";

export default {
  components: {
    ListItem,
  },
  data() {
    return {
      abuses: null,
    };
  },
  async mounted() {
    this.abuses = await getAbuses({
      where: [
        { field: "cnpj", operator: "==", value: this.$route.params.cnpj },
      ],
    });
  },
};
</script>
