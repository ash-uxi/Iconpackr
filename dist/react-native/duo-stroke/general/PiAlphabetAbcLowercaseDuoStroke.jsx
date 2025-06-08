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
 * Pialphabetabclowercaseduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pialphabetabclowercaseduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "alphabet abc lowercase icon",
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
      d="M21.5998 15.3889C21.1752 15.7689 20.6144 16 19.9998 16C18.6743 16 17.5998 14.9255 17.5998 13.6V13.4C17.5998 12.0745 18.6743 11 19.9998 11C20.6144 11 21.1752 11.2311 21.5998 11.6111M9.99512 13.4V13.6M9.99512 13.4C9.99512 12.0745 11.0696 11 12.3951 11C13.7206 11 14.7951 12.0745 14.7951 13.4V13.6C14.7951 14.9255 13.7206 16 12.3951 16C11.0696 16 9.99512 14.9255 9.99512 13.6M9.99512 13.4V8M9.99512 13.6V16.1"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M6.8 13.6005C6.8 14.926 5.72548 16.0005 4.4 16.0005C3.07452 16.0005 2 14.926 2 13.6005V13.4005C2 12.075 3.07452 11.0005 4.4 11.0005C5.72548 11.0005 6.8 12.075 6.8 13.4005M6.8 13.6005V13.4005M6.8 13.6005V16.1005M6.8 13.4005V10.9004"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pialphabetabclowercaseduostroke;
