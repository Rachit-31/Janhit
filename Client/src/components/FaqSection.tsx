import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'How do I report an issue?',
    answer: 'You can report issues using the Raise Issue button on the homepage. Just mark the location and describe the problem.',
  },
  {
    question: 'Can I track my reported issues?',
    answer: 'Yes! Once submitted, you can see the status of your issues in your dashboard under "My Reports".',
  },
  {
    question: 'Who resolves the reported problems?',
    answer: 'Local municipal authorities or relevant departments will handle the issues based on priority and voting.',
  },
  {
    question: 'How does voting work?',
    answer: 'Users can vote on any issue using the severity meter. If the severity of an issue is 3 or above the issue is considered as a vote to fix it. Users can also add their comments (optional).',
  },
];

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-12">FAQs</h2>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow">
              <button
                className="w-full px-6 py-4 flex justify-between items-center focus:outline-none"
                onClick={() => toggle(index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <FaChevronDown
                  className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                className={`px-6 overflow-hidden transition-max-height duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-40 py-2' : 'max-h-0'
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;