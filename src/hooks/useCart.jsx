import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
   const {user, loading} = useAuth();
   const [instance] = useAxiosSecure();
   const {refetch, data:carts = [] } = useQuery({
    queryKey: ['carts', user?.email],
    enabled: !loading,
    // queryFn: async() => {
    //     const res = await fetch(`http://localhost:3000/carts?email=${user?.email}`,{
    //       headers: {
    //         authorization: `Bearer ${localStorage.getItem('access-token-Bristo')}`
    //       }
    //     })
    //     return res.json()
        
    // },
    queryFn: async() => {
        const res = await instance(`/carts?email=${user?.email}`)
        console.log('res from axios:', res);
        return res?.data;
        
    },
  })
  return [carts, refetch]
};

export default useCart;