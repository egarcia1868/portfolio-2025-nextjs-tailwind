import { createPopper } from "@popperjs/core";
import { useEffect, useRef, useState, ReactNode } from "react";

export default function Tooltip({
  label,
  children,
  exp,
  type,
  placement = "top",
}: {
  label?: string;
  children: ReactNode;
  exp?: string;
  type?: "icon" | "contact";
  placement?: "top" | "bottom" | "left" | "right";
}) {
  const [visible, setVisible] = useState(false);
  const referenceRef = useRef<HTMLSpanElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (referenceRef.current && tooltipRef.current) {
      createPopper(referenceRef.current, tooltipRef.current, {
        placement,
        modifiers: [{ name: "offset", options: { offset: [0, 8] } }],
      });
    }
  }, [placement]);

  {
    if (type === "icon")
      return (
        <span
          ref={referenceRef}
          className="relative inline-flex"
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
        >
          {children}
          <div
            ref={tooltipRef}
            className={`pointer-events-none z-50 rounded bg-gray-900 border-primary border-1 min-h-15 min-w-25 px-2 py-1 text-xs text-white shadow transition-opacity
    ${visible ? "opacity-100" : "opacity-0"} flex flex-col items-center justify-center text-center`}
          >
            <p>{label}</p>
            <p>{exp}+ years</p>
          </div>
        </span>
      );
  }
  {
    if (type === "contact")
      return (
        <span
          ref={referenceRef}
          className="relative inline-flex cursor-pointer"
          onClick={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
        >
          {children}
          <div
            ref={tooltipRef}
            className={`
          pointer-events-none 
          z-50 
          rounded 
          bg-gray-900 
          border-primary 
          border-1 
          px-2 
          py-1 
          text-xs 
          text-white 
          shadow 
          transition-opacity
    ${visible ? "opacity-100" : "opacity-0"} 
    flex 
    flex-col 
    items-center 
    justify-center 
    text-center`}
          >
            <div
              className="w-[420px] rounded-xl border border-white/10 shadow-2xl
                bg-gradient-to-br from-cyan-300 to-teal-500 text-slate-900 p-4 relative"
            >
              {/* caret */}
              <div
                aria-hidden
                className="absolute -top-2 left-8 h-4 w-4 rotate-45
               bg-gradient-to-br from-cyan-300 to-teal-500
               rounded-tl-[4px] shadow-[inset_-1px_-1px_0_rgba(255,255,255,.2)]"
              />

              {/* header */}
              <div className="mb-2 flex items-center justify-between">
                <h2 className="text-xl font-bold">Contact me</h2>
                <button
                  type="button"
                  aria-label="Close"
                  className="text-slate-900/80 hover:text-black text-xl leading-none"
                >
                  ×
                </button>
              </div>

              {/* form */}
              <form className="space-y-3">
                <div>
                  <label htmlFor="contact-name" className="font-semibold">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    placeholder="Your name"
                    className="mt-1 w-full rounded-md bg-white/90 px-3 py-2 text-slate-900 outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="font-semibold">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="Your email address"
                    className="mt-1 w-full rounded-md bg-white/90 px-3 py-2 text-slate-900 outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="font-semibold">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    placeholder="Your message"
                    className="mt-1 min-h-[120px] w-full rounded-md bg-white/90 px-3 py-2 text-slate-900 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex h-11 items-center justify-center rounded-lg bg-slate-900 px-6 font-semibold text-white hover:brightness-110"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </span>
      );
  }
}
