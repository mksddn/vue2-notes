<template>
  <div class="new-note">
    <form @submit.prevent="addNote">
      <label>Заголовок</label>
      <input
        type="text"
        placeholder="Обязательное поле"
        :value="note.title"
        @input="$emit('updateTitle', $event.target.value)"
      />
      <label>Описание</label>
      <textarea
        placeholder="Укажите подробности"
        :value="note.descr"
        @input="$emit('updateDescr', $event.target.value)"
      ></textarea>
      <button class="btn btnPrimary">Добавить</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'NewNoteVue',
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addNote() {
      this.$emit('addNote', this.note);
    },
  },
};
</script>

<style lang="scss" scoped>
.new-note {
  text-align: center;
  margin-bottom: 40px;
}
</style>
