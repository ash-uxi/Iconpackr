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
    <path fill="currentColor" d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0" opacity=".28"/>
  <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/>
  <path fill="currentColor" d="M5.866 21h12.268c1.03 0 1.866-.835 1.866-1.866 0-3.084-2.94-5.32-5.911-4.495l-.696.193a5.2 5.2 0 0 1-2.786 0l-.696-.193C6.94 13.815 4 16.05 4 19.134 4 20.164 4.835 21 5.866 21" opacity=".28"/>
  <path d="M5.866 21h12.268c1.03 0 1.866-.835 1.866-1.866 0-3.084-2.94-5.32-5.911-4.495l-.696.193a5.2 5.2 0 0 1-2.786 0l-.696-.193C6.94 13.815 4 16.05 4 19.134 4 20.164 4.835 21 5.866 21"/>
  </svg>
</template>

<script>
/**
 * PiUserUser03Contrast icon from the contrast style in users category.
 */
export default {
  name: 'PiUserUser03Contrast',
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
      default: 'user-user-03 icon'
    }
  }
}
</script>
