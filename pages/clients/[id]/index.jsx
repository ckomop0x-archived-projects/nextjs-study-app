import { useRouter } from "next/router";

export default function ClientProjectsPage() {
  const router = useRouter();

  console.log(router.query);

  const loadProjectHandler = () => {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "Pavel", clientprojectid: "Project-A" },
    });
  };

  return (
    <div>
      <h1>The Project of a given client {router.query.id}</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
