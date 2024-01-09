import { defineStore } from "pinia";

export const useTopMenuStore = defineStore("topMenu", {
  state: () => ({
    menu: [
      {
        icon: "HomeIcon",
        pageName: "menu-dashbord",
        title: "Dashbord",
      },
      {
        icon: "CloudDrizzleIcon",
        pageName: "menu-om-trigger",
        title: "Trigger",
        subMenu: [
          {
            icon: "",
            pageName: "menu-om-trigger",
            title: "OM",
          },
          {
            icon: "",
            pageName: "menu-topup-trigger",
            title: "Topup",
          },
        ]
      },
      {
        icon: "ZapIcon",
        pageName: "menu-promotion",
        title: "Message",
        subMenu: [
          {
            icon: "",
            pageName: "menu-om-message",
            title: "OM",
          },
          {
            icon: "",
            pageName: "menu-topup-message",
            title: "Topup",
          },
        ]
      },
      // {
      //   icon: "FramerIcon",
      //   pageName: "menu-promotion",
      //   title: "Promo/Package",
      //   subMenu: [
      //     {
      //       icon: "",
      //       pageName: "menu-promotion",
      //       title: "รายการโปรโมชั่น",
      //     },
      //     {
      //       icon: "",
      //       pageName: "menu-promotion",
      //       title: "ตั้งค่า",
      //     },
      //   ]
      // },
      {
        icon: "UsersIcon",
        pageName: "menu-consumer",
        title: "Consumer",
        // subMenu: [
        //   {
        //     icon: "",
        //     pageName: "menu-consumer",
        //     title: "รายการ",
        //   },
        //   {
        //     icon: "",
        //     pageName: "menu-consumer",
        //     title: "MQ > Consumer",
        //   },
        //   {
        //     icon: "",
        //     pageName: "menu-consumer-config",
        //     title: "ตั้งค่า",
        //   },
        // ]
      },
      {
        icon: "MessageCircleIcon",
        pageName: "menu-message-broker",
        title: "Message Broker",
        subMenu: [
          {
            icon: "",
            pageName: "menu-message-broker",
            title: "รายการ",
          },
          {
            icon: "",
            pageName: "menu-message-broker-purge",
            title: "Clear Event Message",
          },
        ]
      },
      // {
      //   icon: "MessageSquareIcon",
      //   pageName: "menu-smslist",
      //   title: "SMS",
      // },
      {
        icon: "UsersIcon",
        pageName: "menu-user",
        title: "ผู้ใช้งานระบบ",
      },
      {
        icon: "LayersIcon",
        pageName: "menu-user-role",
        title: "สิทธิ์เข้าใช้งานระบบ",
      },
      {
        icon: "SettingsIcon",
        pageName: "menu-setting",
        title: "ตั้งค่าระบบ",
      },
      // {
      //   icon: "BarChartIcon",
      //   pageName: "menu-report",
      //   title: "รายงาน SMS",
      //   subMenu: [
      //     {
      //       icon: "",
      //       pageName: "menu-report",
      //       title: "สรุปปริมาณการส่ง SMS ตาม Order Type",
      //     },
      //     {
      //       icon: "",
      //       pageName: "menu-report",
      //       title: "สรุปปริมาณการส่ง SMS ตาม Condition",
      //     },
      //     {
      //       icon: "",
      //       pageName: "menu-report",
      //       title: "สรุปค่าเฉลี่ย Response Time ที่ใช้ส่ง SMS",
      //     },
      //   ]
      // },
      {
        icon: "BarChartIcon",
        pageName: "menu-report",
        title: "รายงาน",
        subMenu: [
          {
            icon: "",
            pageName: "menu-report",
            title: "Message Queue",
          },
          {
            icon: "",
            pageName: "menu-report",
            title: "รายงานการ Activity",
          },
          {
            icon: "",
            pageName: "menu-report",
            title: "รายงานการเข้าใช้งานระบบ",
          },
        ]
      },
    ],
  }),
});
