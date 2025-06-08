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
 * Picloudarrowuploadstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picloudarrowuploadstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "cloud arrow upload icon",
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
      d="M6.5108 6.96991C7.49756 4.63696 9.80761 3 12.5 3C14.9896 3 17.1523 4.39966 18.2441 6.45502C18.4808 6.90066 18.5992 7.12348 18.6633 7.21087C18.7633 7.34728 18.7308 7.31095 18.855 7.42573C18.9346 7.49927 19.1597 7.65384 19.6098 7.96294C21.0533 8.95425 22 10.6166 22 12.5C22 13.8296 21.5282 15.0491 20.7428 16M6.5108 6.96991C6.4953 7.00656 6.48012 7.04339 6.46527 7.08039M6.5108 6.96991C6.49559 7.00586 6.4807 7.04198 6.46612 7.07827L6.46527 7.08039M6.46527 7.08039C6.16514 7.82825 6 8.64484 6 9.5M6.46527 7.08039C6.14284 7.88301 5.98155 8.28443 5.90405 8.40471C5.75223 8.64034 5.86577 8.50534 5.65964 8.69531C5.55434 8.79235 5.08115 9.08523 4.13499 9.67086C2.85361 10.464 2 11.8823 2 13.5C2 14.4251 2.27913 15.285 2.75777 16M16 15.6304C15.0037 14.427 13.8464 13.3414 12.5554 12.3982C12.2242 12.1562 11.7758 12.1562 11.4446 12.3982C10.1536 13.3414 8.99628 14.427 8 15.6304M12 21V12.2266"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Picloudarrowuploadstroke;
