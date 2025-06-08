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
 * Pisteeringwheelduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisteeringwheelduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "steering wheel icon",
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
      d="M13.1 12a1.1 1.1 0 0 0-2.2 0v.01a1.1 1.1 0 1 0 2.2 0z"
      fill="none"
    />
    <path
      fillRule="evenodd"
      d="M19.85 9.805A17 17 0 0 0 12 7.9c-2.83 0-5.5.688-7.851 1.905a8.2 8.2 0 0 0-.222 3.32q.283-.024.573-.025a6.4 6.4 0 0 1 6.374 6.973 8.2 8.2 0 0 0 2.25 0 6.4 6.4 0 0 1 6.948-6.948 8.2 8.2 0 0 0-.221-3.32M12 15.29a8.62 8.62 0 0 0-5.479-4.15A14.9 14.9 0 0 1 12 10.1c1.935 0 3.783.369 5.478 1.039A8.62 8.62 0 0 0 12 15.289"
      clipRule="evenodd"
      fill="none"
    />
    <path
      d="M21.15 12a9.15 9.15 0 1 0-18.3 0 9.15 9.15 0 0 0 18.3 0"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pisteeringwheelduostroke;
