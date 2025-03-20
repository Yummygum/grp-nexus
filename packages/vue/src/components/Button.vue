<script setup lang="ts">
interface Props {
  msg?: string
}

const props = defineProps<Props>()
</script>

<template>
  <button class="sjakie">
    <slot /> {{msg}}
  </button>
</template>
