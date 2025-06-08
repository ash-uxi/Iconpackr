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
    <path fill="currentColor" d="m10.44 17.732-5.083 3.176a.592.592 0 0 1-.89-.632l.127-.559a51.2 51.2 0 0 1 6.939-16.463.556.556 0 0 1 .934 0 51.2 51.2 0 0 1 6.939 16.463l.127.559a.591.591 0 0 1-.89.632l-5.084-3.177a2.94 2.94 0 0 0-3.12 0" opacity=".28"/>
  <path d="m10.44 17.732-5.083 3.176a.592.592 0 0 1-.89-.632l.127-.559a51.2 51.2 0 0 1 6.939-16.463.556.556 0 0 1 .934 0 51.2 51.2 0 0 1 6.939 16.463l.127.559a.591.591 0 0 1-.89.632l-5.084-3.177a2.94 2.94 0 0 0-3.12 0"/>
  </svg>
</template>

<script>
/**
 * PiNavigationHorizontalContrast icon from the contrast style in navigation category.
 */
export default {
  name: 'PiNavigationHorizontalContrast',
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
      default: 'navigation-horizontal icon'
    }
  }
}
</script>
