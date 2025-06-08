<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :style="{color: color || 'currentColor'}"
    role="img"
    :aria-label="ariaLabel"
    v-bind="$attrs"
  >
    <path d="M14 20H14.01M18 13C17.3625 14.6165 16.6609 15.345 15 16C16.6609 16.655 17.3625 17.3835 18 19C18.6375 17.3835 19.3391 16.655 21 16C19.3391 15.345 18.6375 14.6165 18 13Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M4 12H13.5M4 18H10M4 6H20" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiListAiGeneratedDuoStroke icon from the duo-stroke style in ai category.
 */
export default {
  name: 'PiListAiGeneratedDuoStroke',
  props: {
    size: {
      type: Number,
      default: 24
    },
    color: {
      type: String,
      default: undefined
    },
    className: {
      type: String,
      default: undefined
    },
    ariaLabel: {
      type: String,
      default: 'list-ai-generated icon'
    }
  }
}
</script>
