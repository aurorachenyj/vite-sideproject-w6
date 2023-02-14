import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("../views/frontLayoutView.vue"),
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("../views/front/HomeView.vue"),
        },
        {
          path: "courses",
          name: "courses",
          component: () => import("../views/front/CoursesView.vue"),
        },
        {
          path: "course/:id",
          name: "course",
          component: () => import("../views/front/CourseView.vue"),
        },

        {
          path: "contents",
          name: "contents",
          component: () => import("../views/front/ContentsView.vue"),
        },
        {
          path: "bookmark",
          name: "bookmark",
          component: () => import("../views/front/BookmarkView.vue"),
        },
        {
          path: "cart",
          name: "cart",
          component: () => import("../views/front/CartView.vue"),
        },
        {
          path: "/cart/order",
          name: "order",
          component: () => import("../views/front/OrderView.vue"),
        },
        {
          path: "adminLogin",
          name: "adminLogin",
          component: () => import("../views/front/AdminLoginView.vue"),
        },
      ],
    },

    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/dashboardLayoutView.vue"),
      children: [
        {
          path: "index",
          name: "adminIndex",
          component: () => import("../views/admin/AdminIndexView.vue"),
        },
        {
          path: "order",
          name: "adminOrder",
          component: () => import("../views/admin/AdminOrderView.vue"),
        },
        {
          path: "courses",
          name: "adminCourses",
          component: () => import("../views/admin/AdminCoursesView.vue"),
        },
        {
          path: "content",
          name: "adminContent",
          component: () => import("../views/admin/AdminContentView.vue"),
        },
      ],
    },
  ],
});

export default router;
