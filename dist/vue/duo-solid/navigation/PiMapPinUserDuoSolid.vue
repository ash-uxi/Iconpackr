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
    <path d="M12.0004 2C10.3383 2 8.16095 2.57617 6.37994 4.02229C4.56152 5.49878 3.21094 7.84065 3.21094 11.2222C3.21094 14.6327 4.82556 17.4361 6.64946 19.3614C7.5639 20.3266 8.55029 21.0928 9.4559 21.6239C10.3216 22.1315 11.2416 22.5 12.0004 22.5C12.7592 22.5 13.6792 22.1315 14.5449 21.6239C15.4505 21.0928 16.4369 20.3266 17.3514 19.3614C19.1753 17.4361 20.7899 14.6327 20.7899 11.2222C20.7899 7.84065 19.4393 5.49878 17.6209 4.02229C15.8399 2.57617 13.6625 2 12.0004 2Z" :fill="color || 'currentColor'" opacity="0.28" /> <path d="M7.00195 16.64C7.60947 16.2469 8.33418 16.0181 9.11207 16.0181H14.8898C15.6677 16.0181 16.3923 16.2469 16.9998 16.6399C16.66 17.1261 16.2883 17.5759 15.8999 17.9859C15.1104 18.8192 14.2711 19.4662 13.5337 19.8987C12.7562 20.3546 12.2157 20.5 12.0009 20.5C11.786 20.5 11.2455 20.3546 10.4681 19.8987C9.73058 19.4662 8.89132 18.8192 8.10181 17.9859C7.71345 17.5759 7.34178 17.1261 7.00195 16.64ZM8.58004 10.7895C8.58004 8.90007 10.1117 7.36841 12.0011 7.36841C13.8905 7.36841 15.4221 8.90007 15.4221 10.7895C15.4221 12.6789 13.8905 14.2105 12.0011 14.2105C10.1117 14.2105 8.58004 12.6789 8.58004 10.7895Z" :fill="color || 'currentColor'" fill-rule="evenodd" clip-rule="evenodd" />
  </svg>
</template>

<script>
/**
 * PiMapPinUserDuoSolid icon from the duo-solid style in navigation category.
 */
export default {
  name: 'PiMapPinUserDuoSolid',
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
      default: 'map-pin-user icon'
    }
  }
}
</script>
