import AddTask from "./_component/addTask";
import ShowTasks from "./_component/showTasks";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center gap-5 p-24">
      <AddTask/>
      <ShowTasks/>
    </main>
  );
}
