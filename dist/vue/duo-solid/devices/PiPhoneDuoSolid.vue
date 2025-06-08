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
    <path :fill="color || 'currentColor'" d="M11.357 1c-1.084 0-1.958 0-2.666.058-.728.06-1.369.185-1.961.487A5 5 0 0 0 4.545 3.73c-.302.592-.428 1.233-.487 1.961C4 6.4 4 7.273 4 8.357v7.286c0 1.084 0 1.958.058 2.666.06.729.185 1.369.487 1.961a5 5 0 0 0 2.185 2.185c.592.302 1.233.428 1.961.487C9.4 23 10.273 23 11.357 23h1.286c1.084 0 1.958 0 2.666-.058.729-.06 1.369-.185 1.961-.487a5 5 0 0 0 2.185-2.185c.302-.592.428-1.232.487-1.961C20 17.6 20 16.727 20 15.643V8.357c0-1.084 0-1.958-.058-2.666-.06-.728-.185-1.369-.487-1.961a5 5 0 0 0-2.185-2.185c-.592-.302-1.232-.428-1.961-.487C14.6 1 13.727 1 12.643 1z" opacity=".28" /> <path d="M12 19h.01" />
  </svg>
</template>

<script>
/**
 * PiPhoneDuoSolid icon from the duo-solid style in devices category.
 */
export default {
  name: 'PiPhoneDuoSolid',
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
      default: 'phone icon'
    }
  }
}
</script>
