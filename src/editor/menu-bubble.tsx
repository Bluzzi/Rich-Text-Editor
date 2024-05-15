import type { Component } from "#/utils/react";
import type { Editor } from "@tiptap/react";
import { EditorMenuItem } from "./menu-item";
import { BubbleMenu } from "@tiptap/react";
import { BoldIcon, ItalicIcon, StrikethroughIcon, CodeIcon, RemoveFormattingIcon } from "lucide-react";

export const EditorMenuBubble: Component<{ editor: Editor }> = ({ editor }) => {
  return (
    <div> {/* @see https://github.com/ueberdosis/tiptap/issues/3784 */}
      <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }} className="flex items-center flex-auto p-1 border-b-2 border-black bg-black rounded-xl">
        <EditorMenuItem title="Bold" icon={<BoldIcon />} action={() => editor.chain().focus().toggleBold().run()} />
        <EditorMenuItem title="Italic" icon={<ItalicIcon />} action={() => editor.chain().focus().toggleItalic().run()} />
        <EditorMenuItem title="Strike" icon={<StrikethroughIcon />} action={() => editor.chain().focus().toggleStrike().run()} />
        <EditorMenuItem title="Code" icon={<CodeIcon />} action={() => editor.chain().focus().toggleCode().run()} />
        <EditorMenuItem title="Clear Format" icon={<RemoveFormattingIcon />} action={() => editor.chain().focus().clearNodes().unsetAllMarks().run()} />
      </BubbleMenu>
    </div>
  );
};