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
    <path d="m16 6-1.106-2.211a3.236 3.236 0 0 0-5.788 0L8 6M4 6h16M6 6h12v9c0 1.864 0 2.796-.305 3.53a4 4 0 0 1-2.164 2.165C14.796 21 13.864 21 12 21s-2.796 0-3.53-.305a4 4 0 0 1-2.166-2.164C6 17.796 6 16.864 6 15z"/>
  <path fill="currentColor" d="M6 6h12v9c0 1.864 0 2.796-.305 3.53a4 4 0 0 1-2.164 2.165C14.796 21 13.864 21 12 21s-2.796 0-3.53-.305a4 4 0 0 1-2.166-2.164C6 17.796 6 16.864 6 15z" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiDeleteDustbin01Contrast icon from the contrast style in general category.
 */
export default {
  name: 'PiDeleteDustbin01Contrast',
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
      default: 'delete-dustbin-01 icon'
    }
  }
}
</script>
