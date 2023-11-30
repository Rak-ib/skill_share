import img from '../../../assets/image/banner.jpeg'

const Banner = () => {
    return (
        <div className=' relative'>
             <img className='w-full' src={img} alt="" />
             <div className=' absolute  top-1/2 left-28'>
                 <h1><span className=' text-5xl'>Enhanced Your</span> <br></br>
                 <span className=' text-6xl font-semibold'>Learning</span></h1>
                 <div className='flex gap-4 font-semibold mt-8 items-center'>
                     <p>Popular</p>
                     <button className="btn btn-outline btn-warning">GRE </button>
                     <button className="btn btn-outline btn-warning">IELTS </button>
                     <button className="btn btn-outline btn-warning">Python </button>
                 </div>
             </div>
        </div>
    );
};

export default Banner;