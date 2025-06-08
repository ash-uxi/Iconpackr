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
    <path d="M13 14C14.1046 14 15 13.1046 15 12C15 10.8954 14.1046 10 13 10C11.8954 10 11 10.8954 11 12C11 13.1046 11.8954 14 13 14ZM13 14C13 16.8 15.2 19 18 19M13 14V22M18 19C18 20.1046 18.8954 21 20 21C21.1046 21 22 20.1046 22 19C22 17.8954 21.1046 17 20 17C18.8954 17 18 17.8954 18 19Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M22 13V12.4C22 10.1598 22 9.03969 21.564 8.18404C21.1805 7.43139 20.5686 6.81947 19.816 6.43597C18.9603 6 17.8402 6 15.6 6H13.2844C12.8148 6 12.58 6 12.3669 5.93527C12.1782 5.87797 12.0027 5.78403 11.8503 5.65882C11.6783 5.51739 11.548 5.32202 11.2875 4.93128L10.7125 4.06872C10.452 3.67798 10.3217 3.48262 10.1497 3.34118C9.99732 3.21597 9.82179 3.12203 9.6331 3.06473C9.41997 3 9.18517 3 8.71556 3H8.4C6.15979 3 5.03968 3 4.18404 3.43597C3.43139 3.81947 2.81947 4.43139 2.43597 5.18404C2 6.03968 2 7.15979 2 9.4V14.6C2 16.8402 2 17.9603 2.43597 18.816C2.81947 19.5686 3.43139 20.1805 4.18404 20.564C5.03968 21 6.15979 21 8.4 21H9" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiFolderGitDuoStroke icon from the duo-stroke style in files-&-folders category.
 */
export default {
  name: 'PiFolderGitDuoStroke',
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
      default: 'folder-git icon'
    }
  }
}
</script>
