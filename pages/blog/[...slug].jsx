import { useRouter } from "next/router";

export default function BlogPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>Blog paage</h1>
    </div>
  );
}
