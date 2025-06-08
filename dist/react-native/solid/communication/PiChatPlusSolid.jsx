import React from "react";
import Svg, {
  Path,
  Rect,
  Circle,
  Ellipse,
  Line,
  Polygon,
  Polyline,
} from "react-native-svg";

/**
 * Pichatplussolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pichatplussolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "chat plus icon",
  style,
  ...props
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    accessibilityRole="image"
    accessibilityLabel={accessibilityLabel}
    style={style}
    {...props}
  >
    <path
      d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C11.5213 22 11.05 21.9663 10.5882 21.901L10.5866 21.9008C9.98465 21.8156 9.53616 21.7522 9.21813 21.7085C9.05889 21.6866 8.93528 21.67 8.843 21.6584C8.7969 21.6525 8.76059 21.6481 8.73278 21.645L8.70005 21.6415L8.69071 21.6406L8.68748 21.6403L8.54819 21.6293C8.51913 21.627 8.51635 21.6271 8.51836 21.6271C8.52038 21.6272 8.5176 21.627 8.48845 21.6272L8.34881 21.6286C8.22957 21.6295 8.08696 21.6392 7.71053 21.6661L5.51918 21.8226C5.12316 21.8509 4.76476 21.8765 4.46679 21.8722C4.14953 21.8676 3.7976 21.8303 3.45082 21.6659C2.96091 21.4336 2.56638 21.0391 2.33411 20.5492C2.1697 20.2024 2.13237 19.8505 2.12777 19.5332C2.12345 19.2353 2.14908 18.8769 2.17739 18.4809L2.33392 16.2895C2.36081 15.9129 2.37049 15.7705 2.37142 15.6512L2.37277 15.5115C2.37295 15.4909 2.37285 15.4816 2.37285 15.4816C2.37285 15.4816 2.3723 15.4723 2.3707 15.4518L2.3597 15.3126L2.35958 15.3112L2.35941 15.3093L2.35852 15.2999L2.35501 15.2672C2.35187 15.2394 2.34749 15.2031 2.34165 15.157C2.32996 15.0647 2.31341 14.9411 2.29152 14.7819C2.24776 14.4636 2.18426 14.0145 2.09901 13.4118C2.0337 12.95 2 12.4787 2 12ZM13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9V11H9C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13H11V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H13V9Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Pichatplussolid;
