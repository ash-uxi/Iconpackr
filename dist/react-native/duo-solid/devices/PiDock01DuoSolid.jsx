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
 * Pidock01duosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidock01duosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "dock01 icon",
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
    <path d="M11 11.8c0-.28 0-.42.055-.527a.5.5 0 0 1 .218-.218C11.38 11 11.52 11 11.8 11h.4c.28 0 .42 0 .527.055a.5.5 0 0 1 .218.218c.055.107.055.247.055.527v.4c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218C12.62 13 12.48 13 12.2 13h-.4c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.218-.218C11 12.62 11 12.48 11 12.2zM16 11.8c0-.28 0-.42.055-.527a.5.5 0 0 1 .218-.218C16.38 11 16.52 11 16.8 11h.4c.28 0 .42 0 .527.055a.5.5 0 0 1 .218.218c.055.107.055.247.055.527v.4c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218C17.62 13 17.48 13 17.2 13h-.4c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.218-.218C16 12.62 16 12.48 16 12.2zM6 11.8c0-.28 0-.42.054-.527a.5.5 0 0 1 .219-.218C6.38 11 6.52 11 6.8 11h.4c.28 0 .42 0 .527.055a.5.5 0 0 1 .218.218C8 11.38 8 11.52 8 11.8v.4c0 .28 0 .42-.054.527a.5.5 0 0 1-.219.218C7.62 13 7.48 13 7.2 13h-.4c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.218-.218C6 12.62 6 12.48 6 12.2z" />{" "}
    <path
      fill={color || "#000"}
      d="M6.884 6c-.817 0-1.375 0-1.86.096a5 5 0 0 0-3.928 3.929C1 10.509 1 11.067 1 11.885v.23c0 .818 0 1.376.096 1.86a5 5 0 0 0 3.929 3.929C5.509 18 6.067 18 6.885 18h10.23c.818 0 1.376 0 1.86-.096a5 5 0 0 0 3.929-3.928c.096-.485.096-1.043.096-1.86v-.232c0-.817 0-1.375-.096-1.86a5 5 0 0 0-3.928-3.928C18.49 6 17.933 6 17.116 6z"
      opacity={0.28}
    />
  </Svg>
);

export default Pidock01duosolid;
