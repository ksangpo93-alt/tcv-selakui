import React from 'react';
import { Users, BookOpen, Presentation, Heart, Target, Lightbulb } from 'lucide-react';

export function About() {
  const stats = [
    { label: 'Current Enrollments', value: '500+', icon: Users, theme: 'theme-1' },
    { label: 'Qualified Staff', value: '45+', icon: BookOpen, theme: 'theme-2' },
    { label: 'Clubs & Activities', value: '18+', icon: Presentation, theme: 'theme-3' },
    { label: 'Active PTFA Members', value: '120+', icon: Heart, theme: 'theme-4' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 section-light">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="heading-lg mb-6">About Us</h2>
          <div className="flex flex-col gap-4 body-text mb-10">
            <p>TCV School Selakui is a boarding school with classes from VI to XII (Science stream) and student strength of approximately 500.</p>
            <p>TCV School Selakui is under the administration of Tibetan Children's Village and is affiliated to Central Board of Secondary Education (CBSE), New Delhi.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="card p-5">
                <div className={`icon-wrapper mb-4 ${stat.theme}`}>
                  <stat.icon size={20} />
                </div>
                <h4 className="heading-md">{stat.value}</h4>
                <p className="sub-text">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img src="TCVSelakuiCampus.jpg" alt="Students in classroom" className="image-rounded w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

export function History() {
  return (
    <section id="history" className="py-20 px-4 sm:px-6 lg:px-8 section-alt">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="heading-lg mb-8 text-center">Our History</h2>
        <div className="card p-8 md:p-12">
          <p className="body-text mb-4">
            Following the Chinese occupation of Tibet in 1950, His Holiness the Dalai Lama and some 80,000 Tibetans fled into exile in India. Foreseeing the urgent need to care for the many orphaned and destitute children, His Holiness proposed the creation of a special nursery. On May 17, 1960, Mrs. Tsering Dolma Takla, the elder sister of His Holiness, volunteered to oversee 51 children, marking the humble beginnings of what would become the Tibetan Children's Village.
          </p>
          <p className="body-text">
            Mrs. Jetsun Pema later took over the leadership, expanding the organization significantly. Today, TCV has branches across India, dedicated not only to providing modern education but also to deeply instilling and preserving Tibetan language, culture, and identity in the younger generation.
          </p>
        </div>
      </div>
    </section>
  );
}

export function MissionVision() {
  return (
    <section id="mission" className="py-20 px-4 sm:px-6 lg:px-8 section-light">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="card-highlight highlight-1 p-10">
          <div className="icon-wrapper theme-1 mb-6"><Target size={24} /></div>
          <h3 className="heading-md mb-4">Mission Statement</h3>
          <p className="body-text italic">"The mission of the Tibetan Children's Village (TCV) an integrated charitable organization is to ensure that all Tibetan Children under its care receive a sound education, a firm culture identity and become self reliant and contributing members of the Tibetan Community and the world at large."</p>
        </div>
        <div className="card-highlight highlight-2 p-10">
          <div className="icon-wrapper theme-2 mb-6"><Lightbulb size={24} /></div>
          <h3 className="heading-md mb-4">Our Vision</h3>
          <p className="body-text">To seamlessly blend modern academic excellence with the rich heritage of Tibetan culture. We strive to nurture compassionate, intellectually capable, and morally grounded individuals who proudly carry forward their identity while succeeding in the modern world.</p>
        </div>
      </div>
    </section>
  );
}

export function Goals() {
  const goalsList = [
    "To provide parental care and love",
    "To develop a sound understanding of Tibetan identity and culture",
    "To develop character and moral values",
    "To provide effective modern and Tibetan education",
    "Provide child-centered learning atmosphere in the schools",
    "Provide the environment for physical and intellectual growth",
    "Provide suitable and effective life and career guidance for social and citizenship skills"
  ];

  return (
    <section id="goals" className="py-20 px-4 sm:px-6 lg:px-8 section-alt">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="heading-lg mb-10 text-center">Our Educational Goals</h2>
        <div className="card p-8 md:p-12 w-full">
          <ul className="flex flex-col gap-4">
            {goalsList.map((goal, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="list-number theme-5">{index + 1}</span>
                <span className="body-text pt-1">{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Philosophy() {
  const points = [
    "Learning needs to be joyful yet challenging.", "Compassion is the key to all human interactions.",
    "Every child has unique potential and talents.", "Education is a holistic journey of mind, body, and spirit.",
    "Deep respect for Tibetan identity, language, and culture.", "Fostering a sense of global citizenship and universal responsibility.",
    "Encouraging critical thinking and dialectical inquiry.", "Moral values and character building take precedence.",
    "Cultivating environmental stewardship and sustainability.", "Embracing diversity and promoting inclusivity.",
    "Teachers serve as role models, facilitators, and mentors.", "Active community involvement and service to others.",
    "Lifelong learning is a core habit of mind.", "Integration of modern pedagogy with traditional wisdom."
  ];

  return (
    <section id="philosophy" className="py-20 px-4 sm:px-6 lg:px-8 section-light">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="heading-lg mb-10 text-center">Our Philosophy</h2>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-4 w-full">
          {points.map((point, i) => (
            <div key={i} className="flex items-start p-4 card-flat">
              <div className="bullet-point mt-2 mr-4"></div>
              <p className="body-text">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}