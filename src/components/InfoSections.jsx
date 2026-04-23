import React, { useState } from 'react';
import { Download, CheckCircle, Calendar, FileText, FileCheck } from 'lucide-react';

export function Admissions() {
  return (
    <section id="admissions" className="py-12 section-highlight">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <h2 className="heading-lg mb-4">Admissions 2026–27</h2>
        <p className="body-text mb-10">Open Admission for Non-TCV children of Class VI–IX will open in <mark className="bg-yellow-200 px-1">September 2026</mark>. Eligibility: Tibetan refugee students (<mark className="bg-yellow-200 px-1">merit-based entrance test</mark>).</p>
        
        <div className="grid grid-cards mb-8 w-full text-left">
          <div className="card p-6 flex flex-col">
            <div className="mb-4 text-theme-2"><CheckCircle size={28} /></div>
            <h4 className="heading-sm mb-2">Step 1: Apply</h4>
            <p className="sub-text">Submit the online application form with past academic records.</p>
          </div>
          <div className="card p-6 flex flex-col">
            <div className="mb-4 text-theme-4"><Calendar size={28} /></div>
            <h4 className="heading-sm mb-2">Step 2: Test</h4>
            <p className="sub-text">Appear for the merit-based entrance examination on given dates.</p>
          </div>
          <div className="card p-6 flex flex-col">
            <div className="mb-4 text-theme-6"><FileText size={28} /></div>
            <h4 className="heading-sm mb-2">Step 3: Enroll</h4>
            <p className="sub-text">Complete documentation and join the TCV Selakui family.</p>
          </div>
        </div>
        
        {/* Button wrapper for perfect centering and top margin */}
        <div className="w-full flex justify-center mt-8">
          <button className="btn-primary">Apply Now (Google Form)</button>
        </div>
      </div>
    </section>
  );
}

