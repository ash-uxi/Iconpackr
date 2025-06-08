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
 * Pifigmasolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifigmasolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "figma icon",
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
      d="M12.0002 12.5C12.0002 14.6171 13.7164 16.3333 15.8335 16.3333C17.9506 16.3333 19.6668 14.6171 19.6668 12.5C19.6668 10.3829 17.9506 8.66667 15.8335 8.66667C13.7164 8.66667 12.0002 10.3829 12.0002 12.5Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M4.3335 4.83333C4.3335 2.71624 6.04974 1 8.16683 1H15.8335C17.9506 1 19.6668 2.71624 19.6668 4.83333C19.6668 6.95042 17.9506 8.66667 15.8335 8.66667H12.0002V12.5V20.1667C12.0002 22.2838 10.2839 24 8.16683 24C6.04974 24 4.3335 22.2838 4.3335 20.1667C4.3335 18.0496 6.04974 16.3333 8.16683 16.3333C6.04974 16.3333 4.3335 14.6171 4.3335 12.5C4.3335 10.3829 6.04974 8.66667 8.16683 8.66667C6.04974 8.66667 4.3335 6.95042 4.3335 4.83333Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pifigmasolid;
