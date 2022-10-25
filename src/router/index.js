import { createRouter, createWebHistory } from "vue-router";
import CongeView from "../views/CongeView"
import PresenceView from "../views/PresenceView"
import HomeView from "../views/HomeView"
import NiveauView from "../views/NiveauView"

const routes = [
    {path:"/", component:HomeView},
    {path:"/conge", component:CongeView},
    {path:"/presences", component:PresenceView},
    {path:"/niveau", component:NiveauView},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
