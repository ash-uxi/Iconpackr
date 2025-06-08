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
    <path d="M18 8H16M12 15V20M17 15V15.1459C17 17.2015 18.1614 19.0807 20 20M7 15V15.1459C7 17.2015 5.8386 19.0807 4 20" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M20 4H4C2.89543 4 2 4.89543 2 6V12H22V6C22 4.89543 21.1046 4 20 4Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiAcOnFastDuoStroke icon from the duo-stroke style in appliances category.
 */
export default {
  name: 'PiAcOnFastDuoStroke',
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
      default: 'ac-on-fast icon'
    }
  }
}
</script>
