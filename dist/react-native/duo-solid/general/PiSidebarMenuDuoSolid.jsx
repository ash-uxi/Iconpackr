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
 * Pisidebarmenuduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisidebarmenuduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "sidebar menu icon",
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
      d="M9 3.011C9.577 3 10.236 3 11 3h2c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C21 6.8 21 8.2 21 11v2c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C17.2 21 15.8 21 13 21h-2c-.764 0-1.423 0-2-.011"
      opacity={0.28}
    />{" "}
    <path
      fill={color || "#000"}
      fillRule="evenodd"
      d="M9.7 2.297a1 1 0 0 1 .3.714v17.978a1 1 0 0 1-1.02 1c-1.534-.03-2.7-.132-3.704-.643a6 6 0 0 1-2.622-2.622c-.356-.7-.51-1.463-.583-2.359C2 15.491 2 14.407 2 13.044v-2.088c0-1.363 0-2.447.071-3.322.074-.895.227-1.659.583-2.358a6 6 0 0 1 2.622-2.622c1.004-.512 2.17-.614 3.705-.643a1 1 0 0 1 .72.286M6 7a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2zm0 4a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z"
      clipRule="evenodd"
    />
  </Svg>
);

export default Pisidebarmenuduosolid;
