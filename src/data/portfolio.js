import {
    FaEnvelope, FaMapMarkerAlt, FaGithub, FaTwitter, FaLinkedin, FaGoogle, FaCodepen, FaDribbble,
    FaSearch, FaPalette, FaLaptopCode, FaRocket,
    FaMobileAlt, FaCode, FaPlug, FaDatabase,
    FaCcStripe, FaGooglePay, FaDocker, FaBitbucket, FaGit, FaTools,
    FaWindows, FaGooglePlay, FaAppStore
} from 'react-icons/fa';
import {
    SiFlutter, SiDart, SiKotlin, SiTypescript, SiJavascript, SiReact,
    SiFirebase, SiGooglemaps, SiGraphql,
    SiRazorpay, SiBraintree, SiSqlite, SiSupabase,
    SiSentry, SiLinux,
    SiAsana, SiSlack, SiJira, SiTrello,
    SiFigma, SiFramer, SiPostman, SiAndroidstudio, SiXcode, SiAdguard, SiGithub, SiApachehive
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { MdNotificationsActive, MdShoppingCart, MdLogin, MdPayment, MdStorage, MdBugReport, MdCheckCircle, MdCloudUpload, MdUpdate, MdRateReview } from 'react-icons/md';
import pdfPrinterImg from '../assets/images/pdf_printer_app.jpeg';
import musabAvatar from '../assets/images/musab.jpeg';

export const portfolioData = {
    // Personal Information
    personal: {
        name: "Musab Bin Mukhtar",
        role: "Flutter Developer",
        email: "musabbinmukhtar123@gmail.com",
        location: "Islamabad, Pakistan",
        avatar: musabAvatar
    },

    // SEO Configuration
    seo: {
        title: "Musab bin Mukhtar | Flutter Developer & Mobile Architect",
        description: "Professional Flutter Developer with 3+ years of experience building scalable mobile apps. Expert in Dart, Firebase, Clean Architecture. Offering high-quality freelance services worldwide.",
        keywords: "Flutter Developer, Mobile App Development, Musab bin Mukhtar, Freelance Flutter Developer, Dart, Firebase, Clean Architecture, Android Developer, iOS Developer, Cross-Platform Development, Mobile Architect, Pakistan Developer, Remote Developer, BLoC, GetX, Provider, Riverpod",
        image: "https://ui-avatars.com/api/?name=Musab+Bin+Mukhtar&background=0D0D0D&color=D4AF37&size=1200",
        url: "https://musabbinmukhtar.com",
        type: "website",
        twitterHandle: "@musabbinmukhtar",
        locale: "en_US",
        siteName: "Musab bin Mukhtar Portfolio"
    },


    // Social Links
    socials: [
        { icon: FaGithub, url: "https://github.com/", label: "GitHub" },
        { icon: FaLinkedin, url: "https://linkedin.com/", label: "LinkedIn" },
        { icon: FaGoogle, url: "https://mail.google.com/mail/?view=cm&fs=1&to=musabbinmukhtar123@gmail.com", label: "Google" },
    ],

    // About Section
    about: {
        title: "About Me",
        bio: [
            "Flutter Developer with professional experience OF 1.5+ years in building scalable, production-ready mobile applications using Dart and Flutter. Skilled in clean MVVM architecture, State management, Firebase integration, Google AdMob integration, RESTful APIs, and deploying apps to the Google Play Store.",
            "I have worked on a wide range of projects, from simple apps to complex enterprise-level solutions. I am constantly amazed by the power and flexibility of Flutter, and I believe that it is the future of mobile app development."
        ],
        highlight: "Mobile & Web Application developer"
    },

    // Stats
    stats: [
        { number: "1.5+", label: "YEARS OF EXPERIENCE" },
        { number: "10+", label: "PROJECTS COMPLETED" },
        { number: "+7", label: "WORLDWIDE CLIENTS" }
    ],

    // Projects
    projects: [
        {
            title: "JobSite",
            description: "A full-scale Flutter-based construction management application designed for real-time collaboration and project tracking. It features role-based access control (Super Admin, Admin, and User) and integrates Google Maps to monitor ongoing work locations, along with Gantt charts for timeline visualization.",
            category: "Mobile Applications",
            icon: "https://play-lh.googleusercontent.com/6QAO101_8mN-C5xqTz8-6j3E1n8-w8g0_8j2/s180-rw",
            screenshot: "https://via.placeholder.com/300x600/FF6F00/FFFFFF?text=JobSite+App",
            links: {},
            isInternal: true,
            techStack: [
                { name: "Flutter", icon: SiFlutter, color: "#02569B" },
                { name: "Dart", icon: SiDart, color: "#0175C2" },
                { name: "GetX", icon: FaCode, color: "#7C4DFF" },
                { name: "Google Maps", icon: SiGooglemaps, color: "#4CAF50" },
                { name: "REST API", icon: FaDatabase, color: "#0288D1" },
                { name: "Firebase", icon: SiFirebase, color: "#FFCA28" }
            ],
            features: [
                {
                    title: "Construction Management",
                    icon: FaLaptopCode,
                    items: [
                        "Clean MVVM architecture for high scalability",
                        "Role-based access control (Super Admin, Admin, and User roles)",
                        "Team management per project with specific user assignments",
                        "Gantt charts for project timeline & progress tracking",
                        "Super Admin dashboard for monitoring all system activity"
                    ]
                },
                {
                    title: "Real-Time Collaboration",
                    icon: FaRocket,
                    items: [
                        "Social-media-style feeds with real-time posts & comments",
                        "Dedicated group chat within each project for team communication",
                        "Google Maps integration for live work-site location tracking",
                        "File and media management featuring work-status uploads",
                        "Comprehensive user activity visibility & project association"
                    ]
                }
            ]
        },
        {
            title: "PDF Printer App",
            description: "A professional PDF utility application that allows users to manage, scan, and edit documents on the go. Deployed in a production environment, it features Google AdMob integration for monetization and supports over 10 languages for global reach.",
            category: "Mobile Applications",
            icon: "https://play-lh.googleusercontent.com/8QAO101_8mN-C5xqTz8-6j3E1n8-w8g0_8j2/s180-rw",
            screenshot: pdfPrinterImg,
            links: { playStore: "#" },
            isInternal: false,
            techStack: [
                { name: "Flutter", icon: SiFlutter, color: "#02569B" },
                { name: "Dart", icon: SiDart, color: "#0175C2" },
                { name: "BLoC", icon: FaCode, color: "#40C4FF" },
                { name: "AdMob", icon: FaCode, color: "#EA4335" },
                { name: "Localization", icon: FaCode, color: "#4285F4" }
            ],
            features: [
                {
                    title: "Document Management",
                    icon: FaPalette,
                    items: [
                        "High-efficiency PDF compression & file management",
                        "Quick photo-to-PDF conversion with high resolution",
                        "Integrated document scanning and editing capabilities",
                        "Clean architecture with BLoC for enhanced performance",
                        "Stable production environment with focused optimization"
                    ]
                },
                {
                    title: "Enterprise Features",
                    icon: FaRocket,
                    items: [
                        "Google AdMob integration (Banner, Interstitial, App Open Ads)",
                        "Support for 10+ languages for international usability",
                        "Dark/Light mode & Adaptive UI for better accessibility",
                        "Full app lifecycle management from dev to publishing",
                        "Production support in real-world environments"
                    ]
                }
            ]
        },
        {
            title: "All-in-One Utility App",
            description: "A comprehensive multi-tool application that leverages native device features to provide a wide array of utilities. From document scanning to real-time sensors like compass and sound meters, it serves as a Swiss-army knife for mobile users.",
            category: "Mobile Applications",
            icon: "https://play-lh.googleusercontent.com/9QAO101_8mN-C5xqTz8-6j3E1n8-w8g0_8j2/s180-rw",
            screenshot: "https://via.placeholder.com/300x600/4CAF50/FFFFFF?text=Utility+App",
            links: {},
            isInternal: true,
            techStack: [
                { name: "Flutter", icon: SiFlutter, color: "#02569B" },
                { name: "Dart", icon: SiDart, color: "#0175C2" },
                { name: "BLoC", icon: FaCode, color: "#40C4FF" },
                { name: "Camera/GPS", icon: FaMobileAlt, color: "#FF6F00" },
                { name: "STT/TTS", icon: FaCode, color: "#9C27B0" },
                { name: "Sensors", icon: FaCode, color: "#00BCD4" }
            ],
            features: [
                {
                    title: "Smart Utilities",
                    icon: FaLaptopCode,
                    items: [
                        "QR Generator & Scanner, Image Compressor, Magnifier",
                        "Smart Calculator, BMI Calculator, Counter, Timezone Converter",
                        "Document Scanner with high-performance image processing",
                        "Audio recorder with sound level monitoring",
                        "Category-based intuitive UI for seamless experience"
                    ]
                },
                {
                    title: "Native Integrations",
                    icon: FaPlug,
                    items: [
                        "Low-level sensor access (Compass, Bubble Level, Accelerometer)",
                        "Speech-to-Text & Text-to-Speech multi-language support",
                        "Hardware controls for torch, vibration, and camera",
                        "Persistent user settings using Shared Preferences",
                        "Advanced permission handling for secure native access"
                    ]
                }
            ]
        },
        {
            title: "VIN Decoder App",
            description: "An essential tool for vehicle professionals and buyers, providing detailed vehicle specifications by decoding VIN (Vehicle Identification Number). It integrates REST APIs, QR scanning, and local persistence for a robust user experience.",
            category: "Mobile Applications",
            icon: "https://play-lh.googleusercontent.com/7QAO101_8mN-C5xqTz8-6j3E1n8-w8g0_8j2/s180-rw",
            screenshot: "https://via.placeholder.com/300x600/2196F3/FFFFFF?text=VIN+Decoder",
            links: {},
            isInternal: true,
            techStack: [
                { name: "Flutter", icon: SiFlutter, color: "#02569B" },
                { name: "Dart", icon: SiDart, color: "#0175C2" },
                { name: "BLoC", icon: FaCode, color: "#40C4FF" },
                { name: "Hive DB", icon: SiApachehive, color: "#FFC107" },
                { name: "REST API", icon: FaDatabase, color: "#0288D1" }
            ],
            features: [
                {
                    title: "Vehicle Identification",
                    icon: FaSearch,
                    items: [
                        "Real-time decoding using third-party automotive REST APIs",
                        "QR/VIN scanning for lightning-fast data entry",
                        "Detailed vehicle specs display including history lookup",
                        "Error mapping & validation for secure API responses",
                        "Support for multiple languages and dark theme"
                    ]
                },
                {
                    title: "Data & PDF Export",
                    icon: MdStorage,
                    items: [
                        "Local data persistence using Hive for lightning-fast access",
                        "Searchable history list of previously decoded vehicles",
                        "Professional PDF generation for sharing vehicle reports",
                        "Offline capability for accessing stored vehicle history",
                        "Compact UI with modern BLoC state management"
                    ]
                }
            ]
        },
        {
            title: "Weather App",
            description: "A highly visual weather application providing real-time forecasts and air quality metrics. It uses dynamic UI theming, automatically adjusting colors and visuals based on current local conditions and sun positioning.",
            category: "Mobile Applications",
            icon: "https://play-lh.googleusercontent.com/6QAO101_8mN-C5xqTz8-6j3E1n8-w8g0_8j2/s180-rw",
            screenshot: "https://via.placeholder.com/300x600/03A9F4/FFFFFF?text=Weather+App",
            links: {},
            isInternal: true,
            techStack: [
                { name: "Flutter", icon: SiFlutter, color: "#02569B" },
                { name: "Dart", icon: SiDart, color: "#0175C2" },
                { name: "BLoC/MVVM", icon: FaCode, color: "#7C4DFF" },
                { name: "Weather API", icon: FaDatabase, color: "#0288D1" },
                { name: "GPS/Location", icon: FaMapMarkerAlt, color: "#4CAF50" }
            ],
            features: [
                {
                    title: "Forecast Insights",
                    icon: FaSearch,
                    items: [
                        "Real-time updates with hourly and 7-day daily forecasts",
                        "Advanced metrics: AQI index, humidity, and wind speed",
                        "Animated sun position reflecting sunrise & sunset times",
                        "Location-based auto-detection with one-tap city switching",
                        "Smart city search with saved favorites for quick lookup"
                    ]
                },
                {
                    title: "User Experience",
                    icon: FaMapMarkerAlt,
                    items: [
                        "Dynamic UI colors changing based on local weather conditions",
                        "Local caching via Shared Preferences for offline data access",
                        "Clean, scalable codebase using BLoC & MVVM patterns",
                        "Optimized for high-performance and low data usage",
                        "Responsive design perfectly tailored for mobile displays"
                    ]
                }
            ]
        }
    ],

    // Expertise / Skills
    expertise: {
        title: "Tech Expertise",
        sections: [
            {
                title: "Mobile Application Development",
                icon: FaMobileAlt,
                subSections: [
                    {
                        title: "Frameworks / Languages",
                        skills: [
                            { name: "Flutter", icon: SiFlutter, color: "#02569B" },
                            { name: "Dart", icon: SiDart, color: "#0175C2" },
                            { name: "FlutterFlow", icon: SiFlutter, color: "#42A5F5" }, // FlutterFlow icon similar to Flutter
                            { name: "Android Native", icon: FaMobileAlt, color: "#3DDC84" },
                            { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
                            { name: "iOS Native", icon: FaMobileAlt, color: "#000000" },
                            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
                            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" }
                        ]
                    },
                    {
                        title: "State Management",
                        skills: [
                            { name: "Provider", icon: FaCode, color: "#00E5FF" }, // Generic code icon for packages
                            { name: "BLoC", icon: FaCode, color: "#40C4FF" },
                            { name: "GetX", icon: FaCode, color: "#7C4DFF" },
                            { name: "Riverpod", icon: FaCode, color: "#448AFF" }
                        ]
                    },
                    {
                        title: "Plugins",
                        skills: [
                            { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
                            { name: "OneSignal Notifications", icon: MdNotificationsActive, color: "#e61c1c" },
                            { name: "In-App-Purchase", icon: MdShoppingCart, color: "#8E24AA" },
                            { name: "Google Map", icon: SiGooglemaps, color: "#4CAF50" },
                            { name: "Social Login", icon: MdLogin, color: "#039BE5" },
                            { name: "Notifications", icon: MdNotificationsActive, color: "#FBC02D" },
                            { name: "Injectable", icon: FaPlug, color: "#607D8B" },
                            { name: "Json Serializable", icon: FaCode, color: "#8D6E63" }
                        ]
                    },
                    {
                        title: "API Service",
                        skills: [
                            { name: "REST API", icon: FaDatabase, color: "#0288D1" },
                            { name: "GraphQL", icon: SiGraphql, color: "#E10098" }
                        ]
                    }
                ]
            },
            {
                title: "Backend & Database",
                icon: FaDatabase,
                subSections: [
                    {
                        title: "Payment Gateway",
                        skills: [
                            { name: "Razorpay", icon: SiRazorpay, color: "#3395FF" },
                            { name: "Stripe", icon: FaCcStripe, color: "#635BFF" },
                            { name: "In App Purchase", icon: MdPayment, color: "#FBC02D" },
                            { name: "Braintree", icon: SiBraintree, color: "#FFFFFF" },
                            { name: "Google Pay", icon: FaGooglePay, color: "#FFFFFF" }
                        ]
                    },
                    {
                        title: "Database",
                        skills: [
                            { name: "Local Storage", icon: MdStorage, color: "#9E9E9E" },
                            { name: "Sqlite", icon: SiSqlite, color: "#003B57" },
                            { name: "Firebase Firestore", icon: SiFirebase, color: "#FFCA28" },
                            { name: "Realtime Database", icon: SiFirebase, color: "#FFCA28" },
                            { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
                            { name: "Hive", icon: SiApachehive, color: "#FF6F00" },
                            { name: "ObjectBox", icon: FaDatabase, color: "#FF0090" }
                        ]
                    }
                ]
            },
            {
                title: "DevOps & Quality Assurance",
                icon: MdBugReport,
                subSections: [
                    {
                        title: "Crash Reporting",
                        skills: [
                            { name: "Firebase Crashlytics", icon: SiFirebase, color: "#FFCA28" },
                            { name: "Sentry", icon: SiSentry, color: "#362D59" }
                        ]
                    },
                    {
                        title: "Testing",
                        skills: [
                            { name: "Widget Tests", icon: MdCheckCircle, color: "#4CAF50" },
                            { name: "Unit Tests", icon: MdCheckCircle, color: "#8BC34A" },
                            { name: "Integration Tests", icon: MdCheckCircle, color: "#009688" }
                        ]
                    },
                    {
                        title: "Deployment",
                        skills: [
                            { name: "Google Play Store", icon: FaGooglePlay, color: "#4CAF50" },
                            { name: "App Store", icon: FaAppStore, color: "#007AFF" },
                            { name: "Web", icon: MdCloudUpload, color: "#039BE5" },
                            { name: "Microsoft Store", icon: FaWindows, color: "#0078D7" },
                            { name: "Linux", icon: SiLinux, color: "#FCC624" }
                        ]
                    },
                    {
                        title: "Code Review & quality",
                        skills: [
                            { name: "Flutter Analyze", icon: MdRateReview, color: "#02569B" },
                            { name: "Effective Dart", icon: MdCheckCircle, color: "#0175C2" },
                            { name: "Pana", icon: MdCheckCircle, color: "#4CAF50" }
                        ]
                    },
                    {
                        title: "Version Control",
                        skills: [
                            { name: "Git", icon: FaGit, color: "#F05032" },
                            { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
                            { name: "BitBucket", icon: FaBitbucket, color: "#0052CC" }
                        ]
                    }
                ]
            },
            {
                title: "Tools & Workflow",
                icon: FaTools,
                subSections: [
                    {
                        title: "Tools & Utilities",
                        skills: [
                            { name: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84" },
                            { name: "VS Code", icon: VscVscode, color: "#007ACC" },
                            { name: "XCode", icon: SiXcode, color: "#147EFB" },
                            { name: "Postman", icon: SiPostman, color: "#FF6C37" }
                        ]
                    },
                    {
                        title: "Project Management",
                        skills: [
                            { name: "Asana", icon: SiAsana, color: "#273347" },
                            { name: "Slack", icon: SiSlack, color: "#4A154B" },
                            { name: "Jira", icon: SiJira, color: "#0052CC" },
                            { name: "Trello", icon: SiTrello, color: "#0079BF" }
                        ]
                    },
                    {
                        title: "UI/UX Designing",
                        skills: [
                            { name: "Figma", icon: SiFigma, color: "#F24E1E" },
                            { name: "Framer", icon: SiFramer, color: "#0055FF" },
                            { name: "Whimsical", icon: FaPalette, color: "#E01E5A" }
                        ]
                    },
                    {
                        title: "Upgrade Services",
                        skills: [
                            { name: "Puro", icon: MdUpdate, color: "#4CAF50" },
                            { name: "FVM", icon: FaTools, color: "#0175C2" }
                        ]
                    }
                ]
            }
        ]
    },

    // Resume Section
    resume: {
        title: "Resume",
        experience: [
            {
                title: "Jr. Flutter Developer",
                company: "Micro Web Solutions",
                date: "June 2024 — Present (1.5+ Years)",
                description: "Built and maintained multiple production Flutter applications using Dart, following clean MVVM architecture and modern state management practices. Delivered full-feature apps with REST APIs, Firebase (Auth, Realtime DB, Push Notifications), Google AdMob, real-time chat, media handling, social feeds, and Google Maps & location services. Managed end-to-end app lifecycle, including testing, optimization, Play Store deployment, and production support in real-world environments."
            },
            {
                title: "Web Developer Intern",
                company: "SwissMax Solutions",
                date: "April 2024 — May 2024",
                description: "Developed responsive user interfaces using HTML, CSS, and JavaScript. Collaborated with senior developers to implement UI designs and fix bugs. Improved website performance and learned real-world web development workflows."
            }
        ],
        skills: [
            { name: "Flutter", percentage: 85 },
            { name: "Dart", percentage: 80 },
            { name: "Java", percentage: 70 },
            { name: "MS Word, MS PowerPoint, G Docs, G Slides", percentage: 100 },
            { name: "MS Excel, Google Sheets,", percentage: 70 },
            { name: "Git / GitHub", percentage: 90 },
            { name: "C/C++", percentage: 90 },
            { name: "Blockchain", percentage: 10 }
        ]
    },

    // Strategies / Services
    strategies: [
        {
            icon: FaSearch,
            color: "#90CAF9",
            title: "Planning & Strategy",
            description: "I analyze your goals, target users, and key features to create a roadmap for your app's success."
        },
        {
            icon: FaPalette,
            color: "#FFCC80",
            title: "Pixel-Perfect UI/UX Design",
            description: "I create intuitive, visually appealing, and user-friendly interfaces that enhance engagement and usability."
        },
        {
            icon: FaLaptopCode,
            color: "#80CBC4",
            title: "Efficient Development & Seamless Integration",
            description: "I build high-performance, scalable applications with clean, maintainable code. I integrate essential features like API connections, third-party services, and IAP to enhance functionality."
        },
        {
            icon: FaRocket,
            color: "#EF9A9A",
            title: "Launch & Post-Launch Support",
            description: "I ensure a hassle-free deployment and provide ongoing updates, optimizations, and support to keep your app running flawlessly."
        }
    ],

    // CTA Section
    cta: {
        title: "Ready to Turn Your Idea Into Reality?",
        text: "Whether you have a groundbreaking app idea or need a skilled developer to elevate your existing project, I'm here to help. Let's build something world-class together.",
        buttonText: "Let's Connect 🚀"
    }
};
