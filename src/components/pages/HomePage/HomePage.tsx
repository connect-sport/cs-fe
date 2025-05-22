import { Highlight } from "@/components/organisms/Highlight";
import { useGetMe } from "@/hooks/auth/useGetMe";
import { useCategory } from "@/hooks/category/useCategory";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useEffect } from "react";

const HomePage = () => {
  const { data } = useGetMe();
  const { categories } = useCategory();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      dispatch({ type: "GET_USER", payload: data });
    };

    fetchUser();
  }, [data, dispatch]);

  return (
    <div>
      {categories?.map((category) => (
        <div key={category.id} className="p-4 bg-gray-200 text-center rounded">
          <Highlight title={category.name} alias={category.alias} />
        </div>
      ))}
    </div>
  );
};
export { HomePage };
