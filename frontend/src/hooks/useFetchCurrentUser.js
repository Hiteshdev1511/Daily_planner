import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrentUser } from "../features/user/userSlice";

export const useFetchCurrentUser = () => {
  const { user, status } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle" && !user) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, user, status]);
};
