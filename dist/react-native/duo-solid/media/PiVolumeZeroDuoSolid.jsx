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
 * Pivolumezeroduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pivolumezeroduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "volume zero icon",
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
    <path d="M13.674 20.644c1.392.994 3.326 0 3.326-1.712V5.107c0-1.71-1.934-2.706-3.326-1.711" />{" "}
    <path
      fill={color || "#000"}
      d="M18 5.107c0-2.524-2.853-3.993-4.907-2.525L10.28 4.59a3.9 3.9 0 0 1-1.514.655A5.93 5.93 0 0 0 4 11.061v1.918a5.93 5.93 0 0 0 4.766 5.814 3.9 3.9 0 0 1 1.514.655l2.813 2.01C15.147 22.924 18 21.455 18 18.931z"
      opacity={0.28}
    />
  </Svg>
);

export default Pivolumezeroduosolid;
