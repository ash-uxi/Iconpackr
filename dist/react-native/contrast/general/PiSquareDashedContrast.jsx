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
 * Pisquaredashedcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisquaredashedcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "square dashed icon",
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
    <path d="M20.256 17.895A6 6 0 0 1 18 20.196m2.989-10.301C21 10.497 21 11.19 21 12c0 .717 0 1.343-.008 1.895M6 20.196a6 6 0 0 1-2.256-2.302m-.733-8C3 10.498 3 11.19 3 12c0 .717 0 1.343.008 1.895M10 20.99c.577.009 1.237.009 2 .009s1.423 0 2-.01m6.134-15.095A6 6 0 0 0 18 3.804m-8-.795C10.577 3 11.237 3 12 3s1.423 0 2 .01m-8 .794a6 6 0 0 0-2.134 2.09" />
    <path
      fill={color}
      d="M3 12c0-2.796 0-4.193.457-5.296a6 6 0 0 1 3.247-3.247C7.807 3 9.204 3 12 3s4.194 0 5.296.457a6 6 0 0 1 3.247 3.247C21 7.807 21 9.204 21 12s0 4.194-.457 5.296a6 6 0 0 1-3.247 3.247C16.194 21 14.796 21 12 21s-4.193 0-5.296-.457a6 6 0 0 1-3.247-3.247C3 16.194 3 14.796 3 12"
      opacity={0.28}
    />
  </Svg>
);

export default Pisquaredashedcontrast;
