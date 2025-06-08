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
 * Pinftdefaultduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinftdefaultduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "nft default icon",
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
      d="M19.791 10h-.818c-.875 0-1.382 0-1.82.038-4.86.422-8.72 4.25-9.147 9.09-.015.17-.024.35-.03.558q.192.095.396.162c.173.057.375.096.675.12.25.02.545.027.924.03a9 9 0 0 1 .028-.695c.34-3.862 3.425-6.933 7.328-7.273.34-.03.754-.03 1.71-.03h1.462a3 3 0 0 0-.1-.72c-.089-.305-.255-.64-.608-1.28M22.325 10.74l-.006-.02-.006-.02z"
      fill="none"
    />
    <path
      d="m5.113 6.292-1.454 2.6c-.635 1.134-.952 1.702-1.076 2.302-.11.532-.11 1.08 0 1.612.124.6.441 1.168 1.076 2.302l1.454 2.6c.67 1.198 1.005 1.797 1.482 2.234.422.385.921.677 1.466.856.27.089.556.139.907.167.449.035 1.005.035 1.778.035h2.544c1.36 0 2.04 0 2.648-.197a4 4 0 0 0 1.453-.836c.475-.426.813-1.012 1.49-2.183L19.91 16l.496-.926c.603-1.123.905-1.684 1.02-2.276A4 4 0 0 0 21.359 11c-.15-.519-.458-1.067-1.005-2.045l-1.49-2.663c-.67-1.198-1.004-1.797-1.481-2.233a4 4 0 0 0-1.466-.857C15.302 3 14.612 3 13.232 3h-2.486c-1.38 0-2.07 0-2.685.202a4 4 0 0 0-1.466.857c-.477.436-.812 1.035-1.482 2.233"
      opacity={0.28}
      fill="none"
    />
    <path
      fillRule="evenodd"
      d="M6.96 9c0-1.111.906-2 2.008-2s2.007.889 2.007 2-.905 2-2.007 2A2.003 2.003 0 0 1 6.96 9"
      clipRule="evenodd"
      fill="none"
    />
    <path d="M8.897 21.962H8.89l-.011-.002z" fill="none" />
  </Svg>
);

export default Pinftdefaultduostroke;
