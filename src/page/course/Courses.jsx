import img1 from '../../assets/image/man1.png'
import { FaLongArrowAltRight } from "react-icons/fa";

const Courses = () => {
    return (
        < div className='mb-8'>
             <h1 className='text-3xl mt-12  font-semibold text-center p-2 '>Most Trending Online Courses</h1>
             <hr className="w-1/3 mx-auto border-t mb-6 border-black" />

           
            
          <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className="card card-compact bg-base-100 shadow-xl  hover:border-2 border-black">
                <figure><img className='h-[300px] bg-green-400 w-full'  src={img1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title  text-xl">Full Stack Web<br></br> Development with MERN</h2>
                    <div className="card-actions justify-end">
                    <button className="btn  btn-warning  mt-4 ">Details <FaLongArrowAltRight /></button> 
                    </div>
                </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl hover:border-2 border-black">
                <figure><img className='h-[300px] bg-green-400 w-full'  src={img1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title  text-xl">Full Stack Web<br></br> Development with MERN</h2>
                    <div className="card-actions justify-end">
                    <button className="btn  btn-warning  mt-4 ">Details <FaLongArrowAltRight /></button> 
                    </div>
                </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl hover:border-2 border-black">
                <figure><img className='h-[300px] bg-green-400 w-full'  src={img1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title  text-xl">Full Stack Web<br></br> Development with MERN</h2>
                    <div className="card-actions justify-end">
                    <button className="btn  btn-warning  mt-4 ">Details <FaLongArrowAltRight /></button> 
                    </div>
                </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl hover:border-2 border-black">
                <figure><img className='h-[300px] bg-green-400 w-full'  src={img1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title  text-xl">Full Stack Web<br></br> Development with MERN</h2>
                    <div className="card-actions justify-end">
                    <button className="btn  btn-warning  mt-4 ">Details <FaLongArrowAltRight /></button> 
                    </div>
                </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl  hover:border-2 border-black">
                <figure><img className='h-[300px] bg-green-400 w-full'  src={img1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title  text-xl">Full Stack Web<br></br> Development with MERN</h2>
                    <div className="card-actions justify-end">
                    <button className="btn  btn-warning  mt-4 ">Details <FaLongArrowAltRight /></button> 
                    </div>
                </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl hover:border-2 border-black">
                <figure><img className='h-[300px] bg-green-400 w-full'  src={img1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title  text-xl">Full Stack Web<br></br> Development with MERN</h2>
                    <div className="card-actions justify-end">
                    <button className="btn  btn-warning  mt-4 ">Details <FaLongArrowAltRight /></button> 
                    </div>
                </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl hover:border-2 border-black">
                <figure><img className='h-[300px] bg-green-400 w-full'  src={img1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title  text-xl">Full Stack Web<br></br> Development with MERN</h2>
                    <div className="card-actions justify-end">
                    <button className="btn  btn-warning  mt-4 ">Details <FaLongArrowAltRight /></button> 
                    </div>
                </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl hover:border-2 border-black">
                <figure><img className='h-[300px] bg-green-400 w-full'  src={img1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title  text-xl">Full Stack Web<br></br> Development with MERN</h2>
                    <div className="card-actions justify-end">
                    <button className="btn  btn-warning  mt-4 ">Details <FaLongArrowAltRight /></button> 
                    </div>
                </div>
            </div>

        </div>

      </div>
    );
};

export default Courses;