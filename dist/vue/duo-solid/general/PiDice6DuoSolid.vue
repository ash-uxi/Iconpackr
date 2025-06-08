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
    <path :fill="color || 'currentColor'" d="M10.956 2c-1.363 0-2.447 0-3.321.071-.896.074-1.66.227-2.359.583a6 6 0 0 0-2.622 2.622c-.356.7-.51 1.463-.583 2.359C2 8.509 2 9.593 2 10.956v2.088c0 1.363 0 2.447.071 3.321.074.896.227 1.66.583 2.359a6 6 0 0 0 2.622 2.622c.7.356 1.463.51 2.359.583.874.071 1.958.071 3.321.071h2.088c1.363 0 2.447 0 3.321-.071.896-.074 1.66-.227 2.359-.583a6 6 0 0 0 2.622-2.622c.356-.7.51-1.463.583-2.359.071-.874.071-1.958.071-3.321v-2.088c0-1.363 0-2.447-.071-3.321-.074-.896-.227-1.66-.583-2.359a6 6 0 0 0-2.622-2.622c-.7-.356-1.463-.51-2.359-.583C15.491 2 14.407 2 13.044 2z" opacity=".28" /> <path d="M16 8h.01M8 8h.01M8 16h.01M16 16h.01M8 12h.01M16 12h.01" />
  </svg>
</template>

<script>
/**
 * PiDice6DuoSolid icon from the duo-solid style in general category.
 */
export default {
  name: 'PiDice6DuoSolid',
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
      default: 'dice-6 icon'
    }
  }
}
</script>
