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
    <path d="M16 22H8C5.79086 22 4 20.2091 4 18V6C4 3.79086 5.79086 2 8 2H12C16.4183 2 20 5.58172 20 10V18C20 20.2091 18.2091 22 16 22Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M9.8501 12.0022C10.0263 11.5014 10.3741 11.079 10.8318 10.81C11.2896 10.5409 11.8278 10.4426 12.3511 10.5324C12.8744 10.6221 13.3491 10.8942 13.691 11.3004C14.033 11.7066 14.2201 12.2207 14.2193 12.7517C14.2193 14.2506 11.971 15 11.971 15M12.0001 18H12.0101M20.0001 10C20.0001 5.58172 16.4184 2 12.0001 2H11.0001C12.657 2 14.0001 3.34315 14.0001 5V5.6C14.0001 5.9716 14.0001 6.1574 14.0247 6.31287C14.1603 7.16865 14.8315 7.83983 15.6873 7.97538C15.8427 8 16.0285 8 16.4001 8L17.0001 8C18.657 8 20.0001 9.34315 20.0001 11V10Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiFile02QuestionMarkDuoStroke icon from the duo-stroke style in files-&-folders category.
 */
export default {
  name: 'PiFile02QuestionMarkDuoStroke',
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
      default: 'file-02-question-mark icon'
    }
  }
}
</script>
