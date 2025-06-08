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
 * Picryptoverificationduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picryptoverificationduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "crypto verification icon",
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
      d="M13.007 1.678a5 5 0 0 0-2.014 0c-.754.155-1.448.541-2.453 1.1L5.664 4.376c-1.06.589-1.794.995-2.34 1.59a5 5 0 0 0-1.071 1.819C1.999 8.55 2 9.39 2 10.603v2.794c0 1.213 0 2.051.253 2.818a5 5 0 0 0 1.07 1.82c.547.593 1.28 1 2.341 1.589l2.876 1.598c1.005.558 1.7.945 2.453 1.1a5 5 0 0 0 2.014 0c.754-.155 1.448-.542 2.453-1.1l2.876-1.598c1.06-.589 1.794-.996 2.34-1.59a5 5 0 0 0 1.072-1.82C22 15.449 22 14.61 22 13.398v-2.794c0-1.213 0-2.052-.252-2.818a5 5 0 0 0-1.071-1.82c-.547-.594-1.28-1-2.341-1.59L15.46 2.779c-1.005-.559-1.7-.945-2.453-1.1"
      opacity={0.28}
    />{" "}
    <path d="m8.5 12.666 2.341 2.339C11.99 12.997 13.593 11.302 15.5 10" />
  </Svg>
);

export default Picryptoverificationduosolid;
