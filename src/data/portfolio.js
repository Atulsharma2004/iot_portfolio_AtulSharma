export const profile = {
  name: 'Atul Sharma',
  title: 'Embedded Systems & IoT Firmware Engineer',
  location: 'Delhi, India',
  email: 'atul.sharma.123647@gmail.com',
  phone: '+91 8953555297',
  linkedin: 'https://www.linkedin.com/in/atulsharma2004/',
  github: 'https://github.com/Atulsharma2004',
  resumeUrl: './assets/Atul_Sharma_Embedded_IoT_Resume.pdf',
  summary:
    'An Embedded Systems and IoT Firmware Engineer with 2+ years of industry experience building production-grade firmware for smart meters, GPS cattle tracking devices, fintech payment terminals, and cellular IoT products. Experienced in Embedded C/C++, Qualcomm Open CPU platforms, STM32, ESP32, ESP32-P4, ESP32-S3, QCC748, Realtek BLE/Wi-Fi, FreeRTOS, communication protocols, cloud connectivity, and hardware-software integration.',
};

export const about = {
  story: [
    'Electronics & Communication Engineering graduate from Feroze Gandhi Institute of Engineering & Technology (AKTU) with First Division and Distinction (CGPA 8.05).',
    '2+ years of embedded industry experience at MoMAGIC Technologies, architecting production firmware across smart electricity meters, GPS cattle trackers, and fintech audio payment terminals.',
    'Deep expertise in Embedded C/C++, RTOS architecture, cellular IoT (NB-IoT/GPRS), and device-to-cloud pipelines using MQTTS/HTTPS with AES/SHA-256 security.',
    'Hands-on hardware debugging with logic analyzers, oscilloscopes, OpenOCD, and factory diagnostic tooling — from register-level bare-metal to multithreaded FreeRTOS deployments.',
    'Active in cross-platform firmware R&D: ESP32-P4 USB networking (RNDIS/PPPoS), QCX216 ↔ QCC748 UART bridge protocols, SPI LCD keypad UIs, and custom controller SDK integration.',
  ],
  timeline: [
    { year: '2020', title: 'B.Tech ECE — FGIT Raebareli', desc: 'Started engineering journey in electronics & communication.' },
    { year: '2024', title: 'Major Project: Dual Axis Solar Tracker', desc: 'Arduino, C, C++, Servo Motors, Solar Pannel, Battery, LCD, etc.' },
    { year: '2024', title: 'Joined MoMAGIC Technologies & Research on different Microcontrollers', desc: 'Software Engineer — Embedded IoT, New Delhi., Realtek BLE/Wi-Fi, Nordic, Simcom, STM32, etc.' },
    { year: '2025', title: 'Cellular IoT, GPS, Smart Meter & Payment Firmware', desc: 'Qualcomm Open CPU NB-IoT, fintech payment SoC, .' },
    { year: '2026', title: 'ESP32-P4/S3, QCC748 R&D, STM32 Bare-Metal & RPi Drivers', desc: 'RNDIS, PPPoS, DATA216/DATA748 UART protocols, keypad/LCD systems, libopencm3, linker scripts, Linux GPIO/SPI/I2C drivers.' },
  ],
};

export const skills = {
  Programming: ['C', 'C++', 'Embedded C', 'Python', 'Bare-Metal Programming'],
  'Embedded Systems': ['FreeRTOS', 'CMSIS-OS2', 'Embedded Linux', 'POSIX Threads', 'RTOS Scheduling'],
  'Microcontrollers & Platforms': [
    'STM32 (Cortex-M0/M4)',
    'ESP32 / ESP32-S3 / ESP32-P4',
    'ESP8266',
    'Qualcomm Open CPU (NB-IoT)',
    'Qualcomm Payment SoC',
    'QCC748 / QCX216',
    'Raspberry Pi',
    'Nordic',
    'Simcom',
    'Realtek BLE/Wi-Fi',
    'AVR / Arduino',
  ],
  Protocols: [
    'UART', 'SPI', 'I2C', 'I2S', 'GPIO', 'PWM', 'ADC', 'USB (Bulk/HS)',
    'TCP/IP', 'UDP', 'HTTP', 'HTTPS', 'MQTT', 'MQTTS',
    'BLE GAP/GATT', 'GPS', 'NB-IoT', 'GPRS', 'RNDIS', 'PPPoS', 'JSON',
  ],
  Security: ['TLS/SSL', 'AES', 'SHA-256', 'Secure Communication', 'FOTA', 'NTP'],
  Tools: [
    'GCC', 'ARM GCC', 'Git', 'Keil', 'IAR', 'OpenOCD', 'STM32CubeIDE',
    'CMake', 'Makefiles', 'Docklight', 'SSCom', 'pySerial', 'STM32CubeMonitor',
  ],
};

