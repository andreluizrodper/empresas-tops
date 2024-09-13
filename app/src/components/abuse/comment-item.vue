<template>
  <div class="py-2">
    <div>
      {{ comment.content }}
    </div>
    <div class="text-xs">{{ dateFormated }}</div>
  </div>
</template>

<script>
import { DateTime } from "luxon";

export default {
  props: {
    comment: { type: Object },
  },
  computed: {
    dateFormated() {
      return DateTime.fromISO(this.comment.created_at).toRelative();
    },
  },
};
</script>
