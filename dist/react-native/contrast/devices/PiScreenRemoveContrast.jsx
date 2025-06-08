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
 * Piscreenremovecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piscreenremovecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "screen remove icon",
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
    <path d="M13.04 2H4.4c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656C2 3.139 2 3.559 2 4.4v10.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.656c.32.163.74.163 1.581.163H12m10-6.234V14.6c0 .84 0 1.26-.163 1.581a1.5 1.5 0 0 1-.656.656c-.32.163-.74.163-1.581.163H12m0 3.875V17m0 3.875c-1.75 0-3.5.375-5 1.125m5-1.125c1.75 0 3.5.375 5 1.125" />
    <path
      fill={color}
      fillRule="evenodd"
      d="M14.073 2H4.4c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656C2 3.139 2 3.559 2 4.4v10.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.655c.32.164.74.164 1.581.164h15.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .655-.656c.164-.32.164-.74.164-1.581V9.762a3 3 0 0 1-2.104-.879l-.354-.353-.353.353a3 3 0 1 1-4.243-4.243l.354-.353-.354-.354A3 3 0 0 1 14.073 2"
      clipRule="evenodd"
      opacity={0.28}
    />
    <path d="m17.034 6.762 2.475-2.475m0 0 2.474-2.474M19.51 4.287l-2.475-2.474m2.475 2.474 2.474 2.475" />
  </Svg>
);

export default Piscreenremovecontrast;
