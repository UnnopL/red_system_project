<template>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Message Broker</h2>
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
            <button class="btn btn-primary shadow-md mr-2" @click="formModalRegisMessageBrokers"> <PlusIcon class="w-4 h-4 mr-2" /> Create Topic</button>
            <div class="dropdown">
                <button class="dropdown-toggle btn px-2 box" aria-expanded="false" data-tw-toggle="dropdown">
                    <span class="w-5 h-5 flex items-center justify-center"> <PlusIcon class="w-4 h-4" /> </span>
                </button>
                <div class="dropdown-menu w-40">
                    <ul class="dropdown-content">
                        <li>
                            <a href="javascript:void(0)" class="dropdown-item" @click="SuspendedFunction"> <SlashIcon class="w-4 h-4 mr-2" /> Suspended </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" class="dropdown-item" @click="DeleteFunction"> <Trash2Icon class="w-4 h-4 mr-2" /> Delete </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
      <div class="intro-y col-span-12 overflow-auto 2xl:overflow-visible">
        <table class="table table-report -mt-2">
          <thead>
              <tr>
                  <th class="whitespace-nowrap">
                      <input class="form-check-input" type="checkbox">
                  </th>
                  <th class="whitespace-nowrap">Order Type</th>
                  <th class="whitespace-nowrap">Topic</th>
                  <th class="text-center whitespace-nowrap">Consumer</th>
                  <th class="text-center whitespace-nowrap">Expire Date</th>
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
                    Reconnect
                  </div>
              </td>
              <td class="!py-4">
                เชื่อต่อใหม่
              </td>
              <td class="text-center">
                6 Consumer
              </td>
              <td class="text-center whitespace-nowrap">1 ม.ค. - 31 ธ.ค. 67</td>
              <td class="w-40">
                  <div class="flex items-center justify-center text-success"> <CheckSquareIcon class="w-4 h-4 mr-2" /> Active </div>
              </td>
              <td class="table-report__action w-56">
                  <div class="flex justify-center items-center">
                    <a class="btn btn-warning mr-1" href="javascript:;" @click="SuspendedFunction"> <SlashIcon class="w-4 h-4" /> </a>
                    <a class="btn btn-danger mr-1" href="javascript:;" @click="DeleteFunction"> <Trash2Icon class="w-4 h-4" /> </a>
                  </div>
              </td>
            </tr>
            <tr class="intro-x">
              <td class="w-10">
                  <input class="form-check-input" type="checkbox">
              </td>
              <td class="!py-4">
                  <div class="flex items-center">
                    Topup / Recharge
                  </div>
              </td>
              <td class="!py-4">
                เติมเงิน
              </td>
              <td class="text-center">
                3 Consumer
              </td>
              <td class="text-center whitespace-nowrap">1 ม.ค. - 31 ธ.ค. 67</td>
              <td class="w-40">
                  <div class="flex items-center justify-center text-success"> <CheckSquareIcon class="w-4 h-4 mr-2" /> Active </div>
              </td>
              <td class="table-report__action w-56">
                  <div class="flex justify-center items-center">
                    <a class="btn btn-warning mr-1" href="javascript:;" @click="SuspendedFunction"> <SlashIcon class="w-4 h-4" /> </a>
                    <a class="btn btn-danger mr-1" href="javascript:;" @click="DeleteFunction"> <Trash2Icon class="w-4 h-4" /> </a>
                  </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <paginationPage />
    </div>
    <!-- END: Page Layout Suspended text-danger -->

    <Modal size="modal-xs" :show="formModalRegisMessageBroker" @hidden="formModalRegisMessageBroker = false">
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
                Order Type
            </label>
            <TomSelect class="w-full">
              <option value="0">เลือก Order Type</option>
              <option value="1">New</option>
              <option value="2">Suspend</option>
              <option value="3">Reconnect</option>
              <option value="4">Terminate</option>
              <option value="5">Change Package</option>
              <option value="6">Add Package</option>
              <option value="7">Delete Package</option>
              <option value="8">Change Owner</option>
              <option value="9">Change MSISDN / SIM</option>
              <option value="10">Change Credit Limit</option>
              <option value="11">Topup / Recharge</option>
              <option value="12">Variety Service</option>
              <option value="13">Pre-Provisioning</option>
              <option value="14">Swap Service (Prepaid to Postpaid, Postpaid to Prepaid)</option>
              <option value="15">Extend Validity Date</option>
              <option value="16">Contract Management (Terminate Contact)</option>
              <option value="17">Package Expire Notification</option>
              <option value="18">Service Status Change Notification</option>
            </TomSelect>
          </div>
          <div class="mt-3">
            <label for="to_bank_name" class="form-label">
                Topic
            </label>
            <input type="text" id="to_bank_name" name="to_bank_name" class="form-control" placeholder="Topic" />
          </div>
          <div class="grid grid-cols-12 gap-4 gap-y-3 mt-3">
              <div class="col-span-12 sm:col-span-6"> 
                <label for="modal-datepicker-1" class="form-label">วันที่</label>
                <Litepicker id="modal-datepicker-1" v-model="date_from"
                  :options="{
                    autoApply: false,
                    showWeekNumbers: true,
                    dropdowns: {
                      minYear: 1990,
                      maxYear: null,
                      months: true,
                      years: true,
                    },
                  }"
                  class="form-control"
                />
              </div>
              <div class="col-span-12 sm:col-span-6">
                <label for="modal-datepicker-2" class="form-label">ถึง</label>
                <Litepicker id="modal-datepicker-2" v-model="date_to"
                  :options="{
                    autoApply: false,
                    showWeekNumbers: true,
                    dropdowns: {
                      minYear: 1990,
                      maxYear: null,
                      months: true,
                      years: true,
                    },
                  }"
                  class="form-control"
                />
              </div>
          </div>
        </ModalBody>
        <ModalFooter class="px-5 py-8 text-right">
          <button type="button" @click="formModalRegisMessageBroker = false" class="w-32 h-10 mr-1 btn btn-outline-secondary">
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
import paginationPage from "@/components/pagination/Main.vue";
import axios from 'axios'
import Swal from 'sweetalert2'

const formModalRegisMessageBroker = ref(false)

const date_from = ref();
const date_to = ref();

onMounted(async () => {
    // Swal.fire({
    //     title: "Good job!",
    //     text: "You clicked the button!",
    //     icon: "success"
    // });
});
const formModalRegisMessageBrokers = async () => {
    formModalRegisMessageBroker.value = true
}

const SuspendedFunction =  async () => {

    Swal.fire({ 
                title: "ยืนยัน",
                text: "คุณต้องการ ระงับการใช้งาน ใช่หรือไม่ !",
                icon: "info", 
                showCancelButton: true,
                confirmButtonColor: '#DD6B55',
                confirmButtonText: "ต้องการ",
                cancelButtonText: "ยกเลิก",
                closeOnConfirm: false,
                closeOnCancel: false 
            }).then(async (result) => {
                if (result.isConfirmed) {

                }
            })
}


const DeleteFunction =  async () => {

    Swal.fire({ 
                title: "ยืนยัน",
                text: "คุณต้องการ ลบข้อมูล ใช่หรือไม่ !",
                icon: "info", 
                showCancelButton: true,
                confirmButtonColor: '#DD6B55',
                confirmButtonText: "ต้องการ",
                cancelButtonText: "ยกเลิก",
                closeOnConfirm: false,
                closeOnCancel: false 
            }).then(async (result) => {
                if (result.isConfirmed) {

                }
            })
}

</script>
  