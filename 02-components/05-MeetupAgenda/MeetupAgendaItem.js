import { defineComponent } from './vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from './meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',

  props: {
    agendaItem: {
      type: Object,
      required: true,
    },
  },

  computed: {
    isTypeTalk() {
      return this.agendaItem.type === 'talk';
    },
    hasAgendaTitle() {
      return this.agendaItem.title ? this.agendaItem.title : this.defaultTitle;
    },
    agendaDuration() {
      return `${this.agendaItem.startsAt} - ${this.agendaItem.endsAt}`;
    },
    defaultIcon() {
      return agendaItemIcons[this.agendaItem.type];
    },
    defaultTitle() {
      return agendaItemDefaultTitles[this.agendaItem.type];
    },
  },

  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="\`/assets/icons/icon-\${defaultIcon}.svg\`" class="icon" :alt="\`icon-\${defaultIcon}\`" />
      </div>
      <div class="agenda-item__col">{{ agendaDuration }}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">{{ hasAgendaTitle }}</h3>
        <p v-if="isTypeTalk" class="agenda-item__talk">
          <span>{{ agendaItem.speaker }}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang">{{ agendaItem.language }}</span>
        </p>
        <p v-if="agendaItem.description">{{ agendaItem.description }}</p>
      </div>
    </div>`,
});
