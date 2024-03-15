import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductTile from "../components/product-tile/ProductTile";


const Home = () => {
  const[loading,setLoading]=useState(false);
  const[product,setProduct]=useState([]);

  async function fetchListOfProducts(){
    setLoading(true);
    const res=await fetch('https://fakestoreapi.com/products');
    const data=await res.json();

    if(data){
      setLoading(false);
      setProduct(data);
    }
  }

  useEffect(()=>{
    fetchListOfProducts()
  },[])

  return (
    <div>
    {loading ? 
      <div className="min-h-screen w-full flex justify-center items-center">
        <Circles 
          height={120}
          width={120}
          color="rgb(127,29,29)"
          visible={"true"}
        />
      </div>
    : <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {
            product && product.length ? 
            product.map(productItem=><ProductTile product={productItem} />):null
          }
      </div>}
  </div>

  );
}

export default Home