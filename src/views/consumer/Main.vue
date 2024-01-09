<template>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">ผู้ลงทะเบียน</h2>
      <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
        <button type="button" @click="formModalRegisConsumer = true" class="btn btn-primary mr-2 flex items-center ml-auto sm:ml-0">
            <UserPlusIcon class="w-4 h-4 mr-2" />ลงทะเบียน
        </button>
      </div>
    </div>
    <!-- BEGIN: Page Layout -->
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div class="intro-y col-span-12 flex flex-wrap xl:flex-nowrap items-center mt-2">

        <div class="flex w-full sm:w-auto">
          <div class="w-48 relative text-slate-500">
              <input type="text" class="form-control w-48 box pr-10" placeholder="Search by name...">
              <i class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" data-lucide="search"></i> 
          </div>
          <select class="w-48 xl:w-auto form-select box ml-2">
              <option>Status</option>
              <option>Active</option>
              <option>Suspended</option>
          </select>
        </div>
        <div class="hidden xl:block mx-auto text-slate-500">Showing 1 to 10 of 150 entries</div>
        <div class="w-full xl:w-auto flex flex-wrap xl:flex-nowrap items-center gap-y-3 mt-3 xl:mt-0">
            <button class="btn box shadow-md mr-2"> <FileTextIcon class="w-4 h-4 mr-2" /> Export to Excel </button>
            <button class="btn box shadow-md mr-2"> <FileTextIcon class="w-4 h-4 mr-2" /> Export to PDF </button>
            <!-- <div class="dropdown">
                <button class="dropdown-toggle btn px-2 box" aria-expanded="false" data-tw-toggle="dropdown">
                    <span class="w-5 h-5 flex items-center justify-center"> <PlusIcon class="w-4 h-4" /> </span>
                </button>
                <div class="dropdown-menu w-40">
                    <ul class="dropdown-content">
                        <li>
                            <a href="javascript:void(0)" class="dropdown-item"> <SlashIcon class="w-4 h-4 mr-2" /> Suspended </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" class="dropdown-item"> <Trash2Icon class="w-4 h-4 mr-2" /> Cancel </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" class="dropdown-item"> <XOctagonIcon class="w-4 h-4 mr-2" /> Purge </a>
                        </li>

                    </ul>
                </div>
            </div> -->
        </div>
      </div>
      <div class="intro-y col-span-12 overflow-auto 2xl:overflow-visible">
        <table class="table table-report -mt-2">
          <thead>
              <tr>
                  <th class="text-center whitespace-nowrap">
                    #
                      <!-- <input class="form-check-input" type="checkbox"> -->
                  </th>
                  <th class="text-center whitespace-nowrap">ชื่อหน่วยงาน</th>
                  <th class="whitespace-nowrap">ผู้ติดต่อ</th>
                  <th class="whitespace-nowrap">เบอร์โทรติดต่อ</th>
                  <th class="text-center whitespace-nowrap">TOPIC</th>
                  <th class="text-center whitespace-nowrap">STATUS</th>
                  <th class="text-center whitespace-nowrap">ACTIONS</th>
              </tr>
          </thead>
          <tbody>
            <tr class="intro-x">
              <td class="w-10">
                <button class="btn btn-primary mr-1 mb-2" @click="UpdateConsumer('a')">
                    <Edit3Icon class="w-4 h-4" />
                </button>
              </td>
              <td class="text-center whitespace-nowrap">เทคโนโลยี A</td>
              <td class="whitespace-nowrap"> <a class="flex items-center underline decoration-dotted" href="javascript:;">นาย ชลสิทธิ์ ...</a> </td>
              <td class="!py-4">
                  <div class="flex items-center">
                      <a href="" class="font-medium whitespace-nowrap">099-xxx-x683</a> 
                  </div>
              </td>
              <td class="whitespace-nowrap">
                <div class="flex items-center justify-center">
                    5 TOPIC
                </div>
              </td>
              <td class="w-40">
                  <div class="flex items-center justify-center text-success"> <CheckSquareIcon class="w-4 h-4 mr-2" /> Active </div>
              </td>
              <td class="table-report__action w-56">
                  <div class="flex justify-center items-center">
                    <a class="btn btn-warning mr-1" href="javascript:;"> <SlashIcon class="w-4 h-4" /> </a>
                    <a class="btn btn-danger mr-1" href="javascript:;"> <Trash2Icon class="w-4 h-4" /> </a>
                  </div>
              </td>
            </tr>
            <tr class="intro-x">
              <td class="w-10">
                <button class="btn btn-primary mr-1 mb-2" @click="UpdateConsumer('a')">
                    <Edit3Icon class="w-4 h-4" />
                </button>
              </td>
              <td class="text-center whitespace-nowrap">เทคโนโลยี B</td>
              <td class="whitespace-nowrap"> <a class="flex items-center underline decoration-dotted" href="javascript:;">นาย ชลสิทธิ์ ...</a> </td>
              <td class="!py-4">
                  <div class="flex items-center">
                      <a href="" class="font-medium whitespace-nowrap">099-xxx-x683</a> 
                  </div>
              </td>
              <td class="text-center">
                <div class="flex items-center justify-center">
                    5 TOPIC
                </div>
              </td>
              <td class="w-40">
                  <div class="flex items-center justify-center text-danger"> <CheckSquareIcon class="w-4 h-4 mr-2" /> Suspended </div>
              </td>
              <td class="table-report__action w-56">
                  <div class="flex justify-center items-center">
                    <a class="btn btn-warning mr-1" href="javascript:;"> <SlashIcon class="w-4 h-4" /> </a>
                    <a class="btn btn-danger mr-1" href="javascript:;"> <Trash2Icon class="w-4 h-4" /> </a>
                  </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <paginationPage />
    </div>
    <!-- END: Page Layout Suspended text-danger -->
    <Modal size="modal-xs" :show="formModalRegisConsumer" @hidden="formModalRegisConsumer = false">
        <ModalHeader>
            <h2 class="mr-auto text-base font-medium">ลงทะเบียน Consumer</h2>
            <div class="w-full mt-3 form-check form-switch sm:w-auto sm:ml-auto sm:mt-0">
                <div class="form-check form-switch ml-auto">
                
                </div>
            </div>
        </ModalHeader>
        <ModalBody class="p-5">
            <div>
                <label for="example_1" class="form-label">
                    ชื่อหน่วยงาน
                </label>
                <input type="text" id="example_1" class="form-control" placeholder="ชื่อหน่วยงาน" />
            </div>
            <div class="mt-3">
                <label for="example_2" class="form-label">
                    ผู้ติดต่อ
                </label>
                <input type="text" id="example_2" class="form-control" placeholder="ผู้ติดต่อ" />
            </div>
            <div class="mt-3">
                <label for="example_3" class="form-label">
                    เบอร์โทรติดต่อ
                </label>
                <input type="text" id="example_3" class="form-control" placeholder="เบอร์โทรติดต่อ" />
            </div>
            <hr class="mt-3"/>
            <div class="mt-3">
                <h3 class="underline decoration-dotted font-medium mt-3">Topic</h3>
            </div>
            <div class="mt-3">
                <div class="flex-1">
                    <div class="xl:flex items-center mt-5 first:mt-0">
                        <TomSelect class="w-full">
                            <!-- <option value="0">เลือก Order Type</option> -->
                            <option value="1">Reconnect - เชื่อต่อใหม่</option>
                            <option value="2">Topup / Recharge - เติมเงิน</option>
                        </TomSelect>
                        <div class="w-10 flex text-slate-500 mt-3 xl:mt-0">
                            <!-- <a href="javascript:void(0)" class="ml-3 xl:ml-5"><Trash2Icon class="w-4 h-4" /></a> -->
                        </div>
                    </div>
                    <div class="xl:flex items-center mt-5 first:mt-0">
                        <TomSelect class="w-full">
                            <!-- <option value="0">เลือก Order Type</option> -->
                            <option value="2">Topup / Recharge - เติมเงิน</option>
                            <option value="1">Reconnect - เชื่อต่อใหม่</option>
                            <!-- <option value="2">Topup / Recharge - เติมเงิน</option> -->
                        </TomSelect>
                        <div class="w-10 flex text-slate-500 mt-3 xl:mt-0">
                            <a href="javascript:void(0)" class="ml-3 xl:ml-5"><Trash2Icon class="w-4 h-4" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-3">
                <button class="btn btn-outline-primary border-dashed w-full"><PlusIcon class="w-4 h-4" /> Add New Order Type </button>
            </div>
        </ModalBody>
        <ModalFooter class="px-5 py-8 text-right">
            <button type="button" @click="formModalRegisConsumer = false" class="w-32 h-10 mr-1 btn btn-outline-secondary">
            ปิด
          </button>
          <button type="button" class="w-32 h-10 btn btn-primary whitespace-nowrap">
            ลงทะเบียน <UserPlusIcon class="w-4 h-4 ml-2" />
          </button>
        </ModalFooter>
    </Modal>
</template>
<script setup>
import { ref, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router";
import axios from 'axios'
import paginationPage from "@/components/pagination/Main.vue";
import Swal from 'sweetalert2'

const router = useRouter();

const formModalRegisConsumer = ref(false);
onMounted(async () => {
    // Swal.fire({
    //     title: "Good job!",
    //     text: "You clicked the button!",
    //     icon: "success"
    // });
});

const UpdateConsumer = async (nameCon) => {
router.push("consumer/update/" + nameCon);
};
</script>
  