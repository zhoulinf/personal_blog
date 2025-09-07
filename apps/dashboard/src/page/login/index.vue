<template>
  <div class="w-full h-full flex justify-around bg-[#ebf0f3]">
    <div
      class="h-full w-4/5 m-auto relative shadow-[-15px_0_15px_15px_rgba(255,255,255,0.6),15px_0_15px_15px_rgba(0,0,0,0.1)]"
    >
      <div
        class="h-full w-2/5 shadow-[8px_0_8px_8px_rgba(0,0,0,0.1)] absolute  top-0 overflow-hidden transition-all duration-1000 ease-in-out"
        :class="[mode =='signUp' ?'left-[60%]' : 'left-0']"
      >
        <div
          class="h-[400px] flex w-[400px] rounded-[200px] shadow-[-5px_-5px_5px_5px_rgba(0,0,0,0.1),5px_5px_5px_5px_rgba(255,255,255,0.7)] absolute top-[-350px] transition-all duration-1000 ease-in-out"
          :class="[mode =='signUp' ? 'right-[260px]' :'right-[-160px]']"
        />
        <div
          class="h-2/5 flex w-full justify-center items-end text-6xl font-bold py-[2rem]"
        >
          {{ info.title }}
        </div>
        <div class="h-1/5 w-full">
          <div
            class="h-1/2 flex w-full justify-center items-center text-2xl px-20 text-[#a2a7aa]"
          >
            {{ info.sub1 }}
          </div>
          <div
            class="h-1/2 flex w-full justify-center items-top text-2xl px-20 text-[#a2a7aa]"
          >
            {{ info.sub2 }}
          </div>
        </div>
        <div class="h-2/5 flex w-full justify-center items-start py-[2rem]">
          <button
            class="w-48 h-[4rem] bg-[#4b70e3] text-[#fff] font-bold rounded-[2rem] cursor-pointer text-2xl"
            @click="changeMode"
          >
            {{ info.buttonName1 }}
          </button>
        </div>
        <div
          class="h-[600px] flex w-[600px] rounded-[300px] shadow-[8px_8px_8px_8px_rgba(255,255,255,0.7),-8px_-8px_8px_8px_rgba(0,0,0,0.1)] absolute bottom-[-500px]  transition-all duration-1000 ease-in-out"
          :class="[mode =='signUp' ? 'left-[0px]' :'left-[-220px]']"
        />
      </div>
      <div
        class="h-full w-3/5 absolute top-0 transition-all duration-1000 ease-in-out"
        :class="[mode =='signUp' ? 'left-0' :'left-[40%]']"
      >
        <div
          class="h-1/3 flex w-full justify-center items-center text-6xl font-bold"
        >
          {{ info.sub3 }}
        </div>
        <div class="h-1/3 w-full">
          <div
            class="h-1/4 flex w-full justify-center items-center text-2xl px-20 text-[#a2a7aa]"
          >
            or use Email for registration
          </div>
          <div
            v-if="mode =='signIn'"
            class="h-1/4  flex w-full justify-center items-center"
          >
            <input
              placeholder="Name"
              class="w-96  h-[2.5rem] border-none px-[2rem]  shadow-[3px_3px_3px_3px_rgba(255,255,255,0.7),-3px_-3px_3px_3px_rgba(0,0,0,0.1)] rounded-[5px]"
            />
          </div>
          <div class="h-1/4 flex w-full justify-center items-center">
            <input
              placeholder="Email"
              class="w-96 h-[2.5rem] border-none px-[2rem] shadow-[3px_3px_3px_3px_rgba(255,255,255,0.7),-3px_-3px_3px_3px_rgba(0,0,0,0.1)] rounded-[5px]"
            />
          </div>
          <div class="h-1/4 flex w-full justify-center items-center">
            <input
              placeholder="Password"
              class="w-96 h-[2.5rem] border-none px-[2rem] shadow-[3px_3px_3px_3px_rgba(255,255,255,0.7),-3px_-3px_3px_3px_rgba(0,0,0,0.1)] rounded-[5px]"
            />
          </div>
          <div
            v-if="mode =='signUp'"
            class="h-1/4 flex w-full justify-center items-center"
          >
            <div class="py-[3px] border-b-[1px] border-solid cursor-pointer">
              Forget your password?
            </div>
          </div>
        </div>
        <div class="h-1/3 flex w-full justify-center items-center">
          <button
            class="w-48 h-[4rem] bg-[#4b70e3] text-[#fff] font-bold rounded-[2rem] cursor-pointer text-2xl"
          >
            {{ info.buttonName2 }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Info {
  title:string
  sub1:string
  sub2:string
  sub3:string
  buttonName1:string
  buttonName2:string
}
import {computed, ref} from 'vue';
const mode = ref('signIn');
function changeMode() {
   mode.value = mode.value === 'signIn' ? 'signUp' : 'signIn';
}

const info = computed<Info>(() => {
  let obj = {};
  if (mode.value === 'signIn') {
    obj = {
        title: 'Welcome Back!',
        sub1: 'To keep connected with us please login',
        sub2: 'with your personal info',
        sub3: 'Creat Account',
        buttonName1: 'SIGN IN',
        buttonName2: 'SIGN UP',
    };
  }
else {
    obj = {
        title: 'Hello Friend',
        sub1: 'Enter your personal details and start',
        sub2: 'journey with us',
        sub3: 'Sign in to Website',
        buttonName1: 'SIGN UP',
        buttonName2: 'SIGN IN',
    };
  }
  return obj as Info;

});
</script>
