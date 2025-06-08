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
    <path fill="currentColor" d="M15.889 3.868a3 3 0 0 1 4.243 4.242l-9.27 9.27a3 3 0 0 1-4.243-4.242z" opacity=".28"/>
  <path d="m5.5 18.5 2.191-.157c.881-.064 1.321-.096 1.734-.217a4 4 0 0 0 1.035-.473c.361-.232.674-.544 1.298-1.169l8.374-8.374a3 3 0 0 0-4.243-4.242l-8.374 8.374c-.624.624-.936.936-1.169 1.298-.206.32-.365.67-.472 1.035-.122.412-.153.853-.217 1.733zm0 0L3 21m8.15-7.15 1.622 1.62m1.107-4.349 1.621 1.621m1-4.242 1.621 1.621"/>
  </svg>
</template>

<script>
/**
 * PiMedicalThermometerContrast icon from the contrast style in medical category.
 */
export default {
  name: 'PiMedicalThermometerContrast',
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
      default: 'medical-thermometer icon'
    }
  }
}
</script>
