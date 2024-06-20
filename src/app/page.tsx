import Link from "next/link";
import InputComponent from "./_component/InputComponent";
import Count from "./_component/count";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center gap-5 p-24">
      <Count/>
      <InputComponent/>
    </main>
  );
}
