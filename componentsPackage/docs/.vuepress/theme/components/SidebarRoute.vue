<script setup lang="ts">
import { ref } from 'vue'

const showChildren = ref(false)
const props = defineProps<{
  route: any
  smallMargin: boolean | undefined
}>()

console.log(props.route)

const changeChildrenVisiblity = () => {
  showChildren.value = !showChildren.value
}
</script>

<template>
  <div :style="{ marginBottom: props.smallMargin ? '1rem' : '2rem' }" class="item-wrapper">
    <div class="item">
      <i>
        <slot name="header"></slot>
      </i>
      <div class="content">
        <slot></slot>
        <div v-if="props.route.children" @click="changeChildrenVisiblity">></div>
      </div>
    </div>
    <div v-if="props.route.children && showChildren">
      <SidebarRoute v-for="child in props.route.children" :key="child.id" :route="child" :smallMargin="true">
        {{ child.text }}
        <!-- <button @click="removeTodo(todo)">X</button> -->
      </SidebarRoute>
    </div>
  </div>
</template>

<style scoped>
.item-wrapper {
  margin: 10px;
}
.item {
  display: flex;
  height: 32px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  flex: 1;
  margin-left: 1rem;
  justify-content: space-between;
  display: flex;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  color: var(--color-text);
}
</style>
