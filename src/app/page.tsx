import { Button } from "@/ui/design-system/button";
import Link from "next/link";

const Home = () => {
  return (
    <main className="h-dvh bg-gray-50 grid place-items-center">
      <div className="space-y-10">
        <section className="space-x-4 flex">
          <Button as={Link} href={"/test"}>
            internal link
          </Button>
          <Button
            as={"a"}
            href={"https://www.example.com"}
            rel="noreferrer"
            target="_blank"
          >
            external link
          </Button>
          <Button>button</Button>
        </section>
        <section className="space-x-4 flex">
          <Button as={Link} href={"/test"} intent={"secondary"}>
            internal link
          </Button>
          <Button
            as={"a"}
            href={"https://www.example.com"}
            rel="noreferrer"
            target="_blank"
            intent={"secondary"}
          >
            external link
          </Button>
          <Button intent={"secondary"}>button</Button>
        </section>
        <section className="space-x-4 flex">
          <Button as={Link} href={"/test"} intent={"ghost"}>
            internal link
          </Button>
          <Button
            as={"a"}
            href={"https://www.example.com"}
            rel="noreferrer"
            target="_blank"
            intent={"ghost"}
          >
            external link
          </Button>
          <Button intent={"ghost"}>button</Button>
        </section>
      </div>
    </main>
  );
};

export default Home;
