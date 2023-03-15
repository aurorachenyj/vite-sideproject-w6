import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  scrollBehavior(to, from, savePosition) {
    if (to.fullPath.match("courses")) {
      return {
        top: 0,
      };
    }

    return {
      top: 10,
    };
  },
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("../views/FrontLayoutView.vue"),
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("../views/front/HomeView.vue"),
        },
        {
          path: "group/:category",
          name: "group",
          component: () => import("../views/front/GroupView.vue"),
          props: (route) => {
            console.log(route.params.category);
            return { categoryName: route.params.category };
          },
        },
        {
          path: "search/:keyword",
          name: "search",
          component: () => import("../views/front/SearchView.vue"),
          props: (route) => {
            console.log(route.params.keyword);
            return { keywordName: route.params.keyword };
          },
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
          path: "article/:articleId",
          name: "article",
          component: () => import("../views/front/articleView.vue"),
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
          path: "orderCheck/:id",
          name: "orderCheck",
          component: () => import("../views/front/OrderCheckView.vue"),
        },
        {
          path: "/:pathMatch(.*)*",
          name: "notFound",
          component: () => import("../views/front/NotFoundView.vue"),
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
      component: () => import("../views/DashboardLayoutView.vue"),
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
        {
          path: "coupon",
          name: "adminCoupon",
          component: () => import("../views/admin/AdminCouponView.vue"),
        },
      ],
    },
  ],
});

export default router;
