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

console.log(props.route.children)

//Check if actual url includes props.route.link
const pathIcon = computed(() => {
  if (props.pathIcons) {
    const foundItem = props.pathIcons.find((item) => {
      console.log(item.split('.')[0].split('/').pop(), props.route.text, item.split('.')[0].split('/').pop() === props.route.text)
      return item.split('.')[0].split('/').pop() === props.route.text
    })

    console.log(`foundItem`, foundItem)
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
      <!-- <svg
        v-if="!props.smallMargin"
        aria-hidden="true"
        class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
          clip-rule="evenodd"
        ></path>
      </svg> -->
      <img v-if="pathIcon" :src="pathIcon" />
      <span class="flex-1 ml-3 text-left whitespace-nowrap">{{ uppercaseFirstLetter(props.route.text) }}</span>
      <svg v-if="props.route.children && props.route.children.length > 0" aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
      </svg>
    </button>
    <div v-if="props.route.children && showChildren">
      <SidebarRoute v-for="child in props.route.children" :key="child.id" :route="child" :pathIcons="props.pathIcons">
        {{ child.text }}
        <!-- <button @click="removeTodo(todo)">X</button> -->
      </SidebarRoute>
    </div>
  </div>
</template>
