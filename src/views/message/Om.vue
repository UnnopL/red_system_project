<template>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">OM Message</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
        <div class="intro-y col-span-12 flex flex-wrap xl:flex-nowrap items-center mt-2">
            <div class="flex w-full sm:w-auto">
                <TomSelect class="w-56">
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
                        <th class="text-center whitespace-nowrap">Order ID</th>
                        <th class="whitespace-nowrap">Detail</th>
                        <th class="text-center whitespace-nowrap">contact</th>
                        <th class="text-center whitespace-nowrap">Consumer</th>
                        <th class="text-center whitespace-nowrap">SMS</th>
                        <th class="text-center whitespace-nowrap">เวลา</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="intro-x">
                        <td class="w-10">
                            <input class="form-check-input" type="checkbox">
                        </td>
                        <td class="!py-4">
                            <div class="flex items-center">
                                NEW
                            </div>
                        </td>
                        <td class="text-center ">
                            PMS437706
                        </td>
                        <td>
                        <div class="font-medium whitespace-nowrap">
                            เปิดเบอร์ใหม่ แพ็คเกจรายเดือน 2,599 ลดเหลือ 1,990 บาท/เดือน
                        </div>
                        <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                            Platinum | ติดสัญญา : 24 เดือน (1,990 บาท/เดือน) ...
                        </div>
                        </td>
                        <td class="text-center ">
                            081234xxxx
                        </td>
                        <td class="text-center ">
                            3 / 7 
                        </td>
                        <td>
                            <div class="flex items-center justify-center text-danger">Not Send </div>
                        </td>
                        <td class="text-center table-report__action whitespace-nowrap">2023-11-15 14:24:36</td>
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
                        <td class="text-center ">
                            MFE20220801162
                        </td>
                        <td>
                        <div class="font-medium whitespace-nowrap">
                            เปิดเบอร์ใหม่ แพ็คเกจรายเดือน 1,299 ลดเหลือ 890 บาท/เดือน
                        </div>
                        <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                            สัญญา : 24 เดือน (890 บาท/เดือน) ...
                        </div>
                        </td>
                        <td class="text-center ">
                            081234xxxx
                        </td>
                        <td class="text-center ">
                            4 / 4 
                        </td>
                        <td>
                            <div class="flex items-center justify-center text-success">Send </div>
                        </td>
                        <td class="text-center table-report__action whitespace-nowrap">2023-11-15 14:24:36</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>