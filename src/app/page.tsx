import ButtonComponent from "./_component/count";
import Count from "./_component/button";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center gap-5 p-24">
      <Count/>
      <ButtonComponent/>
    </main>
  );
}
