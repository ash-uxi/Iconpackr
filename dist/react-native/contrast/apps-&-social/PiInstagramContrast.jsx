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
 * Piinstagramcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piinstagramcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "instagram icon",
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
    <path d="M17.046 7h.01m-14.01 5c0-2.514 0-3.77.354-4.78a6.3 6.3 0 0 1 3.866-3.866C8.276 3 9.533 3 12.046 3s3.77 0 4.781.354a6.3 6.3 0 0 1 3.866 3.865c.353 1.01.353 2.267.353 4.781s0 3.77-.353 4.78a6.3 6.3 0 0 1-3.866 3.866c-1.01.354-2.267.354-4.78.354s-3.771 0-4.781-.354A6.3 6.3 0 0 1 3.4 16.782c-.354-1.01-.354-2.267-.354-4.781m12.778-.56a3.819 3.819 0 1 1-7.555 1.12 3.819 3.819 0 0 1 7.555-1.12" />
    <path
      fill={color}
      d="M3.4 7.22c-.354 1.01-.354 2.266-.354 4.78s0 3.77.354 4.78a6.3 6.3 0 0 0 3.866 3.866c1.01.354 2.267.354 4.78.354s3.77 0 4.781-.354a6.3 6.3 0 0 0 3.866-3.865c.353-1.01.353-2.267.353-4.781s0-3.77-.353-4.78a6.3 6.3 0 0 0-3.866-3.866C15.817 3 14.56 3 12.047 3s-3.771 0-4.781.354A6.3 6.3 0 0 0 3.4 7.219"
      opacity={0.28}
    />
  </Svg>
);

export default Piinstagramcontrast;
