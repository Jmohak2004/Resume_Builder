import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ResumeProvider } from './contexts/ResumeContext.jsx'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResumeProvider> 
      <App />
    </ResumeProvider>
  </React.StrictMode>,
);

PersonalInfoForm.jsx
 EducationForm.jsx
 ExperienceForm.jsx
SkillsForm.jsx
ProjectForm.jsx (optional)