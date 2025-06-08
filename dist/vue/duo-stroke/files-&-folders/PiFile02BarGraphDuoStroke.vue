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
    <path d="M12 18L12 11M16 18V13M8 18V16M20 10C20 5.58172 16.4183 2 12 2H11C12.6569 2 14 3.34315 14 5V5.6C14 5.9716 14 6.1574 14.0246 6.31287C14.1602 7.16865 14.8313 7.83983 15.6871 7.97538C15.8426 8 16.0284 8 16.4 8L17 8C18.6569 8 20 9.34315 20 11V10Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M16 22H8C5.79086 22 4 20.2091 4 18V6C4 3.79086 5.79086 2 8 2H12C16.4183 2 20 5.58172 20 10V18C20 20.2091 18.2091 22 16 22Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiFile02BarGraphDuoStroke icon from the duo-stroke style in files-&-folders category.
 */
export default {
  name: 'PiFile02BarGraphDuoStroke',
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
      default: 'file-02-bar-graph icon'
    }
  }
}
</script>
