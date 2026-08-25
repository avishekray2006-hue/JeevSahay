import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const translations = {
  en: {
    // Navbar
    home: "Home",
    report: "Report SOS",
    map: "Rescue Map",
    directory: "Directory",
    profile: "Profile",
    contact: "Contact",
    call: "Call",
    tagline: "Rescue • Shelter • Support",

    // Home
    indiaNetwork: "INDIA'S ANIMAL RESCUE NETWORK",
    homeTitle: "Reach Your Hand To Welfare Abandoned Animals Out There",
    rescueCenters: "Rescue Centers Listed",
    activeSOS: "Active SOS Reports",
    casesResolved: "Cases Resolved",

    // Report
    animalRescueReport: "ANIMAL RESCUE REPORT",
    reportTitle: "Report SOS with real location, real urgency, and real proof.",
    reportDescription:
      "Give us the animal type, exact location, condition, and evidence so rescue teams can act faster.",
    gettingLocation: "Getting your exact location...",
    accuracy: "ACCURACY",
    approximateLocation: "Approximate location",

    // Map
    rescueMapHelp: "Rescue Map • Real help nearby",
    mapTitle: "Find nearby NGOs, shelters, hospitals, and rescue teams",
    mapDescription:
      "Injury, abandonment, accident, emergency rescue — yahan se nearest verified help center jaldi dekho, call karo, directions kholo, aur animal ko time par support do.",
    refreshLocation: "Refresh exact location",
    favoritesOnly: "Favorites only",
    locationStatus: "LOCATION STATUS",
    active: "Active",
    searchRadius: "SEARCH RADIUS",
    visibleCenters: "VISIBLE CENTERS",

    // Directory
    verifiedDirectory: "Verified directory starter",
    directoryTitle: "State & District Rescue Directory",
    directoryDescription:
      "AWBI-recognized organizations ko state, district, aur category ke hisaab se filter karo.",
    searchPlaceholder: "Search by name, place, address...",
    results: "Results",
    verifiedBase: "Verified Base",
    ngo: "NGO",

    // Profile
    rescueDashboard: "Rescue dashboard",
    myProfile: "My Profile",
    profileDescription:
      "Your rescue history and favourite NGOs, hospitals, and shelter centers — saved on this device.",
    openMap: "Open map",
    myRescues: "My Rescues",
    favouriteCenters: "Favourite Centers",
    totalRescues: "TOTAL RESCUES",
    criticalCases: "CRITICAL CASES",
    highPriority: "HIGH PRIORITY",

    // Contact
    contactBadge: "Cow care • rescue partnerships • real contacts",
    contactTitle: "Contact JeevSahay",
    contactDescription:
      "NGO onboarding, hospital partnerships, rescue support updates, ya platform issues — yahan se direct connect karo.",
    emailNow: "Email now",
    whatsapp: "WhatsApp",
    publicContacts: "PUBLIC SUPPORT CONTACTS",
    primaryCity: "PRIMARY CITY",
    coverageFocus: "COVERAGE FOCUS",
  },

  hi: {
    home: "होम",
    report: "SOS रिपोर्ट",
    map: "रेस्क्यू मैप",
    directory: "डायरेक्टरी",
    profile: "प्रोफ़ाइल",
    contact: "संपर्क",
    call: "कॉल",
    tagline: "बचाव • आश्रय • सहायता",

    indiaNetwork: "भारत का पशु बचाव नेटवर्क",
    homeTitle: "लावारिस और जरूरतमंद पशुओं तक अपनी मदद पहुँचाएँ",
    rescueCenters: "सूचीबद्ध रेस्क्यू सेंटर",
    activeSOS: "सक्रिय SOS रिपोर्ट",
    casesResolved: "समाधान किए गए मामले",

    animalRescueReport: "पशु बचाव रिपोर्ट",
    reportTitle: "वास्तविक स्थान, वास्तविक आपातकाल और वास्तविक प्रमाण के साथ SOS रिपोर्ट करें।",
    reportDescription:
      "पशु का प्रकार, सही स्थान, स्थिति और प्रमाण दें ताकि रेस्क्यू टीम जल्दी कार्रवाई कर सके।",
    gettingLocation: "आपका सही स्थान प्राप्त किया जा रहा है...",
    accuracy: "सटीकता",
    approximateLocation: "अनुमानित स्थान",

    rescueMapHelp: "रेस्क्यू मैप • आपके पास वास्तविक सहायता",
    mapTitle: "पास के NGO, आश्रय, अस्पताल और रेस्क्यू टीम खोजें",
    mapDescription:
      "चोट, लावारिस पशु, दुर्घटना या आपातकालीन रेस्क्यू के लिए पास के सत्यापित सहायता केंद्र देखें।",
    refreshLocation: "सही स्थान अपडेट करें",
    favoritesOnly: "केवल पसंदीदा",
    locationStatus: "स्थान की स्थिति",
    active: "सक्रिय",
    searchRadius: "सर्च रेडियस",
    visibleCenters: "दिखाई देने वाले केंद्र",

    verifiedDirectory: "सत्यापित डायरेक्टरी",
    directoryTitle: "राज्य और जिला रेस्क्यू डायरेक्टरी",
    directoryDescription:
      "AWBI द्वारा मान्यता प्राप्त संस्थाओं को राज्य, जिले और श्रेणी के अनुसार खोजें।",
    searchPlaceholder: "नाम, स्थान, पता खोजें...",
    results: "परिणाम",
    verifiedBase: "सत्यापित केंद्र",
    ngo: "NGO",

    rescueDashboard: "रेस्क्यू डैशबोर्ड",
    myProfile: "मेरी प्रोफ़ाइल",
    profileDescription:
      "आपका रेस्क्यू इतिहास और पसंदीदा NGO, अस्पताल और शेल्टर इस डिवाइस पर सेव हैं।",
    openMap: "मैप खोलें",
    myRescues: "मेरे रेस्क्यू",
    favouriteCenters: "पसंदीदा केंद्र",
    totalRescues: "कुल रेस्क्यू",
    criticalCases: "गंभीर मामले",
    highPriority: "उच्च प्राथमिकता",

    contactBadge: "गायों की देखभाल • रेस्क्यू साझेदारी • वास्तविक संपर्क",
    contactTitle: "JeevSahay से संपर्क करें",
    contactDescription:
      "NGO, अस्पताल साझेदारी, रेस्क्यू सहायता या प्लेटफॉर्म से जुड़ी समस्या के लिए सीधे संपर्क करें।",
    emailNow: "ईमेल करें",
    whatsapp: "WhatsApp",
    publicContacts: "सार्वजनिक सहायता संपर्क",
    primaryCity: "मुख्य शहर",
    coverageFocus: "सहायता क्षेत्र",
  },

  mr: {
    home: "मुख्यपृष्ठ",
    report: "SOS अहवाल",
    map: "रेस्क्यू नकाशा",
    directory: "डिरेक्टरी",
    profile: "प्रोफाइल",
    contact: "संपर्क",
    call: "कॉल",
    tagline: "बचाव • निवारा • मदत",

    indiaNetwork: "भारताचे प्राणी बचाव नेटवर्क",
    homeTitle: "गरजू आणि बेवारस प्राण्यांपर्यंत मदतीचा हात पोहोचवा",
    rescueCenters: "नोंदणीकृत रेस्क्यू सेंटर",
    activeSOS: "सक्रिय SOS अहवाल",
    casesResolved: "निकाली काढलेली प्रकरणे",

    animalRescueReport: "प्राणी बचाव अहवाल",
    reportTitle: "अचूक स्थान, आपत्कालीन स्थिती आणि पुराव्यासह SOS अहवाल करा.",
    reportDescription:
      "प्राण्याचा प्रकार, अचूक स्थान, स्थिती आणि पुरावे द्या.",
    gettingLocation: "तुमचे अचूक स्थान मिळवत आहे...",
    accuracy: "अचूकता",
    approximateLocation: "अंदाजे स्थान",

    rescueMapHelp: "रेस्क्यू नकाशा • जवळची मदत",
    mapTitle: "जवळील NGO, निवारे, रुग्णालये आणि रेस्क्यू टीम शोधा",
    mapDescription:
      "जखम, अपघात किंवा आपत्कालीन बचावासाठी जवळील मदत केंद्र शोधा.",
    refreshLocation: "अचूक स्थान अपडेट करा",
    favoritesOnly: "फक्त आवडते",
    locationStatus: "स्थान स्थिती",
    active: "सक्रिय",
    searchRadius: "शोध त्रिज्या",
    visibleCenters: "दिसणारी केंद्रे",

    verifiedDirectory: "सत्यापित डिरेक्टरी",
    directoryTitle: "राज्य आणि जिल्हा रेस्क्यू डिरेक्टरी",
    directoryDescription:
      "राज्य, जिल्हा आणि श्रेणीनुसार संस्थांचा शोध घ्या.",
    searchPlaceholder: "नाव, ठिकाण, पत्ता शोधा...",
    results: "परिणाम",
    verifiedBase: "सत्यापित केंद्र",
    ngo: "NGO",

    rescueDashboard: "रेस्क्यू डॅशबोर्ड",
    myProfile: "माझे प्रोफाइल",
    profileDescription:
      "तुमचा रेस्क्यू इतिहास आणि आवडते NGO, रुग्णालये आणि निवारे.",
    openMap: "नकाशा उघडा",
    myRescues: "माझे रेस्क्यू",
    favouriteCenters: "आवडती केंद्रे",
    totalRescues: "एकूण रेस्क्यू",
    criticalCases: "गंभीर प्रकरणे",
    highPriority: "उच्च प्राधान्य",

    contactBadge: "प्राणी काळजी • रेस्क्यू भागीदारी • संपर्क",
    contactTitle: "JeevSahay शी संपर्क करा",
    contactDescription:
      "NGO, रुग्णालय भागीदारी आणि रेस्क्यू सहाय्यासाठी संपर्क करा.",
    emailNow: "ईमेल करा",
    whatsapp: "WhatsApp",
    publicContacts: "सार्वजनिक सहाय्य संपर्क",
    primaryCity: "मुख्य शहर",
    coverageFocus: "सहाय्य क्षेत्र",
  },

  bn: {
    home: "হোম",
    report: "SOS রিপোর্ট",
    map: "রেসকিউ ম্যাপ",
    directory: "ডিরেক্টরি",
    profile: "প্রোফাইল",
    contact: "যোগাযোগ",
    call: "কল",
    tagline: "উদ্ধার • আশ্রয় • সহায়তা",

    indiaNetwork: "ভারতের প্রাণী উদ্ধার নেটওয়ার্ক",
    homeTitle: "পরিত্যক্ত ও অসহায় প্রাণীদের কাছে সাহায্যের হাত পৌঁছে দিন",
    rescueCenters: "তালিকাভুক্ত রেসকিউ সেন্টার",
    activeSOS: "সক্রিয় SOS রিপোর্ট",
    casesResolved: "সমাধান করা কেস",

    animalRescueReport: "প্রাণী উদ্ধার রিপোর্ট",
    reportTitle: "সঠিক অবস্থান, জরুরি অবস্থা এবং প্রমাণসহ SOS রিপোর্ট করুন।",
    reportDescription:
      "প্রাণীর ধরন, অবস্থান, অবস্থা এবং প্রমাণ দিন।",
    gettingLocation: "আপনার সঠিক অবস্থান নেওয়া হচ্ছে...",
    accuracy: "নির্ভুলতা",
    approximateLocation: "আনুমানিক অবস্থান",

    rescueMapHelp: "রেসকিউ ম্যাপ • কাছাকাছি সাহায্য",
    mapTitle: "কাছাকাছি NGO, আশ্রয়কেন্দ্র, হাসপাতাল এবং রেসকিউ টিম খুঁজুন",
    mapDescription:
      "আঘাত, দুর্ঘটনা বা জরুরি উদ্ধারের জন্য কাছাকাছি সাহায্য কেন্দ্র খুঁজুন।",
    refreshLocation: "সঠিক অবস্থান আপডেট করুন",
    favoritesOnly: "শুধু পছন্দের",
    locationStatus: "অবস্থানের স্ট্যাটাস",
    active: "সক্রিয়",
    searchRadius: "সার্চ রেডিয়াস",
    visibleCenters: "দৃশ্যমান কেন্দ্র",

    verifiedDirectory: "ভেরিফাইড ডিরেক্টরি",
    directoryTitle: "রাজ্য ও জেলা রেসকিউ ডিরেক্টরি",
    directoryDescription:
      "রাজ্য, জেলা এবং ক্যাটাগরি অনুযায়ী প্রতিষ্ঠান খুঁজুন।",
    searchPlaceholder: "নাম, স্থান, ঠিকানা খুঁজুন...",
    results: "ফলাফল",
    verifiedBase: "ভেরিফাইড সেন্টার",
    ngo: "NGO",

    rescueDashboard: "রেসকিউ ড্যাশবোর্ড",
    myProfile: "আমার প্রোফাইল",
    profileDescription:
      "আপনার রেসকিউ ইতিহাস এবং পছন্দের NGO, হাসপাতাল ও আশ্রয়কেন্দ্র।",
    openMap: "ম্যাপ খুলুন",
    myRescues: "আমার রেসকিউ",
    favouriteCenters: "পছন্দের কেন্দ্র",
    totalRescues: "মোট রেসকিউ",
    criticalCases: "গুরুতর কেস",
    highPriority: "উচ্চ অগ্রাধিকার",

    contactBadge: "প্রাণী যত্ন • রেসকিউ পার্টনারশিপ • যোগাযোগ",
    contactTitle: "JeevSahay-এ যোগাযোগ করুন",
    contactDescription:
      "NGO, হাসপাতাল এবং রেসকিউ সহায়তার জন্য সরাসরি যোগাযোগ করুন।",
    emailNow: "ইমেইল করুন",
    whatsapp: "WhatsApp",
    publicContacts: "পাবলিক সাপোর্ট কন্টাক্ট",
    primaryCity: "প্রধান শহর",
    coverageFocus: "সহায়তার ক্ষেত্র",
  },

  ta: {
    home: "முகப்பு",
    report: "SOS அறிக்கை",
    map: "மீட்பு வரைபடம்",
    directory: "அடைவு",
    profile: "சுயவிவரம்",
    contact: "தொடர்பு",
    call: "அழைப்பு",
    tagline: "மீட்பு • தங்குமிடம் • ஆதரவு",

    indiaNetwork: "இந்திய விலங்கு மீட்பு வலைப்பின்னல்",
    homeTitle: "கைவிடப்பட்ட மற்றும் தேவைப்படும் விலங்குகளுக்கு உதவிக்கரம் நீட்டுங்கள்",
    rescueCenters: "பட்டியலிடப்பட்ட மீட்பு மையங்கள்",
    activeSOS: "செயலில் உள்ள SOS அறிக்கைகள்",
    casesResolved: "தீர்க்கப்பட்ட வழக்குகள்",

    animalRescueReport: "விலங்கு மீட்பு அறிக்கை",
    reportTitle: "உண்மையான இடம், அவசரம் மற்றும் ஆதாரத்துடன் SOS அறிக்கை செய்யுங்கள்.",
    reportDescription:
      "விலங்கின் வகை, சரியான இடம், நிலை மற்றும் ஆதாரத்தை வழங்குங்கள்.",
    gettingLocation: "உங்கள் சரியான இடத்தைப் பெறுகிறது...",
    accuracy: "துல்லியம்",
    approximateLocation: "தோராயமான இடம்",

    rescueMapHelp: "மீட்பு வரைபடம் • அருகிலுள்ள உதவி",
    mapTitle: "அருகிலுள்ள NGO, தங்குமிடங்கள், மருத்துவமனைகள் மற்றும் மீட்பு குழுக்களை கண்டறியுங்கள்",
    mapDescription:
      "காயம், விபத்து அல்லது அவசர மீட்புக்கு அருகிலுள்ள உதவி மையங்களை கண்டறியுங்கள்.",
    refreshLocation: "சரியான இடத்தை புதுப்பிக்கவும்",
    favoritesOnly: "பிடித்தவை மட்டும்",
    locationStatus: "இருப்பிட நிலை",
    active: "செயலில்",
    searchRadius: "தேடல் தூரம்",
    visibleCenters: "காணக்கூடிய மையங்கள்",

    verifiedDirectory: "சரிபார்க்கப்பட்ட அடைவு",
    directoryTitle: "மாநில மற்றும் மாவட்ட மீட்பு அடைவு",
    directoryDescription:
      "மாநிலம், மாவட்டம் மற்றும் வகை அடிப்படையில் நிறுவனங்களை தேடுங்கள்.",
    searchPlaceholder: "பெயர், இடம், முகவரி தேடுங்கள்...",
    results: "முடிவுகள்",
    verifiedBase: "சரிபார்க்கப்பட்ட மையம்",
    ngo: "NGO",

    rescueDashboard: "மீட்பு டாஷ்போர்டு",
    myProfile: "எனது சுயவிவரம்",
    profileDescription:
      "உங்கள் மீட்பு வரலாறு மற்றும் பிடித்த NGO, மருத்துவமனைகள் மற்றும் தங்குமிடங்கள்.",
    openMap: "வரைபடத்தை திறக்கவும்",
    myRescues: "எனது மீட்புகள்",
    favouriteCenters: "பிடித்த மையங்கள்",
    totalRescues: "மொத்த மீட்புகள்",
    criticalCases: "முக்கியமான வழக்குகள்",
    highPriority: "அதிக முன்னுரிமை",

    contactBadge: "விலங்கு பராமரிப்பு • மீட்பு கூட்டாண்மை • தொடர்புகள்",
    contactTitle: "JeevSahay-ஐ தொடர்பு கொள்ளுங்கள்",
    contactDescription:
      "NGO, மருத்துவமனை மற்றும் மீட்பு உதவிக்காக நேரடியாக தொடர்பு கொள்ளுங்கள்.",
    emailNow: "மின்னஞ்சல்",
    whatsapp: "WhatsApp",
    publicContacts: "பொது உதவி தொடர்புகள்",
    primaryCity: "முக்கிய நகரம்",
    coverageFocus: "உதவி பகுதி",
  },

  te: {
    home: "హోమ్",
    report: "SOS నివేదిక",
    map: "రెస్క్యూ మ్యాప్",
    directory: "డైరెక్టరీ",
    profile: "ప్రొఫైల్",
    contact: "సంప్రదించండి",
    call: "కాల్",
    tagline: "రక్షణ • ఆశ్రయం • సహాయం",

    indiaNetwork: "భారత జంతు రక్షణ నెట్‌వర్క్",
    homeTitle: "వదిలివేయబడిన మరియు అవసరమైన జంతువులకు సహాయం చేయండి",
    rescueCenters: "నమోదు చేయబడిన రక్షణ కేంద్రాలు",
    activeSOS: "యాక్టివ్ SOS నివేదికలు",
    casesResolved: "పరిష్కరించిన కేసులు",

    animalRescueReport: "జంతు రక్షణ నివేదిక",
    reportTitle: "నిజమైన స్థానం, అత్యవసర పరిస్థితి మరియు ఆధారాలతో SOS నివేదిక చేయండి.",
    reportDescription:
      "జంతువు రకం, ఖచ్చితమైన స్థానం, పరిస్థితి మరియు ఆధారాలను అందించండి.",
    gettingLocation: "మీ ఖచ్చితమైన స్థానాన్ని పొందుతోంది...",
    accuracy: "ఖచ్చితత్వం",
    approximateLocation: "అంచనా స్థానం",

    rescueMapHelp: "రెస్క్యూ మ్యాప్ • సమీప సహాయం",
    mapTitle: "సమీపంలోని NGOలు, ఆశ్రయాలు, ఆసుపత్రులు మరియు రక్షణ బృందాలను కనుగొనండి",
    mapDescription:
      "గాయం, ప్రమాదం లేదా అత్యవసర రక్షణ కోసం సమీప సహాయ కేంద్రాలను కనుగొనండి.",
    refreshLocation: "ఖచ్చితమైన స్థానాన్ని రిఫ్రెష్ చేయండి",
    favoritesOnly: "ఇష్టమైనవి మాత్రమే",
    locationStatus: "స్థానం స్థితి",
    active: "యాక్టివ్",
    searchRadius: "శోధన పరిధి",
    visibleCenters: "కనిపించే కేంద్రాలు",

    verifiedDirectory: "ధృవీకరించబడిన డైరెక్టరీ",
    directoryTitle: "రాష్ట్ర మరియు జిల్లా రక్షణ డైరెక్టరీ",
    directoryDescription:
      "రాష్ట్రం, జిల్లా మరియు కేటగిరీ ఆధారంగా సంస్థలను కనుగొనండి.",
    searchPlaceholder: "పేరు, ప్రదేశం, చిరునామా వెతకండి...",
    results: "ఫలితాలు",
    verifiedBase: "ధృవీకరించబడిన కేంద్రం",
    ngo: "NGO",

    rescueDashboard: "రెస్క్యూ డ్యాష్‌బోర్డ్",
    myProfile: "నా ప్రొఫైల్",
    profileDescription:
      "మీ రక్షణ చరిత్ర మరియు ఇష్టమైన NGOలు, ఆసుపత్రులు మరియు ఆశ్రయాలు.",
    openMap: "మ్యాప్ తెరవండి",
    myRescues: "నా రక్షణలు",
    favouriteCenters: "ఇష్టమైన కేంద్రాలు",
    totalRescues: "మొత్తం రక్షణలు",
    criticalCases: "తీవ్రమైన కేసులు",
    highPriority: "అధిక ప్రాధాన్యత",

    contactBadge: "జంతు సంరక్షణ • రక్షణ భాగస్వామ్యాలు • నిజమైన పరిచయాలు",
    contactTitle: "JeevSahay ను సంప్రదించండి",
    contactDescription:
      "NGO, ఆసుపత్రి భాగస్వామ్యాలు మరియు రక్షణ సహాయం కోసం సంప్రదించండి.",
    emailNow: "ఇమెయిల్ చేయండి",
    whatsapp: "WhatsApp",
    publicContacts: "పబ్లిక్ సపోర్ట్ కాంటాక్ట్స్",
    primaryCity: "ప్రధాన నగరం",
    coverageFocus: "సహాయ ప్రాంతం",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  const changeLanguage = (newLanguage) => {
    localStorage.setItem("language", newLanguage);
    setLanguage(newLanguage);
  };

  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: changeLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}