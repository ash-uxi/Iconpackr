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
    <path :fill="color || 'currentColor'" d="M15.835 2.254a18.3 18.3 0 0 1 4.713-.177 1.52 1.52 0 0 1 1.375 1.375 18.3 18.3 0 0 1-.177 4.713 1 1 0 0 1-1.753.477l-.797-.953a23 23 0 0 0-2.885-2.885l-.953-.796a1 1 0 0 1 .477-1.754" /> <path d="M18.525 18.525 15 15m3.525-9.524L15 9M5.476 5.476 9 9m-3.524 9.525L9 15" opacity=".28" /> <path :fill="color || 'currentColor'" d="M2.254 15.835a1 1 0 0 1 1.754-.477l.796.953a23 23 0 0 0 2.885 2.885l.953.796a1 1 0 0 1-.477 1.754c-1.566.262-3.15.322-4.713.177a1.52 1.52 0 0 1-1.375-1.375 18.3 18.3 0 0 1 .177-4.713M21.022 15.035a1 1 0 0 1 .724.8c.262 1.566.322 3.15.177 4.713a1.52 1.52 0 0 1-1.375 1.375 18.3 18.3 0 0 1-4.713-.177 1 1 0 0 1-.477-1.753l.953-.797a23 23 0 0 0 2.885-2.885l.796-.953a1 1 0 0 1 1.03-.323M3.452 2.077a18.3 18.3 0 0 1 4.713.177 1 1 0 0 1 .477 1.754l-.953.796A23 23 0 0 0 4.804 7.69l-.796.953a1 1 0 0 1-1.754-.477 18.3 18.3 0 0 1-.177-4.713 1.52 1.52 0 0 1 1.375-1.375" />
  </svg>
</template>

<script>
/**
 * PiMaximizeFourLineArrowDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 */
export default {
  name: 'PiMaximizeFourLineArrowDuoSolid',
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
      default: 'maximize-four-line-arrow icon'
    }
  }
}
</script>
