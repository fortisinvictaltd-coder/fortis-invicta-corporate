"use client";

import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [page, setPage] = useState("");

  useEffect(() => {
    setPage(window.location.pathname);
  }, []);

  const getMessage = () => {
    if (page.includes("eco-tech"))
      return "Hello Fortis Invicta, I'm interested in the Eco-Tech housing project";
    if (page.includes("circular"))
      return "Hello Fortis Invicta, I'm interested in the Circular Economy Hub";
    if (page.includes("solar"))
      return "Hello Fortis Invicta, I'm interested in solar systems";
    if (page.includes("wolffia"))
      return "Hello Fortis Invicta, I'm interested in Wolffia-AWG water treatment";
    if (page.includes("housing"))
      return "Hello Fortis Invicta, I'm interested in NZEB EcoTech Housing";
    return "Hello Fortis Invicta, I'm interested in learning more about your services";
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={`https://wa.me/2202572911?text=${encodeURIComponent(getMessage())}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition animate-pulse"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="white"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.964-.94 1.164-.173.199-.347.223-.644.075-.197-.1-1.283-1.17-2.443-3.73-.238-.624-.397-1.307-.497-1.527-.343-.75-.826-1.233-1.347-1.345-.347-.074-.624-.124-1.003.124-.372.272-.99.85-.99 1.706 0 1.064 1.188 2.115 2.326 3.072.386.298.689.396 1.005.496.475.149 1.02.198 1.548.198.397 0 .922-.124 1.32-.372.297-.199.496-.298.664-.497.173-.198.248-.347.348-.496.074-.149.124-.298.174-.447.05-.174.025-.347-.025-.521-.173-.744-.645-1.641-.92-2.206-.174-.372-.348-.47-.496-.595-.175-.124-.372-.149-.546-.124-.198.025-.496.074-.747.372z" />
          <path
            d="M12.012 2c-5.46 0-10 4.54-10 10s4.54 10 10 10c5.46 0 10-4.54 10-10s-4.54-10-10-10z"
            fill="none"
            stroke="white"
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>
        <span className="hidden sm:inline">Chat with us</span>
        <span className="sm:hidden">WhatsApp</span>
      </a>
    </div>
  );
}