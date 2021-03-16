import { useRouter } from "next/router";

export default function ClientProjectsPage() {
  const router = useRouter();

  console.log(router.query);

  const loadProjectHandler = () => {
    router.push("/clients/max/project-a");
  };

  return (
    <div>
      <h1>The Project of a given client {router.query.id}</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
