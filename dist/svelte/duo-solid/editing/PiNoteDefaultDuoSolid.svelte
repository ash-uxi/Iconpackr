<script>
  /**
   * PiNoteDefaultDuoSolid icon from the duo-solid style in editing category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'note-default icon';
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  class={className}
  
   style="color: {color || 'currentColor'}"
  role="img"
  aria-label={ariaLabel}
  {...$$restProps}
>
  <path d="M21 7.8v7.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.31C18.72 20 17.88 20 16.2 20H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 17.72 3 16.88 3 15.2V7.8" opacity=".28" /> <path fill={color || "currentColor"} fill-rule="evenodd" d="M7.8 3h-.041c-.805 0-1.47 0-2.01.044-.563.046-1.08.145-1.565.392a4 4 0 0 0-1.748 1.748c-.396.776-.426 1.688-.434 2.809a1 1 0 0 0 1 1.007h17.996a1 1 0 0 0 1-1.007c-.008-1.121-.038-2.033-.434-2.809a4 4 0 0 0-1.748-1.748c-.485-.247-1.002-.346-1.564-.392C17.71 3 17.046 3 16.242 3zM6 12a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1m1 3a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2z" clip-rule="evenodd" />
</svg>
