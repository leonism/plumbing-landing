import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NewsView from "../views/NewsView.vue";
import AboutView from "../views/AboutView.vue";
import ServicesView from "../views/ServicesView.vue";
import ContactView from "../views/ContactView.vue";
import LocationView from "../views/LocationView.vue";
import NewsPost from "../components/NewsPost.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/news", name: "News", component: NewsView },
  { path: "/news/:slug", name: "NewsPost", component: NewsPost, props: true },
  { path: "/about", name: "About", component: AboutView },
  { path: "/services", name: "Services", component: ServicesView },
  { path: "/contact", name: "Contact", component: ContactView },
  { path: "/location", name: "Location", component: LocationView },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});

