import type { Component } from "#/utils/react";
import { Editor } from "#/editor";
import dedent from "dedent";

const Page: Component = () => {
  const code = dedent`
    for (let i = 1; i <= 20; i++) {
    $$if (i % 15 == 0) console.log("FizzBuzz");
    $$else if (i % 3 == 0) console.log("Fizz");
    $$else if (i % 5 == 0) console.log("Buzz");
    $$else console.log(i);
    }
  `;

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
    <pre><code>${code}</code></pre>
    
    <h2>Conclusion</h2>
    <p>Thank you for visiting our site. We hope you found what you were looking for and that you will return soon!</p>
  `.replaceAll("$", " ");

  return (
    <main className="min-h-screen py-16 flex items-center justify-center bg-white text-black">
      <Editor content={content} editable />
    </main>
  );
};

export default Page;