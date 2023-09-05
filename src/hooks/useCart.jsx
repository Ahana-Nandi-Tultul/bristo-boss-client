import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useQuery } from '@tanstack/react-query'

const useCart = () => {
   const {user} = useContext(AuthContext);
   const {refetch, data:carts = [] } = useQuery({
    queryKey: ['carts', user?.email],
    queryFn: async() => {
        const res = await fetch(`http://localhost:3000/carts?email=${user?.email}`)
        return res.json()
        
    },
  })
  return [carts, refetch]
};

export default useCart;