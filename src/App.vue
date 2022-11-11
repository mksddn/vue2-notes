<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <NewNoteVue
            :note="note"
            @addNote="addNote"
            @updateTitle="updateTitle"
            @updateDescr="updateDescr"
          />

          <MessageVue v-if="message" :message="message" />

          <div class="list-header">
            <h1 class="list-title">{{ title }}</h1>

            <SearchVue @search="search" />

            <div class="icons">
              <svg
                :class="{ active: grid }"
                @click="grid = true"
                title="Вид плиткой"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <svg
                :class="{ active: !grid }"
                @click="grid = false"
                title="Вид списком"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3" y2="6"></line>
                <line x1="3" y1="12" x2="3" y2="12"></line>
                <line x1="3" y1="18" x2="3" y2="18"></line>
              </svg>
            </div>
          </div>

          <NotesVue :notes="notesFilter" :grid="grid" @removeNote="removeNote" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import MessageVue from './components/Message.vue';
import NewNoteVue from './components/NewNote.vue';
import NotesVue from './components/Notes.vue';
import SearchVue from './components/Search.vue';
export default {
  name: 'App',
  components: {
    MessageVue,
    NewNoteVue,
    NotesVue,
    SearchVue,
  },
  data() {
    return {
      title: 'Заметки',
      windowWidth: window.innerWidth,
      grid: true,
      searchQuery: '',
      note: {
        title: '',
        descr: '',
        id: null,
      },
      message: null,
      notes: [
        {
          title: 'Первая заметка',
          descr: 'Попробуй добавить еще 😉',
          id: Date.now(),
          date: new Date(Date.now()).toLocaleString(),
        },
      ],
    };
  },
  computed: {
    notesFilter() {
      let query = this.searchQuery,
        array = this.notes;
      if (!query) return array;
      array = array.filter((note) => {
        const computedObj = {
          ...note,
        };
        return Object.keys(computedObj).some((key) =>
          ('' + computedObj[key]).trim().toLowerCase().includes(query.trim().toLowerCase()),
        );
      });
      return array;
    },
  },
  methods: {
    updateTitle(value) {
      this.note.title = value;
    },
    updateDescr(value) {
      this.note.descr = value;
    },
    addNote() {
      let { title, descr } = this.note;
      if (title === '') {
        this.message = 'Заголовок не может быть пустым';
        return false;
      }
      this.notes.push({
        title,
        descr,
        id: Date.now(),
        date: new Date(Date.now()).toLocaleString(),
      });
      this.note.title = '';
      this.note.descr = '';
      this.message = null;
    },
    removeNote(id) {
      this.notes.splice(
        this.notes.findIndex((note) => note.id == id),
        1,
      );
    },
    search(val) {
      this.searchQuery = val;
    },
  },
  mounted() {
    if (window.innerWidth > 600) {
      this.grid = true;
    } else this.grid = false;
    return this.grid;
  },
};
</script>

<style lang="scss">
.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
}

.list-title {
  font-size: 32px;
  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
  }
}

.icons svg {
  margin-right: 10px;
  color: #999;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
  &.active {
    color: #404caf;
  }
}
</style>
