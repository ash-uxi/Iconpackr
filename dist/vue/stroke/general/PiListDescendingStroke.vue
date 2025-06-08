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
    <path d="M12 11.9995H21M12 17.9995H21M12 5.99951L21 5.99951M3 20.4995V17.8032C3 16.4119 3.84709 15.1607 5.13894 14.6439C5.37072 14.5512 5.62928 14.5512 5.86106 14.6439C7.15291 15.1607 8 16.4119 8 17.8032V20.4995M3 18.4995H8M3 4.49951L3.10648 4.47822C4.68652 4.16221 6.31348 4.16221 7.89352 4.47822C7.93903 4.48732 7.95604 4.54348 7.92321 4.5763L3.13143 9.36808C3.09206 9.40745 3.12766 9.47398 3.18226 9.46306C4.71227 9.15706 6.28773 9.15706 7.81774 9.46306L8 9.49951" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiListDescendingStroke icon from the stroke style in general category.
 */
export default {
  name: 'PiListDescendingStroke',
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
      default: 'list-descending icon'
    }
  }
}
</script>
