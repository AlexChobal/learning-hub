/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { 
  Facebook, 
  Youtube, 
  Video, 
  Trophy, 
  Users, 
  CheckCircle2, 
  Play, 
  FileText, 
  ArrowRight, 
  BookOpen, 
  ExternalLink,
  Search,
  Award,
  Calendar,
  Sparkles,
  Download,
  GraduationCap,
  Building2,
  ChevronRight,
  Menu,
  X,
  Info,
  Globe,
  Compass,
  MapPin,
  Eye,
  FlaskConical,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Simulated header matching teib.info style
const SiteHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="w-full bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-[#1e3a8a] text-white text-xs py-2 px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline opacity-90">Ужгородський національний університет</span>
          <span className="opacity-90">Кафедра ТЕІБ</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://teib.info" className="hover:underline opacity-90">teib.info</a>
        </div>
      </div>
      
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Logo representation of LNU / TEIB */}
          <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
            <img src="teib_logo.svg" alt="Кафедра ТЕІБ" className="w-10 h-10 object-contain" />
          </div>
          <div>
            <h1 className="text-sm md:text-base font-bold text-slate-800 leading-tight uppercase tracking-tight">
              Кафедра ТЕІБ
            </h1>
            <p className="text-[10px] text-slate-500 leading-none hidden sm:block">
              Твердотільної електроніки та інформаційної безпеки
            </p>
          </div>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600">
          <a href="#" className="text-[#1e3a8a] border-b-2 border-[#1e3a8a] pb-1">Головна</a>
          <a href="#for-whom" className="hover:text-[#1e3a8a] transition-all">Для кого?</a>
          <a href="#opportunities" className="hover:text-[#1e3a8a] transition-all">Можливості</a>
          <a href="#results" className="hover:text-[#1e3a8a] transition-all">Результати</a>
          <a href="https://teib.info/?page_id=1146" className="text-slate-400 hover:text-[#1e3a8a] transition-all flex items-center gap-1">
            Абітурієнту <ExternalLink size={12} />
          </a>
        </nav>
        
        <div className="flex items-center gap-3">
          <a 
            href="https://facebook.com" 
            referrerPolicy="no-referrer"
            target="_blank" 
            className="p-2 hover:bg-slate-100 rounded-full text-[#1877F2] transition-colors"
          >
            <Facebook size={18} />
          </a>
          <button 
            className="lg:hidden p-2 hover:bg-slate-100 rounded-full text-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-50 border-t border-slate-200 px-6 py-4 space-y-3"
          >
            <a href="#" className="block font-bold text-[#1e3a8a]" onClick={() => setMobileMenuOpen(false)}>Головна</a>
            <a href="#for-whom" className="block font-semibold text-slate-600 hover:text-[#1e3a8a]" onClick={() => setMobileMenuOpen(false)}>Для кого?</a>
            <a href="#opportunities" className="block font-semibold text-slate-600 hover:text-[#1e3a8a]" onClick={() => setMobileMenuOpen(false)}>Можливості</a>
            <a href="#results" className="block font-semibold text-slate-600 hover:text-[#1e3a8a]" onClick={() => setMobileMenuOpen(false)}>Результати</a>
            <a href="https://teib.info/?page_id=1146" target="_blank" className="block font-semibold text-slate-600 hover:text-[#1e3a8a] flex items-center gap-1">
              Абітурієнту <ExternalLink size={12} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// Visegrad Fund banner (required to be placed above the Hero, under the header)
const VisegradBanner = () => {
  return (
    <div id="visegrad-banner" className="bg-gradient-to-r from-emerald-50 to-cyan-50 border-l-4 border-emerald-500 rounded-xl p-4 sm:p-5 shadow-sm mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="space-y-1.5 flex-1 select-none">
        <div className="flex items-center gap-2">
          {/* Stylized Visegrad Fund Emblem */}
          <div className="flex items-center gap-1.5 bg-white border border-slate-200/60 px-2.5 py-1 rounded-md shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
            <span className="text-[10px] font-extrabold text-[#111827] tracking-wider ml-1">Visegrad Fund</span>
          </div>
          <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full tracking-wider uppercase">
            Visegrad+ Grant
          </span>
        </div>
        <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
          Проєкт підтримується <span className="text-emerald-700">Міжнародним Вишеградським Фондом</span>
        </p>
        <p className="text-[11px] sm:text-xs text-slate-600 leading-normal italic font-medium">
          «The Positive Charge of Physics Transfer by Non-Formal V4–Ukraine Learning» (Позитивний заряд фізики: трансфер знань через неформальну освіту країн V4 та України)
        </p>
      </div>
      <a 
        href="https://www.visegradfund.org/" 
        target="_blank" 
        referrerPolicy="no-referrer"
        className="text-xs font-bold text-emerald-800 bg-emerald-100/80 hover:bg-emerald-100 px-4 py-2 rounded-lg transition-all border border-emerald-200 whitespace-nowrap inline-flex items-center gap-1"
      >
        Читати опис <ExternalLink size={12} />
      </a>
    </div>
  );
};

