import img1 from '../../../assets/image/slider-1.jpg'
import img2 from '../../../assets/image/slider-2.jpg'

const Slider = () => {
    return (
        <div className=" text-center bg-gradient-to-r from-cyan-500 to-blue-500 ...">
              <h1 className='text-3xl p-4 text-white font-semibold'>Select Your <span className=' font-bold text-orange-500'>Favourite </span>Category & Start Learning.</h1>
            <div className="carousel rounded-box w-1/2  ">


                <div className="carousel-item w-1/2 relative ">
                    <img src={img1} className="w-full " />
                    <div className=' absolute top-1/2 left-20'>
                        <h1 className='font-semibold text-3xl  hover:bg-slate-300 p-4 rounded-xl'>Graphic <br></br> Design</h1>
                    </div>
                </div>
                <div className="carousel-item w-1/2 relative">
                    <img src={img2} className="w-full" />
                    <div className=' absolute top-1/2 left-16'>
                        <h1 className='font-semibold text-3xl  hover:bg-slate-300 p-4 rounded-xl'>Web <br></br> Development</h1>
                    </div>
                </div>
                <div className="carousel-item w-1/2 relative">
                    <img src={img1} className="w-full" />
                    <div className=' absolute top-1/2 left-20'>
                        <h1 className='font-semibold text-3xl  hover:bg-slate-300 p-4 rounded-xl'>Vedio <br></br> Editing</h1>
                    </div>
                </div>
                <div className="carousel-item w-1/2 relative">
                    <img src={img2} className="w-full" />
                    <div className=' absolute top-1/2 left-20'>
                        <h1 className='font-semibold text-3xl  hover:bg-slate-300 p-4 rounded-xl'>Microsoft <br></br>Excel</h1>
                    </div>
                </div>
                <div className="carousel-item w-1/2 relative">
                    <img src={img1} className="w-full" />
                    <div className=' absolute top-1/2 left-20'>
                        <h1 className='font-semibold text-3xl  hover:bg-slate-300 p-4 rounded-xl'>Academic <br></br> course</h1>
                    </div>
                </div>
                <div className="carousel-item w-1/2 relative">
                    <img src={img2} className="w-full" />
                    <div className=' absolute top-1/2 left-20'>
                        <h1 className='font-semibold text-3xl  hover:bg-slate-300 p-4 rounded-xl'>Data <br></br> Science</h1>
                    </div>
                </div>




            </div>

        </div>
    );
};

export default Slider;