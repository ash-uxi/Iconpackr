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
 * Pinftarrowleftduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinftarrowleftduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "nft arrow left icon",
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
      fillRule="evenodd"
      d="M17.21 15.83a1 1 0 0 1-.2 1.4q-.485.364-.927.771H20a1 1 0 1 1 0 2h-3.917q.443.41.926.772a1 1 0 0 1-1.2 1.6 13.9 13.9 0 0 1-2.451-2.362 1.6 1.6 0 0 1 0-2.02 13.9 13.9 0 0 1 2.451-2.36 1 1 0 0 1 1.4.2"
      clipRule="evenodd"
      fill="none"
    />
    <path
      d="M19.791 10h-.818c-.875 0-1.382 0-1.82.038-4.86.422-8.72 4.25-9.147 9.09-.015.17-.024.35-.03.558q.192.095.396.162c.333.11.719.142 1.6.15.003-.305.01-.51.027-.695.34-3.862 3.425-6.933 7.328-7.273.34-.03.754-.03 1.71-.03h1.462a3 3 0 0 0-.064-.579c-.071-.334-.228-.666-.644-1.421"
      fill="none"
    />
    <path
      d="m20.382 15.121.025-.047c.603-1.123.905-1.684 1.02-2.276A4 4 0 0 0 21.359 11c-.15-.519-.458-1.067-1.005-2.045l-1.49-2.663c-.67-1.198-1.004-1.797-1.481-2.233a4 4 0 0 0-1.466-.857C15.302 3 14.612 3 13.232 3h-2.486c-1.38 0-2.07 0-2.685.202a4 4 0 0 0-1.466.857c-.477.436-.812 1.035-1.482 2.233l-1.454 2.6c-.635 1.134-.952 1.702-1.076 2.302-.11.532-.11 1.08 0 1.612.124.6.441 1.168 1.076 2.302l1.454 2.6c.67 1.198 1.005 1.797 1.482 2.234.422.385.921.677 1.466.856.27.089.556.139.907.167.391.03.865.034 1.493.035"
      opacity={0.28}
      fill="none"
    />
    <path
      fillRule="evenodd"
      d="M6.96 9c0-1.111.906-2 2.008-2s2.007.889 2.007 2-.905 2-2.007 2A2.003 2.003 0 0 1 6.96 9"
      clipRule="evenodd"
      fill="none"
    />
  </Svg>
);

export default Pinftarrowleftduostroke;