export function Newsletter() {
  // Define the latest issue data
  const latestIssue = {
    title: "June – August 2025 Edition",
    desc: "Catch up on the latest activities, academic achievements, and updates from the TCV Selakui campus. Read the full PDF to explore more!",
    url: "/NewsLetters/JunToAug2025.pdf",
    coverImg: "https://picsum.photos/id/200/300/400" // Replace this URL later with a real image/screenshot of the newsletter cover
  };

  // Define previous issues as an array of objects
  const pastIssues = [
    { title: "March – May 2025", url: `${import.meta.env.BASE_URL}NewsLetters/MarToMay2025.pdf` },
    { title: "Sep – Nov 2023", url: `${import.meta.env.BASE_URL}NewsLetters/SepToNov2023.pdf` },
    { title: "June – Aug 2023", url: `${import.meta.env.BASE_URL}NewsLetters/JunToAug2023.pdf` },
    { title: "March – May 2023", url: `${import.meta.env.BASE_URL}NewsLetters/MarToMay2023.pdf` }
  ];

  return (
    <section id="newsletter" className="py-20 px-4 sm:px-6 lg:px-8 section-light">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-2">School Newsletter</h2>
          <p className="sub-text">Stay updated with the latest happenings at TCV Selakui</p>
        </div>

        {/* LATEST ISSUE SECTION */}
        <div className="card-alt p-6 md:p-10 mb-12 flex flex-col md:flex-row gap-8 items-center w-full">
          <img src={latestIssue.coverImg} alt="Newsletter Cover" className="newsletter-img" />
          <div className="flex flex-col items-start">
            <div className="pill-badge mb-4 theme-5">LATEST ISSUE</div>
            <h3 className="heading-md mb-2">{latestIssue.title}</h3>
            <p className="body-text mb-6">{latestIssue.desc}</p>
            
            {/* Download Link for Latest Issue */}
            <a 
              href={latestIssue.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2"
              style={{ textDecoration: 'none' }}
            >
              <Download size={18} /> Download PDF
            </a>
          </div>
        </div>

        {/* PREVIOUS ISSUES SECTION */}
        <h4 className="heading-sm self-start mb-6 w-full">Previous Issues</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
          {pastIssues.map((issue, i) => (
             <div key={i} className="card p-4 flex flex-col items-center text-center">
               <div className="newsletter-placeholder mb-3 flex items-center justify-center">
                 <FileText size={32} />
               </div>
               <p className="heading-xs mb-3">{issue.title}</p>
               
               {/* Download Link for Past Issues */}
               <a 
                 href={issue.url} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="btn-small flex items-center justify-center gap-1 w-full"
                 style={{ textDecoration: 'none' }}
               >
                 <Download size={14} /> PDF
               </a>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function CBSE() {
  // 1. Change to an array of objects containing 'title' and 'url'
  const docs = [
    { title: "Affiliation and Extension", url: `${import.meta.env.BASE_URL}MandatoryDisclosure/CBSEAffiliation.pdf` }, // '#' means you don't have the file yet
    { title: "Building Safety Certificate", url: `${import.meta.env.BASE_URL}MandatoryDisclosure/BuildingSafetyCertificate.pdf` },
    { title: "Fee Structure", url: "#" }, 
    { title: "Trust Registration", url: `${import.meta.env.BASE_URL}MandatoryDisclosure/SocietyRegistration.pdf` }, 
    { title: "NOC by State Govt", url: `${import.meta.env.BASE_URL}MandatoryDisclosure/NOC.pdf` }, 
    { title: "School Managing Committee", url: `${import.meta.env.BASE_URL}MandatoryDisclosure/SMC.pdf` }, 
    { title: "School Calendar", url: `${import.meta.env.BASE_URL}MandatoryDisclosure/SchoolCalendar2026.pdf` }, 
    { title: "Student Strength", url: `${import.meta.env.BASE_URL}MandatoryDisclosure/StudentStrength.pdf` }, 
    { title: "Parents Teachers Association", url: `${import.meta.env.BASE_URL}MandatoryDisclosure/ParentsTeachersAssociation.pdf` }, 
    { title: "DEO Certificate", url: "#" }, 
    { title: "Last Three Year Result", url: "#" }, 
    { title: "Fire Safety", url: `${import.meta.env.BASE_URL}MandatoryDisclosure/FireSafety.pdf` }, 
    { title: "Water, Health and Sanitation Certificate", url: `${import.meta.env.BASE_URL}MandatoryDisclosure/WaterHealthAndSanitationCertificate.pdf` }, 
    { title: "RTE Letter", url: "#" }, 
    { title: "Teaching Staff", url: `${import.meta.env.BASE_URL}MandatoryDisclosure/TeachingStaff.pdf` }
  ];

  return (
    <section id="cbse" className="py-20 px-4 sm:px-6 lg:px-8 section-alt">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-2">CBSE Mandatory Public Disclosure</h2>
          <p className="sub-text">As per Appendix-IX of CBSE Affiliation Bye-Laws</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {docs.map((doc, i) => (
            <div key={i} className="card p-4 flex items-center justify-between">
              <div className="flex items-center gap-3 pr-4">
                <FileCheck size={20} className={`icon-inline theme-${(i % 6) + 1}`} />
                {/* 2. Render the title */}
                <span className="heading-xs">{doc.title}</span>
              </div>
              
              {/* 3. Render the dynamic URL, open in a new tab, and remove preventDefault */}
              <a 
                href={doc.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-icon theme-3 shrink-0"
              >
                <Download size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully (Demo)");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-12 section-light">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="heading-lg mb-10 text-center">Contact Us</h2>
        
        <div className="flex flex-wrap justify-center gap-12 w-full">
          <div className="flex flex-col flex-1 min-w-[300px] max-w-[500px]">
            <h3 className="heading-md mb-4">Get in Touch</h3>
            <p className="body-text mb-8">Feel free to reach out to us for admissions, queries, or just to say hello.</p>
            
            <div className="flex flex-col gap-4 body-text bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <p><strong>Address:</strong><br/>Tibetan Children's Village School Selakui,<br/>P.O. Selakui, Dehradun,<br/>Uttarakhand, India - 248011</p>
              <p><strong>Phone:</strong> +91 00000 00000</p>
              <p><strong>Email:</strong> selakuischool@tcv.org.in</p>
            </div>
          </div>

          <div className="card-alt p-8 flex-1 min-w-[300px] max-w-[500px]">
            <h3 className="heading-md mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="label-text">Name</label>
                <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="input-field" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="label-text">Email</label>
                <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="input-field" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="label-text">Message</label>
                <textarea rows="4" required value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="input-field"></textarea>
              </div>
              <button type="submit" className="btn-dark mt-2">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}