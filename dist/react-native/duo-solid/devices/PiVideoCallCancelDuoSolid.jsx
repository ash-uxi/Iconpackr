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
 * Pivideocallcancelduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pivideocallcancelduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "video call cancel icon",
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
      fill={color || "#000"}
      fillRule="evenodd"
      d="M13 4a5 5 0 0 1 4.704 3.302l.366-.307C20.022 5.355 23 6.743 23 9.292v5.416c0 2.55-2.978 3.937-4.93 2.297l-.366-.307A5 5 0 0 1 13 20H6a5 5 0 0 1-5-5V9a5 5 0 0 1 5-5zm5.001 9.915V10.08a1 1 0 0 1 .356-.714l1-.84A1 1 0 0 1 21 9.292v5.416a1 1 0 0 1-1.643.766l-1-.84a1 1 0 0 1-.356-.72"
      clipRule="evenodd"
      opacity={0.28}
    />{" "}
    <path d="M7 14.5 9.5 12m0 0L12 9.5M9.5 12 7 9.5M9.5 12l2.5 2.5" />
  </Svg>
);

export default Pivideocallcancelduosolid;
