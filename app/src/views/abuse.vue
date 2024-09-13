<template>
  <Step1 v-if="step === 0" @toggleStep="toggleStep" />
  <Step2 v-if="step === 1" @toggleStep="toggleStep" />
  <Step3 v-if="step === 2" />
</template>

<script>
import Step1 from "@/components/abuse/step-1.vue";
import Step2 from "@/components/abuse/step-2.vue";
import Step3 from "@/components/abuse/step-3.vue";

export default {
  components: {
    Step1,
    Step2,
    Step3,
  },
  data() {
    return {
      step: 0,
    };
  },
  methods: {
    toggleStep(step) {
      this.step = step;
    },
  },
};
</script>
