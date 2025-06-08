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
    <path fill="currentColor" d="M20.344 6.202 17.8 3.656c-.792-.792-1.188-1.188-1.645-1.336a2 2 0 0 0-1.236 0c-.457.148-.853.544-1.645 1.336l-9.617 9.617c-.792.792-1.188 1.188-1.336 1.644a2 2 0 0 0 0 1.236c.148.457.544.853 1.336 1.645l2.546 2.546c.792.792 1.188 1.188 1.645 1.336.401.13.834.13 1.236 0 .457-.148.853-.544 1.645-1.336l9.616-9.617c.792-.792 1.188-1.188 1.337-1.645a2 2 0 0 0 0-1.236c-.149-.456-.545-.852-1.337-1.644" opacity=".28"/>
  <path d="m4.222 12.707 3.536 3.535M9.879 7.05l3.536 3.536m-.707-6.364 2.121 2.12M7.05 9.88l2.122 2.12m-5.516 5.8 2.546 2.545c.792.792 1.188 1.188 1.645 1.336.401.13.834.13 1.236 0 .457-.148.853-.544 1.645-1.336l9.616-9.617c.792-.792 1.188-1.188 1.337-1.645a2 2 0 0 0 0-1.236c-.149-.456-.545-.852-1.337-1.644L17.8 3.656c-.792-.792-1.188-1.188-1.645-1.336a2 2 0 0 0-1.236 0c-.457.148-.853.544-1.645 1.336l-9.617 9.617c-.792.792-1.188 1.188-1.336 1.644a2 2 0 0 0 0 1.236c.148.457.544.853 1.336 1.645"/>
  </svg>
</template>

<script>
/**
 * PiScaleContrast icon from the contrast style in editing category.
 */
export default {
  name: 'PiScaleContrast',
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
      default: 'scale icon'
    }
  }
}
</script>
