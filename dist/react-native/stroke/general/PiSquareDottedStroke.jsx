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
 * Pisquaredottedstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisquaredottedstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "square dotted icon",
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
      d="M12 3V3.01016M12 20.9898V21M21 11.9949V12.0051M3 11.9949V12.0051M3.45703 6.69713V6.70729M20.5439 6.69713V6.70729M3.45703 17.2771V17.2873M20.5439 17.2771V17.2873M17.3003 3.45092V3.46107M6.71289 3.45092V3.46107M17.3003 20.5311V20.5413M6.71289 20.5311V20.5413"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pisquaredottedstroke;
