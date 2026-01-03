import { Link } from "react-router-dom";
import { Activity, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
                <Activity className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-semibold">
                Silent<span className="gradient-text">Disease</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-powered early detection engine helping identify silent disease risks 
              before they become serious health concerns.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link 
                to="/" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/assess" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Risk Assessment
              </Link>
              <Link 
                to="/about" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                About Project
              </Link>
            </nav>
          </div>

          {/* Disclaimer */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Important Notice</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This tool provides risk probability scores only and does not diagnose diseases. 
              Always consult healthcare professionals for medical advice.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 Silent Disease Detection Engine. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Built with <Heart className="h-3 w-3 text-destructive" /> by{" "}
            <span className="font-semibold gradient-text">Team Alpha Male</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
