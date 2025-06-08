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
 * Pimaximizetwoarrowstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimaximizetwoarrowstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "maximize two arrow icon",
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
      d="M12 6.28858C13.7786 5.99076 15.5759 5.92321 17.3472 6.08707C17.4991 6.10113 17.6335 6.16659 17.7335 6.26652C17.8334 6.36646 17.8989 6.50086 17.9129 6.65281C18.0768 8.42407 18.0092 10.2214 17.7114 12M12 17.7114C10.2214 18.0092 8.42407 18.0768 6.65281 17.9129C6.50086 17.8989 6.36646 17.8334 6.26652 17.7335C6.16659 17.6335 6.10113 17.4991 6.08707 17.3472C5.92321 15.5759 5.99076 13.7786 6.28858 12"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pimaximizetwoarrowstroke;
