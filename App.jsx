import { lazy, Suspense, useEffect, useState } from 'react';
import Landing from './components/Landing.jsx';
import { UI } from './i18n/index.js';
const Viewer = lazy(() => import('./viewer/Viewer.jsx'));

export default function App() {
  const [lang, setLang] = useState('en');
  const [sex, setSex] = useState(null);
  useEffect(() => { document.documentElement.lang = lang; document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'; }, [lang]);
  if (!sex) return <Landing lang={lang} setLang={setLang} onPick={setSex} />;
  return (
    <Suspense fallback={<div className="loader"><span className="spin" />{UI[lang].loading}</div>}>
      <Viewer sex={sex} lang={lang} setLang={setLang} onBack={() => setSex(null)} />
    </Suspense>
  );
}
