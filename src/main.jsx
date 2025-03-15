import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient , QueryClientProvider  } from '@tanstack/react-query';

import  App  from '/src/App.jsx';

import '/src/styles/reset.css';
import '/src/styles/index.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <queryClientProvider client={queryClient}>
    <App />
  </queryClientProvider>
)
