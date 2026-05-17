import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-md p-5 transition-all ${className}`}
    >
      {children}
    </div>
  );
}