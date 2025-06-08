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
    <path d="M20 11V18C20 20.2091 18.2091 22 16 22H8C5.79086 22 4 20.2091 4 18V6C4 3.79086 5.79086 2 8 2H11M20 11V10C20 5.58172 16.4183 2 12 2H11M20 11C20 9.34315 18.6569 8 17 8L16.4 8C16.0284 8 15.8426 8 15.6871 7.97538C14.8313 7.83983 14.1602 7.16865 14.0246 6.31287C14 6.1574 14 5.9716 14 5.6V5C14 3.34315 12.6569 2 11 2M14 15.1256C13.5065 15.7836 12.934 16.3779 12.2957 16.8951C12.2094 16.965 12.1047 17 12 17M10 15.1256C10.4935 15.7836 11.066 16.3779 11.7043 16.8951C11.7906 16.965 11.8953 17 12 17M12 17V11" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiFile02ArrowDownStroke icon from the stroke style in files-&-folders category.
 */
export default {
  name: 'PiFile02ArrowDownStroke',
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
      default: 'file-02-arrow-down icon'
    }
  }
}
</script>
