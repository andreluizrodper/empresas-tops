<template>
  <div v-if="abuse" class="flex flex-col">
    <router-link
      :to="{ name: 'abuse_company' }"
      class="text-xs flex gap-1 items-center"
    >
      <ChevronLeft size="12" /> Voltar
    </router-link>
    <div class="border-b pb-4 mb-4">
      <div class="flex flex-col gap-2">
        <p class="text-lg font-bold">{{ abuse.title }}</p>
      </div>
      <div class="text-base mt-2">
        {{ abuse.resume }}
      </div>
      <p class="text-xs">{{ dateFormated }}</p>
    </div>
    <div class="text-xs">{{ countComments }} comentários</div>
    <ComentForm @updateComments="updateComments" />
    <div class="flex flex-col gap-2 mt-4 divide-y">
      <CommentItem
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      />
    </div>
  </div>
</template>

<script>
import { getAbuse } from "@/utils/abuse";
import { getComments } from "@/utils/comments";
import { ChevronLeft } from "lucide-vue-next";
import { DateTime } from "luxon";
import CommentItem from "@/components/abuse/comment-item.vue";
import ComentForm from "@/components/abuse/comment-form.vue";

export default {
  components: {
    ChevronLeft,
    CommentItem,
    ComentForm,
  },
  data() {
    return {
      abuse: null,
      comments: null,
    };
  },
  computed: {
    dateFormated() {
      return DateTime.fromISO(this.abuse.created_at).toRelative();
    },
    countComments() {
      if (!this.comments) return 0;
      return this.comments.length;
    },
  },
  async mounted() {
    this.abuse = await getAbuse(this.$route.params.abuse_id);
    this.updateComments();
  },
  methods: {
    async updateComments() {
      this.comments = await getComments(this.$route.params.abuse_id);
    },
  },
};
</script>
