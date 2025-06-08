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
 * Pimusicquavernotestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimusicquavernotestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "music quaver note icon",
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
      d="M12 18.9983V3.64314C12 2.42323 13.2831 1.62981 14.3735 2.17536C16.5961 3.28727 18 5.56017 18 8.04647C18 9.46441 17.5985 10.8414 16.8189 12M12 18.9983C12 20.6561 10.6569 22 9 22C7.34315 22 6 20.6561 6 18.9983C6 17.3405 7.34315 15.9965 9 15.9965C10.6569 15.9965 12 17.3405 12 18.9983Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pimusicquavernotestroke;
