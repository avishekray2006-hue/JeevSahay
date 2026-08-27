import { Link, useLocation } from "react-router-dom"; 
import { useState } from "react"; 
 
const supportPhone = "9522752780"; 
 
const translations = { 
  en: { 
    home: "Home", 
    report: "Report SOS", 
    map: "Rescue Map", 
    directory: "Directory", 
    profile: "Profile", 
    contact: "Contact", 
    call: "Call", 
    tagline: "Rescue • Shelter • Support", 
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
  }, 
}; 
 
const languages = [ 
  { code: "en", name: "🇬🇧 English" }, 
  { code: "hi", name: "🇮🇳 हिंदी" }, 
  { code: "mr", name: "🇮🇳 मराठी" }, 
  { code: "bn", name: "🇮🇳 বাংলা" }, 
  { code: "ta", name: "🇮🇳 தமிழ்" }, 
  { code: "te", name: "🇮🇳 తెలుగు" }, 
]; 
 
export function Navbar() { 
  const location = useLocation(); 
 
  const [language, setLanguage] = useState( 
    localStorage.getItem("language") || "en" 
  ); 
 
  const t = translations[language]; 
 
  const navItems = [ 
    { to: "/", label: t.home }, 
    { to: "/report", label: t.report }, 
    { to: "/map", label: t.map }, 
    { to: "/directory", label: t.directory }, 
    { to: "/user", label: t.profile }, 
    { to: "/contact", label: t.contact }, 
  ]; 
 
  const isActive = (to) => { 
    if (to === "/") return location.pathname === "/"; 
    return location.pathname.startsWith(to); 
  }; 
 
  const handleLanguageChange = (e) => { 
    const selectedLanguage = e.target.value; 
 
    // Save language 
    localStorage.setItem("language", selectedLanguage); 
 
    // Change language immediately 
    setLanguage(selectedLanguage); 
  }; 
 
  return ( 
    <header 
      style={{ 
        position: "sticky", 
        top: 0, 
        zIndex: 100, 
        backdropFilter: "blur(12px)", 
        background: "rgba(14, 45, 33, 0.92)", 
        borderBottom: "1px solid rgba(255,255,255,0.08)", 
        boxShadow: "0 8px 24px rgba(10, 28, 20, 0.12)", 
      }} 
    > 
      <nav 
        aria-label="Primary" 
        style={{ 
          color: "#fffaf1", 
        }} 
      > 
        <div 
          className="container" 
          style={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: "0.85rem", 
            padding: "0.85rem 0", 
          }} 
        > 
          {/* TOP SECTION */} 
 
          <div 
            style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "space-between", 
              gap: "0.75rem", 
              flexWrap: "wrap", 
            }} 
          > 
            {/* LOGO */} 
 
            <Link 
              to="/" 
              style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: "0.7rem", 
                textDecoration: "none", 
                color: "#fffaf1", 
                minWidth: 0, 
              }} 
            > 
              <div 
                style={{ 
                  width: "42px", 
                  height: "42px", 
                  borderRadius: "12px", 
                  background: "rgba(255,255,255,0.08)", 
                  display: "grid", 
                  placeItems: "center", 
                  fontSize: "1.25rem", 
                  flexShrink: 0, 
                }} 
              > 
                🐄 
              </div> 
 
              <div style={{ minWidth: 0 }}> 
                <div 
                  style={{ 
                    fontWeight: 900, 
                    fontSize: "1rem", 
                    lineHeight: 1.1, 
                    letterSpacing: "0.01em", 
                  }} 
                > 
                  JeevSahay 
                </div> 
 
                <div 
                  style={{ 
                    fontSize: "0.75rem", 
                    color: "rgba(255,250,241,0.66)", 
                    whiteSpace: "nowrap", 
                    overflow: "hidden", 
                    textOverflow: "ellipsis", 
                    maxWidth: "180px", 
                  }} 
                > 
                  {t.tagline} 
                </div> 
              </div> 
            </Link> 
 
            {/* RIGHT SIDE */} 
 
            <div 
              style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "0.5rem", 
                flexShrink: 0, 
              }} 
            > 
              {/* LANGUAGE */} 
 
              <select 
                value={language} 
                onChange={handleLanguageChange} 
                aria-label="Select language" 
                style={{ 
                  background: "rgba(255,255,255,0.08)", 
                  color: "#fffaf1", 
                  border: "1px solid rgba(255,255,255,0.12)", 
                  borderRadius: "999px", 
                  padding: "0.72rem 0.8rem", 
                  fontWeight: 700, 
                  fontSize: "0.85rem", 
                  cursor: "pointer", 
                  outline: "none", 
                }} 
              > 
                {languages.map((item) => ( 
                  <option 
                    key={item.code} 
                    value={item.code} 
                    style={{ 
                      color: "#111", 
                      background: "#fff", 
                    }} 
                  > 
                    {item.name} 
                  </option> 
                ))} 
              </select> 
 
              {/* CALL */} 
 
              <a href={`tel:${supportPhone}`} style={callBtn}> 
                📞 {t.call} 
              </a> 
            </div> 
          </div> 
 
          {/* NAVIGATION */} 
 
          <div 
            style={{ 
              display: "flex", 
              gap: "0.65rem", 
              overflowX: "auto", 
              paddingBottom: "0.15rem", 
              scrollbarWidth: "none", 
              msOverflowStyle: "none", 
            }} 
          > 
            {navItems.map((item) => { 
              const active = isActive(item.to); 
 
              return ( 
                <Link 
                  key={item.to} 
                  to={item.to} 
                  aria-current={active ? "page" : undefined} 
                  style={{ 
                    textDecoration: "none", 
 
                    color: active 
                      ? "#fffaf1" 
                      : "rgba(255,250,241,0.82)", 
 
                    background: active 
                      ? "#d96b3b" 
                      : "rgba(255,255,255,0.08)", 
 
                    border: active 
                      ? "1px solid #d96b3b" 
                      : "1px solid rgba(255,255,255,0.08)", 
 
                    padding: "0.72rem 0.95rem", 
 
                    borderRadius: "999px", 
 
                    fontWeight: active ? 800 : 700, 
 
                    fontSize: "0.9rem", 
 
                    whiteSpace: "nowrap", 
 
                    flexShrink: 0, 
 
                    boxShadow: active 
                      ? "0 8px 18px rgba(217,107,59,0.22)" 
                      : "none", 
                  }} 
                > 
                  {item.label} 
                </Link> 
              ); 
            })} 
          </div> 
        </div> 
      </nav> 
    </header> 
  ); 
} 
 
