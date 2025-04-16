import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useServices = () => {
    const axiosPublic = useAxiosPublic();
    const { refetch, data: products = [] } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axiosPublic.get('/services');
            return res.data;
        }
    });

    return [products, refetch];
};

export default useServices;