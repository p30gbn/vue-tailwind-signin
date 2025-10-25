<template>
    <div class="w-full h-full bg-bgbilling flex items-center justify-center mx-auto relative">
        <div class="absolute top-5 left-20">
            <img src="../assets/Rectangle 5.png" alt="">
        </div>
        <div class="bg-white rounded-xl m-24 flex flex-row gap-4 w-6xl relative">
            <div class="w-56 h-48 bg-darkorange rounded-xl absolute right-20 top-20">
                <div class="flex flex-col gap-4 p-6">
                    <h3 class="text-lg text-white font-poppins font-medium">Your plan</h3>
                    <div class="flex flex-col gap-3">
                        <h2 class="text-xl text-white font-poppins font-bold">Pro Annual</h2>
                        <h5 class="text-sm text-white font-poppins font-medium">Renews on  Nov. 2021</h5>
                        <button type="button" class="px-4 py-2 text-sm text-white font-poppins font-medium border border-white rounded-lg cursor-pointer hover:bg-white hover:text-darkorange">Cancel subscription</button>
                    </div>
                </div>
            </div>
            <div class="w-1/4 flex flex-col gap-6 p-12 pr-0 rounded-l-xl justify-between bg-darkwhite">
                <div class="flex flex-col gap-12">
                    <div class="flex flex-row gap-4">
                        <img src="../assets/Rectangle 3.png" alt="Profile Photo" class="w-12 h-12">
                        <div class="flex flex-col">
                            <h3 class="text-lg font-poppins font-bold text-darkblue">Ildiko Gaspar</h3>
                            <h5 class="text-sm font-poppins text-lightgray">@igaspar</h5>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4">
                        <div class="flex flex-row gap-2 items-center">
                            <img src="../assets/gneral.svg" alt="">
                            <a href="#">
                                <h5 class="text-sm font-poppins text-lightgray">General</h5>
                            </a>
                        </div>
                        <div class="flex flex-row gap-2 items-center">
                            <img src="../assets/password.svg" alt="">
                            <a href="#">
                                <h5 class="text-sm font-poppins text-lightgray">Password</h5>
                            </a>
                        </div>
                        <div class="flex flex-row gap-2 items-center">
                            <img src="../assets/Invitations.png" alt="">
                            <a href="#">
                                <h5 class="text-sm font-poppins text-lightgray">Invitations</h5>
                            </a>
                        </div>
                        <div class="flex flex-row gap-2 items-center menu-active">
                            <img src="../assets/Billing.png" alt="">
                            <a href="#">
                                <h5 class="text-sm font-poppins text-darkblue">Billing</h5>
                            </a>
                        </div>
                        <div class="flex flex-row gap-2 items-center">
                            <img src="../assets/Apps.png" alt="">
                            <a href="#">
                                <h5 class="text-sm font-poppins text-lightgray">Apps</h5>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row gap-2 mt-12 items-center">
                    <img src="../assets/Log out.png" alt="Log out">
                    <a href="#">
                        <h5 class="text-sm font-poppins text-lightgray">Log out</h5>
                    </a>
                </div>
            </div>
            <div class="flex flex-col gap-28 p-12 w-1/2">
                <div>
                    <h1 class="text-2xl font-poppins font-bold text-darkblue">Billing</h1>
                </div>
                <div class="flex flex-col gap-6">
                    <div class="flex flex-col gap-2">
                        <h3 class="text-lg font-poppins font-bold text-darkblue">Order History</h3>
                        <h5 class="text-sm font-poppins text-lightgray font-medium">Manage billing information and view
                            receips</h5>
                    </div>
                    <div class="flex flex-col gap-4">
                        <table>
                            <thead>
                                <tr class="">
                                    <th class="text-left text-lightgray  text-sm font-poppins font-medium">Date</th>
                                    <th class="text-left text-lightgray  text-sm font-poppins font-medium">Type</th>
                                    <th class="text-left text-lightgray  text-sm font-poppins font-medium">Receipt</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class=" py-3 pr-4 text-darkblue font-medium font-poppins text-sm" >Oct. 21, 2021</td>
                                    <td class=" py-3 pr-4 text-darkblue font-medium font-poppins text-sm" >Pro Annual</td>
                                    <td class=" py-3 pr-4 text-darkblue font-medium font-poppins text-sm" >
                                        <button type="button" class="border border-grayborder py-2 px-4 rounded-md cursor-pointer hover:bg-darkblue hover:text-white">Download</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class=" py-3 pr-4 text-darkblue font-medium font-poppins text-sm">Aug. 21, 2021</td>
                                    <td class=" py-3 pr-4 text-darkblue font-medium font-poppins text-sm">Pro Portfolio</td>
                                    <td class=" py-3 pr-4 text-darkblue font-medium font-poppins text-sm">
                                        <button type="button" class="border border-grayborder py-2 px-4 rounded-md cursor-pointer hover:bg-darkblue hover:text-white">Download</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class=" py-3 pr-4 text-darkblue font-medium font-poppins text-sm">July. 21, 2021</td>
                                    <td class=" py-3 pr-4 text-darkblue font-medium font-poppins text-sm">Sponsored Post</td>
                                    <td class=" py-3 pr-4 text-darkblue font-medium font-poppins text-sm">
                                        <button type="button" class="border border-grayborder py-2 px-4 rounded-md cursor-pointer hover:bg-darkblue hover:text-white">Download</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class=" py-3 pr-4 text-darkblue font-medium font-poppins text-sm">Jun. 21, 2021</td>
                                    <td class=" py-3 pr-4 text-darkblue font-medium font-poppins text-sm">Sponsored Post</td>
                                    <td class=" py-3 pr-4 text-darkblue font-medium font-poppins text-sm">
                                        <button type="button" class="border border-grayborder py-2 px-4 rounded-md cursor-pointer hover:bg-darkblue hover:text-white">Download</button>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td class="font-poppins text-sm font-medium text-lightorange underline"><a href="#">Load more</a></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <div class="flex flex-col gap-4">
                    <div class="flex flex-col gap-2">
                        <h3 class="text-lg font-poppins font-bold text-darkblue">Payment Method</h3>
                        <h5 class="text-sm font-poppins text-lightgray font-medium">Manage billing information and view
                            receips</h5>
                    </div>
                    <div class="flex flex-row justify-between">
                        <div class="flex flex-row gap-4 items-center">
                            <div class="border border-grayborder p-2 rounded-md">
                                <img src="../assets/visa.png" alt="">
                            </div>
                            <h3 class="font-poppins font-medium text-lg text-darkblue">Visa ending in 2255</h3>
                        </div>
                        <div class="flex items-center">
                            <button type="button" class="border border-grayborder py-2 px-4 rounded-md cursor-pointer text-darkblue hover:bg-darkblue hover:text-white">Remove</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>


</template>

<script setup>



</script>


<style scoped></style>