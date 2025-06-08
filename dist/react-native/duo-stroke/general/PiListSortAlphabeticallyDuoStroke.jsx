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
 * Pilistsortalphabeticallyduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilistsortalphabeticallyduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "list sort alphabetically icon",
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
      d="M3 10.0003V7.30401C3 5.91265 3.84709 4.66147 5.13894 4.14473C5.37072 4.05202 5.62928 4.05202 5.86106 4.14473C7.15291 4.66147 8 5.91265 8 7.30401V10.0003M3 8.0003H8M3 15.0003L3.10648 14.979C4.68652 14.663 6.31348 14.663 7.89352 14.979C7.93903 14.9881 7.95604 15.0443 7.92321 15.0771L3.13143 19.8689C3.09206 19.9082 3.12766 19.9748 3.18226 19.9639C4.71227 19.6579 6.28773 19.6579 7.81774 19.9639L8 20.0003"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pilistsortalphabeticallyduostroke;
