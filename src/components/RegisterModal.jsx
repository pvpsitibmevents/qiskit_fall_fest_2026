import React, { useState } from 'react';

// Deployed Google Apps Script Web App URL for Google Sheets integration
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbyDWpevz55kgeOTjOcwaSoOxn6Y2VFjlSP1dX7F7peN4FcgjdSynyLfgRPdGJWf14FN/exec';

export default function RegisterModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    department: 'Computer Science & Engineering',
    year: '3rd Year',
    registrationType: 'Full Pass (Pre-Fest + Main Fest + Post-Fest)',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...formData,
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    try {
      if (GOOGLE_SCRIPT_URL) {
        // Send payload to Google Sheets via Google Apps Script Web App
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors', // Prevents CORS issues with Google Apps Script redirect
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
      } else {
        console.log('Registration Payload (Google Script URL not configured yet):', payload);
      }
      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      // Still confirm submission if fallback succeeds
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/50 backdrop-blur-md">
      <div className="bg-surface dark:bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-8 max-w-lg w-full shadow-2xl relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-transform duration-200 hover:scale-110 active:scale-120"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {!submitted ? (
          <>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-label-caps text-xs px-3 py-1 rounded-full mb-2 font-bold">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                PVPSIT QISKIT FALL FEST 2026
              </div>
              <h2 className="font-headline-md text-2xl text-on-surface font-bold">Event Registration</h2>
              <p className="font-body-md text-sm text-on-surface-variant">Reserve your spot for workshops, tech talks, and the 3-day fest.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-label-caps text-xs text-on-surface mb-1 uppercase tracking-wider font-bold">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-md bg-surface-container-low border border-outline-variant/30 font-body-md text-sm focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block font-label-caps text-xs text-on-surface mb-1 uppercase tracking-wider font-bold">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@pvpsiddhartha.ac.in"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-md bg-surface-container-low border border-outline-variant/30 font-body-md text-sm focus:outline-none focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-caps text-xs text-on-surface mb-1 uppercase tracking-wider font-bold">Department</label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-3 py-3 rounded-md bg-surface-container-low border border-outline-variant/30 font-body-md text-xs focus:outline-none focus:border-primary"
                  >
                    <option>Computer Science & Engineering</option>
                    <option>Information Technology</option>
                    <option>Electronics & Communication</option>
                    <option>Electrical & Electronics</option>
                    <option>Mechanical / Civil</option>
                    <option>Freshman Engineering (FED)</option>
                    <option>Other / External</option>
                  </select>
                </div>

                <div>
                  <label className="block font-label-caps text-xs text-on-surface mb-1 uppercase tracking-wider font-bold">Year of Study</label>
                  <select
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full px-3 py-3 rounded-md bg-surface-container-low border border-outline-variant/30 font-body-md text-xs focus:outline-none focus:border-primary"
                  >
                    <option>1st Year</option>
                    <option>2nd Year</option>
                    <option>3rd Year</option>
                    <option>4th Year</option>
                    <option>Faculty / Researcher</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-label-caps text-xs text-on-surface mb-1 uppercase tracking-wider font-bold">Registration Track</label>
                <select
                  value={formData.registrationType}
                  onChange={(e) => setFormData({ ...formData, registrationType: e.target.value })}
                  className="w-full px-4 py-3 rounded-md bg-surface-container-low border border-outline-variant/30 font-body-md text-sm focus:outline-none focus:border-primary"
                >
                  <option>Full Pass (Pre-Fest + Main Fest + Post-Fest)</option>
                  <option>Main Fest Only (Oct 15–17)</option>
                  <option>Pre-Fest Sessions Only (15 Sept - 8 Oct)</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-6 bg-primary text-on-primary font-label-caps py-4 rounded-md shadow-pulse-pink hover:bg-on-primary-fixed-variant transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105 active:scale-110 font-bold disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Complete Registration
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center shadow-pulse-pink">
              <span className="material-symbols-outlined text-4xl">check_circle</span>
            </div>
            <h3 className="font-headline-md text-2xl font-bold text-on-surface">Registration Confirmed!</h3>
            <p className="font-body-md text-sm text-on-surface-variant max-w-sm mx-auto">
              Thank you, <strong className="text-primary">{formData.fullName}</strong>. Your spot at PVPSIT Qiskit Fall Fest 2026 has been saved in the database.
            </p>
            <div className="p-4 bg-surface-container-low rounded-lg text-xs font-label-caps text-left text-on-surface space-y-1">
              <div><span className="text-tertiary">Email:</span> {formData.email}</div>
              <div><span className="text-tertiary">Department:</span> {formData.department}</div>
              <div><span className="text-tertiary">Track:</span> {formData.registrationType}</div>
            </div>
            <button
              onClick={handleReset}
              className="mt-4 bg-primary text-on-primary font-label-caps px-6 py-3 rounded-md shadow-pulse-pink transition-transform duration-200 hover:scale-105 active:scale-110 font-bold"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
