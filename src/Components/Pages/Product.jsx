const Product = () => {
    return (
        <>
            <div className='flex justify-center gap-12'>
                <div className='text-center mt-10 w-79 border-2 h-63'>
                    <img className="w-full h-45" src={stockImg} alt="Hardware Photo" />
                    <h1>Hello CArd</h1>
                    <button className='bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded'>Click ME</button>
                </div>
                <div className='text-center mt-10 w-79 border-2 h-63'>
                    <img className="w-full h-45" src={stockImg} alt="Hardware Photo" />
                    <h1>Hello CArd</h1>
                    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-5 rounded '>Click ME</button>
                </div>
                <div className='text-center mt-10 w-79 border-2 h-63'>
                    <img className="w-full h-45" src={stockImg} alt="Hardware Photo" />
                    <h1>Hello CArd</h1>
                    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-5 rounded '>Click ME</button>
                </div>
                <div className='text-center mt-10 w-79 border-2 h-63'>
                    <img className="w-full h-45" src={stockImg} alt="Hardware Photo" />
                    <h1>Hello CArd</h1>
                    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-5 rounded '>Click ME</button>
                </div>
            </div>
        </>)
}
export default Product
import stockImg from "../../assets/stock.jpg";{stockImg}
