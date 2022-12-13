<script setup lang="ts">
import { computed } from 'vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const showChildren = ref(false)
const router = useRouter()
const props = defineProps<{
  route: any
  pathIcons: any
}>()

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

const pathIcon = computed(() => {
  if (props.pathIcons) {
    const foundItem = props.pathIcons.find((item) => {
      return item.split('.')[0].split('/').pop() === props.route.text
    })

    return foundItem
  }
})

const uppercaseFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}
</script>

<template>
  <div>
    <button
      type="button"
      class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
      @click="navigateToPage"
    >
      <img v-if="pathIcon" :src="pathIcon" />
      <span class="flex-1 ml-3 text-left whitespace-nowrap" :style="{ fontWeight: isActive ? 700 : 400, color: isActive ? 'var(--c-text-accent)' : 'var(--c-text)' }">{{
        uppercaseFirstLetter(props.route.text)
      }}</span>
      <!-- Down arrow -->
      <svg v-if="props.route.children && props.route.children.length > 0 && !showChildren" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
      <!-- Right arrow -->
      <svg v-if="props.route.children && props.route.children.length > 0 && showChildren" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>
    <div v-if="props.route.children && showChildren">
      <SidebarRoute v-for="child in props.route.children" :key="child.id" :route="child" :pathIcons="props.pathIcons">
        {{ child.text }}
      </SidebarRoute>
    </div>
  </div>
</template>
