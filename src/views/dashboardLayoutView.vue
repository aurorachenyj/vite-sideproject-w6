<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light justify-content-evenly"
  >
    <RouterLink to="/admin/index">後台首頁</RouterLink>

    <RouterLink to="/admin/order">訂單管理</RouterLink>
    <RouterLink to="/admin/courses">課程管理</RouterLink>
    <RouterLink to="/admin/content">文章管理</RouterLink>
    <RouterLink to="/adminLogin">回後台登入頁</RouterLink>
    <RouterLink to="/">回前台首頁</RouterLink>
  </nav>
  <RouterView />
</template>
