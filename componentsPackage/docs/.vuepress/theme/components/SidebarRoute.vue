<script setup lang="ts">
import { computed } from 'vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const showChildren = ref(false)
const router = useRouter()
const props = defineProps<{
  route: any
  smallMargin: boolean | undefined
}>()

console.log(props.route)

const navigateToPage = () => {
  showChildren.value = !showChildren.value
  if (props.route.link) {
    router.push({ path: props.route.link })
  }
}

//Check if actual url includes props.route.link
const isActive = computed(() => {
  if (props.route.link && router.currentRoute.value.path) {
    //Remove index substring from link
    let modifiedRoute = props.route.link
    if (props.route.link.includes('index')) {
      modifiedRoute = props.route.link.replace('index', '')
    }
    return router.currentRoute.value.path.split('.')[0].includes(modifiedRoute.split('.')[0])
  }
})
</script>

<template>
  <div :style="{ marginBottom: props.smallMargin ? '1rem' : '2rem', cursor: props.route.link ? 'pointer' : 'auto' }" class="item-wrapper">
    <div class="item" @click="navigateToPage">
      <i>
        <slot name="header"></slot>
      </i>
      <div class="content" :style="{ color: isActive ? 'var(--c-text-accent)' : 'var(--c-text)' }">
        <slot></slot>
        <div v-if="props.route.children">></div>
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
