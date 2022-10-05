app.component("review-form", {
  template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
  <h3>Leave a review</h3>
  <label for="name">Name:</label>
  <input id="name" v-model="name">

  <label for="review">Review:</label>      
  <textarea id="review" v-model="review"></textarea>

  <label for="rating">Rating:</label>
  <select id="rating" v-model.number="rating">
    <option>5</option>
    <option>4</option>
    <option>3</option>
    <option>2</option>
    <option>1</option>
  </select>

  <input class="button" type="submit" value="Submit">
</form>`,
  data() {
    return {
      name: "",
      review: "",
      rating: null,
      isRecommend: true,
    };
  },
  methods: {
    onSubmit() {
      if ((this.name === "", this.review === "", this.rating === null)) {
        return alert("Review is incomplete. Please add fill out every field");
      }
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
      };

      this.$emit("review-submitted", productReview);
      this.$emit("recommend-product", this.isRecommend);

      this.name = "";
      this.review = "";
      this.rating = null;
    },
  },
  beforeCreate: async function () {
    console.log(111);
  },
  created: async function () {
    console.log(222);
  },
  beforeMount() {
    console.log(333);
  },
  mounted() {
    console.log(444);
  },
  beforeUpdate() {
    console.log(555);
  },
  updated() {
    console.log(666);
  },
  activated() {
    console.log(777);
  },
  beforeDestroy() {
    console.log(888);
  },
  errorCaptured() {
    console.log(999);
  },
});
