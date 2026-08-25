import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const supportPhone = "9522752780";
const supportEmail = "avishekray2006@gmail.com";

const cowBg =
  "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=1200";

// =====================================================
// TRANSLATIONS
// =====================================================

const translations = {
  en: {
    rescueSupport: "rescue support",
    callNow: "Call now",

    description:
      "Our goal is to connect fast local help for injured, abandoned, and emergency animal cases.",

    emailSupport: "Email support",

    quickLinks: "Quick links",
    home: "Home",
    report: "Report SOS",
    map: "Rescue Map",
    contact: "Contact",

    support: "Support",
    callSupport: "Call support",
    myProfile: "My profile",
    savedNGOs: "Saved NGOs",

    partners: "Partners",
    partnerDescription:
      "Are you an NGO, shelter, hospital, or rescue team? Contact us for onboarding and listing.",

    registerNow: "Register now",

    copyright:
      "© 2026 JeevSahay — Voice for every voiceless.",

    bottomText:
      "Built for rescue speed, trust, and real support.",
  },

  hi: {
    rescueSupport: "बचाव सहायता",
    callNow: "अभी कॉल करें",

    description:
      "घायल, छोड़े गए और आपातकालीन पशु मामलों के लिए तेज़ स्थानीय सहायता से जोड़ना हमारा लक्ष्य है।",

    emailSupport: "ईमेल सहायता",

    quickLinks: "त्वरित लिंक",
    home: "होम",
    report: "SOS रिपोर्ट",
    map: "रेस्क्यू मैप",
    contact: "संपर्क",

    support: "सहायता",
    callSupport: "सहायता के लिए कॉल करें",
    myProfile: "मेरी प्रोफ़ाइल",
    savedNGOs: "सेव किए गए NGO",

    partners: "साझेदार",
    partnerDescription:
      "क्या आप NGO, शेल्टर, अस्पताल या रेस्क्यू टीम हैं? ऑनबोर्डिंग और लिस्टिंग के लिए हमसे संपर्क करें।",

    registerNow: "अभी रजिस्टर करें",

    copyright:
      "© 2026 JeevSahay — हर बेज़ुबान की आवाज़।",

    bottomText:
      "तेज़ बचाव, भरोसे और वास्तविक सहायता के लिए बनाया गया।",
  },

  mr: {
    rescueSupport: "बचाव मदत",
    callNow: "आता कॉल करा",

    description:
      "जखमी, सोडून दिलेल्या आणि आपत्कालीन प्राण्यांच्या प्रकरणांसाठी जलद स्थानिक मदत जोडणे हे आमचे उद्दिष्ट आहे.",

    emailSupport: "ईमेल मदत",

    quickLinks: "त्वरित लिंक",
    home: "मुख्यपृष्ठ",
    report: "SOS अहवाल",
    map: "रेस्क्यू नकाशा",
    contact: "संपर्क",

    support: "मदत",
    callSupport: "मदतीसाठी कॉल करा",
    myProfile: "माझे प्रोफाइल",
    savedNGOs: "जतन केलेले NGO",

    partners: "भागीदार",
    partnerDescription:
      "तुम्ही NGO, निवारा केंद्र, रुग्णालय किंवा बचाव पथक आहात का? नोंदणी आणि लिस्टिंगसाठी आमच्याशी संपर्क साधा.",

    registerNow: "आता नोंदणी करा",

    copyright:
      "© 2026 JeevSahay — प्रत्येक मुक्या जीवाचा आवाज.",

    bottomText:
      "जलद बचाव, विश्वास आणि खऱ्या मदतीसाठी तयार केलेले.",
  },

  bn: {
    rescueSupport: "উদ্ধার সহায়তা",
    callNow: "এখনই কল করুন",

    description:
      "আহত, পরিত্যক্ত এবং জরুরি প্রাণীর ক্ষেত্রে দ্রুত স্থানীয় সাহায্যের সাথে সংযোগ করাই আমাদের লক্ষ্য।",

    emailSupport: "ইমেল সহায়তা",

    quickLinks: "দ্রুত লিঙ্ক",
    home: "হোম",
    report: "SOS রিপোর্ট",
    map: "রেসকিউ ম্যাপ",
    contact: "যোগাযোগ",

    support: "সহায়তা",
    callSupport: "সহায়তার জন্য কল করুন",
    myProfile: "আমার প্রোফাইল",
    savedNGOs: "সংরক্ষিত NGO",

    partners: "অংশীদার",
    partnerDescription:
      "আপনি কি NGO, আশ্রয়কেন্দ্র, হাসপাতাল বা উদ্ধারকারী দল? নিবন্ধন এবং তালিকাভুক্তির জন্য আমাদের সাথে যোগাযোগ করুন।",

    registerNow: "এখনই নিবন্ধন করুন",

    copyright:
      "© 2026 JeevSahay — প্রতিটি নির্বাক প্রাণীর কণ্ঠস্বর।",

    bottomText:
      "দ্রুত উদ্ধার, বিশ্বাস এবং প্রকৃত সহায়তার জন্য তৈরি।",
  },

  ta: {
    rescueSupport: "மீட்பு உதவி",
    callNow: "இப்போது அழைக்கவும்",

    description:
      "காயமடைந்த, கைவிடப்பட்ட மற்றும் அவசர நிலையில் உள்ள விலங்குகளுக்கு விரைவான உள்ளூர் உதவியை இணைப்பதே எங்கள் நோக்கம்.",

    emailSupport: "மின்னஞ்சல் உதவி",

    quickLinks: "விரைவு இணைப்புகள்",
    home: "முகப்பு",
    report: "SOS அறிக்கை",
    map: "மீட்பு வரைபடம்",
    contact: "தொடர்பு",

    support: "ஆதரவு",
    callSupport: "ஆதரவுக்கு அழைக்கவும்",
    myProfile: "எனது சுயவிவரம்",
    savedNGOs: "சேமிக்கப்பட்ட NGO",

    partners: "கூட்டாளர்கள்",
    partnerDescription:
      "நீங்கள் NGO, தங்குமிடம், மருத்துவமனை அல்லது மீட்புக் குழுவா? பதிவு மற்றும் பட்டியலிட எங்களை தொடர்பு கொள்ளுங்கள்.",

    registerNow: "இப்போது பதிவு செய்யவும்",

    copyright:
      "© 2026 JeevSahay — ஒவ்வொரு பேச முடியாத உயிரினத்தின் குரல்.",

    bottomText:
      "வேகமான மீட்பு, நம்பிக்கை மற்றும் உண்மையான ஆதரவுக்காக உருவாக்கப்பட்டது.",
  },

  te: {
    rescueSupport: "రెస్క్యూ సహాయం",
    callNow: "ఇప్పుడే కాల్ చేయండి",

    description:
      "గాయపడిన, వదిలివేయబడిన మరియు అత్యవసర జంతువుల కేసులకు వేగవంతమైన స్థానిక సహాయాన్ని అందించడం మా లక్ష్యం.",

    emailSupport: "ఈమెయిల్ సహాయం",

    quickLinks: "త్వరిత లింకులు",
    home: "హోమ్",
    report: "SOS నివేదిక",
    map: "రెస్క్యూ మ్యాప్",
    contact: "సంప్రదించండి",

    support: "సహాయం",
    callSupport: "సహాయం కోసం కాల్ చేయండి",
    myProfile: "నా ప్రొఫైల్",
    savedNGOs: "సేవ్ చేసిన NGOలు",

    partners: "భాగస్వాములు",
    partnerDescription:
      "మీరు NGO, షెల్టర్, ఆసుపత్రి లేదా రెస్క్యూ టీమ్‌నా? నమోదు మరియు లిస్టింగ్ కోసం మమ్మల్ని సంప్రదించండి.",

    registerNow: "ఇప్పుడే నమోదు చేయండి",

    copyright:
      "© 2026 JeevSahay — ప్రతి మూగ జీవి యొక్క స్వరం.",

    bottomText:
      "వేగవంతమైన రెస్క్యూ, నమ్మకం మరియు నిజమైన సహాయం కోసం రూపొందించబడింది.",
  },
};

