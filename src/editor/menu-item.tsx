import type { Component } from "#/utils/react";
import type { ReactNode } from "react";

export const EditorMenuItem: Component<{ icon: ReactNode; title: string; action: () => boolean }> = ({ icon, title, action }) => (
  <button
    onClick={action}
    title={title}
    className="bg-transparent border-none rounded-md text-white cursor-pointer h-7 mr-1 p-1 w-7 hover:bg-zinc-800 flex items-center justify-center"
  >
    {icon}
  </button>
);