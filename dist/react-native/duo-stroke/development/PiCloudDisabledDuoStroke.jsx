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
 * Piclouddisabledduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piclouddisabledduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "cloud disabled icon",
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
    <path d="M2 22L20 4" stroke={color || "#000"} strokeWidth="2" fill="none" />
    <path
      d="M9.70245 20H16.5C19.5376 20 22 17.5376 22 14.5C22 12.65 21.0866 11.0133 19.6861 10.0164M6.4654 9.08006L6.46612 9.07827C6.4807 9.04199 6.49559 9.00586 6.5108 8.96991C7.49756 6.63696 9.80761 5 12.5 5C14.2949 5 15.9199 5.72754 17.0962 6.90381M6.4654 9.08006C6.16519 9.82802 6 10.6447 6 11.5C6 12.0163 6.06019 12.5185 6.17393 13M6.4654 9.08006C6.14288 9.8829 5.98156 10.2844 5.90405 10.4047C5.75223 10.6403 5.86577 10.5053 5.65964 10.6953C5.55433 10.7924 5.08122 11.0852 4.13499 11.6709C2.85362 12.464 2 13.8823 2 15.5C2 17.2583 3.00845 18.7811 4.47851 19.5215"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piclouddisabledduostroke;
