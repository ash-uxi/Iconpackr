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
 * Pitroubleshootsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitroubleshootsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "troubleshoot icon",
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
      d="M12 22C9.5991 22 7.39461 21.1529 5.67124 19.7429L9.96808 15.446C10.5635 15.7977 11.2585 16 11.9999 16C12.7413 16 13.4363 15.7977 14.0317 15.446L18.3287 19.7429C16.6053 21.1529 14.4009 22 12 22Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M12 2C14.4008 2 16.6052 2.84705 18.3286 4.25702L14.0317 8.55392C13.4363 8.20225 12.7413 7.99995 11.9999 7.99995C11.2585 7.99995 10.5635 8.20225 9.96808 8.55392L5.67127 4.25712C7.39464 2.84709 9.59912 2 12 2Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M2 12C2 9.59915 2.84707 7.3947 4.25706 5.67134L8.55387 9.96813C8.20219 10.5636 7.9999 11.2586 7.9999 12C7.9999 12.7413 8.20219 13.4363 8.55387 14.0318L4.25704 18.3286C2.84706 16.6053 2 14.4008 2 12Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M22 12C22 14.4009 21.1529 16.6054 19.7429 18.3287L15.4459 14.0318C15.7976 13.4363 15.9999 12.7413 15.9999 12C15.9999 11.2586 15.7976 10.5636 15.4459 9.96813L19.7428 5.67121C21.1529 7.39459 22 9.59909 22 12Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pitroubleshootsolid;
