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
 * Pinoteoutlineduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinoteoutlineduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "note outline icon",
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
      d="M20.998 8q.002.366.002.8v6.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 20 17.88 20 16.2 20H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 17.72 3 16.88 3 15.2V8.8q0-.434.002-.8"
      opacity={0.28}
    />{" "}
    <path
      fill={color || "#000"}
      fillRule="evenodd"
      d="M7.8 3h-.041c-.805 0-1.47 0-2.01.044-.563.046-1.08.145-1.565.392a4 4 0 0 0-1.748 1.748c-.396.776-.426 1.688-.434 2.809a1 1 0 0 0 1 1.007h17.996a1 1 0 0 0 1-1.007c-.008-1.121-.038-2.033-.434-2.809a4 4 0 0 0-1.748-1.748c-.485-.247-1.002-.346-1.564-.392C17.71 3 17.046 3 16.242 3z"
      clipRule="evenodd"
    />
  </Svg>
);

export default Pinoteoutlineduosolid;
