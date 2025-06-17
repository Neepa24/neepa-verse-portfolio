
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { BackgroundProvider, useBackground } from "./contexts/BackgroundContext";
import Navigation from "./components/Navigation";
import ColorPicker from "./components/ColorPicker";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const { backgroundColor, setBackgroundColor } = useBackground();

  return (
    <div className="relative">
      <Navigation />
      <ColorPicker 
        onColorChange={setBackgroundColor}
        currentColor={backgroundColor}
      />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BackgroundProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </BackgroundProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
