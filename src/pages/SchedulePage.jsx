import React, { useState } from 'react';

export default function SchedulePage({ onOpenRegister }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const events = [
    // PRE-FEST
    {
      id: 1,
      phase: 'PRE-FEST',
      phaseBadge: 'Pre-Fest',
      date: '15 Sept 2026',
      title: 'Quantum Unlocked',
      type: 'Student Awareness Session',
      participants: 'Students',
      icon: 'key',
      filled: true,
      what: 'A simple introductory session for students new to quantum computing. Explains classical vs quantum, qubits, superposition, entanglement, Qiskit overview, and learning roadmaps.',
      innovative: '“Classical vs Quantum” Mini Challenge + Physical demonstrations (coins/cards/lights for 0, 1, superposition) + Live Qiskit Demo + “Quantum Myth or Fact” card game.',
      goal: 'Make students curious enough to attend the main 3-day fest.',
      category: 'Awareness',
    },
    {
      id: 2,
      phase: 'PRE-FEST',
      phaseBadge: 'Pre-Fest',
      date: '18 Sept 2026',
      title: 'Quantum Beyond the Classroom',
      type: 'Faculty Awareness Session',
      participants: 'Faculty – Online',
      icon: 'co_present',
      filled: false,
      what: 'An online session for faculty covering Qiskit ecosystem, engineering/science applications, research directions, and integrating quantum topics into student projects.',
      innovative: '“Quantum Across Departments” (showing real quantum applications for ECE, CSE, EEE, Mechanical, Math, Physics) + “What Can We Do With Quantum?” project idea submissions.',
      goal: 'Create faculty awareness and encourage future quantum projects and research.',
      category: 'Faculty',
    },
    {
      id: 3,
      phase: 'PRE-FEST',
      phaseBadge: 'Pre-Fest',
      date: '22 Sept 2026',
      title: 'Quantum Unplugged',
      type: 'Group Discussion',
      participants: 'Students',
      icon: 'groups',
      filled: false,
      what: 'Small student teams discuss key quantum debates like "Will Quantum Replace Classical?", "Quantum in Cybersecurity", and "Quantum: Hype or Revolution?".',
      innovative: '“Quantum Café” format (10 min discussion, 2 min pitch, 1 min Q&A) + 🔄 “Switch Sides” twist (halfway through, teams must argue the opposite side).',
      goal: 'Develop communication, critical thinking, and quantum awareness.',
      category: 'Discussion',
    },
    {
      id: 4,
      phase: 'PRE-FEST',
      phaseBadge: 'Pre-Fest',
      date: '26 Sept 2026',
      title: 'Quantum Clash',
      type: 'Debate Competition',
      participants: 'Students',
      icon: 'gavel',
      filled: true,
      what: 'Competitive head-to-head debate between Team Qubit ("Quantum will transform computing") and Team Classical ("Classical will remain dominant").',
      innovative: '“Quantum Twist Cards” randomly drawn by judges during rounds ("Give a real example", "Explain to a school student", "Oppose your own argument", "20 sec limit").',
      goal: 'Foster argumentative excellence and deep domain understanding.',
      category: 'Debate',
    },
    {
      id: 5,
      phase: 'PRE-FEST',
      phaseBadge: 'Pre-Fest',
      date: '30 Sept 2026',
      title: 'Q-Canvas',
      type: 'Poster Presentation',
      participants: 'Students',
      icon: 'palette',
      filled: false,
      what: 'Students create visual posters explaining Quantum Computing, Quantum Internet, Cryptography, Quantum AI, Sensors, or Qiskit applications.',
      innovative: '“Explain It in One Poster” rule (no text-heavy paragraphs; use diagrams, flowcharts, minimal text) + 🎤 90-Second Poster Pitch to judges.',
      goal: 'Combine visual creativity with concise technical communication.',
      category: 'Presentation',
    },
    {
      id: 6,
      phase: 'PRE-FEST',
      phaseBadge: 'Pre-Fest',
      date: '3 Oct 2026',
      title: 'Quantum Frontiers',
      type: 'Research Paper Presentation',
      participants: 'Internal + External',
      icon: 'article',
      filled: true,
      what: 'Academic paper presentation covering Quantum ML, Communication, Cryptography, Algorithms, and Hardware. Open to students, research scholars, and faculty.',
      innovative: '“Research in 5” format (5 min talk + 2 min Q&A) + ⭐ Special Round: “Explain Your Research to a 1st Year Student in 30 Seconds”.',
      goal: 'Encourage rigorous research and test genuine conceptual clarity.',
      category: 'Research',
    },
    {
      id: 7,
      phase: 'PRE-FEST',
      phaseBadge: 'Pre-Fest',
      date: '8 Oct 2026',
      title: 'Q-Bits & Beyond',
      type: 'Quantum + Qiskit Quiz',
      participants: 'Students',
      icon: 'extension',
      filled: false,
      what: 'Fast-paced pre-fest quiz featuring 4 rounds: Quantum Basics, Identify the Qubit, Qiskit Circuit Logic, and Mystery Questions (Easy, Medium, Hard).',
      innovative: '“Bet Your Qubits” mechanic (teams risk points before seeing the question to add tactical strategy).',
      goal: 'Test knowledge readiness ahead of the main fest.',
      category: 'Quiz',
    },

    // MAIN FEST
    {
      id: 8,
      phase: 'MAIN FEST',
      phaseBadge: 'Main Fest - Day 1',
      date: '15 Oct 2026',
      title: 'Quantum Awakening',
      type: 'In-depth Quantum + Qiskit Awareness',
      participants: 'All Attendees',
      icon: 'wb_sunny',
      filled: true,
      isMain: true,
      what: 'The flagship fest opening deep-dive. Covers "0 and 1 → Qubits", Superposition, Entanglement, Quantum Gates, Circuits, Algorithms, Advantage, and Qiskit.',
      innovative: '“Concept → Demonstration → Question → Demo” interactive loop + ⚡ “Quantum in Action” live Qiskit execution (Circuit → Execution → Measurement → Result).',
      goal: 'Establish a solid foundation for hands-on quantum circuit creation.',
      category: 'Keynote & Deep-Dive',
    },
    {
      id: 9,
      phase: 'MAIN FEST',
      phaseBadge: 'Main Fest - Day 2',
      date: '16 Oct 2026',
      title: 'Qiskit Ignition',
      type: 'Hands-on Qiskit Workshop',
      participants: 'Students',
      icon: 'terminal',
      filled: true,
      isMain: true,
      what: 'Hands-on coding workshop. Students build, gate, measure, and execute quantum circuits in Qiskit from scratch.',
      innovative: '“Build → Break → Fix” (debugging broken circuits) + 🏁 End Mini Challenge ("Create this target output").',
      goal: 'Achieve practical coding competency with the Qiskit SDK.',
      category: 'Hands-on Workshop',
    },
    {
      id: 10,
      phase: 'MAIN FEST',
      phaseBadge: 'Main Fest - Day 3',
      date: '17 Oct 2026',
      title: 'CircuitCraft',
      type: 'Quantum Circuit Building Challenge',
      participants: 'Students',
      icon: 'precision_manufacturing',
      filled: true,
      isMain: true,
      what: 'Day 3 flagship student competition. Teams receive Challenge Cards (Superposition, Bell states, custom measurement patterns) and build circuits using Qiskit.',
      innovative: '“Circuit Relay” (Student 1 creates → Student 2 adds gates → Student 3 checks → Student 4 runs & explains) + 🏆 Final Boss (15-min surprise circuit build & pitch).',
      goal: 'Test circuit design, team collaboration, and live problem solving.',
      category: 'Flagship Competition',
    },

    // POST-FEST
    {
      id: 11,
      phase: 'POST-FEST',
      phaseBadge: 'Post-Fest',
      date: '27 Oct 2026',
      title: 'Qubit Quest',
      type: 'Online Quantum Challenge',
      participants: 'Students',
      icon: 'sports_esports',
      filled: false,
      what: 'Gamified online platform challenge keeping excitement alive post-fest with MCQs, circuit identification, output prediction, and Qiskit debugging.',
      innovative: '“Level Up” system (Level 1: Rookie → Level 2: Explorer → Level 3: Circuit Master → Level 4: Quantum Champion).',
      goal: 'Maintain learning momentum and continuous engagement.',
      category: 'Online Challenge',
    },
    {
      id: 12,
      phase: 'POST-FEST',
      phaseBadge: 'Post-Fest',
      date: '31 Oct 2026',
      title: 'Quantum Afterglow',
      type: 'Expert Interaction & Q&A',
      participants: 'Students + Faculty',
      icon: 'forum',
      filled: true,
      what: 'Closing interaction with quantum researchers, industry leaders, and educators featuring “Ask Me Anything: Quantum Edition” and career guidance.',
      innovative: 'Special Closing Question: “If you were a 2nd-year student today, what would you learn in quantum during the next 6 months?”',
      goal: 'Provide students and faculty with a practical 6-month roadmap.',
      category: 'Closing Session',
    },
  ];

  const filteredEvents = activeFilter === 'ALL'
    ? events
    : events.filter(e => e.phase === activeFilter);

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-gutter max-w-container-max mx-auto text-center">
        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-primary mr-2.5 animate-pulse" />
          <span className="font-label-caps text-xs text-primary uppercase tracking-widest font-bold">
            Q-CONNECT 2026 — Official Event Roadmap
          </span>
        </div>
        <h1 className="font-headline-xl text-3xl md:text-5xl lg:text-[56px] font-bold text-on-surface mb-6 max-w-4xl mx-auto tracking-tight leading-tight">
          Qiskit Fall Fest <span className="text-primary">@ PVPSIT</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto mb-8">
          From Quantum Curiosity to Quantum Circuits. Explore our complete 12-event curriculum spanning Pre-Fest awareness, the Main Fest (15–17 Oct), and Post-Fest growth.
        </p>

        {/* Phase Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-2xl mx-auto bg-surface-container-low p-2 rounded-xl border border-outline-variant/30 shadow-sm">
          <button
            onClick={() => setActiveFilter('ALL')}
            className={`px-5 py-2.5 rounded-lg font-label-caps text-xs transition-all font-bold ${
              activeFilter === 'ALL'
                ? 'bg-primary text-on-primary shadow-md'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
            }`}
          >
            All Events (12)
          </button>
          <button
            onClick={() => setActiveFilter('PRE-FEST')}
            className={`px-5 py-2.5 rounded-lg font-label-caps text-xs transition-all font-bold ${
              activeFilter === 'PRE-FEST'
                ? 'bg-primary text-on-primary shadow-md'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
            }`}
          >
            Pre-Fest (15 Sept - 8 Oct)
          </button>
          <button
            onClick={() => setActiveFilter('MAIN FEST')}
            className={`px-5 py-2.5 rounded-lg font-label-caps text-xs transition-all font-bold ${
              activeFilter === 'MAIN FEST'
                ? 'bg-secondary text-on-secondary shadow-md'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
            }`}
          >
            Main Fest (15–17 Oct)
          </button>
          <button
            onClick={() => setActiveFilter('POST-FEST')}
            className={`px-5 py-2.5 rounded-lg font-label-caps text-xs transition-all font-bold ${
              activeFilter === 'POST-FEST'
                ? 'bg-primary text-on-primary shadow-md'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
            }`}
          >
            Post-Fest (27–31 Oct)
          </button>
        </div>
      </section>

      {/* Schedule Timeline Section */}
      <section className="pb-section-gap px-gutter max-w-4xl mx-auto w-full">
        <div className="relative">
          {filteredEvents.map((item, index) => (
            <div key={item.id} className="timeline-item relative flex gap-6 sm:gap-8 mb-10 group">
              {/* Circuit Line */}
              {index < filteredEvents.length - 1 && <div className="circuit-line-timeline" />}

              {/* Node Icon */}
              <div
                className={`relative z-10 w-12 h-12 rounded-full border-2 ${
                  item.isMain
                    ? 'border-primary bg-primary text-on-primary shadow-pulse-pink scale-110'
                    : 'border-secondary bg-surface text-secondary shadow-sm'
                } flex items-center justify-center flex-shrink-0 mt-1 transition-transform group-hover:scale-125`}
              >
                <span
                  className="material-symbols-outlined"
                  style={item.filled ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  {item.icon}
                </span>
              </div>

              {/* Event Details Card */}
              <div
                className={`flex-grow rounded-2xl p-6 sm:p-8 border transition-all ${
                  item.isMain
                    ? 'bg-surface border-primary/50 shadow-lg hover:border-primary'
                    : 'bg-surface-container-low border-outline-variant/30 hover:border-secondary/40 hover:shadow-md'
                }`}
              >
                {/* Badges & Date Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-outline-variant/20">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`px-3 py-1 text-[11px] font-label-caps font-bold rounded-full ${
                        item.phase === 'MAIN FEST'
                          ? 'bg-primary text-on-primary'
                          : item.phase === 'PRE-FEST'
                          ? 'bg-secondary/15 text-secondary'
                          : 'bg-outline-variant/30 text-on-surface'
                      }`}
                    >
                      {item.phaseBadge}
                    </span>
                    <span className="px-3 py-1 bg-surface-container text-on-surface-variant text-[11px] font-label-caps rounded-full border border-outline-variant/30">
                      {item.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-label-caps text-xs text-primary font-bold bg-primary/10 px-3 py-1 rounded-md">
                      👥 {item.participants}
                    </span>
                    <span className="font-label-caps text-xs text-on-surface font-semibold bg-surface-variant px-3 py-1 rounded-md">
                      📅 {item.date}
                    </span>
                  </div>
                </div>

                {/* Event Title */}
                <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-on-surface mb-3 flex items-center gap-2">
                  <span>{item.title}</span>
                </h3>

                {/* Description */}
                <p className="font-body-md text-on-surface-variant text-sm mb-4 leading-relaxed">
                  {item.what}
                </p>

                {/* Innovative Format / Twist Box */}
                <div className="bg-surface-container/60 border border-outline-variant/30 rounded-xl p-4 mb-3 text-xs">
                  <strong className="text-primary font-label-caps block mb-1">💡 Innovative Format & Twist:</strong>
                  <span className="text-on-surface">{item.innovative}</span>
                </div>

                {/* Goal Tag */}
                <div className="text-xs text-secondary font-semibold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base">flag</span>
                  <span>Goal: {item.goal}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-inverse-surface py-section-gap px-gutter text-center border-t border-outline/20 relative overflow-hidden mt-auto">
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="font-headline-xl text-3xl sm:text-4xl text-inverse-on-surface mb-4 font-bold">
            Be Part of Q-CONNECT 2026
          </h2>
          <p className="font-body-lg text-tertiary-fixed-dim/90 mb-8 text-base">
            Register now for PVPSIT Qiskit Fall Fest 2026 (Main Fest: 15–17 October 2026).
          </p>
          <button
            onClick={onOpenRegister}
            className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-200 ambient-shadow inline-flex items-center gap-2 hover:scale-105 active:scale-110 font-bold text-base"
          >
            Register Now for Fest
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </section>
    </div>
  );
}
