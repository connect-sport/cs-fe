import { SidebarAdmin } from "@/components/organisms/SidebarAdmin";
import { SidebarTemplate } from "@/components/templates/SidebarTemplate";

export default function AdminLayout({ content }: { content: React.ReactNode }) {
  return (
    <SidebarTemplate Sidebar={<SidebarAdmin />}>
      <main style={{ marginLeft: "1rem" }}>{content}</main>
    </SidebarTemplate>
  );
}
