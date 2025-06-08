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
 * Piarchivecodeduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarchivecodeduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "archive code icon",
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
      d="M10.286 12.2139C9.45369 12.8177 8.70516 13.5292 8.05999 14.3299C8.02102 14.378 7.99976 14.438 7.99976 14.4999C7.99976 14.5618 8.02102 14.6218 8.05999 14.6699C8.70519 15.4705 9.45372 16.182 10.286 16.7859M13.714 16.7859C14.5463 16.182 15.2948 15.4705 15.94 14.6699C15.979 14.6218 16.0002 14.5618 16.0002 14.4999C16.0002 14.438 15.979 14.378 15.94 14.3299C15.2948 13.5292 14.5463 12.8177 13.714 12.2139"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M2 5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V6C22 6.53043 21.7893 7.03914 21.4142 7.41421C21.0391 7.78929 20.5304 8 20 8H4C3.46957 8 2.96086 7.78929 2.58579 7.41421C2.21071 7.03914 2 6.53043 2 6V5Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M4 8H20V17C20 18.0609 19.5786 19.0783 18.8284 19.8284C18.0783 20.5786 17.0609 21 16 21H8C6.93913 21 5.92172 20.5786 5.17157 19.8284C4.42143 19.0783 4 18.0609 4 17V8Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piarchivecodeduostroke;