export const experience = {
  company: 'MoMAGIC Technologies Pvt. Ltd.',
  role: 'Software Engineer — Embedded IoT',
  duration: 'July 2024 – Present',
  location: 'New Delhi, India (On-site)',
  highlights: [
    {
      title: 'Smart Electricity Meter Firmware',
      desc: 'Production firmware with TCP/IP, MQTTS/HTTPS telemetry, JSON payloads, backoff/reconnect logic, and structured cloud analytics.',
    },
    {
      title: 'GPS Cattle Tracking System',
      desc: 'Cellular IoT GPS telemetry with SIM/SMS management, NTP sync, and real-time location monitoring for field deployments.',
    },
    {
      title: 'Fintech Audio Payment Terminal',
      desc: 'Qualcomm payment SoC firmware with 4×4 keypad, I2S microphone, SPI LCD, QR-based UPI UI, USB bulk provisioning, and AES/SHA-256 secure MQTTS.',
    },
    {
      title: 'Cellular IoT Products',
      desc: 'NB-IoT/GPRS stacks on Qualcomm Open CPU with multithreaded FreeRTOS, FOTA updates, onboard file-system logging, and factory diagnostics.',
    },
  ],
  achievements: [
    'Architected production firmware across 3 IoT product lines',
    'Qualcomm Open CPU NB-IoT/GPRS cloud integration',
    'MQTTS/HTTPS publish-subscribe with GPS telemetry',
    'FreeRTOS multithreading with JSON/AES/SHA-256',
    'USB bulk transfer for provisioning & log export',
    'Secure OTA/FOTA systems for field updates',
    'SPI LCD embedded GUI & 4×4 keypad drivers',
    'Realtek BLE/Wi-Fi GAP/GATT validation',
    'Python/C++ UART factory diagnostic tools',
    'STM32 bare-metal bring-up with libopencm3 & OpenOCD',
    'Code reviews, root-cause analysis & manufacturing release gates',
  ],
};

