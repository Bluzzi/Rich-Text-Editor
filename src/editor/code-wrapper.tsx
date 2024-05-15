import type { Component } from "#/utils/react";
import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";

export const EditorCodeWrapper: Component<{
  node: { attrs: { language: string } };
  updateAttributes: (attributes: { language: string }) => void;
  extension: { options: { lowlight: { listLanguages: () => string[] } } };
}> = ({ node: { attrs: { language: defaultLanguage } }, updateAttributes, extension }) => {
  return (
    <NodeViewWrapper className="relative">
      <select
        contentEditable={false}
        defaultValue={defaultLanguage}
        onChange={(event) => updateAttributes({ language: event.target.value })}
        className="absolute right-2 top-2"
      >
        <option value="null">auto</option>
        <option disabled>—</option>
        {extension.options.lowlight.listLanguages().map((lang, index) => (
          <option key={index} value={lang}>
            {lang}
          </option>
        ))}
      </select>

      <pre className="bg-black">
        <NodeViewContent as="code" />
      </pre>
    </NodeViewWrapper>
  );
};