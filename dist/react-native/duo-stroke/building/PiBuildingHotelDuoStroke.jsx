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
 * Pibuildinghotelduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibuildinghotelduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "building hotel icon",
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
      d="M18.9999 4.19066V19.5001C18.9999 20.3286 18.3284 21.0001 17.4999 21.0001H6.49994C5.67151 21.0001 4.99994 20.3286 4.99994 19.5001V4.1908M18.9999 4.19066C14.6419 1.81987 9.35795 1.81991 4.99994 4.1908M18.9999 4.19066C19.6925 4.56742 20.3617 5.00406 21.0001 5.50057M4.99994 4.1908C4.30746 4.56753 3.63836 5.00412 3.00006 5.50057"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M9.99994 21V16.5653M13.9999 21V16.5651M14.8285 17.2009C14.5791 16.9515 14.3002 16.7384 13.9999 16.5651M9.17163 17.2009C9.42095 16.9516 9.69979 16.7386 9.99994 16.5653M13.9999 16.5651C13.3971 16.2171 12.7082 16.0293 12.0001 16.0293C11.2918 16.0293 10.6029 16.2172 9.99994 16.5653M8 7V7.01M8 10V10.01M8 13V13.01M12 7V7.01M12 10V10.01M12 13V13.01M16 7V7.01M16 10V10.01M16 13V13.01"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pibuildinghotelduostroke;
