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
 * Piclipboardarrowdownleftcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piclipboardarrowdownleftcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "clipboard arrow down left icon",
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
    <path d="M16 4.038V4c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C14.697 2 14.464 2 14 2h-4c-.465 0-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C8 3.304 8 3.536 8 4v.038m8 0c0 .44-.001.665-.051.85a1.5 1.5 0 0 1-1.06 1.06C14.697 6 14.464 6 14 6h-4c-.465 0-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C8.001 4.702 8 4.477 8 4.038m8 0c.784.047 1.34.155 1.816.397a4 4 0 0 1 1.748 1.748C20 7.04 20 8.16 20 10.4v5.2c0 .524 0 .987-.006 1.4M8 4.038c-.784.048-1.341.156-1.816.398a4 4 0 0 0-1.748 1.748C4 7.04 4 8.16 4 10.4v5.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748c.803.41 1.84.434 3.816.436m5.944-3a10 10 0 0 0-1.874 1.802A.32.32 0 0 0 14 21m0 0c0 .07.023.14.07.198A10 10 0 0 0 15.944 23M14 21h6" />
    <path
      fill={color}
      d="M20 10.4v5.2c0 .996 0 1.771-.038 2.4h-1.19a3 3 0 0 0-4.613-1.412 13 13 0 0 0-2.43 2.338l-.001.001A3.32 3.32 0 0 0 11.154 22H10.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C4 18.96 4 17.84 4 15.6v-5.2c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748c.475-.242 1.032-.35 1.816-.398 0 .44.001.665.051.85a1.5 1.5 0 0 0 1.06 1.06C9.304 6 9.536 6 10 6h4c.465 0 .697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.05-.186.052-.411.052-.85.784.047 1.34.155 1.816.397a4 4 0 0 1 1.748 1.748C20 7.04 20 8.16 20 10.4"
      opacity={0.28}
    />
  </Svg>
);

export default Piclipboardarrowdownleftcontrast;
