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
 * Piheadphonessolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piheadphonessolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "headphones icon",
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
      d="M4.36154 11.7167C4.0492 11.8062 3.75979 11.937 3.49754 12.1012C3.71189 7.59094 7.43655 4 11.9999 4C16.5633 4 20.288 7.59099 20.5023 12.1013C20.24 11.937 19.9506 11.8063 19.6382 11.7167C17.8449 11.2025 15.9742 12.2394 15.4599 14.0328L14.4112 17.6902C13.8969 19.4836 14.9339 21.3543 16.7272 21.8685C18.5206 22.3828 20.3913 21.3458 20.9055 19.5525L21.9475 15.9186C22.3137 14.849 22.512 13.7027 22.512 12.5121C22.512 6.70644 17.8056 2 11.9999 2C6.19423 2 1.48779 6.70644 1.48779 12.5121C1.48779 13.7025 1.68604 14.8486 2.05208 15.9179L3.09424 19.5524C3.60848 21.3458 5.47916 22.3827 7.27252 21.8685C9.06589 21.3542 10.1028 19.4836 9.58858 17.6902L8.53983 14.0327C8.02559 12.2394 6.15491 11.2024 4.36154 11.7167Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Piheadphonessolid;
