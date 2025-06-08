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
 * Pinoteaddduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinoteaddduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "note add icon",
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
      d="M21 12.125V8.8q0-.434-.002-.8m-7.873 12H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 17.72 3 16.88 3 15.2V8.8q0-.434.002-.8"
      opacity={0.28}
    />{" "}
    <path
      fill={color || "#000"}
      fillRule="evenodd"
      d="M7.757 2h8.481c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 0 1 1.748 1.748c.396.776.427 1.688.434 2.809a1 1 0 0 1-1 1.007H3a1 1 0 0 1-1-1.007c.008-1.121.038-2.033.434-2.809a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.392C6.288 2 6.953 2 7.757 2m-1.759 9a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2h-10a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h7a1 1 0 0 1 0 2h-7a1 1 0 0 1-1-1m15 0a1 1 0 1 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2z"
      clipRule="evenodd"
    />
  </Svg>
);

export default Pinoteaddduosolid;
