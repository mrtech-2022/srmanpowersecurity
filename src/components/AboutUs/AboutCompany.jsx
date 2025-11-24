"use client";
import React, { useState, useEffect } from 'react';
import { Users, ChevronDown, User } from 'lucide-react';
import Image from 'next/image';
import leaderIImage from '../../../public/assets/images/chairman.jpg'
import leaderIIImage from '../../../public/assets/images/md.jpg'

const timeline = [
    { year: '2024', title: 'Founded', text: 'SR Manpower & Security Services Ltd. began its journey in 2019 with a clear vision — to provide reliable manpower and professional security services that ensure safety, discipline, and operational excellence across Bangladesh.' },
    { year: '2025', title: 'History', text: 'SR Manpower & Security Services Ltd. has grown into one of Bangladesh’s most trusted manpower outsourcing and security service providers. From its humble beginnings in Dhaka, the company has expanded nationwide, supplying skilled, semi-skilled, and unskilled workforce, as well as armed and unarmed security personnel to industrial projects, multinational companies, government institutions, and residential establishments. With a strong foundation built on discipline, integrity, and professionalism, SR Manpower & Security Services Ltd. ensures every team member is trained, police-verified, and supervised by experienced professionals from defense and law enforcement backgrounds. The company provides a wide range of services — including facility management, safety training, and emergency response solutions — designed to meet the evolving needs of its clients. Today, SR Manpower & Security Services Ltd. stands as a symbol of trust, reliability, and excellence, continuing to contribute to Bangladesh’s industrial development and workforce empowerment through world-class manpower and security solutions.' },
];

// --- Management & Team Mock Data Based on User Image ---
const orgData = {
  leadership: [
    {
      id: 'l1',
      name: 'Md. Selim Reza',
      role: 'Chairman',
      color: 'cyan',
      img: leaderIImage,
    },
    {
      id: 'l2',
      name: 'Hasan Siraji',
      role: 'Managing Director',
      color: 'violet',
      img: leaderIIImage,
    }
  ],
  advisors: [
    { id: 'a1', name: 'Jahangir Dhali', role: 'Advisor', color: 'yellow' },
    { id: 'a2', name: 'Lt. Col. Manjurul Alam', role: 'Advisor', color: 'cyan' },
    { id: 'a3', name: 'Rezaul Karim Khan Chunnu', role: 'Chief Advisor', color: 'red', isCenter: true },
    { id: 'a4', name: 'Forqan Uddin', role: 'Advisor', color: 'purple' },
    { id: 'a5', name: 'Adv. Nahidul Al Mahfuj', role: 'Legal Advisor', color: 'blue' },
  ],
  // Management & Team Directors with their specific teams nested
  directorsTree: [
    {
      id: 'd1',
      name: 'Azizul Islam',
      role: 'Director OPS',
      color: 'yellow',
      team: [
        { id: 't1', name: 'Md. Alimur Rahman', role: 'Operation & Marketing', color: 'yellow' }
      ]
    },
    {
      id: 'd2',
      name: 'Madam',
      role: 'Director Admin & Accounts',
      color: 'sky',
      isCenter: true,
      team: [
        { id: 't2', name: 'Monir Hossain', role: 'HR & Admin', color: 'cyan' },
        { id: 't3', name: 'Oliyar Rahman', role: 'Accounts', color: 'blue' }
      ]
    },
    {
      id: 'd3',
      name: 'Raju Hossain',
      role: 'Director MT',
      color: 'purple',
      team: [
        { id: 't4', name: 'Maruf Hossain', role: 'Investigating', color: 'purple' }
      ]
    },
  ]
};

// --- Management & Team Utility Components ---

