import React from 'react';
import { X, ShieldCheck, HelpCircle } from 'lucide-react';

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

interface ContactModalProps {
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-pop">
      <div className="bg-white rounded-3xl p-6 w-full max-w-md max-h-[90vh] flex flex-col shadow-2xl border-2 border-blue-200">
        <div className="flex items-center justify-between border-b pb-3 mb-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-500" />
            <h3 className="font-extrabold text-lg text-gray-800">Contact & Info</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center font-bold text-sm hover:bg-gray-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="overflow-y-auto space-y-4 pr-1 flex-1 text-left text-xs sm:text-sm text-gray-600">
          {/* Instagram Button */}
          <div className="text-center bg-pink-50 p-4 rounded-2xl border border-pink-200">
            <h4 className="font-bold text-gray-800 text-sm mb-1">DM us on Instagram</h4>
            <p className="text-xs text-gray-500 mb-3">
              Questions about your quiz? Send us a message or say hi!
            </p>
            <a
              href="https://instagram.com/official_fake_friend_finder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-xs px-5 py-2.5 rounded-full shadow-sm hover:opacity-95"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Open Instagram</span>
            </a>
          </div>

          {/* Guidelines */}
          <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100 space-y-2">
            <h4 className="font-bold text-gray-800 text-xs uppercase tracking-wide flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              <span>Privacy & Guidelines</span>
            </h4>
            <ul className="list-disc pl-4 space-y-1 text-xs text-gray-600">
              <li>
                <strong>Entertainment Only:</strong> This quiz is purely for fun with friends!
              </li>
              <li>
                <strong>Privacy:</strong> We don't save personal data or passwords.
              </li>
              <li>
                <strong>Scores:</strong> Scores are stored locally so you can play anytime!
              </li>
            </ul>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-4 w-full py-3 bg-blue-500 text-white font-bold rounded-2xl shadow-cute hover:bg-blue-600"
        >
          Got it!
        </button>
      </div>
    </div>
  );
};
