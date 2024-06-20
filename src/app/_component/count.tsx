'use client'

import { useAppContext } from "../_context/context";

export default function Home() {
  const {value} = useAppContext()
  return (
    <main className="flex flex-col items-center justify-between p-24">
      Number: {value}
    </main>
  );
}