const MemberCard = ({ member, minimal = false, className = "" }) => {
  const colors = {
    cyan: 'bg-cyan-50 text-cyan-700 border-cyan-200 from-cyan-500 to-cyan-600',
    violet: 'bg-violet-50 text-violet-700 border-violet-200 from-violet-500 to-violet-600',
    yellow: 'bg-amber-50 text-amber-700 border-amber-200 from-amber-400 to-amber-500',
    red: 'bg-rose-50 text-rose-700 border-rose-200 from-rose-500 to-rose-600',
    purple: 'bg-purple-50 text-purple-700 border-purple-200 from-purple-500 to-purple-600',
    blue: 'bg-blue-50 text-blue-700 border-blue-200 from-blue-500 to-blue-600',
    sky: 'bg-sky-50 text-sky-700 border-sky-200 from-sky-500 to-sky-600',
    gray: 'bg-gray-50 text-gray-600 border-gray-200 from-gray-400 to-gray-500',
  };

  const theme = colors[member.color] || colors.gray;
  const gradient = theme.split(' ').slice(3).join(' '); // extract gradient classes
  const bgText = theme.split(' ').slice(0, 3).join(' '); // extract bg/text/border

  return (
    <div className={`relative group transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl bg-white rounded-xl border ${minimal ? 'p-3 w-36 sm:w-40' : 'p-4 w-48 sm:w-56'} shadow-sm flex flex-col items-center z-10 ${className}`}>
      {/* Avatar Ring */}
      <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full p-1 mb-3 bg-gradient-to-tr ${gradient}`}>
        <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
          {member.img ? (
            <Image
                src={member.img}
                alt={member.name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
            />
          ) : (
            <User className={`w-7 h-7 sm:w-8 sm:h-8 ${theme.split(' ')[1]}`} />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="text-center w-full">
        <h3 className={`font-bold ${minimal ? 'text-xs sm:text-sm' : 'text-sm'} text-slate-800 leading-tight mb-1 truncate px-1`}>
          {member.name}
        </h3>
        <span className={`inline-block max-w-full truncate px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${bgText}`}>
          {member.role}
        </span>
      </div>

      {/* Connector Dot (Visual Polish) */}
      <div className={`absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white border ${theme.split(' ')[2]} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
      <div className={`absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white border ${theme.split(' ')[2]} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
    </div>
  );
};

export default function AboutCompany() {
    return (
        <div className="text-black bg-white">

            <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden text-center px-6">
                <div className="absolute inset-0 bg-cover bg-center opacity-20 -z-10 transform-gpu filter blur-sm" />
                <div className="z-10 max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-mono- tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500">
                        About Us <br /> Reliable. Disciplined. Trusted.
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
                        We provide professional manpower and security solutions across Bangladesh -- oferring trained, police-verified and skilled person to ensure safety, reliability and operational excellence.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <a className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-xl hover:scale-105 transition" href="#history">Our Journey</a>
                        <a className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-black transition" href="#team">Meet the Management & Team</a>
                    </div>
                </div>
            </section>

            <main className="relative bg-white">

                <section id="history" className="max-w-6xl mx-auto px-6 py-12">
                    <h2 className="text-3xl font-bold text-center my-12 text-black">Our Journey</h2>
                    <div className="space-y-12">
                        {timeline.map((t, i) => (
                            <article
                                key={t.year}
                                className="relative p-6 rounded-2xl bg-white border border-gray-200 shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="w-24 flex-shrink-0">
                                        <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">{t.year}</div>
                                        <div className="h-2 w-12 bg-indigo-500 rounded mt-3" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-black">{t.title}</h3>
                                        <p className="text-gray-700 mt-2">{t.text}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>


                <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8">
                    <div className="p-8 bg-blue-100 border border-gray-200 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold mb-4 text-black">Our Vision</h3>
                        <p className="text-gray-700 leading-relaxed">
                            To be the most trusted and professional manpower and security service provider in Bangladesh, recognized for excellence, discipline, and reliability. We aim to create a safer and more efficient work environment for every organization we serve — ensuring peace of mind and contributing to national development.
                        </p>
                    </div>

                    <div className="p-8 bg-blue-100 border border-gray-200 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold mb-4 text-black">Our Mission</h3>
                        <p className="text-gray-700 leading-relaxed">
                            To deliver trained, verified, and dependable manpower and security personnel through a transparent and client-focused approach. We are committed to maintaining the highest standards of safety, integrity, and service quality, while continuously improving our workforce through training, supervision, and innovation.
                        </p>
                    </div>
                </section>


                <section className="max-w-6xl mx-auto px-6 py-12">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                            <div className="text-4xl mb-3 text-indigo-500">🔒</div>
                            <h4 className="font-semibold mb-2 text-black">Security-First Architecture</h4>
                            <p className="text-gray-700">Designs follow best practices for resilience, monitoring and incident response.</p>
                        </div>

                        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                            <div className="text-4xl mb-3 text-pink-500">⚙️</div>
                            <h4 className="font-semibold mb-2 text-black">Tailored Integrations</h4>
                            <p className="text-gray-700">We integrate with your existing systems to maximize ROI and minimize disruption.</p>
                        </div>

                        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                            <div className="text-4xl mb-3 text-cyan-500">📈</div>
                            <h4 className="font-semibold mb-2 text-black">Central Monitoring</h4>
                            <p className="text-gray-700">Real-time dashboards and alerts to keep you informed and in control.</p>
                        </div>
                    </div>
                </section>


                <section id="team" className="max-w-6xl mx-auto px-6 py-20">
                    <OrgChart />
                </section>

            </main>
        </div>
    );
}

// --- Management & Team Component ---

function OrgChart() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024); // Changed breakpoint to lg for better tree view
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen font-sans text-slate-800 selection:bg-blue-100 p-4 sm:p-8">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">
          Meet The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Management & Team</span>
        </h1>
        <p className="text-slate-500 text-sm sm:text-base">Organizational Structure & Leadership Hierarchy</p>
      </div>

      {/* Mobile View (List Style) */}
      {isMobile ? (
        <div className="max-w-md mx-auto space-y-8 pb-20">
           {/* Leaders */}
           <div className="space-y-4">
              <div className="text-center font-bold text-slate-400 text-xs uppercase tracking-widest mb-2">Leadership</div>
              <div className="grid grid-cols-1 gap-4">
                {orgData.leadership.map(m => <div key={m.id} className="flex justify-center"><MemberCard member={m} /></div>)}
              </div>
           </div>
           
           <div className="flex justify-center"><ChevronDown className="text-slate-300 animate-bounce" /></div>

           {/* Advisors */}
           <div className="space-y-4">
              <div className="text-center font-bold text-slate-400 text-xs uppercase tracking-widest mb-2">Advisors</div>
              <div className="flex flex-wrap justify-center gap-4">
                {orgData.advisors.map(m => <MemberCard key={m.id} member={m} minimal />)}
              </div>
           </div>

           <div className="flex justify-center"><ChevronDown className="text-slate-300 animate-bounce" /></div>

           {/* Directors & Teams */}
           <div className="space-y-8">
              <div className="text-center font-bold text-slate-400 text-xs uppercase tracking-widest">Departments</div>
              {orgData.directorsTree.map((director) => (
                <div key={director.id} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                    <div className="flex justify-center mb-4">
                        <MemberCard member={director} minimal />
                    </div>
                    {director.team.length > 0 && (
                        <div className="relative pt-4 border-t border-slate-100">
                             <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-2 text-xs text-slate-400">Team</div>
                             <div className="flex flex-wrap justify-center gap-3">
                                 {director.team.map(member => (
                                     <MemberCard key={member.id} member={member} minimal className="scale-90" />
                                 ))}
                             </div>
                        </div>
                    )}
                </div>
              ))}
           </div>
        </div>
      ) : (
        
        /* Desktop View (Tree Style) */
        <div className="max-w-7xl mx-auto overflow-x-auto pb-24">
          <div className="min-w-[1000px] flex flex-col items-center">
            
            {/* Level 1: Leadership */}
            <div className="flex gap-20 relative z-20">
              {orgData.leadership.map((m) => (
                <div key={m.id} className="relative">
                    <MemberCard member={m} />
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 h-8 w-px bg-slate-300"></div>
                </div>
              ))}
              {/* Connector between leaders */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-[calc(100%-16rem)] h-px bg-slate-300"></div>
              {/* Line down to next level */}
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 h-8 w-px bg-slate-300"></div>
            </div>

            <div className="h-16"></div>

            {/* Level 2: Advisors */}
            <div className="relative z-10 w-full flex justify-center">
              {/* Bracket */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-[850px] h-8 border-t border-l border-r border-slate-300 rounded-t-2xl"></div>
              
              <div className="flex gap-6 items-start">
                {orgData.advisors.map((m) => (
                  <div key={m.id} className="flex flex-col items-center">
                     <div className="h-8 w-px bg-slate-300 -mt-8"></div>
                     <MemberCard member={m} minimal />
                  </div>
                ))}
              </div>
            </div>

             {/* Connector Level 2 to 3 (From Center) */}
             <div className="flex justify-center -mt-0 relative z-0">
                 <div className="h-16 w-px bg-slate-300"></div>
             </div>

            {/* Level 3 & 4: Directors & Their Teams */}
            <div className="relative w-full flex justify-center">
               {/* Bracket for Directors */}
               <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-[600px] h-6 border-t border-l border-r border-slate-300 rounded-t-xl"></div>
               
               <div className="flex gap-16 justify-center">
                  {orgData.directorsTree.map((director) => (
                    <div key={director.id} className="flex flex-col items-center">
                       {/* Director Card */}
                       <div className="h-6 w-px bg-slate-300 -mt-6"></div>
                       <MemberCard member={director} />
                       
                       {/* Team Section */}
                       {director.team.length > 0 && (
                         <div className="flex flex-col items-center mt-0 w-full">
                            {/* Line down from Director */}
                            <div className="h-8 w-px bg-slate-300"></div>
                            
                            {/* Branch Logic */}
                            {director.team.length > 1 ? (
                                <div className="relative flex justify-center gap-4 pt-4">
                                    {/* Horizontal bracket for team */}
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-4rem)] h-4 border-t border-l border-r border-slate-300 rounded-t-lg"></div>
                                    
                                    {director.team.map((member) => (
                                        <div key={member.id} className="flex flex-col items-center relative">
                                            {/* Tiny line up to bracket */}
                                            <div className="absolute -top-4 left-1/2 h-4 w-px bg-slate-300"></div>
                                            <MemberCard member={member} minimal />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                // Single Child - Just a straight line
                                <div className="flex flex-col items-center">
                                    <MemberCard member={director.team[0]} minimal />
                                </div>
                            )}
                         </div>
                       )}
                    </div>
                  ))}
               </div>
            </div>

          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
         <button 
           onClick={() => setIsMobile(!isMobile)}
           className="bg-slate-900 text-white px-5 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 font-medium"
         >
           <Users size={18} />
           {isMobile ? "View Org Chart" : "Mobile List View"}
         </button>
      </div>
    </div>
  );
}