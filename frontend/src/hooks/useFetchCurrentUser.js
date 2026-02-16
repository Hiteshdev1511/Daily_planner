import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrentUser } from "../features/user/userSlice";

export const useFetchCurrentUser = () => {
  const { status } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const hasBeenCalled = useRef(false);

  useEffect(() => {
    if (!hasBeenCalled.current && status === "idle") {
      hasBeenCalled.current = true;
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, status]);
};
