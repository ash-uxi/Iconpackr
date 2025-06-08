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
    <path d="M12 21C13 21 22 15.9768 22 8.94427C22 3.50672 15.1625 0.66165 12 5.4274C8.83207 0.653479 2 3.5018 2 8.94427C2 15.9768 11 21 12 21Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M2 8.94427C2 3.5018 8.83207 0.653479 12 5.4274C15.1625 0.66165 22 3.50672 22 8.94427" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiHeartDuoStroke icon from the duo-stroke style in general category.
 */
export default {
  name: 'PiHeartDuoStroke',
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
      default: 'heart icon'
    }
  }
}
</script>
