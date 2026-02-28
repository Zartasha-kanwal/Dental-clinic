import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyMobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass-card border-t border-border/60 p-3 flex gap-3 shadow-[0_-4px_20px_-4px_hsl(var(--foreground)/0.08)]">
      <Button asChild className="flex-1 rounded-full shadow-md shadow-primary/20" size="sm">
        <a
          href="https://wa.me/1234567890?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          WhatsApp
        </a>
      </Button>
      <Button asChild variant="outline" className="flex-1 rounded-full" size="sm">
        <a href="tel:+1234567890">
          <Phone className="w-4 h-4 mr-2" />
          Call
        </a>
      </Button>
    </div>
  );
};

export default StickyMobileCTA;
