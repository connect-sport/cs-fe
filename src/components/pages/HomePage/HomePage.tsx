"use client";

import { ChatRoom } from "@/components/organisms/ChatRoom";
import { Highlight } from "@/components/organisms/Highlight";
import { CategoryDto } from "@/dtos/category.dto";

interface Props {
  categories: CategoryDto[];
}

const HomePage = ({ categories }: Props) => {
  return (
    <div>
      <ChatRoom />
      {(categories || []).map((category) => (
        <div key={category._id} className="p-4 text-center rounded mb-4">
          <Highlight title={category.name} alias={category.alias} />
        </div>
      ))}
    </div>
  );
};
export { HomePage };
