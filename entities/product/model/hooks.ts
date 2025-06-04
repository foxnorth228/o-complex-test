import {useSelector} from "react-redux";
import {RootState} from "@/shared/store/store";

export const useProducts = () => {
    return useSelector((state: RootState) => state.products);
}