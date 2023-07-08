import { UserButton } from "@clerk/nextjs";

export default function SetuoPage() {
  return (
    <div className="p-4">
      <UserButton afterSignOutUrl="/"/>
    </div>
  );
}
