export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),
  actions: {
    addCartItem(item) {
      // if already in cart, increment quantity
      // if client side, save to local storage
      const existingItem = this.items.find((i) => i.id === item.id);
      if (existingItem) {
        return;
      }
      this.$patch({ items: [...this.items, item] });
      localStorage.setItem("cart", JSON.stringify(this.items));
    },
    removeCartItem(id) {
      const newItems = this.items.filter((item) => item.id != id);
      this.$patch({ items: newItems });
      localStorage.setItem("cart", JSON.stringify(this.items));
    },
    setCart(items) {
      this.$patch({ items });
      localStorage.setItem("cart", JSON.stringify(this.items));
    },
  },
  getters: {
    getCartItems: (state) => state.items,
    getCartTotal: (state) =>
      state.items.reduce((acc, item) => acc + item.price, 0),
    getItemsCount: (state) => state.items.length,
  },
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}
