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
 * Pilistdescendingduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilistdescendingduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "list descending icon",
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
      d="M12 12H21M12 18H21M12 6L21 6"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M3 20.4995V17.8032C3 16.4119 3.84709 15.1607 5.13894 14.6439C5.37072 14.5512 5.62928 14.5512 5.86106 14.6439C7.15291 15.1607 8 16.4119 8 17.8032V20.4995M3 18.4995H8M3 4.49951L3.10648 4.47822C4.68652 4.16221 6.31348 4.16221 7.89352 4.47822C7.93903 4.48732 7.95604 4.54348 7.92321 4.5763L3.13143 9.36808C3.09206 9.40745 3.12766 9.47398 3.18226 9.46306C4.71227 9.15706 6.28773 9.15706 7.81774 9.46306L8 9.49951"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pilistdescendingduostroke;
