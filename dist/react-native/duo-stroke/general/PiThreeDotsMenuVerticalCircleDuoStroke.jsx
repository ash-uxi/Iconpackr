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
 * Pithreedotsmenuverticalcircleduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pithreedotsmenuverticalcircleduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "three dots menu vertical circle icon",
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
      d="M12.0006 21.1496C17.054 21.1496 21.1506 17.053 21.1506 11.9996C21.1506 6.9462 17.054 2.84961 12.0006 2.84961C6.94718 2.84961 2.85059 6.9462 2.85059 11.9996C2.85059 17.053 6.94718 21.1496 12.0006 21.1496Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M12.0049 7.99414V8.00414M12.0049 11.9941V12.0041M12.0049 15.9941V16.0041"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pithreedotsmenuverticalcircleduostroke;
