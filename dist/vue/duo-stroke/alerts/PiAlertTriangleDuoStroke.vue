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
    <path d="M12 13.0001V9.00012M12 16.3751V16.3762" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M13.3899 3.28373C12.5011 2.90542 11.4989 2.90542 10.6101 3.28373C7.95863 4.41217 1.69539 14.4218 1.87895 17.0972C1.9509 18.1459 2.47058 19.1112 3.30278 19.7421C5.51548 21.4193 18.4845 21.4193 20.6973 19.7421C21.5294 19.1112 22.0491 18.1459 22.1211 17.0972C22.3045 14.4218 16.0413 4.41217 13.3899 3.28373Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiAlertTriangleDuoStroke icon from the duo-stroke style in alerts category.
 */
export default {
  name: 'PiAlertTriangleDuoStroke',
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
      default: 'alert-triangle icon'
    }
  }
}
</script>
