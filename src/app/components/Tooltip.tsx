import { createPopper } from "@popperjs/core";
import { useEffect, useRef, useState, ReactNode } from "react";

export default function Tooltip({
  label,
  children,
  exp,
  // type,
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
  };

