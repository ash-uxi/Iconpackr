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
    <path d="M12 4C12 3.44772 12.4477 3 13 3C13.5523 3 14 3.44772 14 4C14 4.55228 13.5523 5 13 5C12.4477 5 12 4.55228 12 4Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M14 9.5L14.4063 10.1094C14.7772 10.6658 15.4017 11 16.0704 11H19" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M15.5 22L14.1305 17.4351C14.0476 17.1586 13.8492 16.9315 13.5865 16.812L10.2156 15.2798C9.25203 14.8418 8.79655 13.729 9.17649 12.7411L11 8H8.47214C6.95705 8 5.572 8.85601 4.89443 10.2111L4 12" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M19.0005 6C18.1721 6 17.5005 5.10457 17.5005 4C17.5005 2.89543 18.1721 2 19.0005 2C19.8289 2 20.5005 2.89543 20.5005 4C20.5005 5.10457 19.8289 6 19.0005 6ZM19.0005 6V11" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M7.5 17L6.59382 18.8124C6.20468 19.5906 5.61918 20.2539 4.89519 20.7365L3 22" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiFitnessTennisDuoStroke icon from the duo-stroke style in sports category.
 */
export default {
  name: 'PiFitnessTennisDuoStroke',
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
      default: 'fitness-tennis icon'
    }
  }
}
</script>
