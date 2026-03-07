import { useState, useRef, useEffect } from "react";
import { User, Settings, LogOut } from "lucide-react";

interface UserMenuProps {
  isLoggedIn: boolean;
  onLogin: () => void;
}

export function UserMenu({ isLoggedIn, onLogin }: UserMenuProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isLoggedIn) {
    return (
      <div className="flex items-center gap-3">
        <button
          onClick={onLogin}
          className="px-4 py-2 rounded-lg border border-border text-sm font-medium hover:border-[#22d3ee]/50 hover:text-[#22d3ee] transition-all"
        >
          Login
        </button>
        <button
          onClick={onLogin}
          className="px-4 py-2 rounded-lg border border-[#22d3ee]/50 text-[#22d3ee] text-sm font-medium hover:bg-[#22d3ee]/10 transition-all"
        >
          Register
        </button>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="w-10 h-10 rounded-full bg-gradient-to-br from-[#22d3ee] to-[#a855f7] flex items-center justify-center hover:shadow-lg hover:shadow-[#22d3ee]/25 transition-all hover:scale-105"
      >
        <span className="text-sm font-semibold text-background">QD</span>
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 top-12 w-48 bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
          <button className="w-full px-4 py-3 text-left hover:bg-muted transition-colors flex items-center gap-3 text-sm">
            <User className="w-4 h-4 text-muted-foreground" />
            <span>Profile</span>
          </button>
          <button className="w-full px-4 py-3 text-left hover:bg-muted transition-colors flex items-center gap-3 text-sm">
            <Settings className="w-4 h-4 text-muted-foreground" />
            <span>Settings</span>
          </button>
          <div className="border-t border-border" />
          <button className="w-full px-4 py-3 text-left hover:bg-muted transition-colors flex items-center gap-3 text-sm text-red-400">
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
}
