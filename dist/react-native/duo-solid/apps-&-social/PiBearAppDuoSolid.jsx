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
 * Pibearappduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibearappduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "bear app icon",
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
    <path d="M5.505 9.039C6.34 7.181 6.661 7 7.793 5.437c0-1.291-.062-2.13.567-2.379.747-.294 2.242.59 2.605 1.178 2.22-.18 3.834-.16 4.87.861 1.518 1.495 3.489 2.492 4.576 2.673.748.125 1.39-.249 1.088 1.631-.153.952-.997 2.294-2.673 2.923-1.269.476-4.677-.06-4.1 2.31" />{" "}
    <path
      fill={color || "#000"}
      d="M8.158 2.072c.385-.109.77-.077 1.071-.016.36.072.715.21 1.027.367.315.158.617.351.876.556q.128.103.257.225c.927-.064 1.804-.085 2.59.021.95.13 1.84.452 2.558 1.16l.263.249a11 11 0 0 0 1.974 1.42c.766.43 1.417.666 1.802.73l.17.017c.06.003.138.006.267.015.173.013.57.045.924.303.408.296.567.732.617 1.126.035.28.024.599-.017.951l-.05.364c-.199 1.23-1.17 2.745-2.944 3.55l-.366.15c-.458.171-1.046.236-1.5.286-.514.056-.968.102-1.364.195-.412.098-.572.209-.62.264a.1.1 0 0 0-.026.055.8.8 0 0 0 .03.338l.149.562a11.6 11.6 0 0 0 1.248 2.889c.268.45.53.84.816 1.287.278.434.56.899.817 1.425A1.002 1.002 0 0 1 17.83 22H2.425a1 1 0 0 1-.993-1.114c.738-6.411 1.976-9.614 3.162-12.256l.312-.67c.642-1.308 1.065-1.74 1.888-2.853-.003-.487-.005-.996.06-1.405.085-.548.34-1.259 1.14-1.574z"
      opacity={0.28}
    />
  </Svg>
);

export default Pibearappduosolid;
