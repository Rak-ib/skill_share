import React from 'react';
import { FaVideo } from 'react-icons/fa';
import { RiPagesLine } from 'react-icons/ri';
import { TfiWrite } from 'react-icons/tfi';

const EachModule = ({module}) => {
    console.log(module)
    const {module_bg}=module;
    console.log(module_bg)
    return (
        <div>
             <div className="collapse collapse-arrow bg-base-200 border-2">
                        <input type="radio" name="my-accordion-2"  checked="checked" /> 
                        <div className={`collapse-title text-xl font-medium flex flex-row`}>
                               <div className={` bg-green-400 w-20 h-20  flex flex-row items-center justify-center text-center rounded-lg px-4`}>
                                    <p className="font-bold  text-white text-lg">Moudle 1</p>
                                </div>
                                <div className="ml-4">
                                    <p> Start With PHP & Visual Studio Code Power Uses</p>
                                    <div className="flex flex-row md:gap-4 mt-2">
                                        <p className="flex flex-row gap-1  text-sm items-center"><FaVideo></FaVideo> ২ টি লাইভ ক্লাস </p>
                                        <p  className="flex flex-row gap-1 text-sm  items-center"><TfiWrite></TfiWrite> ১ টি এসাইনমেন্ট</p>
                                        <p  className="flex flex-row gap-1 text-sm  items-center"><RiPagesLine></RiPagesLine> ২ টি টেস্ট</p>
                                    </div>
                                </div>
                        </div>
                        <div className="collapse-content "> 
                          
                            <div>
                                {/* class1 */}
                                <div className="border-t-2  border-b-2 border-gray-300 py-4 my-4 ">
                                    <div className="flex flex-row gap-2">
                                      <p className="font-medium">১ম দিন</p>
                                      <button className="bg-black font-semibold text-white px-2 py-1 text-sm rounded-full">লাইভ ক্লাস</button>
                                    </div>
                                    <p className="font-semibold text-xl my-2">Introduction to PHP</p>
                                </div>
                                {/* class2 */}
                                <div className="border-t-2  border-b-2 border-gray-300 py-4 my-4">
                                    <div className="flex flex-row gap-2">
                                      <p className="font-medium">১ম দিন</p>
                                      <button className="bg-black font-semibold text-white px-2 py-1 text-sm rounded-full">লাইভ ক্লাস</button>
                                    </div>
                                    <p className="font-semibold text-xl my-2">Introduction to PHP</p>
                                </div>
                                {/* class3 */}
                                <div className="border-t-2  border-b-2 border-gray-300 py-4 my-4 ">
                                    <div className="flex flex-row gap-2">
                                      <p className="font-medium">১ম দিন</p>
                                      <button className="bg-black font-semibold text-white px-2 py-1 text-sm rounded-full">লাইভ ক্লাস</button>
                                    </div>
                                    <p className="font-semibold text-xl my-2">Introduction to PHP</p>
                                </div>

                            </div>

                        </div>
                        
                      </div>
        </div>
    );
};

export default EachModule;