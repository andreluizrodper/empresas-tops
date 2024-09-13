import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/home.vue";
import Wizard from "@/views/wizard.vue";
import Abuse from "@/views/abuse.vue";
import AbuseCompany from "@/views/abuse-company.vue";
import AbuseCompanyList from "@/views/abuse-list.vue";
import AbuseCompanySingle from "@/views/abuse-company-single.vue";

const routes = [
  { path: "", name: "home", component: Home },
  { path: "/wizard", name: "wizard", component: Wizard },
  { path: "/abuse", name: "abuse", component: Abuse },
  {
    path: "/abuse/:cnpj",
    component: AbuseCompany,
    children: [
      { name: "abuse_company", component: AbuseCompanyList, path: "" },
      {
        path: ":abuse_id",
        name: "abuse_company_single",
        component: AbuseCompanySingle,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
