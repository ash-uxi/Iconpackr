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
 * Piwebhookduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piwebhookduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "webhook icon",
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
      d="M10.0798 10.0058L5.99561 17.4935M16.0906 13.9791L11.9994 6.49512M9.99099 17.5014L18.5202 17.4935"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M15.9959 6.49365C15.9959 4.28451 14.205 2.49365 11.9959 2.49365C9.78673 2.49365 7.99587 4.28451 7.99587 6.49365C7.99587 8.00872 8.8382 9.32706 10.0801 10.0059M15.8474 20.8547C17.7058 22.0491 20.1806 21.5107 21.3749 19.6522C22.5692 17.7937 22.0308 15.3189 20.1724 14.1246C18.8978 13.3055 17.3333 13.3014 16.0908 13.9792M4.07185 13.9954C2.13343 15.055 1.42105 17.4855 2.48069 19.4239C3.54033 21.3623 5.97073 22.0747 7.90915 21.015C9.23855 20.2883 9.9913 18.9168 9.99125 17.5015"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piwebhookduostroke;
