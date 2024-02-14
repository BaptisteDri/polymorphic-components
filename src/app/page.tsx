import { Button } from "@/ui/components/button";
import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <main className="h-dvh grid place-items-center">
      <div className="space-x-4">
        <Button as={Link} href={"/test"}>
          next link
        </Button>
        <Button as={"a"} href={"/test"}>
          link
        </Button>
        <Button>button</Button>
      </div>
    </main>
  );
};

export default Home;
