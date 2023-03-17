import { defineStore } from "pinia";
// import axios from "axios";
import Toast from "../utils/Toast";

// const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

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
      console.log(bookmarkStr);
      if (bookmarkStr === null) {
        return;
      }

      this.bookmarkData = bookmarkStr.split(",").filter(Boolean);
      console.log(this.bookmarkData);
    },

    BookmarkAction(id) {
      console.log(this.bookmarkData);

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
        console.log(targetIndex);
        this.bookmarkData.splice(targetIndex, 1);
        this.setLocalStorageBookmark();
        console.log(this.bookmarkData);
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
