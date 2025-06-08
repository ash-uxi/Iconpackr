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
 * Piufoduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piufoduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ufo icon",
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
      d="M16.5609 7.43945C19.7904 8.10265 22 9.44818 22 11.0001C22 13.2093 17.5228 15.0001 12 15.0001C6.47715 15.0001 2 13.2093 2 11.0001C2 9.44818 4.20962 8.10265 7.43913 7.43945"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M4 17L3 19M12 18V21M20 17L21 19M12 4C15.3489 4 17.2746 7.53239 16.9638 10.5391C15.5011 10.8323 13.8065 11 12 11C10.1935 11 8.49887 10.8323 7.03622 10.5391C6.72543 7.53239 8.6511 4 12 4Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piufoduostroke;