const callBtn = { 
  display: "inline-flex", 
  alignItems: "center", 
  justifyContent: "center", 
  textDecoration: "none", 
  color: "#fffaf1", 
  background: "#d96b3b", 
  border: "1px solid #d96b3b", 
  borderRadius: "999px", 
  padding: "0.72rem 1rem", 
  fontWeight: 800, 
  fontSize: "0.9rem", 
  boxShadow: "0 8px 18px rgba(217,107,59,0.2)", 
}; import React, { Suspense, lazy } from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { Navbar } from './components/Navbar'; 
import { Footer } from './components/Footer'; 
 
const HomePage = lazy(() => 
  import('./pages/Home').then((mod) => ({ default: mod.Home })) 
); 
 
const ContactPage = lazy(() => 
  import('./pages/Contact').then((mod) => ({ default: mod.Contact })) 
); 
 
const MapPage = lazy(() => 
  import('./pages/MapRadar').then((mod) => ({ default: mod.MapRadar })) 
); 
 
const ReportPage = lazy(() => 
  import('./pages/ReportSOS').then((mod) => ({ default: mod.ReportSOS })) 
); 
 
const UserPage = lazy(() => 
  import('./pages/UserProfile').then((mod) => ({ default: mod.UserProfile })) 
); 
 
const DirectoryPage = lazy(() => 
  import('./pages/RescueDirectory').then((mod) => ({ default: mod.RescueDirectory })) 
); 
 
class ErrorBoundary extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { hasError: false }; 
  } 
 
  static getDerivedStateFromError() { 
    return { hasError: true }; 
  } 
 
  componentDidCatch(error, errorInfo) { 
    try { 
      console.error('JeevSahay Error:', error?.message || String(error)); 
      console.error('Component stack:', errorInfo?.componentStack || ''); 
    } catch { 
      console.error('ErrorBoundary logging failed'); 
    } 
  } 
 
  render() { 
    if (this.state.hasError) { 
      return ( 
        <div 
          style={{ 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            backgroundColor: 'var(--bg-emerald-soft)', 
            padding: '2rem', 
          }} 
        > 
          <div 
            style={{ 
              textAlign: 'center', 
              padding: '2rem', 
              backgroundColor: 'var(--bg-surface)', 
              borderRadius: '1rem', 
              boxShadow: '0 4px 24px rgba(0,0,0,0.1)', 
              maxWidth: '500px', 
            }} 
          > 
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}> 
              Something went wrong 
            </h2> 
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}> 
              The page encountered an error. 
            </p> 
            <button 
              onClick={() => window.location.reload()} 
              style={{ 
                padding: '0.75rem 1.5rem', 
                backgroundColor: 'var(--accent-primary)', 
                color: 'white', 
                border: 'none', 
                borderRadius: '0.5rem', 
                fontWeight: '600', 
                cursor: 'pointer', 
              }} 
            > 
              Reload Page 
            </button> 
          </div> 
        </div> 
      ); 
    } 
 
    return this.props.children; 
  } 
} 
 
function PageLoader() { 
  return ( 
    <div className="container" style={{ padding: '3rem 0', textAlign: 'center' }}> 
      <div 
        style={{ 
          display: 'inline-block', 
          padding: '1rem 2rem', 
          borderRadius: '999px', 
          border: '1px solid var(--border-primary)', 
          backgroundColor: 'var(--bg-surface)', 
          fontWeight: '600', 
        }} 
      > 
        Loading JeevSahay... 
      </div> 
    </div> 
  ); 
} 
 
export default function App() { 
  return ( 
    <ErrorBoundary> 
      <BrowserRouter> 
        <div 
          style={{ 
            minHeight: '100vh', 
            display: 'flex', 
            flexDirection: 'column', 
            backgroundColor: 'var(--bg-emerald-soft)', 
          }} 
        > 
          <Navbar /> 
 
          <Suspense fallback={<PageLoader />}> 
            <Routes> 
              <Route path="/" element={<HomePage />} /> 
              <Route path="/contact" element={<ContactPage />} /> 
              <Route path="/map" element={<MapPage />} /> 
              <Route path="/report" element={<ReportPage />} /> 
              <Route path="/user" element={<UserPage />} /> 
              <Route path="/directory" element={<DirectoryPage />} /> 
            </Routes> 
          </Suspense> 
 
          <Footer /> 
        </div> 
      </BrowserRouter> 
    </ErrorBoundary> 
  ); 
}