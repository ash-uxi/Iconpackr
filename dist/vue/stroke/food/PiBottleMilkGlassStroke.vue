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
    <path d="M10.8333 16L11.1875 18.5503C11.3574 19.7731 11.4423 20.3845 11.7358 20.8445C11.9944 21.25 12.3645 21.5722 12.8016 21.7726C13.2977 22 13.915 22 15.1495 22H15.8505C17.085 22 17.7023 22 18.1984 21.7726C18.6355 21.5722 19.0056 21.25 19.2642 20.8445C19.5577 20.3845 19.6426 19.7731 19.8125 18.5503L20.4444 14M10.8333 16L10 10H21L20.4444 14M10.8333 16L12.24 15.1116C12.7919 14.763 13.0679 14.5887 13.3598 14.4924C13.7878 14.3512 14.2461 14.3284 14.686 14.4263C14.9861 14.493 15.278 14.639 15.8619 14.9309V14.9309C16.5273 15.2637 16.86 15.43 17.1983 15.495C17.6944 15.5903 18.2078 15.5331 18.6708 15.3308C18.9864 15.1929 19.2743 14.9574 19.8501 14.4863L20.4444 14" stroke="currentColor" stroke-width="2" fill="none"/>
  <path d="M6 2H13M6 2V5.05573C6 5.4079 6 5.58398 5.97585 5.75645C5.95441 5.90961 5.9188 6.06046 5.86948 6.20704C5.81395 6.3721 5.7352 6.52959 5.57771 6.84458L4.42229 9.15542C4.2648 9.47041 4.18605 9.6279 4.13052 9.79296C4.0812 9.93954 4.04559 10.0904 4.02415 10.2436C4 10.416 4 10.5921 4 10.9443V18C4 19.4001 4 20.1002 4.27248 20.635C4.51217 21.1054 4.89462 21.4878 5.36502 21.7275C5.8998 22 6.59987 22 8 22H11C11.9168 22 12.5334 22 13 21.9235M6 2H5M13 2V5.05573C13 5.4079 13 5.58398 13.0241 5.75645C13.0456 5.90961 13.0812 6.06046 13.1305 6.20704C13.1861 6.3721 13.2648 6.52959 13.4223 6.84458L14.5777 9.15542C14.7352 9.47041 14.8139 9.6279 14.8695 9.79296M13 2H14" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiBottleMilkGlassStroke icon from the stroke style in food category.
 */
export default {
  name: 'PiBottleMilkGlassStroke',
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
      default: 'bottle-milk-glass icon'
    }
  }
}
</script>
