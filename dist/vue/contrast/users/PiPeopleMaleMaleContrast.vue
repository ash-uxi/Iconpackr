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
    <path d="M8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M2.27 12.75A3 3 0 0 1 5.26 10h1.478a3 3 0 0 1 2.99 2.753l.183 2.223a.966.966 0 0 1-.985 1.046.966.966 0 0 0-.987.902l-.23 3.478a1.71 1.71 0 0 1-3.415.001l-.232-3.48A.99.99 0 0 0 3.075 16a.99.99 0 0 1-.986-1.071zM20 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14.27 12.75A3 3 0 0 1 17.26 10h1.478a3 3 0 0 1 2.99 2.753l.183 2.223a.966.966 0 0 1-.985 1.046.966.966 0 0 0-.987.902l-.23 3.478a1.71 1.71 0 0 1-3.415.001l-.232-3.48a.99.99 0 0 0-.987-.923.99.99 0 0 1-.986-1.071z"/>
  </g>
  <path d="M14.27 12.75A3 3 0 0 1 17.26 10h1.478a3 3 0 0 1 2.99 2.753l.183 2.223a.966.966 0 0 1-.985 1.046v0a.966.966 0 0 0-.987.902l-.23 3.478a1.71 1.71 0 0 1-3.415.001l-.232-3.48a.99.99 0 0 0-.987-.923v0a.99.99 0 0 1-.986-1.071zM2.27 12.75A3 3 0 0 1 5.26 10h1.478a3 3 0 0 1 2.99 2.753l.183 2.223a.966.966 0 0 1-.985 1.046v0a.966.966 0 0 0-.987.902l-.23 3.478a1.71 1.71 0 0 1-3.415.001l-.232-3.48A.99.99 0 0 0 3.075 16v0a.99.99 0 0 1-.986-1.071zM20 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
  </svg>
</template>

<script>
/**
 * PiPeopleMaleMaleContrast icon from the contrast style in users category.
 */
export default {
  name: 'PiPeopleMaleMaleContrast',
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
      default: 'people-male-male icon'
    }
  }
}
</script>
