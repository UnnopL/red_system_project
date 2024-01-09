import { useSideMenuStore } from "@/stores/side-menu";

import { defineStore } from "pinia";
import axios from 'axios'

export const userRoleStore = defineStore("userRoleStore", {
    id: "userRoleStore",
    state: () => ({
        form: {
            permission_select: [],
        },
        permission: {},
        permission_all: [],
        permission_special: [],
    }),
    actions: {
        async getPermission() {
            this.permission = useSideMenuStore().menu;
            this.permission_special = useSideMenuStore().permission_special;
            this.permission = useSideMenuStore().menu;
            this.permission_special = useSideMenuStore().permission_special;
            // useMainMenuStore().menu.forEach((element)=>{
            //   this.permission_all.push(element.pageName)
            // })
        },
        async permissionAll() {
          this.permissionClear();
          this.permission.forEach((element) => {
            this.permission_all.push(element.pageName);
            element.subMenu.forEach((element_sub) => {
              this.form.permission_select.push(element_sub.pageName);
            });
          });
    
    
        },
        async permissionSpecialAll() {
          this.permission_special.forEach((element) => {
            this.permission_all.push(element.pageName);
            element.subMenu.forEach((element_sub) => {
              this.form.permission_select.push(element_sub.pageName);
            });
          });
        },
        async permissionClear() {
          this.form.permission_select = [];
          this.permission_all = [];
        },
        async selectPermissionAll(id) {
      

            if (this.permission_all.includes(id)) {
                this.permission
                  .find((element) => element.pageName == id)
                  .subMenu.forEach((element) => {
                    this.form.permission_select.splice(
                      this.form.permission_select.indexOf(element.pageName),
                      1
                    );
                  });
                this.permission_all.splice(this.permission_all.indexOf(id), 1);
              } else {
                this.permission
                  .find((element) => element.pageName == id)
                  .subMenu.forEach((element) => {
                    if (!this.form.permission_select.includes(element.pageName))
                      this.form.permission_select.push(element.pageName);
                  });
                this.permission_all.push(id);
              }

            
        },
        async selectPermission(id, sub_id) {
        

            let count = 0;
            !this.form.permission_select.includes(sub_id)
            ? this.form.permission_select.push(sub_id)
            : this.form.permission_select.splice(
                this.form.permission_select.indexOf(sub_id),
                1
            );

            this.permission
            .find((element) => element.pageName == id)
            .subMenu.forEach((element) => {
                if (this.form.permission_select.includes(element.pageName)) count++;
            });
            if (
            this.permission.find((element) => element.pageName == id).subMenu
                .length == count
            ) {
            this.permission_all.push(id);
            } else {
            if (this.permission_all.includes(id))
                this.permission_all.splice(this.permission_all.indexOf(id), 1);
            }
        
        // console.log(this.form.permission_select)
        },
    }

});