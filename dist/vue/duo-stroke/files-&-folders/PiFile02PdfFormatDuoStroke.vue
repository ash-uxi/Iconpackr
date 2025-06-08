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
    <path d="M20 10C20 5.58172 16.4183 2 12 2H8C5.79086 2 4 3.79086 4 6V10" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M3 19V14H4.5C5.88071 14 7 15.1193 7 16.5C7 17.8807 5.88071 19 4.5 19H3ZM3 19V21M17 18V14H21M17 18V21M17 18H21M20 10C20 5.58172 16.4183 2 12 2H11C12.6569 2 14 3.34315 14 5V5.6C14 5.9716 14 6.1574 14.0246 6.31287C14.1602 7.16865 14.8313 7.83983 15.6871 7.97538C15.8426 8 16.0284 8 16.4 8L17 8C18.3062 8 19.4175 8.83481 19.8293 10H20ZM10 14V21H10.5C12.433 21 14 19.433 14 17.5C14 15.567 12.433 14 10.5 14H10Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiFile02PdfFormatDuoStroke icon from the duo-stroke style in files-&-folders category.
 */
export default {
  name: 'PiFile02PdfFormatDuoStroke',
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
      default: 'file-02-pdf-format icon'
    }
  }
}
</script>
