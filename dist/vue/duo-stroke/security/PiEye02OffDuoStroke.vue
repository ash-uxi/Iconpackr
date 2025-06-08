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
    <path d="M22 2L2 22" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M3 14C3 11.8125 5.7 7 12 7C13.6234 7 15.0078 7.31957 16.1686 7.83144M19.3912 10.265C20.4885 11.5984 21 13.0479 21 14M12.8715 11.1285C12.5957 11.0449 12.3031 11 12 11C10.3431 11 9 12.3431 9 14C9 14.3031 9.04494 14.5957 9.12853 14.8715M12.751 16.9052C13.8044 16.6337 14.6337 15.8044 14.9052 14.751" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiEye02OffDuoStroke icon from the duo-stroke style in security category.
 */
export default {
  name: 'PiEye02OffDuoStroke',
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
      default: 'eye-02-off icon'
    }
  }
}
</script>
