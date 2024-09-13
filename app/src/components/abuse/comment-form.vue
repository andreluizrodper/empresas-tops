<template>
  <div class="flex gap-2 w-full mt-2">
    <div
      :contenteditable="true"
      placeholder="O que você está pensando..."
      class="min-h-6 flex-1 p-2 text-sm bg-gray-100"
      @input="setContent"
      ref="contentEditabled"
    />
    <div class="flex justify-end p-2">
      <Button @click="save" size="xs"><Send size="12" /></Button>
    </div>
  </div>
</template>
<script>
import { Button } from "@/components/ui/button";
import { createComment } from "@/utils/comments";
import { Send } from "lucide-vue-next";
export default {
  components: {
    Button,
    Send,
  },
  data() {
    return {
      content: null,
    };
  },
  emits: ["updateComments"],
  methods: {
    setContent(val) {
      this.content = val.target.innerHTML;
    },
    async save() {
      if (!this.content) return;
      await createComment({
        data: {
          abuse_id: this.$route.params.abuse_id,
          content: this.content,
        },
      });
      this.$refs.contentEditabled.innerHTML = "";
      this.$emit("updateComments");
    },
  },
};
</script>
./create.vue