// =====================================================
// FOOTER
// =====================================================

export function Footer() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  useEffect(() => {
    const checkLanguage = () => {
      const savedLanguage =
        localStorage.getItem("language") || "en";

      setLanguage(savedLanguage);
    };

    window.addEventListener(
      "languageChanged",
      checkLanguage
    );

    window.addEventListener(
      "storage",
      checkLanguage
    );

    return () => {
      window.removeEventListener(
        "languageChanged",
        checkLanguage
      );

      window.removeEventListener(
        "storage",
        checkLanguage
      );
    };
  }, []);

  const t =
    translations[language] || translations.en;

  return (
    <footer
      style={{
        marginTop: "auto",
        position: "relative",
        background:
          `linear-gradient(rgba(14, 45, 33, 0.94), rgba(14, 45, 33, 0.97)), url(${cowBg}) center/cover no-repeat`,
        color: "rgba(255, 250, 241, 0.84)",
        borderTopLeftRadius: "18px",
        borderTopRightRadius: "18px",
        overflow: "hidden",
      }}
    >
      <div
        className="container"
        style={{
          padding: "1rem 0 0.75rem",
        }}
      >
        {/* TOP BAR */}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.75rem",
            paddingBottom: "0.9rem",
            borderBottom:
              "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.42rem 0.75rem",
              borderRadius: "999px",
              background:
                "rgba(255,255,255,0.08)",
              color: "#fff9f1",
              fontSize: "0.78rem",
              fontWeight: 800,
              maxWidth: "100%",
            }}
          >
            🐄 JeevSahay • {t.rescueSupport}
          </div>

          <a
            href={`tel:${supportPhone}`}
            style={topBtn}
          >
            📞 {t.callNow}
          </a>
        </div>

        {/* FOOTER GRID */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(170px, 1fr))",
            gap: "1rem",
            padding: "1rem 0",
          }}
        >
          {/* ABOUT */}

          <div>
            <h3 style={headingStyle}>
              JeevSahay
            </h3>

            <p style={textStyle}>
              {t.description}
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.55rem",
                marginTop: "0.85rem",
              }}
            >
              <a
                href={`tel:${supportPhone}`}
                style={pillLink}
              >
                📞 {supportPhone}
              </a>

              <a
                href={`mailto:${supportEmail}`}
                style={pillLink}
              >
                📧 {t.emailSupport}
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}

          <div>
            <h3 style={headingStyle}>
              {t.quickLinks}
            </h3>

            <nav
              aria-label="Footer quick links"
              style={{
                display: "grid",
                gap: "0.6rem",
              }}
            >
              <Link
                to="/"
                style={footerLink}
              >
                {t.home}
              </Link>

              <Link
                to="/report"
                style={footerLink}
              >
                {t.report}
              </Link>

              <Link
                to="/map"
                style={footerLink}
              >
                {t.map}
              </Link>

              <Link
                to="/contact"
                style={footerLink}
              >
                {t.contact}
              </Link>
            </nav>
          </div>

          {/* SUPPORT */}

          <div>
            <h3 style={headingStyle}>
              {t.support}
            </h3>

            <div
              style={{
                display: "grid",
                gap: "0.6rem",
              }}
            >
              <a
                href={`tel:${supportPhone}`}
                style={footerLink}
              >
                {t.callSupport}
              </a>

              <a
                href={`mailto:${supportEmail}`}
                style={footerLink}
              >
                {t.emailSupport}
              </a>

              <Link
                to="/user"
                style={footerLink}
              >
                {t.myProfile}
              </Link>

              <Link
                to="/map"
                style={footerLink}
              >
                {t.savedNGOs}
              </Link>
            </div>
          </div>

          {/* PARTNERS */}

          <div>
            <h3 style={headingStyle}>
              {t.partners}
            </h3>

            <p style={textStyle}>
              {t.partnerDescription}
            </p>

            <Link
              to="/contact"
              style={ctaBtn}
            >
              🤝 {t.registerNow}
            </Link>
          </div>
        </div>

        {/* COPYRIGHT */}

        <div
          style={{
            borderTop:
              "1px solid rgba(255,255,255,0.08)",
            paddingTop: "0.85rem",
            paddingBottom: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.45rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              color:
                "rgba(255,250,241,0.7)",
              fontSize: "0.84rem",
              lineHeight: 1.5,
            }}
          >
            {t.copyright}
          </p>

          <p
            style={{
              margin: 0,
              color:
                "rgba(255,250,241,0.54)",
              fontSize: "0.8rem",
              lineHeight: 1.5,
            }}
          >
            {t.bottomText}
          </p>
        </div>
      </div>
    </footer>
  );
}

