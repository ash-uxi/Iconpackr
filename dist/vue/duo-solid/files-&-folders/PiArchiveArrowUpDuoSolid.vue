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
    <path :fill="color || 'currentColor'" fill-rule="evenodd" d="M3 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" clip-rule="evenodd" /> <path :fill="color || 'currentColor'" fill-rule="evenodd" d="M4 9a1 1 0 0 0-1 1v7a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5v-7a1 1 0 0 0-1-1z" clip-rule="evenodd" opacity=".28" /> <path d="M9.429 14.91c.634-.846 1.37-1.61 2.19-2.275A.6.6 0 0 1 12 12.5m0 0c.139 0 .273.047.381.135.82.665 1.556 1.43 2.19 2.275M12 12.5v6" />
  </svg>
</template>

<script>
/**
 * PiArchiveArrowUpDuoSolid icon from the duo-solid style in files-&-folders category.
 */
export default {
  name: 'PiArchiveArrowUpDuoSolid',
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
      default: 'archive-arrow-up icon'
    }
  }
}
</script>
