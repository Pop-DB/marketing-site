import { useState } from 'react';
import { Icon } from '@iconify/react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What is PopDB?',
    answer: 'PopDB is an all-in-one backend platform that gives you a database, hosting, auth, storage, and a CLI — everything you need to build and deploy apps without stitching together multiple services.'
  },
  {
    question: 'How does pricing work?',
    answer: 'PopDB has one simple monthly price that covers unlimited apps and agents. No per-request fees, no surprise bills. You get predictable costs so you can focus on building.'
  },
  {
    question: 'Do I need DevOps experience?',
    answer: 'Not at all. PopDB is built for developers and vibe coders alike. Our CLI handles deployments, and the dashboard gives you full visibility — no infrastructure expertise needed.'
  },
  {
    question: 'Can I migrate my existing app to PopDB?',
    answer: 'Yes. PopDB supports standard PostgreSQL databases, so you can import your existing data. Our CLI tools make migration straightforward.'
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We offer documentation, community support, and direct assistance. Whether you\'re stuck on setup or scaling, we\'re here to help.'
  }
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 md:py-32 px-6 md:px-12 bg-canvas">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Left Column */}
          <div className="md:sticky md:top-32 space-y-6">
            <h2 className="reveal font-sans text-2xl sm:text-3xl md:text-4xl font-semibold text-obsidian tracking-tight">
              Your questions, answered
            </h2>
            <p className="reveal reveal-delay-1 text-subtle text-base sm:text-lg">
              Get quick answers about our platform and how it works.
            </p>
            <div className="reveal reveal-delay-2">
              <a href="#contact" className="inline-flex items-center gap-2 border border-obsidian text-obsidian rounded-full px-6 py-2.5 text-sm font-medium hover:bg-obsidian hover:text-white transition-all duration-300">
                Contact us
                <Icon icon="solar:arrow-right-linear" width={16} />
              </a>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="reveal reveal-delay-1 bg-white border border-border rounded-2xl p-3 sm:p-4 md:p-6 space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item bg-canvas rounded-xl p-3.5 sm:p-5 cursor-pointer transition-all ${
                  openIndex === index ? 'faq-open' : ''
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between gap-2 sm:gap-4">
                  <h3 className="text-base font-medium text-obsidian">{faq.question}</h3>
                  <Icon icon="solar:alt-arrow-down-linear" width={20} className="faq-chevron text-subtle" />
                </div>
                <div className="faq-answer">
                  <p className="text-sm text-subtle leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
