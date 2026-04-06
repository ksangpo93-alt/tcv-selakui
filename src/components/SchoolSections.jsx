import React from 'react';
import { Monitor, Palette, MessageSquare, TestTube, Calculator, Book, FlaskConical, Library, Home, Trophy, Utensils, Stethoscope, Mic, ShieldCheck, Activity, PenTool, Music, Globe } from 'lucide-react';

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