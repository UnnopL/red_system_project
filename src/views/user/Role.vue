<template>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">สิทธิ์เข้าใช้งานระบบ</h2>
    </div>
    <!-- BEGIN: Page Layout -->
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div class="intro-y col-span-12 flex flex-wrap xl:flex-nowrap items-center mt-2">

        <div class="flex w-full sm:w-auto">
          <div class="w-48 relative text-slate-500">
              <input type="text" class="form-control w-48 box pr-10" placeholder="Search by name...">
              <i class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" data-lucide="search"></i> 
          </div>
        </div>
        <div class="hidden xl:block mx-auto text-slate-500">Showing 1 to 10 of 150 entries</div>
        <div class="w-full xl:w-auto flex flex-wrap xl:flex-nowrap items-center gap-y-3 mt-3 xl:mt-0">
            <button class="btn btn-primary shadow-md mr-2" @click="formModalAddRoles"> <PlusIcon class="w-4 h-4 mr-2" /> เพิ่มสิทธิ์ </button>
        </div>
      </div>
      <div class="intro-y col-span-12 overflow-auto 2xl:overflow-visible">
        <table class="table table-report -mt-2">
          <thead>
              <tr>
                  <th class="whitespace-nowrap">
                      <input class="form-check-input" type="checkbox">
                  </th>
                  <th class="whitespace-nowrap">ชื่อสิทธิ์</th>
                  <th class="whitespace-nowrap">จำนวนผู้ใช้งาน</th>
                  <th class="text-center whitespace-nowrap">STATUS</th>
                  <th class="text-center whitespace-nowrap">ACTIONS</th>
              </tr>
          </thead>
          <tbody>
            <tr class="intro-x">
              <td class="w-10">
                  <input class="form-check-input" type="checkbox">
              </td>
              <td class="!py-4">
                  <div class="flex items-center">
                      <a href="" class="font-medium whitespace-nowrap ml-4">Admin</a> 
                  </div>
              </td>
              <td class="whitespace-nowrap"> <a class="flex items-center underline decoration-dotted" href="javascript:;">15 คน</a> </td>
              <td class="w-40">
                  <div class="flex items-center justify-center text-success"> <CheckSquareIcon class="w-4 h-4 mr-2" /> Active </div>
              </td>
              <td class="table-report__action w-56">
                  <div class="flex justify-center items-center">
                    <a class="btn btn-success mr-1" href="javascript:;"> <Edit3Icon class="w-4 h-4" /> </a>
                    <a class="btn btn-danger mr-1" href="javascript:;"> <Trash2Icon class="w-4 h-4" /> </a>
                  </div>
              </td>
            </tr>
            <tr class="intro-x">
              <td class="w-10">
                  <input class="form-check-input" type="checkbox">
              </td>
              <td class="!py-4">
                  <div class="flex items-center">
                      <a href="" class="font-medium whitespace-nowrap ml-4">การตลาด</a> 
                  </div>
              </td>
              <td class="whitespace-nowrap"> <a class="flex items-center underline decoration-dotted" href="javascript:;">23 คน</a> </td>
              <td class="w-40">
                <div class="flex items-center justify-center text-success"> <CheckSquareIcon class="w-4 h-4 mr-2" /> Active </div>
              </td>
              <td class="table-report__action w-56">
                  <div class="flex justify-center items-center">
                    <a class="btn btn-success mr-1" href="javascript:;"> <Edit3Icon class="w-4 h-4" /> </a>
                    <a class="btn btn-danger mr-1" href="javascript:;"> <Trash2Icon class="w-4 h-4" /> </a>
                  </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
        <nav class="w-full sm:w-auto sm:mr-auto">
          <ul class="pagination">
              <li class="page-item">
                  <a class="page-link" href="#"> <ChevronsLeftIcon class="w-4 h-4" /> </a>
              </li>
              <li class="page-item">
                  <a class="page-link" href="#"> <ChevronLeftIcon class="w-4 h-4" /> </a>
              </li>
              <li class="page-item"> <a class="page-link" href="#">...</a> </li>
              <li class="page-item"> <a class="page-link" href="#">1</a> </li>
              <li class="page-item active"> <a class="page-link" href="#">2</a> </li>
              <li class="page-item"> <a class="page-link" href="#">3</a> </li>
              <li class="page-item"> <a class="page-link" href="#">...</a> </li>
              <li class="page-item">
                  <a class="page-link" href="#"> <ChevronRightIcon class="w-4 h-4" /> </a>
              </li>
              <li class="page-item">
                  <a class="page-link" href="#"> <ChevronsRightIcon class="w-4 h-4" /> </a>
              </li>
          </ul>
        </nav>
        <select class="w-20 form-select box mt-3 sm:mt-0">
            <option>10</option>
            <option>25</option>
            <option>35</option>
            <option>50</option>
        </select>
      </div>
    </div>
    <!-- END: Page Layout Suspended text-danger -->

    <Modal size="modal-lg" :show="formModalAddRole" @hidden="formModalAddRole = false">
        <ModalHeader>
            <h2 class="mr-auto text-base font-medium">ลงทะเบียน Message Broker</h2>
            <div class="w-full mt-3 form-check form-switch sm:w-auto sm:ml-auto sm:mt-0">
                <div class="form-check form-switch ml-auto">
                
                </div>
            </div>
        </ModalHeader>
        <ModalBody class="p-5">
            <div class="mt-3">
                <label for="to_bank_name" class="form-label">
                    ชื่อสิทธิ์
                </label>
                <input
                type="text"
                id="to_bank_name"
                name="to_bank_name"
                class="form-control"
                placeholder="ชื่อสิทธิ์"
                />
            </div>
            <hr />
            <div class="my-5">
                <button class="btn btn-secondary mr-1" @click="store_role.permissionAll()">
                    <component is="FileInputIcon" class="block mx-auto"> </component>
                    เลือกทั้งหมด
                    </button>
                    <button class="btn btn-secondary" @click="store_role.permissionClear()">
                    <component is="FileX2Icon" class="block mx-auto"> </component>
                    ไม่เลือกทั้งหมด
                </button>
            </div>
            <div class="grid grid-cols-2 gap-10 my-5">
                <template v-for="(data, i) in store_role.permission" :key="'data_' + i">

                    <div>
                        <label class="form-label">{{ data.title }}</label>
                        <div class="form-check mb-3">
                        <input
                            :id="'all_' + data.pageName"
                            class="form-check-input"
                            type="checkbox"
                            :value="data.pageName"
                            v-model="store_role.permission_all"
                            @click="store_role.selectPermissionAll(data.pageName)"
                        />
                        <label
                            class="form-check-label font-medium"
                            :for="'all_' + data.pageName"
                            >อนุญาตทั้งหมด</label
                        >
                        </div>
                        <template
                        v-for="(data_sub, i_sub) in data.subMenu"
                        :key="'data_sub_' + i_sub"
                        >
                        <div class="form-check mb-3">
                            <input
                            :id="data_sub.pageName"
                            class="form-check-input"
                            type="checkbox"
                            :value="data_sub.pageName"
                            v-model="store_role.form.permission_select"
                            @click="
                                store_role.selectPermission(data.pageName, data_sub.pageName)
                            "
                            />
                            <label class="form-check-label" :for="data_sub.pageName">{{
                            data_sub.title
                            }}</label>
                        </div>
                        </template>
                    </div>

                </template>
            </div>
            <hr />
            <div class="justify-between md:flex">
                <h2 class="my-2 text-lg font-medium">เมนูที่สามารถมองเห็นได้</h2>
                <div class="my-2">
                    <button class="mr-1 btn btn-secondary" @click="v.permissionAll()">
                        <component is="FileInputIcon" class="block mx-auto">
                        </component>
                        เลือกทั้งหมด
                    </button>
                    <button class="btn btn-secondary" @click="store_role.permissionClear()">
                        <component is="FileX2Icon" class="block mx-auto"> </component>
                        ไม่เลือกทั้งหมด
                    </button>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-4 my-6">
                <div v-for="(data, i) in store_role.permission_special" :key="'data_' + i">
                    <label class="text-lg form-label"><b>{{ data.title }}</b></label>
                    <div class="mb-3 form-check">
                        <input :id="'all_' + data.pageName" class="form-check-input" type="checkbox"
                            :value="data.pageName" v-model="store_role.permission_all" @click="
                                store_role.selectPermissionSpecialAll(data.pageName)
                            " />
                        <label class="font-medium form-check-label"
                            :for="'all_' + data.pageName">อนุญาตทั้งหมด</label>
                    </div>
                    <div class="mb-3 form-check" v-for="(data_sub, i_sub) in data.subMenu"
                        :key="'data_sub_' + data_sub.pageName">
                        <input :id="data_sub.pageName" class="form-check-input" type="checkbox"
                            :value="data_sub.pageName" v-model="store_role.form.permission_select" @click="
                                store_role.selectPermissionSpecial(
                                    data.pageName,
                                    data_sub.pageName
                                )
                            " />
                        <label class="form-check-label" :for="data_sub.pageName">{{
                            data_sub.title
                        }}</label>
                    </div>
                </div>
            </div>
        </ModalBody>
        <ModalFooter class="px-5 py-8 text-right">
          <button type="button" @click="formModalAddRole = false" class="w-32 h-10 mr-1 btn btn-outline-secondary">
            ปิด
          </button>
          <button
            type="button"
            class="w-32 h-10 btn btn-primary whitespace-nowrap"
          >
            บันทึกข้อมูล <SaveIcon class="w-4 h-4 ml-2" />
          </button>
        </ModalFooter>
    </Modal>
</template>
<script setup>
import { ref, onMounted } from "vue"
import { userRoleStore } from "@/stores/models"
import axios from 'axios'
import Swal from 'sweetalert2'


const store_role = userRoleStore()

const formModalAddRole = ref(false)
onMounted(async () => {
    store_role.getPermission()
    // Swal.fire({
    //     title: "Good job!",
    //     text: "You clicked the button!",
    //     icon: "success"
    // });
});

const formModalAddRoles = async () => {
    formModalAddRole.value = true
}
</script>
  