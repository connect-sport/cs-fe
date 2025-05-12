import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/atoms/Input";
import { Button } from "@/components/atoms/Button";
import { MessageForm, messageSchema } from "@/schemas/messageInput.schema";

const MessageInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MessageForm>({
    resolver: zodResolver(messageSchema),
  });

  const onSubmit = (data: MessageForm) => {
    console.log("Message sent:", data.message);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 mt-4">
      <div className="flex-grow">
        <Input placeholder="Type a message" {...register("message")} />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>
      <Button type="submit">Send</Button>
    </form>
  );
};
export { MessageInput };
