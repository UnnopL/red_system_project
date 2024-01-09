import { createRouter, createWebHistory } from "vue-router";
import SideMenu from "../layouts/side-menu/Main.vue";
import SimpleMenu from "../layouts/simple-menu/Main.vue";
import TopMenu from "../layouts/top-menu/Main.vue";
//////////////////////////////////////////////////////////
import Page1 from "../views/page-1/Main.vue";
import Page2 from "../views/page-2/Main.vue";
/////////////////////////////////////////////////////////
import Dashbord from "../views/dashboard/Main.vue";
import Consumer from "../views/consumer/Main.vue";
import ConsumerUpdate from "../views/consumer/Update.vue";

import MessageBroker from "../views/messagebroker/Main.vue";
import MessageBrokerPurge from "../views/messagebroker/Purge.vue";
import UserRole from "../views/user/Role.vue";
import SMS from "../views/Sms.vue";
import OmTrigger from "../views/trigger/Om.vue";
import OmTriggerView from "../views/trigger/OmView.vue";
import TopupTrigger from "../views/trigger/Topup.vue";
import OmMessage from "../views/message/Om.vue";
import TopupMessage from "../views/message/Topup.vue";

const routes = [
  {
    path: "/",
    component: SideMenu,
    children: [
      {
        path: "/",
        name: "menu-dashbord",
        component: Dashbord,
      },
      {
        path: "/om-trigger",
        name: "menu-om-trigger",
        component: OmTrigger,
      },
      {
        path: "/om-trigger/view",
        name: "menu-om-trigger-view",
        component: OmTriggerView,
      },
      {
        path: "/topup-trigger",
        name: "menu-topup-trigger",
        component: TopupTrigger,
      },
      {
        path: "/topup-trigger/view",
        name: "menu-topup-trigger-view",
        component: TopupTrigger,
      },
      {
        path: "/om-message",
        name: "menu-om-message",
        component: OmMessage,
      },
      
      {
        path: "/topup-message",
        name: "menu-topup-message",
        component: TopupMessage,
      },
      {
        path: "/promotion",
        name: "menu-promotion",
        component: Page1,
      },
      {
        path: "/consumer",
        name: "menu-consumer",
        component: Consumer,
      },
      {
        path: "/consumer/update/:any",
        name: "menu-consumer-update",
        component: ConsumerUpdate,
      },
      {
        path: "/consumer/history",
        name: "menu-consumer-history",
        component: Page1,
      },
      {
        path: "/consumer/config",
        name: "menu-consumer-config",
        component: Page1,
      },
      {
        path: "/message-broker",
        name: "menu-message-broker",
        component: MessageBroker,
      },
      {
        path: "/message-broker/purge",
        name: "menu-message-broker-purge",
        component: MessageBrokerPurge,
      },
      {
        path: "/manage/user",
        name: "menu-user",
        component: Page2,
      },
      {
        path: "/manage/user/role",
        name: "menu-user-role",
        component: UserRole,
      },
      {
        path: "/manage/setting",
        name: "menu-setting",
        component: Page2,
      },
      {
        path: "/report/example",
        name: "menu-report",
        component: Page2,
      },
      {
        path: "/sms/list",
        name: "menu-smslist",
        component: SMS,
      },
    ],
  },
  {
    path: "/simple-menu",
    component: SimpleMenu,
    children: [
      {
        path: "page-1",
        name: "simple-menu-page-1",
        component: Page1,
      },
      {
        path: "page-2",
        name: "simple-menu-page-2",
        component: Page2,
      },
    ],
  },
  {
    path: "/",
    component: TopMenu,
    children: [
      {
        path: "/",
        name: "top-menu-dashbord",
        component: Dashbord,
      },
      {
        path: "page-2",
        name: "top-menu-page-2",
        component: Page2,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

export default router;
