import { MessageInput } from "@/components/molecules/MessageInput";
import { MessageList } from "@/components/molecules/MessageList";

const ChatBox = () => {
  return (
    <div className="border rounded-xl p-4 shadow-md">
      <MessageList />
      <MessageInput />
    </div>
  );
};
export { ChatBox };
