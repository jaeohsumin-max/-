import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function NavDropdown({ label, items }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-0.5 text-[12px] md:text-[13px] text-[#333] hover:text-black py-1"
      >
        {label}
        <span className="text-[10px] text-[#999]">{open ? "▴" : "▾"}</span>
      </button>
      {open && (
        <ul className="absolute left-0 top-full mt-1 min-w-[140px] bg-white border border-[#ddd] shadow-md z-50 py-1">
          {items.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-[12px] text-[#444] hover:bg-[#f5f5f5] hover:text-black"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