export const projects = [
  {
    id: 13,
    title: 'AI Soundbox — Qualcomm Multi-Controller Platform',
    period: '2026 – Present',
    tech: ['QCC748', 'QCX216', 'I2S', 'UART', 'USB', 'SPI LCD', 'FreeRTOS', '4G', 'Wi-Fi'],
    features: [
      'SPI LCD keypad UI',
      'I2S microphone & speaker audio',
      'UART inter-controller bridge',
      'USB provisioning & logging',
      '4G cellular & Wi-Fi connectivity',
      'AI speech transcription',
      'Voice prompting & audio playback',
    ],
    desc: 'Developing an AI-enabled soundbox on Qualcomm controllers with dual-SoC architecture — SPI LCD UI, 4×4 keypad, I2S microphone/speaker pipeline, UART bridge between controllers, USB bulk provisioning, 4G and Wi-Fi internet, and on-device AI speech transcription with voice interaction.',
    category: 'production',
  },
  {
    id: 1,
    title: 'Cellular IoT Smart Terminal',
    period: 'Jan 2025 – Present',
    tech: ['Qualcomm Open CPU', 'NB-IoT', 'GPS', 'MQTT', 'HTTPS', 'FreeRTOS'],
    features: ['SIM management', 'SMS handling', 'GPS tracking', 'Cloud telemetry', 'SPI LCD UI', 'Keypad support', 'FOTA updates'],
    desc: 'Released firmware for cellular IoT module with NB-IoT/GPRS registration, MQTTS/HTTPS/TCP cloud links, SPI touch LCD, QR display, keypad input, I2C sensors, and FreeRTOS multithreaded architecture.',
    category: 'production',
  },
  {
    id: 2,
    title: 'Networked Smart Meter & Cattle Tracker',
    period: 'Jan 2025 – Present',
    tech: ['MQTT', 'HTTPS', 'JSON', 'Cellular IoT', 'TCP/IP'],
    features: ['Real-time telemetry', 'GPS monitoring', 'Structured cloud comms', 'Backoff/reconnect logic'],
    desc: 'Implemented telemetry systems for smart meters and cattle tracking with TCP/IP, MQTTS, HTTPS, structured JSON payloads, and resilient reconnect logic for field cellular terminals.',
    category: 'production',
  },
  {
    id: 3,
    title: 'STM32 Bare-Metal Framework',
    period: 'Jan 2024 – Jun 2024',
    tech: ['STM32F072RB', 'libopencm3', 'OpenOCD', 'ARM GCC', 'SysTick', 'PWM'],
    features: [
      'Custom linker scripts',
      'SysTick & vector table setup',
      'TIM2 hardware PWM',
      'Makefile builds',
      'OpenOCD + GDB debugging',
      'WSL2/usbipd-win workflow',
    ],
    desc: 'Bare-metal STM32F072RB bring-up on NUCLEO-F072RB using libopencm3 — linker scripts, SysTick timing, TIM2 PWM LED fading, Makefile toolchain, OpenOCD flashing, and usbipd-win + WSL2 cross-platform debugging without STM32CubeIDE.',
    category: 'research',
    github: 'https://github.com/Atulsharma2004/STM32F0_Bare_Metal_Blinky_libopencm3',
  },
  {
    id: 4,
    title: 'ESP32-P4 USB RNDIS Tethering',
    period: 'Jun 2026',
    tech: ['ESP32-P4', 'USB', 'RNDIS', 'Embedded Networking'],
    features: ['USB device networking', 'Host-device bridge', 'Network stack integration', 'IoT gateway research'],
    desc: 'Researched and implemented USB RNDIS tethering on ESP32-P4 — enabling the device to present as a USB network adapter for host-connected IoT gateway scenarios.',
    category: 'research',
    github: 'https://github.com/Atulsharma2004/usb_tethering_RNDIS_esp32p4',
  },
  {
    id: 5,
    title: 'ESP32-P4 PPPoS Dialing over UART',
    period: 'Jun 2026',
    tech: ['ESP32-P4', 'PPPoS', 'UART', 'Cellular Modem'],
    features: ['PPP over serial', 'AT command handling', 'Modem dial-up', 'UART bridge'],
    desc: 'Built PPPoS cellular dial-up networking over UART on ESP32-P4 — integrating modem AT commands, PPP stack, and serial host-device communication for embedded connectivity.',
    category: 'research',
    github: 'https://github.com/Atulsharma2004/PPPoS_Dialing_over_UART_ESP32P4',
  },
  {
    id: 6,
    title: 'QCX216 ↔ QCC748 UART Bridge (DATA216/DATA748)',
    period: '2025 – 2026',
    tech: ['QCX216', 'QCC748', 'UART', 'SPI LCD', 'Keypad'],
    features: ['DATA216 key events', 'DATA748 display commands', 'Checksum framing', 'Backend bridge architecture'],
    desc: 'Architected a dual-controller UART protocol: QCX216 sends keypad events via DATA216 frames; QCC748 handles all UI logic and returns DATA748 display commands — enabling QCC748 as the primary application controller.',
    category: 'production',
  },
  {
    id: 7,
    title: 'MMT_KEY Keypad & SPI LCD Multitap UI',
    period: '2025 – 2026',
    tech: ['ESP32-P4', 'QCX216', 'UART', 'SPI LCD', 'Keypad'],
    features: ['MMT_KEY framing', 'Multitap input', 'WiFi config (*748#)', 'Checksum protocol', 'LCD rendering'],
    desc: 'Designed MMT_KEY UART protocol (magic + length + data + checksum) between ESP32-P4 and QCX216 for keypad-to-LCD bridging, WiFi SSID/password configuration flow, and special character multitap mapping.',
    category: 'production',
  },
  {
    id: 8,
    title: 'QCC748 UART Wrapper APIs',
    period: '2025 – 2026',
    tech: ['QCC748', 'QCCSDK', 'UART', 'GPIO'],
    features: ['mmt_Uart_Init/Open/Close', 'MoMagic wrapper layer', 'QCC748DK build', 'SDK integration'],
    desc: 'Created MoMagic-style UART wrapper APIs (mmt_uart) on QCC748 SDK — abstracting QCC74x LHAL UART init, console attach/detach, and GPIO mux for production firmware portability.',
    category: 'production',
  },
  {
    id: 9,
    title: 'Realtek Wi-Fi / BLE IoT Stack Validation',
    period: 'Sep 2024 – Jan 2025',
    tech: ['Realtek SDK', 'BLE', 'Wi-Fi', 'IAR'],
    features: ['GAP/GATT client/server', 'AP/STA modes', 'HTU21D sensors', 'HTTP/MQTT cloud'],
    desc: 'Verified Realtek BLE/Wi-Fi firmware on wireless-only platform — GAP/GATT, beacon modes, AP/STA/coexistence, environmental sensors, and HTTP/MQTT cloud integration using IAR and Realtek SDK.',
    category: 'production',
  },
  {
    id: 10,
    title: 'Desktop UART Diagnostic Tool',
    period: 'Jul 2024 – Sep 2024',
    tech: ['Python', 'C++', 'Tkinter', 'pySerial'],
    features: ['UART monitoring', 'Firmware flashing', 'Production diagnostics', 'Device configuration'],
    desc: 'Authored Python/C++ Tkinter GUI diagnostic tool with pyserial for UART monitoring, firmware flashing, and device configuration — replacing hardware fixtures on factory lines.',
    category: 'tooling',
  },
  {
    id: 11,
    title: 'Fintech Audio Payment Device',
    period: 'Sep 2024 – Present',
    tech: ['Qualcomm Payment SoC', 'I2S', 'SPI LCD', 'FreeRTOS'],
    features: ['QR payment UI', 'SPI LCD', 'I2S audio', 'Microphone', 'UPI workflow', 'USB provisioning'],
    desc: 'Delivered payment terminal firmware with 4×4 keypad, I2S microphone & voice prompts, SPI LCD QR-based UPI interface, USB bulk provisioning, and secure MQTTS with AES/SHA-256.',
    category: 'production',
  },
  {
    id: 12,
    title: 'Raspberry Pi 4 Driver Development',
    period: 'Jan 2024 – Jun 2024',
    tech: ['Linux', 'GPIO', 'SPI', 'I2C'],
    features: ['Driver development', 'Hardware interfacing', 'Logic analyzer validation'],
    desc: 'Developed Linux GPIO/I2C/SPI drivers for Raspberry Pi 4, validated with logic analyzer and oscilloscope for hardware-firmware integration.',
    category: 'research',
  },
];

