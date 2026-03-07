import { Link, useLocation } from "react-router";
import { Terminal } from "lucide-react";
import { useState } from "react";
import { InstallModal } from "./InstallModal";
import { UserMenu } from "./UserMenu";

export function Navbar() {
  const location = useLocation();
  const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const tabs = [
    { name: "Docs", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Community", path: "/community" },
  ];

  const getActiveTab = () => {
    if (location.pathname === "/community") return "/community";
    if (location.pathname === "/blog") return "/blog";
    return "/";
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="h-[72px] px-8 flex items-center justify-between max-w-[1440px] mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#22d3ee] to-[#a855f7] flex items-center justify-center transition-transform group-hover:scale-105">
              <Terminal className="w-5 h-5 text-background" />
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-[#22d3ee] to-[#a855f7] bg-clip-text text-transparent">
              Quanta
            </span>
          </Link>

          {/* Center Tabs */}
          <div className="flex items-center gap-8">
            {tabs.map((tab) => {
              const isActive = getActiveTab() === tab.path;
              
              return (
                <Link
                  key={tab.path}
                  to={tab.path}
                  className={`relative py-2 text-sm transition-colors group ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.name}
                  <span className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#22d3ee] to-[#a855f7] transition-transform origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`} />
                </Link>
              );
            })}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsInstallModalOpen(true)}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#22d3ee] to-[#a855f7] text-background text-sm font-medium hover:shadow-lg hover:shadow-[#22d3ee]/25 transition-all hover:scale-105"
            >
              Install v2.7
            </button>
            <UserMenu isLoggedIn={isLoggedIn} onLogin={() => setIsLoggedIn(true)} />
          </div>
        </div>
      </nav>

      <InstallModal
        isOpen={isInstallModalOpen}
        onClose={() => setIsInstallModalOpen(false)}
      />
    </>
  );
}