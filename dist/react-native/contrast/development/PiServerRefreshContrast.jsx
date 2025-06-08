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
 * Piserverrefreshcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piserverrefreshcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "server refresh icon",
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
      fill={color}
      d="M7 12c-.464 0-.697 0-.892.022a3.5 3.5 0 0 0-3.086 3.086C3 15.303 3 15.536 3 16s0 .697.022.892a3.5 3.5 0 0 0 3.086 3.086C6.303 20 6.536 20 7 20h2.377q.214-.931.564-1.82a3.47 3.47 0 0 1 1.805-1.897 3 3 0 0 1 .992-3.094 7 7 0 0 1 2.342-1.269 6.97 6.97 0 0 1 3.665-.149 3.5 3.5 0 0 0 2.233-2.879C21 8.697 21 8.464 21 8s0-.697-.022-.892a3.5 3.5 0 0 0-3.086-3.086C17.697 4 17.464 4 17 4H7c-.464 0-.697 0-.892.022a3.5 3.5 0 0 0-3.086 3.086C3 7.303 3 7.536 3 8s0 .697.022.892a3.5 3.5 0 0 0 3.086 3.086C6.303 12 6.536 12 7 12"
      opacity={0.28}
    />
    <path d="M7 12h5.655M7 12c-.464 0-.697 0-.892.022a3.5 3.5 0 0 0-3.086 3.086C3 15.303 3 15.536 3 16s0 .697.022.892a3.5 3.5 0 0 0 3.086 3.086C6.303 20 6.536 20 7 20h1.379M7 12c-.464 0-.697 0-.892-.022a3.5 3.5 0 0 1-3.086-3.086C3 8.697 3 8.464 3 8s0-.697.022-.892a3.5 3.5 0 0 1 3.086-3.086C6.303 4 6.536 4 7 4h10c.464 0 .697 0 .892.022a3.5 3.5 0 0 1 3.086 3.086C21 7.303 21 7.536 21 8s0 .697-.022.892a3.5 3.5 0 0 1-1.354 2.39m2.67 4.288a10 10 0 0 1-.671 2.363.47.47 0 0 1-.455.287m-2.403-.768c.745.348 1.53.603 2.336.76a1 1 0 0 0 .067.008m-5.565 1.462a10 10 0 0 0-2.4-.703m-1.079 2.677c.105-.816.31-1.615.61-2.38a.47.47 0 0 1 .469-.297m7.965-.76a4 4 0 0 0-6.524-2.714m-1.441 3.474q.04.41.167.82a4 4 0 0 0 6.366 1.88M13 8h.01M17 8h.01" />
  </Svg>
);

export default Piserverrefreshcontrast;
