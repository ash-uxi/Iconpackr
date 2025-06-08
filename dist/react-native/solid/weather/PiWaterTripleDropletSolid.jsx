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
 * Piwatertripledropletsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piwatertripledropletsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "water triple droplet icon",
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
      d="M12.6727 1.31602C12.4886 1.1485 12.2486 1.05566 11.9997 1.05566C11.7508 1.05566 11.5108 1.1485 11.3267 1.31602C8.08972 4.26302 7.06872 6.96002 7.65472 9.12302C8.23072 11.251 10.2517 12.389 11.9997 12.389C13.7477 12.389 15.7687 11.251 16.3447 9.12302C16.9307 6.96002 15.9087 4.26302 12.6727 1.31602ZM6.67272 11.526C6.48861 11.3585 6.24864 11.2657 5.99972 11.2657C5.7508 11.2657 5.51083 11.3585 5.32672 11.526C2.09072 14.473 1.06872 17.17 1.65472 19.333C2.22972 21.46 4.25172 22.599 5.99972 22.599C7.74772 22.599 9.76872 21.461 10.3447 19.333C10.9307 17.17 9.90872 14.473 6.67272 11.526ZM17.3267 11.526C17.5108 11.3585 17.7508 11.2657 17.9997 11.2657C18.2486 11.2657 18.4886 11.3585 18.6727 11.526C21.9087 14.473 22.9307 17.17 22.3447 19.333C21.7687 21.461 19.7477 22.599 17.9997 22.599C16.2517 22.599 14.2307 21.461 13.6547 19.333C13.0687 17.17 14.0907 14.473 17.3267 11.526Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Piwatertripledropletsolid;
