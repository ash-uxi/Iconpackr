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
 * Pikeytopright02duostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pikeytopright02duostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "key top right02 icon",
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
      d="M8.11012 17.3041L6.69712 15.8901C6.66968 16.0823 6.68738 16.2782 6.7488 16.4624C6.81023 16.6465 6.91369 16.8138 7.051 16.951C7.18831 17.0882 7.35568 17.1916 7.53987 17.2529C7.72405 17.3142 7.91997 17.3317 8.11212 17.3041H8.11012Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M9.87891 11.2927L16.2429 4.92871H19.0709V7.75771L16.9499 9.87871H15.3289C15.1963 9.87871 15.0691 9.93139 14.9754 10.0252C14.8816 10.1189 14.8289 10.2461 14.8289 10.3787V11.9997L12.7069 14.1217"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M9.87924 11.293L9.54924 11.624C8.58747 11.2999 7.54439 11.3105 6.58937 11.6539C5.63436 11.9974 4.8235 12.6536 4.28845 13.516C3.7534 14.3784 3.5256 15.3964 3.64202 16.4046C3.75844 17.4128 4.21225 18.352 4.92977 19.0698C5.64729 19.7876 6.58637 20.2417 7.59453 20.3585C8.60269 20.4753 9.62072 20.2478 10.4833 19.7131C11.3459 19.1783 12.0024 18.3677 12.3462 17.4128C12.69 16.4579 12.701 15.4149 12.3772 14.453L12.7072 14.122"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pikeytopright02duostroke;
