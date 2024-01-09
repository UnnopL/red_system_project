<template>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Clear Event Message</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
        <div class="intro-y col-span-12 flex flex-wrap xl:flex-nowrap items-center mt-2">
            <div class="flex w-full sm:w-auto">
                <div class="w-48 relative text-slate-500">
                    <input type="text" class="form-control w-48 box pr-10" placeholder="Search by...">
                    <i class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" data-lucide="search"></i> 
                </div>
            </div>
            <div class="hidden xl:block mx-auto text-slate-500">Showing 1 to 10 of 150 entries</div>
            <div class="w-full xl:w-auto flex flex-wrap xl:flex-nowrap items-center gap-y-3 mt-3 xl:mt-0">
                <button class="btn btn-warning shadow-md mr-2" @click="formModalPurgeTopiced"> <XOctagonIcon class="w-4 h-4 mr-2" /> Purge Topic</button>
                <button class="btn btn-outline-danger shadow-md mr-2" @click="PurgeFunction"> <XOctagonIcon class="w-4 h-4 mr-2" /> Purge ALL</button>
            </div>
        </div>
        <div class="intro-y col-span-12 overflow-auto 2xl:overflow-visible">
            <table class="table table-report -mt-2">
            <thead>
                <tr>
                    <th class="text-center whitespace-nowrap">#</th>
                    <th class="whitespace-nowrap">Order Type</th>
                    <th class="whitespace-nowrap">Topic</th>
                    <th class="text-center whitespace-nowrap">ผู้ดำเนินการ</th>
                    <th class="whitespace-nowrap">หมายเหตุ</th>
                    <th class="text-center whitespace-nowrap">เวลาดำเนินการ</th>
                </tr>
            </thead>
            <tbody>
                <tr class="intro-x">
                    <td class="w-10">1</td>
                    <td class="!py-4">
                        <div class="flex items-center">Reconnect</div>
                    </td>
                    <td class="!py-4">เชื่อต่อใหม่</td>
                    <td class="!py-4 text-center">Admin_01</td>
                    <td class="!py-4">เนื่องจาก......</td>
                    <td class="!py-4 text-center">3 ม.ค. 2567 | 13:48</td>
                </tr>
                <tr class="intro-x">
                    <td class="w-10">2</td>
                    <td class="!py-4">
                        <div class="flex items-center">Topup / Recharge</div>
                    </td>
                    <td class="!py-4">เติมเงิน</td>
                    <td class="!py-4 text-center">Admin_01</td>
                    <td class="!py-4">เนื่องจาก......</td>
                    <td class="!py-4 text-center">3 ม.ค. 2567 | 13:48</td>
                </tr>
                <tr class="intro-x">
                    <td class="w-10">3</td>
                    <td class="!py-4">
                        <div class="flex items-center">Reconnect [PurgeALL]</div>
                    </td>
                    <td class="!py-4">เชื่อต่อใหม่</td>
                    <td class="!py-4 text-center">Admin_01</td>
                    <td class="!py-4">เนื่องจาก......</td>
                    <td class="!py-4 text-center">3 ม.ค. 2567 | 13:48</td>
                </tr>
                <tr class="intro-x">
                    <td class="w-10">4</td>
                    <td class="!py-4">
                        <div class="flex items-center">Topup / Recharge [PurgeALL]</div>
                    </td>
                    <td class="!py-4">เติมเงิน</td>
                    <td class="!py-4 text-center">Admin_01</td>
                    <td class="!py-4">เนื่องจาก......</td>
                    <td class="!py-4 text-center">3 ม.ค. 2567 | 13:48</td>
                </tr>
            </tbody>
            </table>
        </div>
        <paginationPage />
    </div>
    <Modal size="modal-xs" :show="formModalPurgeTopic" @hidden="formModalPurgeTopic = false">
        <ModalHeader>
            <h2 class="mr-auto text-base font-medium">Clear Event Message - Topic</h2>
            <div class="w-full mt-3 form-check form-switch sm:w-auto sm:ml-auto sm:mt-0">
                <div class="form-check form-switch ml-auto">
                
                </div>
            </div>
        </ModalHeader>
        <ModalBody class="p-5">
            <div class="mt-3">
            <label for="to_bank_name" class="form-label">เลือก Topic</label>
            <TomSelect class="w-full">
              <option value="0">เลือก Topic</option>
              <option value="1">New - เปิดเบอร์ใหม่</option>
              <option value="3">Reconnect - เชื่อต่อใหม่</option>
              <option value="11">Topup / Recharge - เติมเงิน</option>
            </TomSelect>
          </div>
          <div class="mt-3">
            <label for="to_bank_name" class="form-label">
                หมายเหตุ
            </label>
            <textarea class="form-control" placeholder="หมายเหตุ"></textarea>
          </div>
        </ModalBody>
        <ModalFooter class="px-5 py-8 text-right">
          <button type="button" @click="formModalPurgeTopic = false" class="w-32 h-10 mr-1 btn btn-outline-secondary">
            ปิด
          </button>
          <button @click="ConfirmPurgeFunction" type="button" class="w-32 h-10 btn btn-primary whitespace-nowrap">
            ยืนยัน <XOctagonIcon class="w-4 h-4 ml-2" />
          </button>
        </ModalFooter>
    </Modal>
</template>
<script setup>
import { ref, onMounted } from "vue"
import paginationPage from "@/components/pagination/Main.vue";
import axios from 'axios'
import Swal from 'sweetalert2'

const formModalPurgeTopic = ref(false)


const date_from = ref();
const date_to = ref();

onMounted(async () => {
    // Swal.fire({
    //     title: "Good job!",
    //     text: "You clicked the button!",
    //     icon: "success"
    // });
});
const formModalPurgeTopiced = async () => {
    formModalPurgeTopic.value = true
}

const PurgeFunction =  async () => {
    Swal.fire({ 
        title: "Purge ALL",
        text: "กรุณาพิมพ์ [ purge ] ยืนยัน !",
        icon: "info", 
        input: "text",
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: "ยืนยัน",
        cancelButtonText: "ยกเลิก",
        closeOnConfirm: false,
        closeOnCancel: false 
    }).then(async (result) => {
        if (result.isConfirmed) {

        }
    })
}


const ConfirmPurgeFunction =  async () => {

    Swal.fire({ 
                title: "ยืนยัน Purge",
                text: "คุณต้องการ [Purge] New - เปิดเบอร์ใหม่ ใช่หรือไม่ !",
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

<style scoped>
.modal.show{
    z-index: 1060 !important;
}
</style>