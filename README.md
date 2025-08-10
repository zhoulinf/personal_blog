# TODO

1. blog_web: nuxtjs + tailwindcss编写，书写博客浏览页面，分类展示，最热展示，
2. dashboard: 博客后台管理：博客内容编写 vue3+ typescript ,一个markdown 编辑器，博客数据可视化展示，埋点上报展示
3. server 后台服务api，公共api暴露提供，内容缓存，用户管理，埋点服务等等



# 项目启动





# 项目构建




# 计划




# 关于 TURBOREPO

通俗来说，是利用一种缓存的机制，和第一次构建相同的文件直接引用缓存，跳过构建，不同的文件再进行构建，从而大幅度减少了构建时间。提高了构建速度。



# 关于Vue 二次封装


$attrs 包含事件和属性

1. 属性如何穿透
2. 插槽如何穿透
3. 组件方法如何暴露

```
<template>
  <div>
    <el-input v-bind="{...$attrs,...props}"></el-input>
  </div>
</template>

<script lang="ts" setup>
import type {InputProps} from 'element-plus'
const props = defineProps<InputProps>()
</script>
```



# 插槽
```
<template>
  <div>
    <component is="{h(ElInput),{...$attrs,...props},$slots}"></component>
  </div>
</template>

<script lang="ts" setup>
import type {InputProps} from 'element-plus'
const props = defineProps<InputProps>()
</script>
```



# 方法
```
<template>
  <div>
    <component is="{h(ElInput),{...$attrs,...props,ref:changeRef},$slots}"></component>
  </div>
</template>

<script lang="ts" setup>
import type {InputProps} from 'element-plus'
const props = defineProps<InputProps>()
const vm = getCurrentInstance()
// 类似definedExpose
function changeRef (inputinstance){
  vm.exposed = inputinstance
}

</script>
```
