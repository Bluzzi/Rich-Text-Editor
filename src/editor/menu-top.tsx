import type { Component } from "#/utils/react";
import type { Editor } from "@tiptap/react";
import { EditorMenuItem } from "./menu-item";
import {
  BoldIcon, ItalicIcon, StrikethroughIcon,
  CodeIcon, ListIcon, ListOrderedIcon,
  SquareCodeIcon, QuoteIcon, SeparatorHorizontalIcon,
  WrapTextIcon, RemoveFormattingIcon, Undo2Icon,
  Redo2Icon, PilcrowIcon, Heading1Icon,
  Heading2Icon, ListTodoIcon
} from "lucide-react";

export const EditorMenuTop: Component<{ editor: Editor }> = ({ editor }) => {
  const Divider: Component = () => <div className="bg-white/25 h-5 ml-2 mr-3 w-[1px]" />;

  return (
    <div className="flex items-center flex-wrap p-1 border-b-2 border-black bg-black">
      <EditorMenuItem title="Bold" icon={<BoldIcon />} action={() => editor.chain().focus().toggleBold().run()} />
      <EditorMenuItem title="Italic" icon={<ItalicIcon />} action={() => editor.chain().focus().toggleItalic().run()} />
      <EditorMenuItem title="Strike" icon={<StrikethroughIcon />} action={() => editor.chain().focus().toggleStrike().run()} />
      <EditorMenuItem title="Code" icon={<CodeIcon />} action={() => editor.chain().focus().toggleCode().run()} />
      <Divider />
      <EditorMenuItem title="Heading 1" icon={<Heading1Icon />} action={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} />
      <EditorMenuItem title="Heading 2" icon={<Heading2Icon />} action={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} />
      <EditorMenuItem title="Paragraph" icon={<PilcrowIcon />} action={() => editor.chain().focus().setParagraph().run()} />
      <EditorMenuItem title="Bullet List" icon={<ListIcon />} action={() => editor.chain().focus().toggleBulletList().run()} />
      <EditorMenuItem title="Ordered List" icon={<ListOrderedIcon />} action={() => editor.chain().focus().toggleOrderedList().run()} />
      <EditorMenuItem title="Task List" icon={<ListTodoIcon />} action={() => editor.chain().focus().toggleTaskList().run()} />
      <EditorMenuItem title="Code Block" icon={<SquareCodeIcon />} action={() => editor.chain().focus().toggleCodeBlock().run()} />
      <Divider />
      <EditorMenuItem title="Blockquote" icon={<QuoteIcon />} action={() => editor.chain().focus().toggleBlockquote().run()} />
      <EditorMenuItem title="Horizontal Rule" icon={<SeparatorHorizontalIcon />} action={() => editor.chain().focus().setHorizontalRule().run()} />
      <Divider />
      <EditorMenuItem title="Hard Break" icon={<WrapTextIcon />} action={() => editor.chain().focus().setHardBreak().run()} />
      <EditorMenuItem title="Clear Format" icon={<RemoveFormattingIcon />} action={() => editor.chain().focus().clearNodes().unsetAllMarks().run()} />
      <Divider />
      <EditorMenuItem title="Undo" icon={<Undo2Icon />} action={() => editor.chain().focus().undo().run()} />
      <EditorMenuItem title="Redo" icon={<Redo2Icon />} action={() => editor.chain().focus().redo().run()} />
    </div>
  );
};