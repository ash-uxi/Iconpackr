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
 * Piclipboardpluscontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piclipboardpluscontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "clipboard plus icon",
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
    <path d="M16 4.038V4c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C14.697 2 14.464 2 14 2h-4c-.465 0-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C8 3.304 8 3.536 8 4v.038m8 0c0 .44-.001.665-.051.85a1.5 1.5 0 0 1-1.06 1.06C14.697 6 14.464 6 14 6h-4c-.465 0-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C8.001 4.702 8 4.477 8 4.038m8 0c.784.047 1.34.155 1.816.397a4 4 0 0 1 1.748 1.748C20 7.04 20 8.16 20 10.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C16.96 22 15.84 22 13.6 22h-3.2c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C4 18.96 4 17.84 4 15.6v-5.2c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748c.475-.242 1.032-.35 1.816-.398M9 14h3m0 0h3m-3 0v-3m0 3v3" />
    <path
      fill={color}
      d="M20 15.6v-5.2c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748c-.475-.242-1.032-.35-1.816-.398 0 .44-.001.665-.051.85a1.5 1.5 0 0 1-1.06 1.06C14.697 6 14.464 6 14 6h-4c-.465 0-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C8.001 4.702 8 4.477 8 4.038c-.784.047-1.341.155-1.816.397a4 4 0 0 0-1.748 1.748C4 7.04 4 8.16 4 10.4v5.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C7.04 22 8.16 22 10.4 22h3.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C20 18.96 20 17.84 20 15.6"
      opacity={0.28}
    />
  </Svg>
);

export default Piclipboardpluscontrast;
