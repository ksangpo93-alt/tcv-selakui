import React, { useState } from 'react';
import { Download, CheckCircle, Calendar, FileText, FileCheck } from 'lucide-react';

export function Admissions() {
  return (
    <section id="admissions" className="py-12 section-highlight">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <h2 className="heading-lg mb-4">Admissions 2026–27</h2>
        <p className="body-text mb-10">Admissions Open for Class VI–VIII. Eligibility: Tibetan refugee students (merit-based entrance test).</p>
        
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
  const pastIssues = ['February 2026', 'January 2026', 'December 2025', 'November 2025', 'October 2025', 'September 2025'];

  return (
    <section id="newsletter" className="py-20 px-4 sm:px-6 lg:px-8 section-light">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-2">School Monthly Newsletter</h2>
          <p className="sub-text">Stay updated with the latest happenings at TCV Selakui</p>
        </div>

        <div className="card-alt p-6 md:p-10 mb-12 flex flex-col md:flex-row gap-8 items-center w-full">
          <img src="https://picsum.photos/id/200/300/400" alt="Newsletter Cover" className="newsletter-img" />
          <div className="flex flex-col items-start">
            <div className="pill-badge mb-4 theme-5">LATEST ISSUE</div>
            <h3 className="heading-md mb-2">March 2026 Edition</h3>
            <p className="body-text mb-6">Highlights from the Annual Sports Day, insights from the Principal's desk, and wonderful student art submissions. Read the full PDF to explore more!</p>
            <button className="btn-outline flex items-center gap-2">
              <Download size={18} /> Download PDF
            </button>
          </div>
        </div>

        <h4 className="heading-sm self-start mb-6 w-full">Previous Issues</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
          {pastIssues.map((issue, i) => (
             <div key={i} className="card p-4 flex flex-col items-center text-center">
               <div className="newsletter-placeholder mb-3 flex items-center justify-center">
                 <FileText size={32} />
               </div>
               <p className="heading-xs mb-3">{issue}</p>
               <button className="btn-small flex items-center justify-center gap-1 w-full">
                 <Download size={14} /> PDF
               </button>
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
    { title: "Affiliation and Extension", url: "#" }, // '#' means you don't have the file yet
    { title: "Building Safety Certificate", url: "/MandatoryDisclosure/Building Safety Certificate.pdf" },
    { title: "Fee Structure", url: "#" }, 
    { title: "Trust Registration", url: "/MandatoryDisclosure/Society Registration.pdf" }, 
    { title: "NOC by State Govt", url: "/MandatoryDisclosure/NOC.pdf" }, 
    { title: "School Managing Committee", url: "#" }, 
    { title: "School Calendar", url: "#" }, 
    { title: "Mandatory Disclosure", url: "/MandatoryDisclosure/Public Mandatory Disclosure.pdf" }, 
    { title: "Parents Teachers Association", url: "/MandatoryDisclosure/Parents Teachers Association.pdf" }, 
    { title: "DEO Certificate", url: "#" }, 
    { title: "Last Three Year Result", url: "#" }, 
    { title: "Fire Safety", url: "/MandatoryDisclosure/Fire Safety.pdf" }, 
    { title: "Water, Health and Sanitation Certificate", url: "/MandatoryDisclosure/Water Health and Sanitation Certificate.pdf" }, 
    { title: "RTE Letter", url: "#" }, 
    { title: "Teaching Staff", url: "#" }
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
              <p><strong>Email:</strong> selakui@tcv.org.in</p>
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