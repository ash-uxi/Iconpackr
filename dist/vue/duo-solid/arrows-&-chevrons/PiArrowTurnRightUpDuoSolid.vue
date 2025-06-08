<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    
     :style="{color: color || 'currentColor'}"
    role="img"
    :aria-label="ariaLabel"
    v-bind="$attrs"
  >
    <path d="M14 9.352V13c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C10.2 21 8.8 21 6 21H3" opacity=".28" /> <path :fill="color || 'currentColor'" d="M9.17 10.844a1 1 0 0 1-.974-1.58 26.2 26.2 0 0 1 4.684-4.87 1.79 1.79 0 0 1 2.24 0 26.2 26.2 0 0 1 4.684 4.87 1 1 0 0 1-.973 1.58A49 49 0 0 0 17 10.548a23 23 0 0 0-6 0c-.443.058-.889.134-1.83.296" />
  </svg>
</template>

<script>
/**
 * PiArrowTurnRightUpDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 */
export default {
  name: 'PiArrowTurnRightUpDuoSolid',
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
      default: 'arrow-turn-right-up icon'
    }
  }
}
</script>
