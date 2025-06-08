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
 * Pimagneticcompasssolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimagneticcompasssolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "magnetic compass icon",
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
      d="M1.84961 12C1.84961 6.39429 6.39392 1.84998 11.9996 1.84998C17.6053 1.84998 22.1496 6.39429 22.1496 12C22.1496 17.6057 17.6053 22.15 11.9996 22.15C6.39392 22.15 1.84961 17.6057 1.84961 12ZM14.3802 8.0032C15.2962 7.94405 16.0555 8.70339 15.9963 9.61934C15.7751 13.0457 13.0452 15.7755 9.61892 15.9968C8.70296 16.0559 7.94363 15.2966 8.00277 14.3806C8.22403 10.9543 10.9539 8.22446 14.3802 8.0032Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Pimagneticcompasssolid;
