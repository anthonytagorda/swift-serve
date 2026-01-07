import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUserData } from "../https";
import { setUser, removeUser } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const useLoadData = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const { data } = await getUserData();
				const { _id, name, email, phone, role } = data.data;
				dispatch(setUser({ _id, name, email, phone, role }));
			} catch (error) {
				dispatch(removeUser());
				navigate("/auth", { replace: true });
			} finally {
				setIsLoading(false);
			}
		};

		fetchUser();
	}, []);

	return isLoading;
};

export default useLoadData;
