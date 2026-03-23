import { redirect } from "next/navigation";

export default function EnvPage() {
  // Environment management is intentionally project-scoped.
  redirect("/projects");
}