// =====================================================
// STYLES
// =====================================================

const headingStyle = {
  margin: "0 0 0.7rem",
  fontSize: "0.92rem",
  fontWeight: 900,
  color: "#fffaf1",
};

const textStyle = {
  margin: 0,
  color: "rgba(255,250,241,0.76)",
  lineHeight: 1.6,
  fontSize: "0.88rem",
  maxWidth: "30ch",
};

const footerLink = {
  color: "rgba(255,250,241,0.8)",
  textDecoration: "none",
  fontWeight: 600,
  fontSize: "0.9rem",
  lineHeight: 1.45,
};

const pillLink = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "fit-content",
  maxWidth: "100%",
  padding: "0.68rem 0.9rem",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.08)",
  color: "#fffaf1",
  textDecoration: "none",
  border:
    "1px solid rgba(255,255,255,0.1)",
  fontWeight: 700,
  fontSize: "0.88rem",
};

const ctaBtn = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "0.7rem",
  width: "fit-content",
  padding: "0.75rem 1rem",
  borderRadius: "999px",
  background: "#d96b3b",
  color: "#fffaf1",
  textDecoration: "none",
  fontWeight: 800,
  fontSize: "0.9rem",
  border: "1px solid #d96b3b",
};

const topBtn = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.65rem 0.95rem",
  borderRadius: "999px",
  background: "#d96b3b",
  color: "#fffaf1",
  textDecoration: "none",
  fontWeight: 800,
  fontSize: "0.86rem",
  border: "1px solid #d96b3b",
};