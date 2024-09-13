<template>
  <div class="px-4 py-2 text-xs">
    <span>{{ year }} &copy;NearFutureLab</span>
  </div>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>
