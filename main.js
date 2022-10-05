const app = Vue.createApp({
  data() {
    //dữ liệu trả về (có thể coi là dữ liệu câp 1)
    return {
      cart: [],
      premium: false,
    };
  },
  methods: {
    updateCart(id, isRemove = false) {
      console.log(id, isRemove);
      if (!isRemove) {
        return this.cart.push(id);
      }
      return this.cart.splice(this.cart.indexOf(id), 1);
    },
  },
});
