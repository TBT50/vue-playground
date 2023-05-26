// Vue component is a VUE instance with pre-defined options

const testComponent = {
  template: `
    <p>Test Component</p>
  `,
};

const submissionComponent = {
  template: `
    <div style="display: flex; width: 100%; align-items: center">
      <figure class="media-left">
        <img
          class="image is-64x64"
          v-bind:src="submission.submissionImage"
        />
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>
              <a v-bind:href="submission.url" class="has-text-info"
                >{{ submission.title }}</a
              >
              <span class="tag is-small">#{{ submission.id }}</span>
            </strong>
            <br />
            {{ submission.description }}
            <br />
            <small class="is-size-7">
              Submitted by:
              <img class="image is-24x24" v-bind:src="submission.avatar" />
            </small>
          </p>
        </div>
      </div>
      <div class="media-right">
        <span class="icon is-small" v-on:click="upvoteSubmission(submission.id)">
          <i class="fa fa-chevron-up"></i>
          <strong class="has-text-info">{{ submission.votes }}</strong>
        </span>
      </div>
    </div>
  `,
  props: ["submission", "submissions"],
  methods: {
    upvoteSubmission(id) {
      const submission = this.submissions.find(
        (submission) => submission.id === id
      );
      submission.votes++;
    },
  },
};

const upVoteApp = {
  data() {
    return {
      submissions: submissions,
    };
  },
  computed: {
    sortedSubmissions() {
      console.log("ELO");
      return [...this.submissions].sort((a, b) => {
        return b.votes - a.votes;
      });
    },
  },
  components: {
    "submission-component": submissionComponent,
    "test-component": testComponent,
  },
};

Vue.createApp(upVoteApp).mount("#app");
