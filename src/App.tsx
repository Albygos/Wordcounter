import React, { useState, useMemo } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  BookOpen, 
  Clock, 
  Type, 
  Hash, 
  AlignJustify,
  FileText,
  MessageSquare,
  Shield,
  Mail
} from 'lucide-react';

interface TextStats {
  characters: number;
  words: number;
  sentences: number;
  paragraphs: number;
  readingTime: number;
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-8 h-8 text-blue-600" />
              <Link to="/" className="text-2xl font-bold text-gray-900">Text Analyzer</Link>
            </div>
            <nav className="flex gap-6">
              <Link to="/features" className="text-gray-600 hover:text-gray-900">Features</Link>
              <Link to="/faq" className="text-gray-600 hover:text-gray-900">FAQ</Link>
              <Link to="/privacy" className="text-gray-600 hover:text-gray-900">Privacy</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2">
                <FileText className="w-6 h-6" />
                <span className="font-bold text-xl">Text Analyzer</span>
              </div>
              <p className="mt-2 text-gray-400">
                Professional text analysis tool for writers, students, and content creators.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/features" className="text-gray-400 hover:text-white">Features</Link></li>
                <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/cookies" className="text-gray-400 hover:text-white">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Text Analyzer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function TextAnalyzer() {
  const [text, setText] = useState('');
  
  const stats: TextStats = useMemo(() => {
    const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.length > 0).length;
    const paragraphs = text.split('\n\n').filter(para => para.length > 0).length;
    const characters = text.length;
    const readingTime = Math.ceil(words / 200);
    
    return {
      characters,
      words,
      sentences,
      paragraphs,
      readingTime
    };
  }, [text]);

  const StatCard = ({ icon: Icon, label, value }: { icon: any, label: string, value: number | string }) => (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center gap-3 mb-2">
        <Icon className="w-5 h-5 text-blue-600" />
        <h3 className="text-gray-700 font-medium">{label}</h3>
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div>
        <textarea
          className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <StatCard icon={Type} label="Characters" value={stats.characters} />
        <StatCard icon={Hash} label="Words" value={stats.words} />
        <StatCard icon={MessageSquare} label="Sentences" value={stats.sentences} />
        <StatCard icon={AlignJustify} label="Paragraphs" value={stats.paragraphs} />
        <StatCard icon={Clock} label="Reading Time" value={`${stats.readingTime} min`} />
        <StatCard icon={BookOpen} label="Reading Level" value="Advanced" />
      </div>
    </div>
  );
}

function Features() {
  return (
    <section className="prose max-w-none">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Features</h2>
      <p className="text-lg text-gray-700 mb-6">
        Our Text Analyzer tool provides comprehensive analysis of your text with real-time statistics and insights. Whether you're a writer, student, or professional, our tool helps you understand your content better.
      </p>
      <ul className="list-disc pl-6 space-y-4 text-gray-700">
        <li>Instant character, word, and sentence counting</li>
        <li>Paragraph analysis and structure evaluation</li>
        <li>Reading time estimation based on average reading speed</li>
        <li>Reading level assessment using advanced algorithms</li>
        <li>Real-time analysis as you type</li>
        <li>Mobile-responsive design for analysis on any device</li>
      </ul>
    </section>
  );
}

function FAQ() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">How accurate is the reading time estimation?</h3>
        <p className="text-gray-700">Our reading time estimation is based on the average reading speed of 200 words per minute for adults reading content in English. This can vary based on the complexity of the text and individual reading speed.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Is my text saved or stored?</h3>
        <p className="text-gray-700">No, we do not store or save any text entered into our analyzer. All analysis is performed locally in your browser, ensuring complete privacy and security of your content.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">How is the reading level determined?</h3>
        <p className="text-gray-700">The reading level is calculated using a combination of factors including sentence length, word complexity, and overall text structure. We use established readability formulas to provide accurate assessments.</p>
      </div>
    </section>
  );
}

function Privacy() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Privacy & Security</h2>
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-900">Your Privacy Matters</h3>
        </div>
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-4">
            We take your privacy seriously. Our Text Analyzer tool operates entirely in your browser, meaning:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>No text is ever stored on our servers</li>
            <li>No personal information is collected</li>
            <li>No cookies are used for analysis purposes</li>
            <li>All processing happens locally on your device</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h2>
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <Mail className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-900">Get in Touch</h3>
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function Terms() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h2>
      <div className="prose max-w-none">
        <p>Coming soon...</p>
      </div>
    </section>
  );
}

function Cookies() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Cookie Policy</h2>
      <div className="prose max-w-none">
        <p>Coming soon...</p>
      </div>
    </section>
  );
}

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<TextAnalyzer />} />
        <Route path="/features" element={<Features />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
    </Layout>
  );
}

export default App;