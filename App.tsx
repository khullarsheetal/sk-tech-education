
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CourseCard } from './components/CourseCard';
import { EmpowermentSection } from './components/EmpowermentSection';
import { ContactSection } from './components/ContactSection';
import { AIChatbot } from './components/AIChatbot';
import { Course } from './types';

const COURSES: Course[] = [
  {
    id: 'rob-1',
    title: 'Junior Robotics Lab',
    grades: 'Grades 1 - 5',
    category: 'Robotics',
    description: 'Introducing young minds to the wonders of automation through visual programming and simple mechanics.',
    features: ['Lego Robotics', 'Logic Building', 'Sensory Interaction'],
    imageUrl: 'https://picsum.photos/seed/rob1/600/400'
  },
  {
    id: 'rob-2',
    title: 'Advanced Robotics & IoT',
    grades: 'Grades 6 - 10',
    category: 'Robotics',
    description: 'Deep dive into hardware programming, circuit design, and real-world robotics applications.',
    features: ['Arduino Coding', 'Electronic Circuits', '3D Design Basics'],
    imageUrl: 'https://picsum.photos/seed/rob2/600/400'
  },
  {
    id: 'ai-1',
    title: 'AI & Data Science Core',
    grades: 'Grades 9 - 12',
    category: 'High School',
    description: 'Master the foundations of modern intelligence. Understand how machines learn and predict.',
    features: ['Python for AI', 'Machine Learning', 'Data Visualization'],
    imageUrl: 'https://picsum.photos/seed/ai/600/400'
  },
  {
    id: 'cs-1',
    title: 'CS & Software Engineering',
    grades: 'Grades 9 - 12',
    category: 'High School',
    description: 'A comprehensive path to becoming a computer scientist. Focus on logic, algorithms, and development.',
    features: ['Advanced Programming', 'Data Structures', 'App Development'],
    imageUrl: 'https://picsum.photos/seed/cs/600/400'
  }
];

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Robotics' | 'High School'>('All');

  const filteredCourses = activeCategory === 'All' 
    ? COURSES 
    : COURSES.filter(c => c.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />

        {/* Courses Section */}
        <section id="courses" className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Empowering Programs</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">From building your first robot to deploying neural networks, we guide you every step of the way.</p>
              
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {['All', 'Robotics', 'High School'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat as any)}
                    className={`px-6 py-2 rounded-full font-medium transition-all ${
                      activeCategory === cat 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>

        <EmpowermentSection />
        
        <ContactSection />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">SK TECH EDUCATION</h3>
            <p>Shaping the tech leaders of tomorrow.</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm">Contact: 8849785698</p>
            <p className="text-sm mt-1">© {new Date().getFullYear()} SK TECH. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <AIChatbot />
    </div>
  );
};

export default App;
