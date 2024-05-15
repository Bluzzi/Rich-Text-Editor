import type { Component } from "#/utils/react";
import { Editor } from "#/editor";
import dedent from "dedent";

const Page: Component = () => {
  const content = dedent`
    <h1>Welcome to Our Site</h1>
    <p>This site is designed to provide you with an exceptional user experience. We hope you find what you are looking for.</p>
    
    <h2>Our Services</h2>
    <ul>
        <li>Quality customer service</li>
        <li>Varied and innovative products</li>
        <li>24/7 technical support</li>
    </ul>
    
    <h2>General Instructions</h2>
    <p>Please follow the instructions below for optimal use of our site:</p>
    <ul>
        <li>Create an account to access all features</li>
        <li>Explore our product categories</li>
        <li>Contact our support if needed</li>
    </ul>
    
    <h2>Code Example</h2>
    <p>Here is an example of HTML code:</p>
    <pre><code>
    <h1>Main Title</h1>
    <p>This is a standard paragraph of text.</p>
    <h2>Subtitle</h2>
    <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
    </ul>
    </code></pre>
    
    <h2>Conclusion</h2>
    <p>Thank you for visiting our site. We hope you found what you were looking for and that you will return soon!</p>
  `;

  return (
    <main className="h-screen flex items-center justify-center bg-white text-black">
      <Editor content={content} editable />
    </main>
  );
};

export default Page;