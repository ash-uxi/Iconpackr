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
 * Piwindowdockbottomsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piwindowdockbottomsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "window dock bottom icon",
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
      d="M22 8.759V15.24C22 16.045 22 16.71 21.956 17.25C21.91 17.813 21.811 18.33 21.564 18.815C21.1805 19.5676 20.5686 20.1795 19.816 20.563C19.331 20.81 18.814 20.909 18.252 20.955C17.711 20.999 17.046 20.999 16.242 20.999H7.758C6.953 20.999 6.288 20.999 5.748 20.955C5.185 20.909 4.668 20.81 4.183 20.563C3.43039 20.1795 2.81849 19.5676 2.435 18.815C2.188 18.33 2.089 17.813 2.043 17.251C2 16.71 2 16.046 2 15.242V8.758C2 7.953 2 7.288 2.044 6.748C2.09 6.185 2.189 5.668 2.436 5.183C2.81949 4.43039 3.43139 3.81849 4.184 3.435C4.669 3.188 5.186 3.089 5.748 3.043C6.29 3 6.954 3 7.758 3H16.241C17.046 3 17.711 3 18.251 3.044C18.814 3.09 19.331 3.189 19.816 3.436C20.5686 3.81949 21.1805 4.43139 21.564 5.184C21.811 5.669 21.91 6.186 21.956 6.748C22 7.29 22 7.955 22 8.759ZM6.777 11H17.223C17.343 11 17.485 11 17.61 11.01C17.755 11.022 17.963 11.053 18.181 11.164C18.463 11.3078 18.6922 11.537 18.836 11.819C18.948 12.037 18.978 12.245 18.99 12.39C19 12.515 19 12.658 19 12.777V16.223C19 16.343 19 16.485 18.99 16.61C18.9772 16.8086 18.9252 17.0026 18.837 17.181C18.693 17.4631 18.4633 17.6924 18.181 17.836C18.0027 17.9245 17.8086 17.9769 17.61 17.99C17.4812 17.9984 17.3521 18.0017 17.223 18H6.777C6.657 18 6.516 18 6.39 17.99C6.19144 17.9772 5.99738 17.9252 5.819 17.837C5.53688 17.693 5.30759 17.4633 5.164 17.181C5.07546 17.0027 5.02312 16.8086 5.01 16.61C5.0016 16.4812 4.99826 16.3521 5 16.223V12.777C5 12.657 5 12.516 5.01 12.39C5.022 12.245 5.052 12.037 5.164 11.819C5.30776 11.537 5.53703 11.3078 5.819 11.164C5.99732 11.0755 6.19138 11.0232 6.39 11.01C6.516 11 6.658 11 6.777 11Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Piwindowdockbottomsolid;
