import { defineStore } from "pinia";
import Toast from "../utils/Toast";

export default defineStore("bookmarkStore", {
  state: () => ({
    bookmarkData: [],
  }),

  actions: {
    setLocalStorageBookmark() {
      localStorage.setItem("learnfundBookmark", this.bookmarkData);
    },

    getLocalStorageBookmark() {
      const bookmarkStr = localStorage.getItem("learnfundBookmark");

      if (bookmarkStr === null) {
        return;
      }

      this.bookmarkData = bookmarkStr.split(",").filter(Boolean);
    },

    BookmarkAction(id) {
      if (event.target.classList.contains("bi-bookmark")) {
        event.target.classList.remove("bi-bookmark");
        event.target.classList.add("bi-bookmark-fill");
        this.bookmarkData.push(id);
        this.setLocalStorageBookmark();

        Toast.fire({
          icon: "success",
          title: "加入收藏",
        });
      } else {
        const targetIndex = this.bookmarkData.indexOf(id);

        this.bookmarkData.splice(targetIndex, 1);
        this.setLocalStorageBookmark();

        event.target.classList.remove("bi-bookmark-fill");
        event.target.classList.add("bi-bookmark");
        Toast.fire({
          icon: "success",
          title: "移除收藏",
        });
      }
    },
  },
  getters: {
    showbookmarkData({ bookmarkData }) {
      return bookmarkData;
    },
  },
});
