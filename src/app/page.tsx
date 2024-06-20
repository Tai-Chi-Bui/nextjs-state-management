import Link from "next/link";
import InputComponent from "./_component/InputComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 p-24">
      <InputComponent/>
      <Link className="border rounded-lg border-green-400 p-3" href="/count">See result</Link>
    </main>
  );
}
