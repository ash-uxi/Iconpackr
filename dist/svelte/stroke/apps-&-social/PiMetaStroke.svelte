<script>
  /**
   * PiMetaStroke icon from the stroke style in apps-&-social category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'meta icon';
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  class={className}
  fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: {color || 'currentColor'}"
  role="img"
  aria-label={ariaLabel}
  {...$$restProps}
>
  <path d="M12 10.1061C13.8317 7.21854 15.1115 5.77686 16.8208 5.77686C22.3718 5.77686 23.4752 18.2231 18.8952 18.2231C15.9235 18.2231 13.1149 12.4055 12 10.1061ZM12 10.1061C10.1683 7.21854 8.88845 5.77686 7.17917 5.77686C1.62816 5.77686 0.524796 18.2231 5.10481 18.2231C8.07071 18.2231 10.8957 12.4091 12 10.1061Z" stroke="currentColor" stroke-width="2" fill="none"/>
</svg>
