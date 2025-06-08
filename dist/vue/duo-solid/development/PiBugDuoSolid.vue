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
    <path :fill="color || 'currentColor'" fill-rule="evenodd" d="M16 6a4 4 0 0 0-8 0h-.76a1 1 0 0 0-.704.29C4.969 7.849 4 10.06 4 12.5c0 4.278 3.006 7.91 7 8.435V13a1 1 0 1 1 2 0v7.935c3.994-.525 7-4.157 7-8.435 0-2.44-.969-4.652-2.536-6.21a1 1 0 0 0-.705-.29zm-4-2a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2" clip-rule="evenodd" /> <path d="M21 3v2.54a3 3 0 0 1-2.412 2.942l-.606.122M3 3v2.54a3 3 0 0 0 2.412 2.942l.606.122M22 21v-2.54a3 3 0 0 0-2.412-2.942l-1.092-.219M2 21v-2.54a3 3 0 0 1 2.412-2.942l1.092-.219" opacity=".28" />
  </svg>
</template>

<script>
/**
 * PiBugDuoSolid icon from the duo-solid style in development category.
 */
export default {
  name: 'PiBugDuoSolid',
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
      default: 'bug icon'
    }
  }
}
</script>
