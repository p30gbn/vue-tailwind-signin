<template>
    <div class="w-full h-full bg-linear-to-br from-bgpurple to-lightbgpurple flex items-center justify-center relative">
        <div class="flex items-center justify-center absolute bottom-10">
            <img src="../assets/Group 1.png" alt="">
        </div>
        <div class="bg-white p-16 rounded-xl m-24 flex flex-col gap-4 z-40" style="margin: 16rem;">
            <div class="flex flex-col text-left mb-8 gap-6 font-inter" >
                <h3 class="text-2xl text-lightblue font-medium">Sign in</h3>
                <form @submit.prevent="signin" class="w-full flex flex-col gap-6">
                    <div class="flex flex-col gap-1">
                    <input type="text" v-model="username" class="focus:outline-0 px-4 py-2 border border-zinc-500 font-inter rounded-sm text-sm" placeholder="username"></input>
                    <input type="password" v-model="password" class="focus:outline-0 px-4 py-2 border border-zinc-500 font-inter rounded-sm text-sm" placeholder="password"></input>
                    </div>
                    <button type="submit" class="bg-btnpurple text-white px-4 py-2 text-sm rounded-sm hover:opacity-85 cursor-pointer hover:scale-105 duration-300">Sign in</button>
                </form>
                <h5 class="text-center font-inter text-sm text-mildblue"><a href="#">Forgot your password?</a></h5>
            </div>
            <div class="flex flex-col gap-4 border-t border-zinc-300">
                <h6 class="text-center text-lighttext font-inter">or use</h6>
                <div class="flex flex-row-reverse items-center justify-between">
                    <a href="#"><img src="../assets/Frame 19.png" alt=""></a>
                    <a href="#"><img src="../assets/Frame 6.png" alt=""></a>
                    <a href="#"><img src="../assets/Frame 5.png" alt=""></a>
                    <a href="#"><img src="../assets/Frame 1.png" alt=""></a>
                </div>
            </div>

            <div class="flex flex-col gap-4 mt-2">
                <h3 class="font-inter text-left text-md text-lightblue font-medium">
                    No account? Sign up as a:
                </h3>
                <div class="flex flex-row items-center justify-between">
                    <div class="flex items-center justify-center border border-zinc-300 font-inter text-sm text-mildblue px-3 py-2">
                        <a href="#">Agency</a>
                    </div>
                    <div class="flex items-center justify-center border border-zinc-300 font-inter text-sm text-mildblue px-3 py-2">
                        <a href="#">Brand</a>
                    </div>
                    <div class="flex items-center justify-center border border-zinc-300 font-inter text-sm text-mildblue px-3 py-2">
                        <a href="#">Partner</a>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';


const username = ref("")
const password = ref("")

const signin = () => {
    console.log(username.value)
}


</script>

<style scoped>


</style>