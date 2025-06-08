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
    <path d="M16.5609 7.43945C19.7904 8.10265 22 9.44818 22 11.0001C22 13.2093 17.5228 15.0001 12 15.0001C6.47715 15.0001 2 13.2093 2 11.0001C2 9.44818 4.20962 8.10265 7.43913 7.43945" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M4 17L3 19M12 18V21M20 17L21 19M12 4C15.3489 4 17.2746 7.53239 16.9638 10.5391C15.5011 10.8323 13.8065 11 12 11C10.1935 11 8.49887 10.8323 7.03622 10.5391C6.72543 7.53239 8.6511 4 12 4Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiUfoDuoStroke icon from the duo-stroke style in general category.
 */
export default {
  name: 'PiUfoDuoStroke',
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
      default: 'ufo icon'
    }
  }
}
</script>
