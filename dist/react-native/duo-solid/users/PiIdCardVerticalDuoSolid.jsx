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
 * Piidcardverticalduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piidcardverticalduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "id card vertical icon",
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
      d="M7 2.5h10a3.5 3.5 0 0 1 2.349.905l.126.12A3.5 3.5 0 0 1 20.5 6v12a3.5 3.5 0 0 1-3.5 3.5H7a3.5 3.5 0 0 1-2.349-.905l-.126-.12A3.5 3.5 0 0 1 3.5 18V6l.004-.174a3.5 3.5 0 0 1 .901-2.175l.12-.126A3.5 3.5 0 0 1 7 2.5"
      opacity={0.28}
    />{" "}
    <path d="M7 6h6m-6 4h3m5.667 6h-3.334c-.736 0-1.333.597-1.333 1.333 0 .369.299.667.667.667h4.666a.667.667 0 0 0 .667-.667c0-.736-.597-1.333-1.333-1.333M15 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
  </Svg>
);

export default Piidcardverticalduosolid;
