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
    <path d="M21.9195 4.16874C22.5995 2.88422 21.2091 1.49375 19.9245 2.17379L12.6546 6.02259C10.7695 7.0206 9.31612 8.6633 8.55154 10.6391C8.3535 11.1508 8.60484 11.7266 9.11476 11.9292C10.4853 12.474 11.5321 13.5902 12.0645 14.9983C12.2592 15.5131 12.8331 15.7738 13.3489 15.5818C15.3716 14.8286 17.055 13.3572 18.0707 11.4387L21.9195 4.16874Z" :fill="color || 'currentColor'" opacity="0.28" /> <path d="M9.55751 14.4578C7.94724 12.8474 5.42564 12.9094 4.00361 14.636C3.50766 15.2381 3.36867 15.8685 3.29146 16.3508C3.27237 16.4701 3.25698 16.5748 3.24321 16.6684L3.24278 16.6713C3.19585 16.9907 3.1676 17.1829 3.07504 17.3962C2.90759 17.7822 2.48794 18.0389 2.06667 18.0108C1.69851 17.9862 1.34672 18.1663 1.15147 18.4794C0.956226 18.7925 0.949254 19.1877 1.13333 19.5075C2.91375 22.6004 7.37743 22.8469 9.51457 20.0635C10.0671 19.3439 10.5113 18.4171 10.6082 17.429C10.7082 16.4098 10.4324 15.3327 9.55751 14.4578Z" :fill="color || 'currentColor'" />
  </svg>
</template>

<script>
/**
 * PiPaintBrushDuoSolid icon from the duo-solid style in general category.
 */
export default {
  name: 'PiPaintBrushDuoSolid',
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
      default: 'paint-brush icon'
    }
  }
}
</script>
