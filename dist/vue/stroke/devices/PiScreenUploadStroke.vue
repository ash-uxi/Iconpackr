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
    <path d="M14.156 2H4.4c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656C2 3.139 2 3.559 2 4.4v10.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.656c.32.163.74.163 1.581.163H12m10-4.52v2.12c0 .84 0 1.26-.163 1.581a1.5 1.5 0 0 1-.656.656c-.32.163-.74.163-1.581.163H12m0 3.875V17m0 3.875c-1.75 0-3.5.375-5 1.125m5-1.125c1.75 0 3.5.375 5 1.125M23.034 4.812a15 15 0 0 0-2.557-2.655.7.7 0 0 0-.443-.157m-3 2.812a15 15 0 0 1 2.556-2.655.7.7 0 0 1 .444-.157m0 0v7" fill="none"/>
  <rect width="24" height="24"  fill="none"/>
  </svg>
</template>

<script>
/**
 * PiScreenUploadStroke icon from the stroke style in devices category.
 */
export default {
  name: 'PiScreenUploadStroke',
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
      default: 'screen-upload icon'
    }
  }
}
</script>
