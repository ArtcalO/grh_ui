import { createRouter, createWebHistory } from "vue-router";
import PresenceView from "../views/PresenceView"

const routes = [
    {path:"/presences", component:PresenceView},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
