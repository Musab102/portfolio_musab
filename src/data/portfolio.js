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

export const portfolioData = {
    // Personal Information
    personal: {
        name: "Musab Bin Mukhtar",
        role: "Flutter Developer",
        email: "musabbinmukhtar123@gmail.com",
        location: "Islamabad, Pakistan",
        avatar: "https://ui-avatars.com/api/?name=Musab+Bin+Mukhtar&background=random"
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
        { icon: FaTwitter, url: "https://twitter.com/", label: "Twitter" },
        { icon: FaLinkedin, url: "https://linkedin.com/", label: "LinkedIn" },
        { icon: FaGoogle, url: "mailto:musabbinmukhtar123@gmail.com", label: "Google" },
        { icon: FaCodepen, url: "#", label: "CodePen" },
        { icon: FaDribbble, url: "#", label: "Dribbble" }
    ],

    // About Section
    about: {
        title: "About Me",
        bio: [
            "I'm a Mobile & Web Application developer with 3+ years of experience; I develop software using extraordinary abilities, strategy, and design to meet any obstacle.",
            "I have worked on a wide range of projects, from simple apps to complex enterprise-level solutions. I am constantly amazed by the power and flexibility of Flutter, and I believe that it is the future of mobile app development."
        ],
        highlight: "Mobile & Web Application developer"
    },

    // Stats
    stats: [
        { number: "+3", label: "YEARS OF EXPERIENCE" },
        { number: "+15", label: "PROJECTS COMPLETED" },
        { number: "+7", label: "WORLDWIDE CLIENTS" }
    ],

    // Projects
    projects: [
        {
            title: "PDF Printer App",
            description: "Smart PDF Printing & Scanning Utility",
            icon: "https://play-lh.googleusercontent.com/6QAO101_8mN-C5xqTz8-6j3E1n8-w8g0_8j2/s180-rw",
            screenshot: pdfPrinterImg,
            links: { appStore: "#", playStore: "#", web: "#" },
            isInternal: false
        },
        {
            title: "GIFT Utilities",
            description: "Utility Billing and Customer Service System for the Government of India",
            icon: "https://play-lh.googleusercontent.com/8QAO101_8mN-C5xqTz8-6j3E1n8-w8g0_8j2/s180-rw",
            screenshot: "https://via.placeholder.com/300x600/121212/FFFFFF?text=GIFT+App+Screen",
            links: { appStore: "#", playStore: "#", web: "#" },
            isInternal: false
        },
        {
            title: "Enbiosis",
            description: "AI-Powered Personalized Healthcare, Microbiome & Nutrition App",
            icon: "https://play-lh.googleusercontent.com/9QAO101_8mN-C5xqTz8-6j3E1n8-w8g0_8j2/s180-rw",
            screenshot: "https://via.placeholder.com/300x600/E0F7FA/006064?text=Enbiosis+Screen",
            links: { appStore: "#", playStore: "#", web: "#" },
            isInternal: false
        },
        {
            title: "Virtual Ref",
            description: "AI-Driven Fitness & Pose Detection App",
            icon: "https://play-lh.googleusercontent.com/7QAO101_8mN-C5xqTz8-6j3E1n8-w8g0_8j2/s180-rw",
            screenshot: "https://via.placeholder.com/300x600/212121/FFD700?text=Virtual+Ref+Screen",
            links: {},
            isInternal: true
        },
        {
            title: "BasRecovery",
            description: "On-Demand Roadside Help App Drivers Across the UAE",
            icon: "https://play-lh.googleusercontent.com/6QAO101_8mN-C5xqTz8-6j3E1n8-w8g0_8j2/s180-rw",
            screenshot: "https://via.placeholder.com/300x600/FFFFFF/FF9800?text=BasRecovery+Screen",
            links: { appStore: "#", playStore: "#", web: "#" },
            isInternal: false
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
                title: "Flutter Mentor",
                company: "Bigscal Technologies Pvt. Ltd",
                date: "Jan 2024 — Present",
                description: "As a Flutter mentor, I facilitate the trainee's proficiency in cross-platform mobile app development by imparting knowledge, offering hands-on coding assistance, and guiding the construction of efficient Flutter applications to foster their competence and confidence."
            },
            {
                title: "Flutter Developer",
                company: "Bigscal Technologies Pvt. Ltd",
                date: "July 2023 — Present",
                description: "worked over Project like GIFT City Project Application Lead"
            },
            {
                title: "Flutter Developer And Tech Educator",
                company: "SK Computer Academy",
                date: "April 2021 — July 2023",
                description: "worked over technologies like Java , C++ , C , and Microsoft Office"
            },
            {
                title: "Intern",
                company: "CreArt Solutions",
                date: "Jan 2021 — Apr 2021",
                description: "Gained hands-on experience in mobile application development fundamentals."
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
