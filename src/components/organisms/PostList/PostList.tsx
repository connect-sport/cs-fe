import { PostDto } from "@/dtos/post.dto";
import { usePaginatedPostList } from "@/hooks/postList/usePostListPaginated";

const PostList = () => {
  const { data, isLoading } = usePaginatedPostList(10);
  console.log("data", data);
  //   const mutation = useAppMutation(createUser, {
  //   onSuccess: () => {
  //     // Refetch users list hoặc hiển thị thông báo
  //   },
  // });

  if (isLoading) return <p>Loading posts...</p>;

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Latest Posts</h2>
      <ul className="list-disc list-inside">
        {(data?.data || []).map((post: PostDto) => (
          <li key={post.id} className="text-sm text-gray-700">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { PostList };
