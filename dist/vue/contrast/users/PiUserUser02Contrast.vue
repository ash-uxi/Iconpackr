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
    <g fill="currentColor" opacity=".28">
    <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M7.275 21h9.45A3.275 3.275 0 0 0 20 17.725c0-2.286-2.284-3.869-4.424-3.066l-1.926.722a4.7 4.7 0 0 1-3.3 0l-1.926-.722C6.284 13.856 4 15.44 4 17.725A3.275 3.275 0 0 0 7.275 21"/>
  </g>
  <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M7.275 21h9.45A3.275 3.275 0 0 0 20 17.725c0-2.286-2.284-3.869-4.424-3.066l-1.926.722a4.7 4.7 0 0 1-3.3 0l-1.926-.722C6.284 13.856 4 15.44 4 17.725A3.275 3.275 0 0 0 7.275 21"/>
  </svg>
</template>

<script>
/**
 * PiUserUser02Contrast icon from the contrast style in users category.
 */
export default {
  name: 'PiUserUser02Contrast',
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
      default: 'user-user-02 icon'
    }
  }
}
</script>
