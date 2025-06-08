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
 * Picryptocurrencyusdtdiamondduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picryptocurrencyusdtdiamondduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "crypto currency usdt diamond icon",
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
      d="M7.408 3A3.55 3.55 0 0 0 4.45 4.582L1.597 8.864a3.554 3.554 0 0 0 .43 4.47l7.446 7.529a3.554 3.554 0 0 0 5.054 0l7.446-7.53a3.554 3.554 0 0 0 .43-4.47l-2.854-4.28A3.55 3.55 0 0 0 16.592 3z"
      opacity={0.28}
    />{" "}
    <path d="M8.425 8H12m0 0h3.575M12 8v3m0 3c2.761 0 5-.672 5-1.5S14.761 11 12 11m0 3c-2.761 0-5-.672-5-1.5S9.239 11 12 11m0 3v3m0-6v.5" />
  </Svg>
);

export default Picryptocurrencyusdtdiamondduosolid;
