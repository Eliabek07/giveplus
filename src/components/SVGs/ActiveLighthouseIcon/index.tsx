import React from 'react';

import { SvgXml, SvgProps } from 'react-native-svg';

const xml = `
  <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.20685 4.42698H7.60928V10.5404L7.45837 11.7789H16.2614L16.1105 10.5404V4.42698H16.4878C16.7896 4.42698 16.9154 4.03171 16.689 3.8209L12.036 0.0790532C11.9102 -0.0263511 11.7593 -0.0263511 11.6335 0.0790532L7.03079 3.84725C6.77927 4.03171 6.90503 4.42698 7.20685 4.42698ZM14.5763 7.35195H12.5893V5.21751H14.5763V7.35195ZM11.0802 7.35195H9.09322V5.21751H11.0802V7.35195Z" fill="#3D71AA"/>
    <path d="M7.25714 13.3862L6.95532 15.6788H16.7141L16.4375 13.3862H7.25714Z" fill="#3D71AA"/>
    <path d="M16.9152 17.2599H6.77911L6.50244 19.5788H17.1919L16.9152 17.2599Z" fill="#3D71AA"/>
    <path d="M18.7261 23.4526H17.6698L17.3931 21.1337H6.30121L6.02454 23.4526H4.96817C4.54059 23.4526 4.21362 23.7951 4.21362 24.2431C4.21362 24.6911 4.54059 25.0336 4.96817 25.0336H18.7513C19.1789 25.0336 19.5058 24.6911 19.5058 24.2431C19.5058 23.7951 19.1537 23.4526 18.7261 23.4526Z" fill="#3D71AA"/>
    <path d="M0.666959 5.45448L4.89243 6.66663C4.96788 6.69298 5.01818 6.69298 5.09364 6.69298C5.42061 6.69298 5.72243 6.45582 5.82303 6.11326C5.92364 5.69164 5.69728 5.27002 5.29485 5.13827L1.06938 3.92612C0.666959 3.82071 0.264534 4.05787 0.138776 4.47949C0.0130182 4.90111 0.264534 5.32272 0.666959 5.45448Z" fill="#F1456B"/>
    <path d="M5.77307 8.40582C5.67247 7.9842 5.27004 7.72069 4.86761 7.79975L0.591832 8.82743C0.189405 8.93284 -0.0621115 9.35445 0.0133434 9.77607C0.11395 10.145 0.41577 10.4085 0.767893 10.4085C0.818197 10.4085 0.8685 10.4085 0.943955 10.3821L5.21974 9.35445C5.62216 9.24905 5.87368 8.82744 5.77307 8.40582Z" fill="#F1456B"/>
    <path d="M23.1025 9.32839L18.877 8.11624C18.4746 8.01084 18.0722 8.248 17.9464 8.66961C17.8458 9.09123 18.0722 9.51285 18.4746 9.6446L22.7001 10.8568C22.7755 10.8831 22.8258 10.8831 22.9013 10.8831C23.2282 10.8831 23.5301 10.6459 23.6307 10.3034C23.7564 9.88176 23.5049 9.43379 23.1025 9.32839Z" fill="#F1456B"/>
    <path d="M18.7259 6.98296C18.7762 6.98296 18.8265 6.98296 18.902 6.95661L23.1777 5.92892C23.5802 5.82352 23.8317 5.4019 23.7562 4.98028C23.6556 4.55867 23.2532 4.29516 22.8508 4.37421L18.575 5.4019C18.1726 5.5073 17.921 5.92892 17.9965 6.35054C18.072 6.71945 18.3989 6.98296 18.7259 6.98296Z" fill="#F1456B"/>
  </svg>
`;

// eslint-disable-next-line prettier/prettier
interface ActiveLighthouseIconProps extends SvgProps { }

function ActiveLighthouseIcon({ ...rest }: ActiveLighthouseIconProps) {
  return <SvgXml xml={xml} width="24" height="24" {...rest} />;
}

export { ActiveLighthouseIcon };
