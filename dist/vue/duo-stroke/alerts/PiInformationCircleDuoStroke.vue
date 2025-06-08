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
    <path d="M12 11.9999V15.9999M12 8.6249V8.62378" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiInformationCircleDuoStroke icon from the duo-stroke style in alerts category.
 */
export default {
  name: 'PiInformationCircleDuoStroke',
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
      default: 'information-circle icon'
    }
  }
}
</script>
