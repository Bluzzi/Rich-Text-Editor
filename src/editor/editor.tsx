"use client";

import type { Component } from "#/utils/react";
import { useEditor, EditorContent, ReactNodeViewRenderer } from "@tiptap/react";
import { EditorMenuTop } from "./menu-top";
import { EditorMenuBubble } from "./menu-bubble";
import { EditorCodeWrapper } from "./code-wrapper";
import StarterKit from "@tiptap/starter-kit";
import BubbleMenu from "@tiptap/extension-bubble-menu";
import Typography from "@tiptap/extension-typography";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import { codeHighlight } from "#/utils/code-highlight";
import { clsx } from "clsx";
import styles from "./editor.module.css";

export const Editor: Component<{ content: string; editable: boolean }> = ({ content, editable }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [1, 2] } }),
      CodeBlockLowlight.extend({ addNodeView: () => ReactNodeViewRenderer(EditorCodeWrapper) }).configure({ lowlight: codeHighlight }),
      BubbleMenu,
      Typography,
      TaskList,
      TaskItem.configure({ nested: true })
    ],
    content: content,
    editorProps: { attributes: { class: clsx("focus:outline-none", styles["margin-start"], styles["margin-end"]) } },
    editable: editable
  }, [editable, content]);

  return (
    <div className="bg-white border-2 border-black rounded-md overflow-hidden flex flex-col">
      {editor && editable && (
        <>
          <EditorMenuTop editor={editor} />
          <EditorMenuBubble editor={editor} />
        </>
      )}

      <EditorContent
        editor={editor}
        className={clsx(
          "py-5 px-4",
          "prose",
          "prose-h1:text-xl prose-h2:text-lg",
          "prose-headings:mt-3 prose-headings:mb-1",
          "prose-p:my-1",
          "prose-ol:my-1 prose-ul:my-1 prose-li:my-0.5"
        )} />
    </div>
  );
};