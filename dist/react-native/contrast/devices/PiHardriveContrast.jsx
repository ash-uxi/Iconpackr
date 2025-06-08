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
 * Pihardrivecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pihardrivecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "hardrive icon",
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
      fill={color}
      d="M17 12H7c-.465 0-.697 0-.892.022a3.5 3.5 0 0 0-2.89 2.262c.306-1.261.895-3.165 1.495-5.263.548-1.917.822-2.876 1.308-3.493a3.8 3.8 0 0 1 1.632-1.231C8.38 4 9.315 4 11.183 4h1.922c1.753 0 2.63 0 3.363.303a4 4 0 0 1 1.64 1.255c.485.628.715 1.474 1.174 3.165l1.54 5.677a3.5 3.5 0 0 0-2.93-2.378C17.696 12 17.464 12 17 12"
      opacity={0.28}
    />
    <path d="m20.823 14.4-1.54-5.677c-.46-1.691-.69-2.537-1.174-3.165a4 4 0 0 0-1.64-1.255C15.734 4 14.858 4 13.105 4h-1.922c-1.87 0-2.804 0-3.53.297A3.8 3.8 0 0 0 6.02 5.528c-.486.617-.76 1.576-1.308 3.493-.6 2.098-1.189 4.002-1.496 5.263m17.606.116a3.5 3.5 0 0 0-2.931-2.378C17.697 12 17.464 12 17 12H7c-.464 0-.697 0-.892.022a3.5 3.5 0 0 0-2.89 2.262m17.605.116q.113.34.155.708c.022.195.022.428.022.892s0 .697-.022.892a3.5 3.5 0 0 1-3.086 3.086C17.697 20 17.464 20 17 20H7c-.464 0-.697 0-.892-.022a3.5 3.5 0 0 1-3.086-3.086C3 16.697 3 16.464 3 16s0-.697.022-.892a3.5 3.5 0 0 1 .195-.824M17 16h-4" />
  </Svg>
);

export default Pihardrivecontrast;
