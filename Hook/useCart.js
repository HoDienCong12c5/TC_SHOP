import { REACT_QUERY } from '@/common/constant'
import FirebaseService from '@/Services/FirebaseService'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react';
import { useState } from 'react';

const useCart = () => {
  const [cart, setCart] = useState(0);
  useEffect(() => {
    (async()=>{
      const data = FirebaseService.cart.getDataByID()
    })()

  }, []);
}

export default useCart
