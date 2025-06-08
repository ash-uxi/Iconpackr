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
 * Pihomeaiduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pihomeaiduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "home ai icon",
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
      d="M13.49 2.23a5 5 0 0 0-2.98 0c-.61.19-1.136.525-1.68.963-.529.425-1.133.996-1.88 1.702L4.232 7.46c-.657.62-1.111 1.049-1.443 1.567a5 5 0 0 0-.642 1.488C2 11.113 2 11.737 2 12.64v2.003c0 1.084 0 1.958.058 2.666.06.729.185 1.369.487 1.96a5 5 0 0 0 2.185 2.186c.592.302 1.233.428 1.961.487C7.4 22 8.273 22 9.357 22h5.286c1.084 0 1.958 0 2.666-.058.729-.06 1.369-.185 1.961-.487a5 5 0 0 0 2.185-2.185c.302-.592.428-1.232.487-1.961C22 16.6 22 15.727 22 14.643V12.64c0-.903 0-1.527-.148-2.125a5 5 0 0 0-.642-1.488c-.332-.518-.786-.947-1.443-1.567l-2.716-2.565c-.748-.706-1.352-1.277-1.88-1.702-.545-.438-1.071-.773-1.68-.964"
      opacity={0.28}
    />{" "}
    <path d="M8 17zM12 10c-.637 1.617-1.34 2.345-3 3 1.66.655 2.363 1.383 3 3 .637-1.617 1.34-2.345 3-3-1.66-.655-2.363-1.383-3-3" />
  </Svg>
);

export default Pihomeaiduosolid;
