<template>
  <div class="flex flex-col gap-2 border rounded px-4 py-2">
    <router-link
      :to="{ name: 'abuse_company_single', params: { abuse_id: abuse.id } }"
      >{{ abuse.title }}</router-link
    >
    <span class="text-sm">
      {{ dateFormated }}
    </span>
  </div>
</template>

<script>
import { DateTime } from "luxon";

export default {
  props: {
    abuse: { type: Object },
  },
  computed: {
    dateFormated() {
      return DateTime.fromISO(this.abuse.created_at).toRelative();
    },
  },
};
</script>
