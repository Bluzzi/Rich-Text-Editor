import { createLowlight } from "lowlight";
import html from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";

const lowlight = createLowlight();

lowlight.register("HTML", html);
lowlight.register("CSS", css);
lowlight.register("JS", js);
lowlight.register("TS", ts);

export const codeHighlight = lowlight;