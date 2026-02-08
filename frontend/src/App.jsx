import HomePage from './pages/HomePage'
import './App.css'

const grainStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
}

export default function App() {
  return (
    <div className="bg-base text-txt-primary font-sans antialiased selection:bg-accent selection:text-white relative">
      {/* Subtle grain texture */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]" style={grainStyle} aria-hidden />

      {/* Architectural grid lines */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-6 md:px-24 opacity-30" aria-hidden>
        <div className="w-px h-full bg-line" />
        <div className="w-px h-full bg-line hidden md:block" />
        <div className="w-px h-full bg-line hidden md:block" />
        <div className="w-px h-full bg-line" />
      </div>

      <HomePage />
    </div>
  )
}
