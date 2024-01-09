<template>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">TOPUP TRIGGER</h2>
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
        </div>
        <div class="intro-y col-span-12">
            <div class="grid grid-cols-12 gap-5 mt-5">
                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 box p-5 cursor-pointer zoom-in">
                    <div class="font-medium text-base">New</div>
                    <div class="text-slate-600 mt-2">
                        <div class="flex items-center mt-2"> <LayersIcon class="w-4 h-4 mr-2" /> Trigger: 50K </div>
                        <div class="flex items-center mt-2"> <CalendarIcon class="w-4 h-4 mr-2" /> ล่าสุด: 4 ม.ค. 67 13:44</div>
                    </div>
                    <div class="flex justify-center mt-3 p-5 border-t border-slate-200/6">
                        <a class="flex items-center text-primary" href="om-trigger/view"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="eye" data-lucide="eye" class="lucide lucide-eye w-4 h-4 mr-1"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> Preview </a>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 box p-5 cursor-pointer zoom-in">
                    <div class="font-medium text-base">Suspend</div>
                    <div class="text-slate-600 mt-2">
                        <div class="flex items-center mt-2"> <LayersIcon class="w-4 h-4 mr-2" /> Trigger: 50K </div>
                        <div class="flex items-center mt-2"> <CalendarIcon class="w-4 h-4 mr-2" /> ล่าสุด: 4 ม.ค. 67 13:44</div>
                    </div>
                    <div class="flex justify-center mt-3 p-5 border-t border-slate-200/6">
                        <a class="flex items-center text-primary" href="javascript:;"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="eye" data-lucide="eye" class="lucide lucide-eye w-4 h-4 mr-1"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> Preview </a>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 box p-5 cursor-pointer zoom-in">
                    <div class="font-medium text-base">Reconnect</div>
                    <div class="text-slate-600 mt-2">
                        <div class="flex items-center mt-2"> <LayersIcon class="w-4 h-4 mr-2" /> Trigger: 50K </div>
                        <div class="flex items-center mt-2"> <CalendarIcon class="w-4 h-4 mr-2" /> ล่าสุด: 4 ม.ค. 67 13:44</div>
                    </div>
                    <div class="flex justify-center mt-3 p-5 border-t border-slate-200/6">
                        <a class="flex items-center text-primary" href="javascript:;"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="eye" data-lucide="eye" class="lucide lucide-eye w-4 h-4 mr-1"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> Preview </a>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 box p-5 cursor-pointer zoom-in">
                    <div class="font-medium text-base">Terminate</div>
                    <div class="text-slate-600 mt-2">
                        <div class="flex items-center mt-2"> <LayersIcon class="w-4 h-4 mr-2" /> Trigger: 50K </div>
                        <div class="flex items-center mt-2"> <CalendarIcon class="w-4 h-4 mr-2" /> ล่าสุด: 4 ม.ค. 67 13:44</div>
                    </div>
                    <div class="flex justify-center mt-3 p-5 border-t border-slate-200/6">
                        <a class="flex items-center text-primary" href="javascript:;"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="eye" data-lucide="eye" class="lucide lucide-eye w-4 h-4 mr-1"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> Preview </a>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 box p-5 cursor-pointer zoom-in">
                    <div class="font-medium text-base">Change Package</div>
                    <div class="text-slate-600 mt-2">
                        <div class="flex items-center mt-2"> <LayersIcon class="w-4 h-4 mr-2" /> Trigger: 50K </div>
                        <div class="flex items-center mt-2"> <CalendarIcon class="w-4 h-4 mr-2" /> ล่าสุด: 4 ม.ค. 67 13:44</div>
                    </div>
                    <div class="flex justify-center mt-3 p-5 border-t border-slate-200/6">
                        <a class="flex items-center text-primary" href="javascript:;"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="eye" data-lucide="eye" class="lucide lucide-eye w-4 h-4 mr-1"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> Preview </a>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 box p-5 cursor-pointer zoom-in">
                    <div class="font-medium text-base">Add Package</div>
                    <div class="text-slate-600 mt-2">
                        <div class="flex items-center mt-2"> <LayersIcon class="w-4 h-4 mr-2" /> Trigger: 50K </div>
                        <div class="flex items-center mt-2"> <CalendarIcon class="w-4 h-4 mr-2" /> ล่าสุด: 4 ม.ค. 67 13:44</div>
                    </div>
                    <div class="flex justify-center mt-3 p-5 border-t border-slate-200/6">
                        <a class="flex items-center text-primary" href="javascript:;"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="eye" data-lucide="eye" class="lucide lucide-eye w-4 h-4 mr-1"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> Preview </a>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 box p-5 cursor-pointer zoom-in">
                    <div class="font-medium text-base">Delete Package</div>
                    <div class="text-slate-600 mt-2">
                        <div class="flex items-center mt-2"> <LayersIcon class="w-4 h-4 mr-2" /> Trigger: 50K </div>
                        <div class="flex items-center mt-2"> <CalendarIcon class="w-4 h-4 mr-2" /> ล่าสุด: 4 ม.ค. 67 13:44</div>
                    </div>
                    <div class="flex justify-center mt-3 p-5 border-t border-slate-200/6">
                        <a class="flex items-center text-primary" href="javascript:;"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="eye" data-lucide="eye" class="lucide lucide-eye w-4 h-4 mr-1"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> Preview </a>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 box p-5 cursor-pointer zoom-in">
                    <div class="font-medium text-base">Change Owner</div>
                    <div class="text-slate-600 mt-2">
                        <div class="flex items-center mt-2"> <LayersIcon class="w-4 h-4 mr-2" /> Trigger: 50K </div>
                        <div class="flex items-center mt-2"> <CalendarIcon class="w-4 h-4 mr-2" /> ล่าสุด: 4 ม.ค. 67 13:44</div>
                    </div>
                    <div class="flex justify-center mt-3 p-5 border-t border-slate-200/6">
                        <a class="flex items-center text-primary" href="javascript:;"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="eye" data-lucide="eye" class="lucide lucide-eye w-4 h-4 mr-1"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> Preview </a>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 box p-5 cursor-pointer zoom-in">
                    <div class="font-medium text-base">Change MSISDN / SIM</div>
                    <div class="text-slate-600 mt-2">
                        <div class="flex items-center mt-2"> <LayersIcon class="w-4 h-4 mr-2" /> Trigger: 50K </div>
                        <div class="flex items-center mt-2"> <CalendarIcon class="w-4 h-4 mr-2" /> ล่าสุด: 4 ม.ค. 67 13:44</div>
                    </div>
                    <div class="flex justify-center mt-3 p-5 border-t border-slate-200/6">
                        <a class="flex items-center text-primary" href="javascript:;"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="eye" data-lucide="eye" class="lucide lucide-eye w-4 h-4 mr-1"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> Preview </a>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 box p-5 cursor-pointer zoom-in">
                    <div class="font-medium text-base">Change Credit Limit</div>
                    <div class="text-slate-600 mt-2">
                        <div class="flex items-center mt-2"> <LayersIcon class="w-4 h-4 mr-2" /> Trigger: 50K </div>
                        <div class="flex items-center mt-2"> <CalendarIcon class="w-4 h-4 mr-2" /> ล่าสุด: 4 ม.ค. 67 13:44</div>
                    </div>
                    <div class="flex justify-center mt-3 p-5 border-t border-slate-200/6">
                        <a class="flex items-center text-primary" href="javascript:;"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="eye" data-lucide="eye" class="lucide lucide-eye w-4 h-4 mr-1"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> Preview </a>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 box p-5 cursor-pointer zoom-in">
                    <div class="font-medium text-base">Topup / Recharge</div>
                    <div class="text-slate-600 mt-2">
                        <div class="flex items-center mt-2"> <LayersIcon class="w-4 h-4 mr-2" /> Trigger: 50K </div>
                        <div class="flex items-center mt-2"> <CalendarIcon class="w-4 h-4 mr-2" /> ล่าสุด: 4 ม.ค. 67 13:44</div>
                    </div>
                    <div class="flex justify-center mt-3 p-5 border-t border-slate-200/6">
                        <a class="flex items-center text-primary" href="javascript:;"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="eye" data-lucide="eye" class="lucide lucide-eye w-4 h-4 mr-1"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> Preview </a>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 box p-5 cursor-pointer zoom-in">
                    <div class="font-medium text-base">Variety Service</div>
                    <div class="text-slate-600 mt-2">
                        <div class="flex items-center mt-2"> <LayersIcon class="w-4 h-4 mr-2" /> Trigger: 50K </div>
                        <div class="flex items-center mt-2"> <CalendarIcon class="w-4 h-4 mr-2" /> ล่าสุด: 4 ม.ค. 67 13:44</div>
                    </div>
                    <div class="flex justify-center mt-3 p-5 border-t border-slate-200/6">
                        <a class="flex items-center text-primary" href="javascript:;"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="eye" data-lucide="eye" class="lucide lucide-eye w-4 h-4 mr-1"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> Preview </a>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 box p-5 cursor-pointer zoom-in">
                    <div class="font-medium text-base">Pre-Provisioning</div>
                    <div class="text-slate-600 mt-2">
                        <div class="flex items-center mt-2"> <LayersIcon class="w-4 h-4 mr-2" /> Trigger: 50K </div>
                        <div class="flex items-center mt-2"> <CalendarIcon class="w-4 h-4 mr-2" /> ล่าสุด: 4 ม.ค. 67 13:44</div>
                    </div>
                    <div class="flex justify-center mt-3 p-5 border-t border-slate-200/6">
                        <a class="flex items-center text-primary" href="javascript:;"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="eye" data-lucide="eye" class="lucide lucide-eye w-4 h-4 mr-1"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> Preview </a>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 box p-5 cursor-pointer zoom-in">
                    <div class="font-medium text-base">Swap Service (Prepaid to Postpaid, Postpaid to Prepaid)</div>
                    <div class="text-slate-600 mt-2">
                        <div class="flex items-center mt-2"> <LayersIcon class="w-4 h-4 mr-2" /> Trigger: 50K </div>
                        <div class="flex items-center mt-2"> <CalendarIcon class="w-4 h-4 mr-2" /> ล่าสุด: 4 ม.ค. 67 13:44</div>
                    </div>
                    <div class="flex justify-center mt-3 p-5 border-t border-slate-200/6">
                        <a class="flex items-center text-primary" href="javascript:;"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="eye" data-lucide="eye" class="lucide lucide-eye w-4 h-4 mr-1"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> Preview </a>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 box p-5 cursor-pointer zoom-in">
                    <div class="font-medium text-base">Extend Validity Date</div>
                    <div class="text-slate-600 mt-2">
                        <div class="flex items-center mt-2"> <LayersIcon class="w-4 h-4 mr-2" /> Trigger: 50K </div>
                        <div class="flex items-center mt-2"> <CalendarIcon class="w-4 h-4 mr-2" /> ล่าสุด: 4 ม.ค. 67 13:44</div>
                    </div>
                    <div class="flex justify-center mt-3 p-5 border-t border-slate-200/6">
                        <a class="flex items-center text-primary" href="javascript:;"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="eye" data-lucide="eye" class="lucide lucide-eye w-4 h-4 mr-1"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> Preview </a>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 box p-5 cursor-pointer zoom-in">
                    <div class="font-medium text-base">Contract Management (Terminate Contact)</div>
                    <div class="text-slate-600 mt-2">
                        <div class="flex items-center mt-2"> <LayersIcon class="w-4 h-4 mr-2" /> Trigger: 50K </div>
                        <div class="flex items-center mt-2"> <CalendarIcon class="w-4 h-4 mr-2" /> ล่าสุด: 4 ม.ค. 67 13:44</div>
                    </div>
                    <div class="flex justify-center mt-3 p-5 border-t border-slate-200/6">
                        <a class="flex items-center text-primary" href="javascript:;"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="eye" data-lucide="eye" class="lucide lucide-eye w-4 h-4 mr-1"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> Preview </a>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 box p-5 cursor-pointer zoom-in">
                    <div class="font-medium text-base">Package Expire Notification</div>
                    <div class="text-slate-600 mt-2">
                        <div class="flex items-center mt-2"> <LayersIcon class="w-4 h-4 mr-2" /> Trigger: 50K </div>
                        <div class="flex items-center mt-2"> <CalendarIcon class="w-4 h-4 mr-2" /> ล่าสุด: 4 ม.ค. 67 13:44</div>
                    </div>
                    <div class="flex justify-center mt-3 p-5 border-t border-slate-200/6">
                        <a class="flex items-center text-primary" href="javascript:;"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="eye" data-lucide="eye" class="lucide lucide-eye w-4 h-4 mr-1"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> Preview </a>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-4 2xl:col-span-3 box p-5 cursor-pointer zoom-in">
                    <div class="font-medium text-base">Service Status Change Notification</div>
                    <div class="text-slate-600 mt-2">
                        <div class="flex items-center mt-2"> <LayersIcon class="w-4 h-4 mr-2" /> Trigger: 50K </div>
                        <div class="flex items-center mt-2"> <CalendarIcon class="w-4 h-4 mr-2" /> ล่าสุด: 4 ม.ค. 67 13:44</div>
                    </div>
                    <div class="flex justify-center mt-3 p-5 border-t border-slate-200/6">
                        <a class="flex items-center text-primary" href="javascript:;"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="eye" data-lucide="eye" class="lucide lucide-eye w-4 h-4 mr-1"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> Preview </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>