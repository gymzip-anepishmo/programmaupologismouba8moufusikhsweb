import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
const TEST_DATA = [
  { id: "test-0"},
  { id: "test-1"},
  { id: "test-2"},
];
const PAPER_DATA = [
  { id: "paper-0"},
  { id: "paper-1"},
  { id: "paper-2"},
  { id: "paper-3"},
  { id: "paper-4"},
  { id: "paper-5"},
  { id: "paper-6"},
];
const COMBOBOX_EXTRA_CREDIT_DATA = [
  { id: "xc-0", number: 0},
  { id: "xc-1", number: 1},
  { id: "xc-2", number: 2},
]
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App testForms={TEST_DATA} paperForms={PAPER_DATA} extraCreditData={COMBOBOX_EXTRA_CREDIT_DATA}/>
  </StrictMode>,
)
