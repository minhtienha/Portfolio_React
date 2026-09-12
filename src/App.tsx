import { ThemeProvider } from './context/theme-context';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';

export default function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </Layout>
    </ThemeProvider>
  );
}
