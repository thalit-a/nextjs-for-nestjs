import { MenuAdmin } from "@/components/admin/MenuAdmin";
import { requiredLoginSessionOrRedirect } from "@/lib/login/manege-login";

type AdminPostLayoutProps = {
  children: React.ReactNode;
};

export default async function AdminPostLayout({
  children,
}: Readonly<AdminPostLayoutProps>) {
  await requiredLoginSessionOrRedirect();

  return (
    <>
      <MenuAdmin />
      {children}
    </>
  );
}
