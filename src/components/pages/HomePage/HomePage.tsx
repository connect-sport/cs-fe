import { ChatBox } from "@/components/organisms/ChatBox/ChatBox";
import { PostList } from "@/components/organisms/PostList";
import { MainLayout } from "@/components/templates/MainLayout/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <ChatBox />
      <PostList />
    </MainLayout>
  );
};
export { HomePage };
