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
 * Pipaperbagduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipaperbagduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "paper bag icon",
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
    <path d="M15 8a3 3 0 1 1-6 0" />{" "}
    <path
      fill={color || "#000"}
      d="M9.66 3c-.803 0-1.46 0-2 .04-.562.043-1.068.133-1.554.349a4.5 4.5 0 0 0-1.9 1.594c-.297.441-.474.923-.613 1.469-.134.525-.248 1.173-.388 1.964l-.872 4.944c-.221 1.252-.398 2.256-.47 3.07-.074.834-.05 1.577.206 2.28a5 5 0 0 0 2.199 2.62c.647.374 1.375.527 2.208.6.815.07 1.834.07 3.106.07h4.837c1.27 0 2.29 0 3.105-.07.834-.073 1.561-.226 2.209-.6a5 5 0 0 0 2.198-2.62c.256-.703.28-1.446.206-2.28-.072-.814-.249-1.818-.47-3.07l-.872-4.944c-.14-.791-.254-1.44-.388-1.964-.14-.546-.315-1.028-.613-1.469a4.5 4.5 0 0 0-1.9-1.594c-.486-.216-.992-.306-1.553-.348C15.801 3 15.143 3 14.34 3z"
      opacity={0.28}
    />
  </Svg>
);

export default Pipaperbagduosolid;
