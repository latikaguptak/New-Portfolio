import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Browser } from './components/Browser';
import { HomePage } from './pages/HomePage';
import { AllProjectsPage } from './pages/AllProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ThemeProvider } from './contexts/ThemeContext';
import { LoadingProvider } from './contexts/LoadingContext';

export default function App() {
  return (
    <ThemeProvider>
      <LoadingProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-950 dark:to-gray-900 p-4 md:p-8 transition-colors duration-200">
            <div className="max-w-7xl mx-auto">
              <Browser url="portfolio.dev">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/projects" element={<AllProjectsPage />} />
                  <Route path="/projects/:id" element={<ProjectDetailPage />} />
                </Routes>
              </Browser>
            </div>
          </div>
        </Router>
      </LoadingProvider>
    </ThemeProvider>
  );
}