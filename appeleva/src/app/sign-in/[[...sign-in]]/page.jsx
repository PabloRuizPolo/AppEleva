import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <Link
        href={"/"}
        className="btn btn-primary flex flex-row justify-center items-center max-w-min"
      >
        Inicio
      </Link>
      <SignIn afterSignOutUrl="/" />
    </div>
  );
}
