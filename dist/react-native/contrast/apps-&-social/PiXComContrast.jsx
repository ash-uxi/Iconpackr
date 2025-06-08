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
 * Pixcomcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pixcomcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "x com icon",
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
    <path d="m18.667 4-5.527 6.316M4.667 20l5.895-6.737m2.578-2.947L9.304 4.9c-.233-.33-.35-.494-.5-.613a1.3 1.3 0 0 0-.45-.233C8.169 4 7.967 4 7.564 4H6.063c-.667 0-1 0-1.18.138a.67.67 0 0 0-.26.502c-.009.227.184.499.57 1.043l5.369 7.58m2.578-2.947 5.668 8c.385.545.578.817.569 1.044a.67.67 0 0 1-.26.502c-.18.138-.513.138-1.18.138h-1.5c-.404 0-.606 0-.79-.054a1.3 1.3 0 0 1-.45-.233c-.151-.119-.268-.284-.501-.613l-4.134-5.837" />
    <path
      fill={color}
      d="M7.564 4H6.063c-.667 0-1 0-1.18.138a.67.67 0 0 0-.26.502c-.009.227.184.499.57 1.043L14.695 19.1c.233.33.35.494.5.613.134.106.287.185.45.233.185.054.387.054.79.054h1.501c.667 0 1 0 1.18-.138a.67.67 0 0 0 .26-.502c.009-.227-.184-.499-.57-1.043L9.305 4.9c-.233-.33-.35-.494-.5-.613a1.3 1.3 0 0 0-.45-.233C8.169 4 7.967 4 7.564 4"
      opacity={0.28}
    />
  </Svg>
);

export default Pixcomcontrast;
