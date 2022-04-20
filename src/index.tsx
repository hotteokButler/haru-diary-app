import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { BasicTheme } from './common/theme';
import '@fortawesome/fontawesome-free/js/all.js';
import { RecoilRoot } from 'recoil';
import FirebaseAuth from './service/firebase_auth_service';
import { firebaseApp } from './service/firebaseInit';
import DiaryRepository from './service/firebase_repository';

const container = document.getElementById('root');
const root = createRoot(container!);
const getFirebaseAuth = new FirebaseAuth(firebaseApp);
const diaryRepository = new DiaryRepository();

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <ThemeProvider theme={BasicTheme}>
          <App getFirebaseAuth={getFirebaseAuth} diaryRepository={diaryRepository} />
        </ThemeProvider>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
