<template>
  <div class="notes" v-if="notes.length > 0">
    <div class="note" :class="{ w100: !grid }" v-for="note in notes" :key="note.id">
      <div class="note-header">
        <h3>{{ note.title }}</h3>
        <span class="btnDel" title="Удалить" @click="removeNote(note.id)">x</span>
      </div>
      <div class="note-body">
        <p>{{ note.descr }}</p>
        <span>{{ note.date }}</span>
      </div>
    </div>
  </div>
  <div class="notes no-notes" v-else>
    <p>Заметок пока нет</p>
  </div>
</template>

<script>
export default {
  name: 'NotesVue',
  props: {
    notes: {
      type: Array,
      required: false,
    },
    grid: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    removeNote(id) {
      this.$emit('removeNote', id);
    },
  },
};
</script>

<style lang="scss" scoped>
.notes {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
}
.note {
  width: 49%;
  padding: 20px 20px;
  margin-bottom: 30px;
  background-color: #fff;
  border-radius: 10px;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);
  &:hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }
  &.w100 {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.9rem !important;
  }
  @media screen and (max-width: 320px) {
    font-size: 0.8rem;
  }
}
.note-header {
  display: flex;
  justify-content: space-between;
  color: rgb(216, 80, 80);
  h3 {
    font-size: 1.4em;
    color: #404caf;
  }
}
.note-body {
  p {
    margin: 20px 0;
  }
  span {
    font-size: 14px;
    color: #999;
  }
}
.btnDel {
  cursor: pointer;
}
.no-notes {
  justify-content: center;
}
</style>
