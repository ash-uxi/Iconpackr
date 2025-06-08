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
 * Pisidebarrightopenduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisidebarrightopenduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "sidebar right open icon",
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
      d="M13.3 2.298a1 1 0 0 0-.3.714V20.99a1 1 0 0 0 1.02 1c1.534-.03 2.7-.132 3.704-.643a6 6 0 0 0 2.622-2.622c.356-.7.51-1.463.583-2.359.071-.874.071-1.958.071-3.322v-2.087c0-1.363 0-2.447-.071-3.322-.074-.895-.227-1.659-.583-2.358a6 6 0 0 0-2.622-2.622c-1.004-.512-2.17-.614-3.705-.643a1 1 0 0 0-.72.286"
    />{" "}
    <path
      d="M14 20.989C13.423 21 12.764 21 12 21h-2c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 17.2 2 15.8 2 13v-2c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 3.545C5.8 3 7.2 3 10 3h2c.764 0 1.423 0 2 .011"
      opacity={0.28}
    />{" "}
    <path
      fill={color || "#000"}
      d="M8.912 8.191a1 1 0 1 1 1.176 1.618A14.3 14.3 0 0 0 7.696 12c.707.815 1.51 1.55 2.392 2.191a1 1 0 0 1-1.176 1.618A16.3 16.3 0 0 1 5.8 12.85c-.4-.497-.4-1.203 0-1.7A16.3 16.3 0 0 1 8.912 8.19"
    />
  </Svg>
);

export default Pisidebarrightopenduosolid;
