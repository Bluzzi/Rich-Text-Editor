import type { ReactElement } from "react";

const Home = async(): Promise<ReactElement> => {
  return (
    <main className="h-screen flex items-center justify-center bg-black text-white">
      <p>{t("welcome", { name: "John" })}</p>
    </main>
  );
};

export default Home;