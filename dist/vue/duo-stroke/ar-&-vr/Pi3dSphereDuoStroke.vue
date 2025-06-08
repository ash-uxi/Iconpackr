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
    <path d="M2.8501 11.9996C2.8501 6.94621 6.94669 2.84961 12.0001 2.84961C17.0535 2.84961 21.1501 6.94621 21.1501 11.9996C21.1501 17.053 17.0535 21.1496 12.0001 21.1496C6.94669 21.1496 2.8501 17.053 2.8501 11.9996Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M21.1418 12.3901C17.3391 13.8819 13.1086 14.2743 9.0596 13.8512M9.0596 13.8512C6.78735 13.6138 4.68379 13.1063 2.85815 12.3901M9.0596 13.8512C9.23111 16.4977 9.76585 18.9476 10.5729 21.0394M9.0596 13.8512C8.82175 10.1808 9.24471 6.40314 10.5729 2.96069" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * Pi3dSphereDuoStroke icon from the duo-stroke style in ar-&-vr category.
 */
export default {
  name: 'Pi3dSphereDuoStroke',
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
      default: '3d-sphere icon'
    }
  }
}
</script>