export const achievements = [
  { value: 2, suffix: '+', label: 'Years Experience' },
  { value: 20, suffix: '+', label: 'Embedded Modules Developed' },
  { value: 10, suffix: '+', label: 'Communication Protocols' },
  { value: 0, suffix: '', label: 'Production Devices Deployed', text: 'Multiple' },
];

export const certifications = [
  { name: 'Microsoft Certified: Azure Fundamentals', issuer: 'Microsoft', date: 'Jun 2023' },
  { name: 'Microsoft Certified: Power Platform Fundamentals', issuer: 'Microsoft', date: 'Jun 2023' },
  { name: 'Introduction to Cybersecurity', issuer: 'Cisco', date: 'Aug 2023' },
  { name: 'Codekaze', issuer: 'Coding Ninjas', date: 'Jun 2023' },
];

export const education = {
  degree: 'B.Tech in Electronics & Communication Engineering',
  institution: 'Feroze Gandhi Institute of Engineering & Technology',
  university: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow',
  period: '2020 – 2024',
  cgpa: '8.05',
  honors: 'First Division with Distinction',
};

export const blogPosts = [
  { title: 'Understanding FreeRTOS Task Scheduling', tag: 'RTOS', readTime: '8 min' },
  { title: 'MQTT vs HTTPS in IoT Devices', tag: 'Protocols', readTime: '6 min' },
  { title: 'Qualcomm OpenCPU Development Journey', tag: 'Cellular IoT', readTime: '10 min' },
  { title: 'Building Production Firmware for Payment Devices', tag: 'Fintech', readTime: '9 min' },
  { title: 'USB Networking with ESP32-P4 (RNDIS & PPPoS)', tag: 'ESP32', readTime: '7 min' },
  { title: 'Bare-Metal STM32 Development Beyond the IDE', tag: 'STM32', readTime: '8 min' },
];

export const protocols = ['UART', 'SPI', 'I2C', 'BLE', 'Wi-Fi', 'MQTT', 'HTTPS', 'GPS', 'NB-IoT'];

export const seoKeywords = [
  'Embedded Systems Engineer',
  'Firmware Engineer',
  'IoT Developer',
  'Embedded C Developer',
  'FreeRTOS Engineer',
  'ESP32 Developer',
  'STM32 Developer',
  'Qualcomm OpenCPU Developer',
  'Cellular IoT Engineer',
  'NB-IoT Developer',
  'MQTT Developer',
  'Embedded Linux Engineer',
];
