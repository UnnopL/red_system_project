<template>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">OM TRIGGER - OrderType [NEW]</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
        <div class="intro-y col-span-12 flex flex-wrap xl:flex-nowrap items-center mt-2">
            <div class="flex w-full sm:w-auto">
            </div>
            <div class="hidden xl:block mx-auto text-slate-500">Showing 1 to 10 of 150 entries</div>
            <div class="w-full xl:w-auto flex flex-wrap xl:flex-nowrap items-center gap-y-3 mt-3 xl:mt-0">
                <div class="w-48 relative text-slate-500">
                    <input type="text" class="form-control w-48 box pr-10" placeholder="Search by name...">
                    <i class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" data-lucide="search"></i> 
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
                        <th class="whitespace-nowrap">Channel</th>
                        <th class="text-center whitespace-nowrap">OrderId</th>
                        <th class="text-center whitespace-nowrap">เวลาทำรายการ</th>
                        <th class="text-center whitespace-nowrap">Infomation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="intro-x">
                        <td class="w-10">
                            <input class="form-check-input" type="checkbox">
                        </td>
                        <td class="!py-4">
                            <div class="flex items-center">
                                New
                            </div>
                        </td>
                        <td><div class="font-medium whitespace-nowrap">DAP</div></td>
                        <td class="text-center ">PMS437706</td>
                        <td class="text-center whitespace-nowrap">2023-11-15 14:24:36</td>
                        <td class="table-report__action w-56">
                            <div class="flex justify-center items-center">
                                <button class="btn btn-outline-secondary w-24 inline-block mr-1 mb-2">Display</button>
                            </div>
                        </td>
                    </tr>
                    <tr class="intro-x">
                        <td class="w-10">
                            <input class="form-check-input" type="checkbox">
                        </td>
                        <td class="!py-4">
                            <div class="flex items-center">
                                New
                            </div>
                        </td>
                        <td><div class="font-medium whitespace-nowrap">MFE</div></td>
                        <td class="text-center ">MFE20220801162</td>
                        <td class="text-center whitespace-nowrap">2023-11-15 14:24:36</td>
                        <td class="table-report__action w-56">
                            <div class="flex justify-center items-center">
                                <button class="btn btn-outline-secondary w-24 inline-block mr-1 mb-2">Display</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <paginationPage />
    </div>
</template>
<script setup>
import { ref, onMounted } from "vue"
import paginationPage from "@/components/pagination/Main.vue";
import axios from 'axios'
import Swal from 'sweetalert2'
</script>