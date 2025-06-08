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
 * Pimedicalthermometerduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimedicalthermometerduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "medical thermometer icon",
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
      d="M11.1508 13.8492L12.772 15.4704M13.8788 11.1212L15.5 12.7424M16.5 8.5L18.1212 10.1212"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M5.5 18.4999L7.69115 18.3425C8.57198 18.2792 9.01239 18.2476 9.42482 18.1264C9.79065 18.0189 10.1392 17.8596 10.46 17.6534C10.8216 17.421 11.1338 17.1087 11.7582 16.4842L20.1317 8.11C21.3032 6.93841 21.3031 5.03899 20.1316 3.86745C18.96 2.69584 17.0604 2.69588 15.8889 3.86754L7.51532 12.2418C6.89098 12.8662 6.57882 13.1784 6.34642 13.54C6.14028 13.8607 5.98104 14.2092 5.87356 14.575C5.75237 14.9874 5.72073 15.4278 5.65746 16.3085L5.5 18.4999ZM5.5 18.4999L3 20.9999"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M5.5 18.5006L7.69115 18.3431M5.5 18.5006L5.65746 16.3091C5.72073 15.4284 5.75237 14.988 5.87356 14.5756C5.98104 14.2099 6.14028 13.8613 6.34642 13.5406C6.57882 13.179 6.89098 12.8668 7.51532 12.2425L15.8889 3.86816M5.5 18.5006L3 21.0006"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pimedicalthermometerduostroke;
