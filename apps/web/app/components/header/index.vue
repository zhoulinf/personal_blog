<template>
  <header class="inset-x-0 top-0 z-50">
    <nav aria-label="Global" class="flex items-center justify-between p-6 lg:px-8">
      <div class="flex lg:flex-1 items-center gap-2">
        <NuxtImg class="border rounded-full border-solid border-[#08396d]" src="/head.png" width="40" height="40"
          :modifiers="{ fit: 'contain' }" />
        <span class="font-bold">zhoulinfeng</span>
      </div>
      <div class="lg:flex lg:gap-x-12 text-sm/6 font-semibold text-gray-900">
        <NuxtLink href="/">首页</NuxtLink>
        <NuxtLink href="/category">分类</NuxtLink>
        <NuxtLink href="#">关于</NuxtLink>
        <NuxtLink href="#">联系我</NuxtLink>
      </div>
      <div>
        <div class="text-sm/6">输入框</div>
      </div>
    </nav>
  </header>
</template>