import React from 'react';
import { 
  Monitor, 
  Palette, 
  MessageSquare, 
  TestTube, 
  Calculator, 
  Book, 
  FlaskConical, 
  Library, 
  Home, 
  Trophy, 
  Utensils, 
  Stethoscope, 
  Mic, 
  ShieldCheck, 
  Activity, 
  PenTool, 
  Music, 
  Globe,
  Award, 
  GraduationCap, 
  MapPin, 
  Star 
} from 'lucide-react';

export function Principal() {
  return (
    <section id="principal" className="py-20 px-4 sm:px-6 lg:px-8 section-alt">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-lg mb-12 text-center">Leadership Messages</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card p-8 flex flex-col items-center text-center">
            <img src="TsultrimKalsang.JPG" alt="Mr. Tsultrim Kelsang" className="avatar mb-6" />
            <h3 className="heading-md mb-1">Mr. Tsultrim Kelsang</h3>
            <p className="text-highlight mb-6">Principal, TCV Selakui</p>
            <p className="body-text italic">"Welcome to TCV Selakui. We are deeply committed to nurturing our students with the best of modern education while staying firmly rooted in our rich Tibetan heritage. Together, we build the leaders of tomorrow."</p>
          </div>
          <div className="card p-8 flex flex-col items-center text-center">
            <img src="DukeTsering.jpg" alt="Mr. Duke Tsering" className="avatar mb-6" />
            <h3 className="heading-md mb-1">Mr. Duke Tsering</h3>
            <p className="sub-text mb-6">Former Principal</p>
            <p className="body-text italic">"I would like to thank all our staff and students for being such wonderful contributors of wisdom, courage, and compassion for our common mission..."</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Academics() {
  const subjects = [
    { name: 'Computer Science', icon: Monitor, theme: 'theme-1' },
    { name: 'Visual Arts', icon: Palette, theme: 'theme-2' },
    { name: 'Dialectic Practice', icon: MessageSquare, theme: 'theme-3' },
    { name: 'Science', icon: TestTube, theme: 'theme-4' },
    { name: 'Mathematics', icon: Calculator, theme: 'theme-5' },
    { name: 'Languages (Tib, Eng, Hin)', icon: Book, theme: 'theme-6' },
  ];

  return (
    <section id="academics" className="py-20 px-4 sm:px-6 lg:px-8 section-light">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="heading-lg mb-4">Academics & Curriculum</h2>
        <p className="body-text max-w-2xl mb-12">We offer a comprehensive CBSE curriculum from Class VI to XII. Our senior secondary section strictly focuses on the Science stream, preparing students for rigorous higher education.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {subjects.map((sub, i) => (
            <div key={i} className="card-flat p-6 flex flex-col items-center">
              <div className={`icon-wrapper-lg mb-4 ${sub.theme}`}><sub.icon size={28} /></div>
              <h3 className="heading-sm">{sub.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Facilities() {
  const facs = [
    { name: 'Modern Science Labs', icon: FlaskConical, theme: 'theme-2' },
    { name: 'Well-stocked Library', icon: Library, theme: 'theme-4' },
    { name: 'Spacious Hostels', icon: Home, theme: 'theme-6' },
    { name: 'Sports Ground', icon: Trophy, theme: 'theme-1' },
    { name: 'Nutritious Meals', icon: Utensils, theme: 'theme-3' },
    { name: 'Medical Infirmary', icon: Stethoscope, theme: 'theme-5' },
    { name: 'Activity Halls', icon: Mic, theme: 'theme-2' },
    { name: '24×7 Security', icon: ShieldCheck, theme: 'theme-4' },
  ];

  return (
    <section id="facilities" className="py-20 px-4 sm:px-6 lg:px-8 section-alt">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="heading-lg mb-12">Campus Facilities</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {facs.map((fac, i) => (
            <div key={i} className="card p-6">
              <div className={`icon-wrapper mx-auto mb-4 ${fac.theme}`}><fac.icon size={24} /></div>
              <h4 className="heading-sm text-sm">{fac.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StudentLife() {
  const activities = [
    { title: 'Athletics & Sports', icon: Activity, desc: 'Promoting physical fitness and team spirit.' },
    { title: 'In-house Publications', icon: PenTool, desc: 'Encouraging creative writing and journalism.' },
    { title: 'Performing Arts', icon: Music, desc: 'Music, dance, and theater programs.' },
    { title: 'Dialectic Practice', icon: MessageSquare, desc: 'Traditional Tibetan logical debates.' },
    { title: 'Tibetan Traditional Arts', icon: Palette, desc: 'Preserving our unique artistic heritage.' },
    { title: 'Community Service', icon: Globe, desc: 'Building leadership through service to others.' },
  ];

  return (
    <section id="student-life" className="py-20 px-4 sm:px-6 lg:px-8 section-light">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="heading-lg mb-12 text-center">Student Life & Co-curriculars</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {activities.map((act, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="icon-wrapper theme-5 shrink-0"><act.icon size={24} /></div>
              <div className="flex flex-col">
                <h3 className="heading-sm mb-1">{act.title}</h3>
                <p className="sub-text">{act.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// New Legacy Section showcasing alumni achievements and scholarships
export function Legacy() {
  const bigStats =[
    { count: "43", title: "UWC", desc: "United World College Scholarship", theme: "theme-5" },
    { count: "33", title: "MBBS", desc: "DoE/SHERIG, CTA Reserved Seat", theme: "theme-4" },
    { count: "07", title: "UTAH", desc: "United States of America Scholarship", theme: "theme-3" },
    { count: "36", title: "ENGG.", desc: "DoE/SHERIG Engg. Reserved Seat", theme: "theme-2" },
  ];

  const listStats =[
    { name: "Pestalozzi Scholarship, UK", count: 18 },
    { name: "Chiba Univ. Master Program, Japan", count: 14 },
    { name: "Fulbright Scholarship, USA", count: "09" },
    { name: "Ganden-Phodrang Merit Award", count: 25 },
    { name: "Sikyong Award", count: "01" },
    { name: "Doctorate Degree", count: "08" },
    { name: "Berea Scholarship, USA", count: "04" },
    { name: "Stony Brook Scholarship, USA", count: "01" },
    { name: "Amchi, Mentsee-Khang", count: 31 },
    { name: "Nordic Scholarship", count: 14 },
  ];

  const alumni =[
    { name: "Tenzin Jampa", role: "MIT Scholarship Recipient", loc: "Cambridge, MA, USA", img: "Alumni/Jampa.png" },
    { name: "Tenzin Choeyang", role: "Duke University Scholar", loc: "North Carolina, USA", img: "Alumni/Choeyang.png" },
    { name: "Pema Payang", role: "Columbia University Scholar", loc: "New York, USA", img: "Alumni/Pema.png" },
    { name: "Tenzin Choedup", role: "Chiba Scholarship Recipient", loc: "Chiba Tech, Japan", img: "Alumni/Choedup.png" },
    { name: "Dr. Ugen Gyatso", role: "MBBS Doctor", loc: "Delek Hospital, H.P", img: "Alumni/Ugen.png" },
    { name: "Dr. Tsering Sonam", role: "MBBS Doctor", loc: "Mainpat Hospital", img: "Alumni/Sonam.png" },
    { name: "Mr. Tenzin Kunga", role: "Bio-Tech Engineer", loc: "Tokyo, Japan", img: "Alumni/Kunga.png" },
    { name: "Dr. Tenzin Kunsel", role: "PhD in Physics", loc: "Researcher in Holland", img: "Alumni/Kunsel.png" },
    { name: "Dr. Tenzin Khando", role: "PhD in Public Health", loc: "Univ. of California, LA", img: "Alumni/Khando.png" },
    { name: "Dr. Tenzin Rabga", role: "PhD in Physics, MIT Grad", loc: "Michigan State Univ, US", img: "Alumni/Rabga.png" },
    { name: "Ms. Tenzin Dolkar", role: "Pharmaceutical Scientist", loc: "ETH Zurich, Switzerland", img: "Alumni/Dolkar.png" },
  ];

  return (
    <section id="legacy" className="py-20 px-4 sm:px-6 lg:px-8 section-alt">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4 text-theme-2"><Award size={40} /></div>
          <h2 className="heading-lg mb-4">The Legacy of Excellence</h2>
          <p className="body-text-lg max-w-3xl">
            There are a number of scholarships and reserved seats available for Tibetan students under DoE, CTA, Dharamsala and TCV organisation. Most of these seats were bagged by TCV School, Selakui students.
          </p>
        </div>

        {/* Big 4 Stats (Redesigned as per your idea) */}
        <div className="grid stats-grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-10">
          {bigStats.map((stat, i) => (
            <div key={i} className="card p-6 flex flex-col justify-between text-left border-t-4 border-t-transparent hover:border-t-slate-200 transition-all">
              
              {/* Top Row: Colorful Circle + Full Name */}
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl font-black shrink-0 shadow-sm ${stat.theme}`}>
                  {stat.count}
                </div>
                <p className="text-xs font-bold text-slate-500 uppercase leading-snug tracking-wider">
                  {stat.desc}
                </p>
              </div>

              {/* Bottom Row: Massive Short Form */}
              <h3 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tighter">
                {stat.title}
              </h3>

            </div>
          ))}
        </div>

        {/* Other Scholarships List */}
        <div className="card-flat p-8 w-full max-w-4xl mb-16">
          <h4 className="heading-sm mb-6 flex items-center gap-2 border-b border-slate-200 pb-4">
            <Star size={18} className="text-theme-4" /> Other Major Scholarships & Awards
          </h4>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
            {listStats.map((item, i) => (
              <div key={i} className="flex justify-between items-center border-b border-slate-100 border-dashed pb-2">
                <span className="body-text text-sm">{item.name}</span>
                <span className="font-bold text-slate-700">{item.count}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-6 italic text-center">
            * The data above represents information collected as of September 2024. Actual numbers of alumni in these fields are likely higher.
          </p>
        </div>

        {/* Alumni Profiles */}
        <div className="text-center mb-10 w-full">
          <h2 className="heading-lg mb-2">From Selakui to The World</h2>
          <p className="sub-text">Meet some of our distinguished alumni making a global impact.</p>
        </div>

        <div className="grid alumni-grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {alumni.map((alum, i) => (
            <div key={i} className="card p-5 flex flex-row items-center gap-4 text-left border-l-4 border-l-transparent hover:border-l-sky-400 transition-all">
              <img 
                src={`${import.meta.env.BASE_URL}${alum.img}`} 
                alt={alum.name} 
                loading="lazy"
                className="alumni-avatar"
              />
              <div className="flex flex-col">
                <h4 className="heading-sm mb-0.5">{alum.name}</h4>
                <p className="text-highlight text-[0.75rem] leading-tight mb-1">{alum.role}</p>
                <p className="sub-text text-xs flex items-center gap-1">
                  <MapPin size={12} className="shrink-0" /> {alum.loc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}