// Main layout component
export default function App() {
  const [activePathway, setActivePathway] = useState<'students' | 'schoolers' | 'teachers'>('students');
  const [activeLectureTab, setActiveLectureTab] = useState<'all' | 'students' | 'teachers'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  // References for scrolling
  const forWhomRef = useRef<HTMLDivElement>(null);
  const opportunitiesRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement | null>) => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Simulated news database
  const newsItems = [
    {
      id: 1,
      date: '15 Жовтня, 2026',
      title: 'Поїздка до Праги на змагання Fyziklání 2026',
      excerpt: 'Збірна команда українських старшокласників здобула призові місця на престижному європейському фізичному турнірі в Чехії.',
      category: 'Турніри',
      icon: Trophy
    },
    {
      id: 2,
      date: '10 Жовтня, 2026',
      title: 'Впровадження неформальних методик у школах-партнерах',
      excerpt: 'Понад 20 нових ліцеїв з різних областей України приєдналися до проєкту для адаптації сучасних демонстраційних експериментів.',
      category: 'Освіта',
      icon: Users
    },
    {
      id: 3,
      date: '28 Вересня, 2026',
      title: 'Міжнародний науковий вебінар для вчителів України',
      excerpt: 'Фахівці з країн V4 (Польща, Словаччина, Угорщина) поділилися інтерактивними інструментами викладання термодинаміки.',
      category: 'Вебінари',
      icon: Video
    },
    {
      id: 4,
      date: '15 Вересня, 2026',
      title: 'Опубліковано збірник завдань та інтерактивних тестів',
      excerpt: 'Підготовлено новий відкритий PDF-довідник для тренування креативного мислення при підготовці до занять з олімпіадної фізики.',
      category: 'Матеріали',
      icon: BookOpen
    }
  ];

  // Lectures list
  const lectures = [
    {
      id: 1,
      title: 'Основи механіки та нестандартні підходи',
      speaker: 'д.ф.-м.н. доц. Ковальчук П. А.',
      duration: '45 хв',
      audience: 'students',
      difficulty: 'Базовий',
      image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 2,
      title: 'Демонстраційний фізичний експеримент у класі',
      speaker: 'проф. Ян Весели (Чехія)',
      duration: '1.2 год',
      audience: 'teachers',
      difficulty: 'Професійний',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 3,
      title: 'Квантова криптографія в шкільній програмі',
      speaker: 'д-р наук Міхал Рудніцкі (Польща)',
      duration: '50 хв',
      audience: 'teachers',
      difficulty: 'Професійний',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 4,
      title: 'Термодинаміка на пальцях: прості досліди',
      speaker: 'к.ф.-м.н. Шевченко О. М.',
      duration: '35 хв',
      audience: 'students',
      difficulty: 'Базовий',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 5,
      title: 'Методика підготовки команд до змагань Náboj',
      speaker: 'координатор проєкту ТЕІБ УжНУ',
      duration: '1.5 год',
      audience: 'teachers',
      difficulty: 'Професійний',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 6,
      title: 'Як закохатися у вирішення олімпіадних задач',
      speaker: 'збірна призерів Fyziklání 2026',
      duration: '60 хв',
      audience: 'students',
      difficulty: 'Легкий',
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=400'
    }
  ];

  const filteredNews = searchQuery 
    ? newsItems.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      ) 
    : newsItems;

  const filteredLectures = activeLectureTab === 'all' 
    ? lectures 
    : lectures.filter(l => l.audience === activeLectureTab);

  const showNotification = (msg: string) => {
    setAlertMessage(msg);
    setTimeout(() => setAlertMessage(null), 3000);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 selection:bg-blue-100 selection:text-blue-700 antialiased font-sans">
      
      {/* Simulation site Header */}
      <SiteHeader />
      
      {/* Alert Notification */}
      <AnimatePresence>
        {alertMessage && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 16 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#1e3a8a] text-white px-6 py-3 rounded-full shadow-2xl font-bold flex items-center gap-2 border border-blue-400 text-sm"
          >
            <Info size={16} className="text-amber-400" />
            <span>{alertMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        
        {/* Layout Notification Card explaining that the page has been adapted to teib.info */}
        <div className="bg-white border border-slate-200/80 rounded-xl p-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-50 text-blue-700 rounded-lg">
              <Sparkles size={20} />
            </div>
            <div>
              <p className="text-xs font-black text-slate-900 uppercase tracking-wider">Макет інтеграції з teib.info</p>
              <p className="text-xs text-slate-500 max-w-2xl mt-0.5">
                Сторінку повністю адаптовано під структуру сайту кафедри. Ліва колонка (75% ширини) оптимізована під контент хабу із оновленим Hero-блоком, а права колонка (25% ширини) відіграє роль панелі новин та публікацій.
              </p>
            </div>
          </div>
          <button 
            onClick={() => {
              navigator.clipboard.writeText('https://teib.info/?page_id=1146');
              showNotification('Посилання на сайт скопійовано у буфер!');
            }} 
            className="text-xs font-bold text-[#1e3a8a] bg-blue-50 hover:bg-blue-100 px-4 py-2.5 rounded-lg border border-blue-200/50 transition-colors whitespace-nowrap self-start sm:self-center"
          >
            Переглянути зразок сайту
          </button>
        </div>

        {/* 2-Column Responsive Layout Setup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ==================== LEFT COLUMN: MAIN CONTENT AREA (75% on Desktop) ==================== */}
          <main className="lg:col-span-8 space-y-10">
            
            {/* 1. VISEGRAD FUND BANNER (Placed strictly above the Hero block) */}
            <VisegradBanner />

            {/* 2. RECONSTRUCTED HERO BLOCK */}
            <section id="hero" className="bg-white rounded-3xl border border-slate-200/60 shadow-xs overflow-hidden relative">
              {/* Background light gradient accent */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 blur-3xl rounded-full"></div>
              
              <div className="p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 relative z-10">
                <div className="flex-1 space-y-5">
                  <span className="text-xs font-black text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full uppercase tracking-widest">
                    Освітній Хаб ТЕІБ
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
                    Позитивний заряд фізики:<br />
                    <span className="text-[#1e3a8a]">Трансфер знань V4–Україна</span>
                  </h2>
                  <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl">
                    Централізована освітня платформа кафедри ТЕІБ УжНУ для талановитих учнів та прогресивних викладачів. Доступ до міжнародних наукових турнірів, лабораторій та перевірених європейських методик.
                  </p>
                  
                  {/* Exactly THREE required buttons targeting sections */}
                  <div className="pt-3 flex flex-wrap gap-3">
                    <button 
                      onClick={() => scrollToSection(forWhomRef)}
                      className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-[#1e3a8a] text-white px-5 py-3.5 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/10 text-sm"
                    >
                      <Users size={16} /> Для кого?
                    </button>
                    <button 
                      onClick={() => scrollToSection(opportunitiesRef)}
                      className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-emerald-600 text-white px-5 py-3.5 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-500/10 text-sm"
                    >
                      <Sparkles size={16} /> Можливості
                    </button>
                    <button 
                      onClick={() => scrollToSection(resultsRef)}
                      className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-300 px-5 py-3.5 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-xs text-sm"
                    >
                      <Trophy size={16} className="text-amber-500" /> Результати
                    </button>
                  </div>
                </div>
                
                {/* Hero Illustration Side */}
                <div className="w-full md:w-5/12 max-w-sm">
                  <div className="aspect-[4/3] bg-slate-900 rounded-2xl overflow-hidden shadow-xl relative border-4 border-white">
                    <img 
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600" 
                      alt="Physics transfer space visualization" 
                      className="w-full h-full object-cover opacity-90 select-none"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 text-white">
                      <p className="text-[10px] font-bold text-amber-300 tracking-wider uppercase">V4-Ukraine Hub</p>
                      <p className="text-xs font-medium">Розвиток інтелектуального потенціалу</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. SECTION - ДЛЯ КОГО? (Active/Anchor section) */}
            <section 
              id="for-whom" 
              ref={forWhomRef} 
              className="bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-8 space-y-8 scroll-mt-24"
            >
              <div className="border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2 text-[#1e3a8a] mb-1">
                  <Users size={20} className="text-[#1e3a8a]" />
                  <span className="text-xs font-black uppercase tracking-wider">Цільова аудиторія</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900">Для кого створено проєкт?</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Оберіть вашу роль, щоб переглянути можливості участі в проєкті та зареєструватись
                </p>
              </div>

              {/* Three large interactive cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Pathway 1: Students */}
                <div 
                  onClick={() => {
                    setActivePathway('students');
                    showNotification("Перегляд траєкторії для студентів");
                  }}
                  className={`cursor-pointer rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group select-none ${
                    activePathway === 'students' 
                      ? 'bg-[#1e3a8a] text-white shadow-xl shadow-blue-900/10 scale-[1.02] ring-2 ring-blue-500/30' 
                      : 'bg-white border border-slate-200 hover:border-slate-300 text-slate-800 hover:shadow-lg hover:scale-[1.01]'
                  }`}
                >
                  <div className="space-y-4">
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center transition-transform duration-350 group-hover:scale-110 ${
                      activePathway === 'students' ? 'bg-white/10 text-white' : 'bg-blue-50 text-[#1e3a8a]'
                    }`}>
                      <GraduationCap size={24} />
                    </div>
                    <h4 className="text-lg font-extrabold tracking-tight">👨‍🎓 Студенти</h4>
                    <p className={`text-xs leading-relaxed font-semibold transition-colors duration-200 ${
                      activePathway === 'students' ? 'text-white/80' : 'text-slate-500'
                    }`}>
                      Створюйте STEM-відео, використовуйте неформальну освіту в навчанні, долучайтеся до організації фізичних турнірів, освітніх подорожей та міжнародних ініціатив.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className={`text-xs font-black inline-flex items-center gap-1 ${
                      activePathway === 'students' ? 'text-white' : 'text-[#1e3a8a]'
                    }`}>
                      Переглянути <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>

                {/* Pathway 2: Schoolers */}
                <div 
                  onClick={() => {
                    setActivePathway('schoolers');
                    showNotification("Перегляд траєкторії для старшокласників");
                  }}
                  className={`cursor-pointer rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group select-none ${
                    activePathway === 'schoolers' 
                      ? 'bg-[#1e3a8a] text-white shadow-xl shadow-blue-900/10 scale-[1.02] ring-2 ring-blue-500/30' 
                      : 'bg-white border border-slate-200 hover:border-slate-300 text-slate-800 hover:shadow-lg hover:scale-[1.01]'
                  }`}
                >
                  <div className="space-y-4">
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center transition-transform duration-350 group-hover:scale-110 ${
                      activePathway === 'schoolers' ? 'bg-white/10 text-white' : 'bg-blue-50 text-[#1e3a8a]'
                    }`}>
                      <BookOpen size={22} />
                    </div>
                    <h4 className="text-lg font-extrabold tracking-tight">🧑‍🎓 Старшокласники</h4>
                    <p className={`text-xs leading-relaxed font-semibold transition-colors duration-200 ${
                      activePathway === 'schoolers' ? 'text-white/80' : 'text-slate-500'
                    }`}>
                      Беріть участь у STEM-заходах та фізичних турнірах, відвідуйте інтерактивні музеї науки та лабораторії фізичного факультету.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className={`text-xs font-black inline-flex items-center gap-1 ${
                      activePathway === 'schoolers' ? 'text-white' : 'text-[#1e3a8a]'
                    }`}>
                      Переглянути <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>

                {/* Pathway 3: Teachers */}
                <div 
                  onClick={() => {
                    setActivePathway('teachers');
                    showNotification("Перегляд траєкторії для вчителів");
                  }}
                  className={`cursor-pointer rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group select-none ${
                    activePathway === 'teachers' 
                      ? 'bg-[#1e3a8a] text-white shadow-xl shadow-blue-900/10 scale-[1.02] ring-2 ring-blue-500/30' 
                      : 'bg-white border border-slate-200 hover:border-slate-300 text-slate-800 hover:shadow-lg hover:scale-[1.01]'
                  }`}
                >
                  <div className="space-y-4">
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center transition-transform duration-350 group-hover:scale-110 ${
                      activePathway === 'teachers' ? 'bg-white/10 text-white' : 'bg-blue-50 text-[#1e3a8a]'
                    }`}>
                      <Users size={22} />
                    </div>
                    <h4 className="text-lg font-extrabold tracking-tight">👨‍🏫 Вчителі</h4>
                    <p className={`text-xs leading-relaxed font-semibold transition-colors duration-200 ${
                      activePathway === 'teachers' ? 'text-white/80' : 'text-slate-500'
                    }`}>
                      Підвищуйте кваліфікацію та отримуйте доступ до освітніх ресурсів V4, лекцій, семінарів та методик неформальної фізичної освіти.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className={`text-xs font-black inline-flex items-center gap-1 ${
                      activePathway === 'teachers' ? 'text-white' : 'text-[#1e3a8a]'
                    }`}>
                      Переглянути <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>

              </div>

              {/* Dynamic pathway details panel block with expand and slide anim */}
              <div className="pt-2">
                <AnimatePresence mode="wait">
                  {activePathway && (
                    <motion.div
                      key={activePathway}
                      initial={{ opacity: 0, height: 0, y: 15 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -15 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="bg-slate-50 rounded-[2rem] border border-slate-200/80 p-6 sm:p-8 space-y-6 shadow-3xs overflow-hidden"
                    >
                      {/* Sub-header with vertical line matching pathway.pdf styling */}
                      <div className="flex items-center gap-3 border-l-4 border-[#1e3a8a] pl-4">
                        <h4 className="text-xl font-extrabold text-slate-900 tracking-tight">
                          {activePathway === 'students' && 'Для студентів'}
                          {activePathway === 'schoolers' && 'Для старшокласників'}
                          {activePathway === 'teachers' && 'Для вчителів'}
                        </h4>
                      </div>

                      {/* Content grid */}
                      {activePathway === 'students' && (
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="bg-white p-5 rounded-2xl border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                              <div>
                                <div className="w-9 h-9 bg-slate-100 text-[#1e3a8a] rounded-lg flex items-center justify-center mb-3">
                                  <Trophy size={18} />
                                </div>
                                <h5 className="text-xs font-extrabold text-[#111827] uppercase tracking-wide mb-1.5">Фізичні турніри</h5>
                                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                                  Організація та проведення регіональних та міжнародних турнірів з фізики для школярів.
                                </p>
                              </div>
                            </div>
                            <div className="bg-white p-5 rounded-2xl border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                              <div>
                                <div className="w-9 h-9 bg-slate-100 text-[#1e3a8a] rounded-lg flex items-center justify-center mb-3">
                                  <Video size={18} />
                                </div>
                                <h5 className="text-xs font-extrabold text-[#111827] uppercase tracking-wide mb-1.5">STEM-відео</h5>
                                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                                  Створення науково-популярних відео для популяризації STEM-освіти.
                                </p>
                              </div>
                            </div>
                            <div className="bg-white p-5 rounded-2xl border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                              <div>
                                <div className="w-9 h-9 bg-slate-100 text-[#1e3a8a] rounded-lg flex items-center justify-center mb-3">
                                  <Sparkles size={18} />
                                </div>
                                <h5 className="text-xs font-extrabold text-[#111827] uppercase tracking-wide mb-1.5">Неформальна освіта</h5>
                                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                                  Курси Міжнародної Cisco Networking Academy, що сприяють професійному розвитку.
                                </p>
                              </div>
                            </div>
                            <div className="bg-white p-5 rounded-2xl border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                              <div>
                                <div className="w-9 h-9 bg-slate-100 text-[#1e3a8a] rounded-lg flex items-center justify-center mb-3">
                                  <Globe size={18} />
                                </div>
                                <h5 className="text-xs font-extrabold text-[#111827] uppercase tracking-wide mb-1.5">Міжнародні ініціативи</h5>
                                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                                  Досвід співробітництва з студентськими організаціями країн V4.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center pt-2">
                            <a 
                              href="https://forms.gle/m96w8tkdketKQibTA"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-[#1e3a8a] hover:bg-blue-800 text-white font-extrabold text-sm px-8 py-3.5 rounded-full transition-all shadow-md shadow-blue-900/12 inline-flex items-center gap-2 cursor-pointer hover:scale-105"
                            >
                              Стати учасником проєкту
                            </a>
                          </div>
                        </div>
                      )}

                      {activePathway === 'schoolers' && (
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="bg-white p-5 rounded-2xl border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                              <div>
                                <div className="w-9 h-9 bg-slate-100 text-[#1e3a8a] rounded-lg flex items-center justify-center mb-3">
                                  <Trophy size={18} />
                                </div>
                                <h5 className="text-xs font-extrabold text-[#111827] uppercase tracking-wide mb-1.5">Фізичні турніри</h5>
                                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                                  Участь у регіональних та міжнародних командних турнірах з фізики для старшокласників.
                                </p>
                              </div>
                            </div>
                            <div className="bg-white p-5 rounded-2xl border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                              <div>
                                <div className="w-9 h-9 bg-slate-100 text-[#1e3a8a] rounded-lg flex items-center justify-center mb-3">
                                  <Video size={18} />
                                </div>
                                <h5 className="text-xs font-extrabold text-[#111827] uppercase tracking-wide mb-1.5">Навчальні вебінари</h5>
                                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                                  Розв'язування турнірних задач з фізики у межах підготовки до міжнародних конкурсів.
                                </p>
                              </div>
                            </div>
                            <div className="bg-white p-5 rounded-2xl border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                              <div>
                                <div className="w-9 h-9 bg-slate-100 text-[#1e3a8a] rounded-lg flex items-center justify-center mb-3">
                                  <Compass size={18} />
                                </div>
                                <h5 className="text-xs font-extrabold text-[#111827] uppercase tracking-wide mb-1.5">Освітні екскурсії</h5>
                                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                                  Супровід в інтерактивний музей науки та демонстрація лабораторного обладнання університету.
                                </p>
                              </div>
                            </div>
                            <div className="bg-white p-5 rounded-2xl border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                              <div>
                                <div className="w-9 h-9 bg-slate-100 text-[#1e3a8a] rounded-lg flex items-center justify-center mb-3">
                                  <GraduationCap size={18} />
                                </div>
                                <h5 className="text-xs font-extrabold text-[#111827] uppercase tracking-wide mb-1.5">Стати студентом</h5>
                                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                                  Консультації щодо вибору освітніх програм під час вступу на фізичний факультет.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center pt-2">
                            <a 
                              href="https://forms.gle/m96w8tkdketKQibTA"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-[#1e3a8a] hover:bg-blue-800 text-white font-extrabold text-sm px-8 py-3.5 rounded-full transition-all shadow-md shadow-blue-900/12 inline-flex items-center gap-2 cursor-pointer hover:scale-105"
                            >
                              Стати учасником проєкту
                            </a>
                          </div>
                        </div>
                      )}

                      {activePathway === 'teachers' && (
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="bg-white p-5 rounded-2xl border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                              <div>
                                <div className="w-9 h-9 bg-slate-100 text-[#1e3a8a] rounded-lg flex items-center justify-center mb-3">
                                  <BookOpen size={18} />
                                </div>
                                <h5 className="text-xs font-extrabold text-[#111827] uppercase tracking-wide mb-1.5">Лекції з неформальної освіти</h5>
                                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                                  Ознайомлення з сучасними європейськими практиками та досвідом країн V4.
                                </p>
                              </div>
                            </div>
                            <div className="bg-white p-5 rounded-2xl border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                              <div>
                                <div className="w-9 h-9 bg-slate-100 text-[#1e3a8a] rounded-lg flex items-center justify-center mb-3">
                                  <Award size={18} />
                                </div>
                                <h5 className="text-xs font-extrabold text-[#111827] uppercase tracking-wide mb-1.5">Підвищення кваліфікації</h5>
                                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                                  Участь у безкоштовних тренінгах з отриманням сертифікатів міжнародного освітнього проєкту.
                                </p>
                              </div>
                            </div>
                            <div className="bg-white p-5 rounded-2xl border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                              <div>
                                <div className="w-9 h-9 bg-slate-100 text-[#1e3a8a] rounded-lg flex items-center justify-center mb-3">
                                  <Compass size={18} />
                                </div>
                                <h5 className="text-xs font-extrabold text-[#111827] uppercase tracking-wide mb-1.5">Освітні екскурсії</h5>
                                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                                  Дієві практики неформальної освіти в університетському STEM-середовищі.
                                </p>
                              </div>
                            </div>
                            <div className="bg-white p-5 rounded-2xl border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                              <div>
                                <div className="w-9 h-9 bg-slate-100 text-[#1e3a8a] rounded-lg flex items-center justify-center mb-3">
                                  <FileText size={18} />
                                </div>
                                <h5 className="text-xs font-extrabold text-[#111827] uppercase tracking-wide mb-1.5">Навчальні матеріали</h5>
                                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                                  Методична підтримка учнівських командних змагань з фізики та неформальних занять.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center pt-2">
                            <a 
                              href="https://forms.gle/m96w8tkdketKQibTA"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-[#1e3a8a] hover:bg-blue-800 text-white font-extrabold text-sm px-8 py-3.5 rounded-full transition-all shadow-md shadow-blue-900/12 inline-flex items-center gap-2 cursor-pointer hover:scale-105"
                            >
                              Стати учасником проєкту
                            </a>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </section>

            {/* 4. SECTION - МОЖЛИВОСТІ (Opportunities section housing tournaments, lectures, materials) */}
            <section 
              id="opportunities" 
              ref={opportunitiesRef} 
              className="bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-8 space-y-8 scroll-mt-24"
            >
              <div className="border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2 text-emerald-600 mb-1">
                  <Sparkles size={20} />
                  <span className="text-xs font-black uppercase tracking-wider">Напрямки розвитку</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900">Можливості для учасників та шкіл</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Обирайте напрямок неформальної освіти, завантажуйте ресурси та долучайтесь до лекцій.
                </p>
              </div>

              {/* Opportunities Subset A: Physical Tournaments */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Trophy size={16} className="text-amber-500" /> Фізичні заходи та змагання
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Naboj Card */}
                  <div className="border border-slate-200/70 rounded-2xl p-5 space-y-4 hover:shadow-xs transition-shadow">
                    <span className="text-[10px] font-bold bg-[#1e3a8a]/10 text-[#1e3a8a] px-2 py-0.5 rounded">Європейський Кубок</span>
                    <h5 className="font-bold text-slate-900 text-lg">Náboj Physics</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Турнір з фізики серед команд старшокласників, що одночасно проходить у понад 10 країнах Європи. Головна мета — швидко та неординарно вирішувати складні виклики у команді.
                    </p>
                    <div className="space-y-1.5 pt-2">
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                        <span>Логічні та пошукові задачі</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                        <span>Паралельна участь в онлайн холлі</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => showNotification("Матеріали підготовки до Náboj завантажено у розділі ресурсів!")}
                      className="w-full mt-3 py-2 text-xs font-bold border border-slate-200 hover:border-blue-400 rounded-lg hover:bg-blue-50/20 text-slate-700 transition-colors"
                    >
                      Як підготуватися
                    </button>
                  </div>

                  {/* Fyziklani Card */}
                  <div className="border border-slate-200/70 rounded-2xl p-5 space-y-4 hover:shadow-xs transition-shadow">
                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">Чехія, Прага</span>
                    <h5 className="font-bold text-slate-900 text-lg">Fyziklání (Карлів Університет)</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Унікальна подорож українських старшокласників до Праги для інтеграції, обміну досвідом та спільного практичного розв'язання фізичних експериментів.
                    </p>
                    {/* Excursion log simulation gallery */}
                    <div className="flex gap-2">
                      <img 
                        src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=150" 
                        alt="Group preparing" 
                        className="w-14 h-14 object-cover rounded-lg border border-slate-100 shadow-2xs select-none" 
                      />
                      <img 
                        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=150" 
                        alt="Auditorium" 
                        className="w-14 h-14 object-cover rounded-lg border border-slate-100 shadow-2xs select-none" 
                      />
                      <div className="w-14 h-14 bg-slate-50 border border-dashed border-slate-200 rounded-lg flex items-center justify-center text-[9px] text-slate-400 font-bold select-none text-center leading-none">
                        +5 фото
                      </div>
                    </div>
                    <button 
                      onClick={() => showNotification("Галерея поїздки до Чехії доступна в нашому Facebook!")}
                      className="w-full py-2 text-xs font-bold border border-slate-200 hover:border-emerald-400 rounded-lg hover:bg-emerald-50/20 text-slate-700 transition-colors"
                    >
                      Переглянути результати поїздки
                    </button>
                  </div>
                </div>
              </div>

              {/* Opportunities Subset B: Sorting Online Lectures */}
              <div id="lecture-bank" className="space-y-4 pt-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Video size={16} className="text-blue-600" /> Банк онлайн-лекцій циклу
                  </h4>
                  {/* Selectors */}
                  <div className="flex bg-slate-100 p-1 rounded-lg text-xs font-bold gap-1 self-start sm:self-auto">
                    <button 
                      className={`px-2.5 py-1 rounded-md transition-all ${activeLectureTab === 'all' ? 'bg-white shadow-xs text-slate-800' : 'text-slate-500 hover:text-slate-800'}`}
                      onClick={() => setActiveLectureTab('all')}
                    >
                      Всі
                    </button>
                    <button 
                      className={`px-2.5 py-1 rounded-md transition-all ${activeLectureTab === 'students' ? 'bg-white shadow-xs text-slate-800' : 'text-slate-500 hover:text-slate-800'}`}
                      onClick={() => setActiveLectureTab('students')}
                    >
                      Учням
                    </button>
                    <button 
                      className={`px-2.5 py-1 rounded-md transition-all ${activeLectureTab === 'teachers' ? 'bg-white shadow-xs text-slate-800' : 'text-slate-500 hover:text-slate-800'}`}
                      onClick={() => setActiveLectureTab('teachers')}
                    >
                      Вчителям
                    </button>
                  </div>
                </div>

                {/* Simulated Grid of Lectures */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {filteredLectures.map((item) => (
                    <div key={item.id} className="bg-slate-50 border border-slate-200/50 rounded-xl overflow-hidden hover:shadow-xs transition-shadow">
                      <div className="aspect-video relative bg-slate-800 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform" 
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button 
                            onClick={() => showNotification(`Відтворення вебінару: "${item.title}"`)}
                            className="w-10 h-10 bg-slate-900/90 rounded-full flex items-center justify-center text-white hover:bg-[#1e3a8a] hover:scale-110 transition-all shadow-md"
                          >
                            <Play fill="white" size={16} className="ml-0.5" />
                          </button>
                        </div>
                        <span className="absolute bottom-2 right-2 text-[9px] font-bold bg-slate-900/80 text-white px-1.5 py-0.5 rounded">
                          {item.duration}
                        </span>
                      </div>
                      <div className="p-3.5 space-y-2">
                        <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded ${item.audience === 'teachers' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-[#1e3a8a]'}`}>
                          {item.audience === 'teachers' ? 'Для вчителів' : 'Для учнів'}
                        </span>
                        <h6 className="font-bold text-slate-900 text-xs line-clamp-2 leading-tight min-h-[2rem]">
                          {item.title}
                        </h6>
                        <div className="flex justify-between items-center pt-2 border-t border-slate-200/40 text-[10px] text-slate-500 font-medium">
                          <span>{item.speaker}</span>
                          <span className="bg-slate-200/60 px-1.5 py-0.2 rounded text-[9px] uppercase font-bold text-slate-600">{item.difficulty}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Opportunities Subset C: PDF Documents & Worksheets downloads */}
              <div className="space-y-4 pt-2">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <FileText size={16} className="text-[#1e3a8a]" /> Методичні матеріали & Підручники
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200/80 rounded-xl hover:border-blue-400 transition-colors group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100/70 text-[#1e3a8a] rounded-lg flex items-center justify-center flex-shrink-0">
                        <BookOpen size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-black text-slate-900 uppercase">Олімпіадний путівник</p>
                        <p className="text-[10px] text-slate-500">Практичний посібник та збірка задач (PDF)</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => showNotification("Розпочато завантаження: Олімпіадний путівник.pdf")}
                      className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-[#1e3a8a] border border-transparent hover:border-slate-200 transition-all shadow-xs"
                    >
                      <Download size={16} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200/80 rounded-xl hover:border-emerald-400 transition-colors group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-100/70 text-emerald-800 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-black text-slate-900 uppercase">Методики для викладачів</p>
                        <p className="text-[10px] text-slate-500">Конспекти лабораторних та обладнання (PDF)</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => showNotification("Розпочато завантаження: Методичні презентації ТЕІБ.pdf")}
                      className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-emerald-700 border border-transparent hover:border-slate-200 transition-all shadow-xs"
                    >
                      <Download size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. SECTION - РЕЗУЛЬТАТИ (Results and stats section) */}
            <section 
              id="results" 
              ref={resultsRef} 
              className="bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-8 space-y-8 scroll-mt-24"
            >
              <div className="border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2 text-amber-500 mb-1">
                  <Award size={20} />
                  <span className="text-xs font-black uppercase tracking-wider">Ефективність & Результати</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900">Результати співпраці V4-Україна</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Кількісні та якісні показники впровадження неформальних методик навчання.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="bg-slate-50/50 p-4 rounded-2xl border border-slate-200/50">
                  <p className="text-3xl font-extrabold text-[#1e3a8a]">300+</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">учні залучено</p>
                </div>
                <div className="bg-slate-50/50 p-4 rounded-2xl border border-slate-200/50">
                  <p className="text-3xl font-extrabold text-emerald-600">45+</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">вчителі пройшли тренінг</p>
                </div>
                <div className="bg-slate-50/50 p-4 rounded-2xl border border-slate-200/50">
                  <p className="text-3xl font-extrabold text-amber-500">12</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">команд в єврокубках</p>
                </div>
                <div className="bg-slate-50/50 p-4 rounded-2xl border border-slate-200/50">
                  <p className="text-3xl font-extrabold text-rose-600">5+</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">країн-учасників</p>
                </div>
              </div>

              {/* Quotes / Reviews from Participants */}
              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Відгуки учасників вебінарів та команд
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl relative">
                    <span className="text-3xl font-serif text-slate-300 absolute top-2 left-2 leading-none">“</span>
                    <p className="text-xs text-slate-600 leading-relaxed italic pl-4 relative z-10">
                      Náboj Physics показав, що фізика може бути динамічним командним спортом, а не нудною теорією за партами. Обмін задачами з колегами з Чехії надихнув шукати нестандартні підходи.
                    </p>
                    <div className="pl-4 mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-800">Максим, учень 11-го класу</span>
                      <span className="text-[9px] bg-blue-100 text-blue-800 font-bold px-2 py-0.2 rounded-full">Учасник Náboj</span>
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl relative">
                    <span className="text-3xl font-serif text-slate-300 absolute top-2 left-2 leading-none">“</span>
                    <p className="text-xs text-slate-600 leading-relaxed italic pl-4 relative z-10">
                      Отримані роздаткові плани лабораторних та експерименти з центру дронів кардинально змінили мотивацію дітей. Учні самі хочуть розробляти та проводити мікродослідження.
                    </p>
                    <div className="pl-4 mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-800">Ірина Петрівна, вчитель фізики</span>
                      <span className="text-[9px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.2 rounded-full">Спікер вебінару</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          
          {/* ==================== RIGHT COLUMN: WORDPRESS NEWS SIDEBAR (25% on Desktop) ==================== */}
          {/* "колонка справа буде зайнята новинами, як на зразку" */}
          <aside className="lg:col-span-4 space-y-6 bg-white border border-slate-200/80 rounded-3xl p-5 md:p-6 lg:sticky lg:top-24">
            
            {/* Sidebar Section 1: Search Widget */}
            <div className="space-y-2 pb-4 border-b border-slate-100">
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-1.5">
                <Search size={14} className="text-[#1e3a8a]" /> Пошук публікацій
              </h4>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Пошук новин або тем..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 focus:border-[#1e3a8a] focus:bg-white rounded-xl py-2.5 pl-3.5 pr-10 outline-none transition-all placeholder:text-slate-400"
                />
                <button className="absolute right-3 top-3 text-slate-400 hover:text-slate-700">
                  <Search size={14} />
                </button>
              </div>
            </div>

            {/* Sidebar Section 2: News Feed (The actual news section from the target reference platform) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-1.5">
                  <Calendar size={14} className="text-[#1e3a8a]" /> Останні публікації
                </h4>
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="text-[10px] text-rose-600 font-bold hover:underline"
                  >
                    Скинути
                  </button>
                )}
              </div>

              {/* Render news items */}
              <div className="space-y-4 max-h-[420px] overflow-y-auto pr-1">
                {filteredNews.length === 0 ? (
                  <div className="text-center py-6 text-xs text-slate-400">
                    Публікацій за вказаним пошуком не знайдено.
                  </div>
                ) : (
                  filteredNews.map((news) => (
                    <div 
                      key={news.id} 
                      className="group flex gap-3 text-left hover:bg-slate-50/60 p-1.5 rounded-xl transition-colors cursor-pointer"
                      onClick={() => showNotification(`Перехід до статті: "${news.title}"`)}
                    >
                      <div className="w-10 h-10 bg-blue-50 text-[#1e3a8a] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#1e3a8a] group-hover:text-white transition-colors duration-350">
                        <news.icon size={18} />
                      </div>
                      <div className="space-y-1 flex-1">
                        <div className="flex justify-between items-center text-[9px] text-slate-400 font-bold">
                          <span>{news.date}</span>
                          <span className="text-blue-700 bg-blue-50 px-1.5 py-0.2 rounded font-extrabold">{news.category}</span>
                        </div>
                        <h5 className="font-bold text-[#1e3a8a] text-xs leading-snug group-hover:text-amber-500 transition-colors">
                          {news.title}
                        </h5>
                        <p className="text-[10px] text-slate-500 line-clamp-2 leading-tight">
                          {news.excerpt}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Sidebar Section 3: Categories / Taxonomies Mock */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2">
                Рубрики новин
              </h4>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {[
                  { name: 'Турніри', count: 12 },
                  { name: 'Методичні матеріали', count: 8 },
                  { name: 'Онлайн-лекції', count: 24 },
                  { name: 'Для Абітурієнтів', count: 15 },
                  { name: 'Звіти V4', count: 5 },
                  { name: 'Оголошення кафедри', count: 19 }
                ].map((cat, i) => (
                  <button 
                    key={i}
                    onClick={() => {
                      setSearchQuery(cat.name);
                      showNotification(`Сортуємо за рубрикою: ${cat.name}`);
                    }}
                    className="text-[10px] font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1.5 rounded-lg transition-colors inline-flex items-center gap-1"
                  >
                    <span>{cat.name}</span>
                    <span className="text-[8px] opacity-50 bg-white px-1 rounded-sm text-slate-900">{cat.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sidebar Section 4: Facebook Feed Widget Simulation */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2 flex items-center gap-1.5">
                <Facebook size={14} className="text-[#1877F2]" /> Ми у соцмережах
              </h4>
              <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-4 text-center space-y-3">
                <div className="flex items-center gap-2.5 text-left">
                  <div className="w-9 h-9 bg-[#1877F2] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-xs select-none">
                    Fb
                  </div>
                  <div>
                    <h6 className="text-[11px] font-black text-slate-900 leading-tight">Хаб ТЕІБ - Фізичний простір</h6>
                    <p className="text-[9px] text-[#1877F2] font-semibold flex items-center gap-0.5">Вподобано: 1,420 • <span className="text-slate-400 font-normal">Спільнота</span></p>
                  </div>
                </div>
                <div className="bg-white border border-slate-200/50 p-2.5 rounded-xl text-[10px] text-slate-500 text-left italic">
                  Стежте за миттєвими оголошеннями, фотоальбомами та оголошеннями дат поїздок до Карлового Університету!
                </div>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  referrerPolicy="no-referrer"
                  className="w-full bg-[#1877F2] hover:bg-[#155fc2] text-white py-2 rounded-xl text-xs font-extrabold transition-all shadow-md shadow-blue-500/10 inline-block"
                >
                  Вподобати сторінку у Facebook
                </a>
              </div>
            </div>

            {/* Sidebar Section 5: Useful Links Widget */}
            <div className="space-y-2.5 pt-2">
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-1.5">
                Корисні посилання
              </h4>
              <ul className="space-y-2 text-[11px] font-bold text-slate-600">
                <li>
                  <a href="https://teib.info" target="_blank" className="hover:text-[#1e3a8a] flex items-center justify-between group">
                    <span>Сайт кафедри ТЕІБ УжНУ</span>
                    <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#1e3a8a]" />
                  </a>
                </li>
                <li>
                  <a href="https://www.uzhnu.edu.ua/uk/cat/faculty-physics" target="_blank" className="hover:text-[#1e3a8a] flex items-center justify-between group">
                    <span>Фізичний факультет УжНУ</span>
                    <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#1e3a8a]" />
                  </a>
                </li>
                <li>
                  <a href="https://www.visegradfund.org/" target="_blank" className="hover:text-[#1e3a8a] flex items-center justify-between group">
                    <span>Міжнародний Вишеградський Фонд</span>
                    <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#1e3a8a]" />
                  </a>
                </li>
              </ul>
            </div>
          </aside>
          
        </div>
      </div>
      
      {/* Site copyable footer */}
      <footer className="bg-slate-900 text-white mt-16 border-t border-slate-800 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#1e40af] rounded flex items-center justify-center font-bold">
              <span>⚡</span>
            </div>
            <div>
              <p className="font-bold text-sm">Освітній Хаб ТЕІБ УжНУ</p>
              <p className="text-[10px] text-slate-400">© 2026. Проєкт виконано за підтримки International Visegrad Fund</p>
            </div>
          </div>
          <p className="text-xs text-slate-400 text-center md:text-right max-w-sm">
            Вміст публікацій відображає лише погляди авторів і не обов'язково представляє офіційну позицію Міжнародного Вишеградського Фонду.
          </p>
        </div>
      </footer>
    </div>
  );
}
