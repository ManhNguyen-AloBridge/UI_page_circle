app.component("product-display", {
  template:
    /**HTML */
    ` <div class="product-display">
  <div class="product-container">
    <div class="product-image">
      <img :src="image" :class="[!inStock ? 'out-of-stock-img': '']">
    </div>
    <div class="product-info">
      <h1>{{ title }}</h1>
      <p v-if="inStock">In Stock</p>
      <p v-else-if="almostSoldOut">Almost sold out!</p>
      <p v-else>Out of  Stock</p>
      <p v-if="isSale">On Sale</p>
      <p v-else>Out Sale</p>
      <p>Shipping: {{shipping}}</p>
      <ul>
        <li v-for="detail in product.details">{{ detail }}</li>
      </ul>

      <div 
      v-for="(variant, index) in product.variants" 
      :key="variant.id" 
      @mouseover="updateVariant(index)"
      class="color-circle"
      :style="{backgroundColor: variant.color}"
      >
    </div>
      <div v-for="size in sizes">{{ size }}</div>

      <button class="button" :class="{disabledButton: !inStock}" :disabled="!inStock" @click="addToCart">Add to Cart</button>
      <button class="button" :class="{disabledButton: product.cart == 0}" :disabled="product.cart == 0" @click="removeInCart">Remove 1</button>
    </div>
  </div>
  <review-list v-if="reviews.length " :reviews="reviews"></review-list>
  <review-form @review-submitted="addReview" @recommend-product="addRecommend"></review-form>
</div>`,
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    //dữ liệu trả về (có thể coi là dữ liệu câp 1)
    return {
      product: {
        name: "Sản phẩm 1",
        description: "Đây là một sẩn phẩm tốt rất đáng mua",
        image: "./assets/images/socks_blue.jpg",
        selectedVariant: 0,
        brand: "Vue Mastery",
        details: ["50% cotton", "30% wool", "20% polyester"],
        variants: [
          {
            id: 1,
            color: "green",
            image: "./assets/images/socks_green.jpg",
            quantity: 50,
            sizes: ["S", "M", "L", "XL", "XXL"],
          },
          {
            id: 2,
            color: "blue",
            image: "./assets/images/socks_blue.jpg",
            quantity: 0,
            sizes: ["XL", "XXL"],
          },
        ],
      },
      reviews: [],
    };
  },
  methods: {
    //các hàm xử lý dữ liệu
    addToCart() {
      this.$emit(
        "add-to-card",
        this.product.variants[this.product.selectedVariant].id
      );
    },
    removeInCart() {
      this.$emit(
        "remove-in-card",
        this.product.variants[this.product.selectedVariant].id,
        true
      );
    },
    updateVariant(index) {
      this.product.selectedVariant = index;
    },

    addReview(review) {
      this.reviews.push(review);
    },
    addRecommend(isRecommend) {
      if (isRecommend) {
        return alert("Would you recommend this product");
      }
    },
  },
  computed: {
    //viết hàm xử lý trả về dữ liệu từ những dữ liệu đã (xử lý lại dữ liệu cấp 1 và trả về kết quả)
    title() {
      return this.product.brand + " " + this.product.name;
    },
    image() {
      return this.product.variants[this.product.selectedVariant].image;
    },
    inStock() {
      return this.product.variants[this.product.selectedVariant].quantity > 0;
    },
    isSale() {
      return this.product.variants[this.product.selectedVariant].quantity > 0;
    },
    sizes() {
      return this.product.variants[this.product.selectedVariant].sizes;
    },
    almostSoldOut() {
      return (
        this.product.variants[this.product.selectedVariant].quantity > 0 &&
        this.product.variants[this.product.selectedVariant].quantity <= 10
      );
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }

      return 2.99;
    },
  },
});
