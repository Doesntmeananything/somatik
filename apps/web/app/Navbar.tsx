import { Logo } from "./Logo";

export const Navbar = () => {
  return (
    <nav className="z-50 sticky top-0 w-full will-change-transform shadow-[0_-1px_0_rgba(255,255,255,.1)_inset] backdrop-blur bg-black/50">
      <div className="h-full max-w-screen-xl mx-auto flex items-center gap-2 py-4 px-6">
        <Logo className="w-8 h-8" />

        <span className="text-lg font-extrabold tracking-widest">SOMATIK</span>

        <span className="text-xs font-bold bg-rose-600/30 text-rose-200 px-1 py-px rounded">
          ALPHA
        </span>
      </div>
    </nav>
  );
};
