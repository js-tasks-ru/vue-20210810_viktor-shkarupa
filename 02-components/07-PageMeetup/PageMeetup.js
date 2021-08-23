import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from '../06-MeetupView/MeetupView.js';
import { fetchMeetupById } from './meetupService.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    MeetupView,
    UiContainer,
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      meetup: null,
      textError: null,
      isLoading: false,
    };
  },

  watch: {
    meetupId(newMeetupId) {
      this.getMeetupById(newMeetupId);
    },
  },

  created() {
    this.getMeetupById(this.meetupId);
  },

  methods: {
    getMeetupById(meetupId) {
      this.textError = null;
      this.meetup = null;
      this.isLoading = true;

      fetchMeetupById(meetupId)
        .then((res) => {
          this.meetup = res;
        })
        .catch((err) => {
          this.isLoading = false;
          this.meetup = null;
          this.textError = err.message;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },

  template: `
    <div class="page-meetup">
    <!-- meetup view -->
      <meetup-view v-if="meetup" :meetup="meetup" />
      <ui-container>
        <ui-alert v-if="isLoading">Загрузка...</ui-alert>
      </ui-container>

      <ui-container v-if="textError">
        <ui-alert>{{ textError }}</ui-alert>
      </ui-container>
    </div>`,
});
