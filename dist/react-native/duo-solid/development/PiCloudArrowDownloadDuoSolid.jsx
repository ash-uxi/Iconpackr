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
 * Picloudarrowdownloadduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picloudarrowdownloadduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "cloud arrow download icon",
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
      d="M12.5 2a7.5 7.5 0 0 1 6.627 3.986 44 44 0 0 0 .347.64l-.003-.005.007.01a.4.4 0 0 0 .067.068q.04.03.125.09c.116.082.278.193.506.35A6.5 6.5 0 0 1 16.5 19h-10A5.5 5.5 0 0 1 3.609 8.82c.475-.294.824-.51 1.068-.664a11 11 0 0 0 .325-.215.3.3 0 0 0 .046-.055l.004-.005.02-.041c.023-.051.055-.124.099-.228.082-.198.193-.473.344-.848A7.5 7.5 0 0 1 12.5 2"
      opacity={0.28}
    />{" "}
    <path d="M16 17.596a19 19 0 0 1-3.445 3.232.94.94 0 0 1-1.11 0A19 19 0 0 1 8 17.596m4-5.37V21" />
  </Svg>
);

export default Picloudarrowdownloadduosolid;
