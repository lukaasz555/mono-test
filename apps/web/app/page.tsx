import Testclient from "./Testclient";
import { trpc } from "./trpc";

export default async function Home() {
  const res = await trpc.test.query({});

  return (
    <div>
      Server side - {res}
      <Testclient />
    </div>
  );
}
