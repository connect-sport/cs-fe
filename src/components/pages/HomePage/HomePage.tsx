import { useGetMe } from "@/hooks/auth/useGetMe";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useEffect } from "react";

const HomePage = () => {
  const { data } = useGetMe();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      dispatch({ type: "GET_USER", payload: data });
    };

    fetchUser();
  }, [data, dispatch]);

  return <div>a</div>;
};
export { HomePage };
