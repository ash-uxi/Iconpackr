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
 * Pimedicinepillscapsulestabletsduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimedicinepillscapsulestabletsduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "medicine pills capsules tablets icon",
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
    <g opacity={0.28} fill="none">
      <path
        d="M14.0012 18.014C14.0089 20.2225 15.8056 22.0066 18.0141 21.9989C20.2226 21.9911 22.0067 20.1945 21.999 17.986C21.9912 15.7775 20.1946 13.9934 17.9861 14.0011C15.7776 14.0088 13.9934 15.8055 14.0012 18.014Z"
        stroke={color || "#000"}
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M9.21744 15.7617C7.56635 17.4128 4.88941 17.4128 3.23832 15.7617C1.58723 14.1106 1.58723 11.4336 3.23832 9.78256L9.78256 3.23832C11.4336 1.58723 14.1106 1.58723 15.7617 3.23832C17.4128 4.88941 17.4128 7.56635 15.7617 9.21744L9.21744 15.7617Z"
        stroke={color || "#000"}
        strokeWidth="2"
        fill="none"
      />
    </g>
    <path
      d="M14.001 18.014L21.9988 17.986M12.4894 12.4895L6.51025 6.51041M10.6335 6.65838L12.0566 5.23527C12.4284 4.8635 12.9823 4.78482 13.4311 4.99924"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pimedicinepillscapsulestabletsduostroke;
