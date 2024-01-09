<template>
    <div class="intro-y flex items-center mt-8">
        <h2 class="text-lg font-medium mr-auto">
            Consumer - เทคโนโลยี A
        </h2>
        <div class="w-full sm:w-auto flex mt-4 sm:mt-0"><button  @click="formModalRegisConsumer = true" type="button" class="btn btn-primary mr-2 flex items-center ml-auto sm:ml-0"><Edit3Icon class="w-4 h-4 mr-2" /> แก้ไขข้อมูล </button></div>
    </div>
    <div class="intro-y box px-5 pt-5 mt-5">
        <div class="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5">
            <div class="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                <div class="font-medium text-center lg:text-left lg:mt-3">Contact Details</div>
                <div class="flex flex-col justify-center items-center lg:items-start mt-4">
                    <div class="truncate sm:whitespace-normal flex items-center"> ชื่อหน่วยงาน : เทคโนโลยี A </div>
                    <div class="truncate sm:whitespace-normal flex items-center mt-3"> ผู้ติดต่อ : นาย ชลสิทธิ์ ... </div>
                    <div class="truncate sm:whitespace-normal flex items-center mt-3"> เบอร์โทรติดต่อ : 099-xxx-x683 </div>
                </div>
            </div>
            <div class="mt-6 lg:mt-0 flex-1 flex items-center justify-center px-5 border-t lg:border-0 border-slate-200/60 dark:border-darkmode-400 pt-5 lg:pt-0">
                <div class="text-center rounded-md w-20 py-3">
                    <div class="font-medium text-primary text-xl">10K</div>
                    <div class="text-slate-500">Topic</div>
                </div>
                <div class="text-center rounded-md w-20 py-3">
                    <div class="font-medium text-primary text-xl">5k</div>
                    <div class="text-slate-500">SMS</div>
                </div>
                <div class="text-center rounded-md w-20 py-3">
                    <div class="font-medium text-primary text-xl">492</div>
                    <div class="text-slate-500">Connect</div>
                </div>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
        <div class="intro-y box col-span-12 lg:col-span-6">
            <div class="flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400">
                <h2 class="font-medium text-base mr-auto">Topic</h2>
                <button class="btn btn-outline-primary flex">บันทึก</button>
            </div>
            <div class="p-5">
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
                <div class="mt-3">
                    <button class="btn btn-outline-primary border-dashed w-full"><PlusIcon class="w-4 h-4" /> Add New Order Type </button>
                </div>
            </div>
        </div>
        <div class="intro-y box col-span-12 lg:col-span-6">
            <div class="flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400">
                <h2 class="font-medium text-base mr-auto">Private Key</h2>
            </div>
            <div class="p-5">
                <div class="overflow-x-auto">
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th class="whitespace-nowrap">#</th>
                                <th class="whitespace-nowrap">Public Key</th>
                                <th class="whitespace-nowrap">Secret Key</th>
                                <th class="whitespace-nowrap">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>f4e4d**************</td>
                                <td>7B***</td>
                                <td>
                                    <a class="flex items-center text-danger" href="javascript:;" data-tw-toggle="modal" data-tw-target="#delete-confirmation-modal"> <Trash2Icon class="w-4 h-4" /> </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <a href="javascript:void(0)" class="btn btn-pending block w-40 mx-auto mt-5" @click="formModalGenerateKey = true">+ Generate Key</a>
            </div>
        </div>
    </div>
    <Modal size="modal-xs" :show="formModalRegisConsumer" @hidden="formModalRegisConsumer = false">
        <ModalHeader>
            <h2 class="mr-auto text-base font-medium">Update Consumer</h2>
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
                <input type="text" id="example_1" class="form-control" value="เทคโนโลยี A" />
            </div>
            <div class="mt-3">
                <label for="example_2" class="form-label">
                    ผู้ติดต่อ
                </label>
                <input type="text" id="example_2" class="form-control" value="นาย ชลสิทธิ์ " />
            </div>
            <div class="mt-3">
                <label for="example_3" class="form-label">
                    เบอร์โทรติดต่อ
                </label>
                <input type="text" id="example_3" class="form-control" value="099-222-7683" />
            </div>
        </ModalBody>
        <ModalFooter class="px-5 py-8 text-right">
            <button type="button" @click="formModalRegisConsumer = false" class="w-32 h-10 mr-1 btn btn-outline-secondary">
            ปิด
          </button>
          <button type="button" class="w-32 h-10 btn btn-primary whitespace-nowrap">
            อัพเดทข้อมูล <UserPlusIcon class="w-4 h-4 ml-2" />
          </button>
        </ModalFooter>
    </Modal>
    <Modal size="modal-xs" :show="formModalGenerateKey" @hidden="formModalGenerateKey = false">
        <ModalHeader>
            <h2 class="mr-auto text-base font-medium">Show GenerateKey</h2>
        </ModalHeader>
        <ModalBody class="p-5">
            <div class="form-inline">
                <label for="example_1" class="form-label">
                    public key
                </label>
                <div class="input-group" style="width: 80%;">
                    <input type="text" class="form-control" placeholder="Price" aria-label="Price" aria-describedby="input-group-price" value="f4e4d999-a8b1-48c3-aa01-5a87ad126072" readonly>
                    <div id="input-group-price" class="input-group-text"><CopyIcon class="w-4 h-4" /></div>
                </div>
            </div>
            <div class="form-inline mt-3">
                <label for="example_2" class="form-label">
                    Secret key
                </label>
                <div class="input-group" style="width: 80%;">
                    <input type="text" class="form-control" placeholder="Price" aria-label="Price" aria-describedby="input-group-price" value="7B85NM12" readonly>
                    <div id="input-group-price" class="input-group-text"><CopyIcon class="w-4 h-4" /></div>
                </div>
            </div>
        </ModalBody>
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
const formModalGenerateKey = ref(false);

onMounted(async () => {
    // Swal.fire({
    //     title: "Good job!",
    //     text: "You clicked the button!",
    //     icon: "success"
    // });
});

</script>