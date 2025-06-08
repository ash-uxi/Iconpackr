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
 * Pipencilerasereditlineduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipencilerasereditlineduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "pencil eraser edit line icon",
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
    <path d="M13 21h8" opacity={0.28} />{" "}
    <path
      fill={color || "#000"}
      d="M13.717 5.631a.3.3 0 0 0-.425 0L3.052 15.918c-.216.217-.428.428-.586.684a2.6 2.6 0 0 0-.309.722c-.075.291-.082.59-.089.898L2 20.97a1 1 0 0 0 .998 1.024l2.8.005c.316.001.627.002.93-.07.265-.064.518-.17.75-.312.265-.163.484-.384.707-.609l10.221-10.265a.3.3 0 0 0 0-.424zM16.154 2.757a2.57 2.57 0 0 1 3.215-.346 7.3 7.3 0 0 1 2.24 2.277c.669 1.078.43 2.407-.399 3.24l-.97.973a.3.3 0 0 1-.424 0l-4.689-4.688a.3.3 0 0 1 0-.424z"
    />
  </Svg>
);

export default Pipencilerasereditlineduosolid;
