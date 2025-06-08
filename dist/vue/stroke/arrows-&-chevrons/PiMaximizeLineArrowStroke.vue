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
    <path d="M19.7142 9.94268C20.0092 8.1811 20.0761 6.40091 19.9138 4.64657C19.8998 4.49608 19.835 4.36296 19.736 4.26398M14.0573 4.28582C15.8189 3.99085 17.5991 3.92395 19.3534 4.08624C19.5039 4.10016 19.637 4.165 19.736 4.26398M19.736 4.26398L4.26398 19.736M4.28582 14.0573C3.99085 15.8189 3.92395 17.5991 4.08624 19.3534C4.10016 19.5039 4.165 19.637 4.26398 19.736M9.94268 19.7142C8.1811 20.0092 6.40091 20.0761 4.64657 19.9138C4.49608 19.8998 4.36296 19.835 4.26398 19.736" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiMaximizeLineArrowStroke icon from the stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiMaximizeLineArrowStroke',
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
      default: 'maximize-line-arrow icon'
    }
  }
}
</script>
