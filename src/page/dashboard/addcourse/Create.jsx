import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import USeAxioseSecure from "../../../hooks/USeAxioseSecure";
import UseAuth from "../../../hooks/UseAuth";



const Create = () => {
      //From Custom Hook
      const auth = UseAuth();
      const { user } = auth;
  
    const service = useLoaderData();
    const {_id } = service;
    console.log(_id)
    const axiosSecure=USeAxioseSecure()

    // const [numberOfInstructor,setInstructor]=useState(1);
  //   const [numberOfFields, setNumberOfFields] = useState(1);
  // const [inputValues, setInputValues] = useState(['']);
  const [fields, setField] = useState([{ instructor_name: '', instructor_image: '' },])
  const [links, setLinks] = useState([])
  const [mod_num, setMod_num] = useState(1)


  const [modules, setModules] = useState([{
    module_id: '',
    module_name: ' ',
    module_video: ' ',
    video_link: links,
    module_liveClass: ' ',
  }])
  const handleCourse = e => {
    

    e.preventDefault();
    const form = e.target;
    // console.log('hello')
    const course_id = form.course_id.value;
    const course_name = form.course_name.value;
    const course_image = form.course_image.value;
    const number_of_instructor = form.number_of_instructor.value
    const instructors = fields

    const starting_date = form.starting_date.value;
    const num_std = form.num_std.value;
    const num_mod = form.num_mod.value;
    const price = form.price.value;
    const Modules = modules;
    const ID=_id;
    const email=user.email
    const Everycourse = {email,ID,course_id, course_name, course_image, number_of_instructor, instructors, starting_date, num_std, price, num_mod, Modules };
    console.log(Everycourse)

    axiosSecure.post('/courses', Everycourse)
    .then(res=>{
       console.log(res.data)
       if(res.data.insertedId){
           alert('Course Added Successfully');
       } else {
            // Application already exists or other error
             alert(res.data.message);
          }
          
    })
        
    // const fun=(e)=>{
    //     const count = parseInt(e.target.value, 10) || 0;
    //     setNumberOfFields(count);
    //     setInputValues(new Array(count).fill(''));
    // }
    // const handleInputChange = (index, value) => {
    //     const newInputValues = [...inputValues];

    //     newInputValues[index] = value;
    //     setInputValues(newInputValues);
    //   };

  }
  const fun = (e, index) => {
    let newField = [...fields]
    newField[index][e.target.name] = e.target.value;
    setField(newField)
    // console.log(fields);
  }

  const fun1 = () => {
    const moduleObj = {
      module_id: '',
      module_name: ' ',
      module_video: ' ',
      video_link: links,
      module_liveClass: ' ',
    }
    setModules([...modules, moduleObj])
    setMod_num(modules.length + 1)
  }

  const fun2 = (e, index) => {
    let Modules = [...modules]
    // console.log(index,Modules,e)
    Modules[index][e.target.name] = e.target.value
    console.log("kar index=", index, "kar name=", e.target.name, "helllllll", Modules[index][e.target.name])
    setModules(Modules)
    // console.log(modules)

    // setModules(Modules)

  }
  const fun_2 = (e, index) => {
    let Modules = [...modules]
    // console.log(index,Modules,e)
    Modules[index][e.target.name] = e.target.value
    setModules(Modules)
    const j = parseInt(e.target.value)
    // console.log(typeof(j))
    setLinks([])
    let newlink = []
    for (let i = 0; i < j; i++) {
      // console.log(i);
      newlink.push({
        video_number: '',
        video_topic: '',
        video_link: ''
      })

    }
    setLinks(newlink)
    // console.log(links)


  }


  const fun3 = (e, index, index2) => {
    const Links = [...links]
    Links[index][e.target.name] = [e.target.value]
    setLinks(Links)
    // console.log("links=",links)
    const Modules = [...modules]
    Modules[index2]['video_link'] = links
    setModules(Modules)
    // setLinks([])
    // console.log("modules=",modules)
  }

  const create = () => {
    let newfield = {
      instructor_name: '',
      instructor_image: ''
    }
    setField([...fields, newfield])
  }
  return (
    <div className="w-1/2 mx-auto bg-base-400">
      <div className="hero h-[300px] bg-[#d9f2ed]">
        <div className="hero-content text-center">
          <div  >
            <h1 className="text-5xl font-bold">Create Your Dream Course</h1>
            <p className="py-6">Unlock your potential and share your knowledge with the world</p>
           
          </div>
        </div>
      </div>
      <form className="border-2 flex flex-col gap-y-4" onSubmit={handleCourse}>
        <input type="number" name="course_id" placeholder="Course id" id="" /><br />
        <input type="text" name="course_name" placeholder="Course name" id="" /><br />
        <input type="file" name="course_image" placeholder="Course_image" id="" />
        <input type="number" name="number_of_instructor" placeholder="number_of_instructor" id="" />
        {
          fields.map((field, index) => {
            return (
              <div key={field}>
                <input type="text" name="instructor_name" onChange={(e) => fun(e, index)} id="" />
                <input type="file" name="instructor_image" onChange={(e) => fun(e, index)} id="" />
              </div>
            )
          })
        }



        <p className="ml-[40%] mr-[40%] text-center hover:cursor-pointer border-2 border-black " onClick={create}>+ add more</p>
        <input type="date" name="starting_date" placeholder="starting date" id="" /><br />
        <input type="number" name="num_std" placeholder="Number of students" id="" /><br />
        <input type="number" name="price" placeholder="price" id="" /><br />
        <input type="text" name="num_mod" placeholder="Number of modules" id="" /><br />

        {
          modules.map((module, index) => {
            return (
              <div key={index} className=" flex flex-col gap-y-2 border-1 border-black">
                <p className="font-bold text-center">fill this for the module {index + 1}</p>
                <input type="text" placeholder="module number" name="module_id" onChange={e => fun2(e, index)} id="" /><br />
                <input type="text" placeholder="module topic" name="module_name" onChange={e => fun2(e, index)} id="" /><br />
                <input type="text" placeholder="num of video" name="module_video" onChange={e => fun_2(e, index)} id="" /><br />
                {
                  links.map((link, indx) => {
                    return (
                      <div key={indx} className=" flex mr-[30%] flex-col gap-y-1 border-1 border-black">
                        <input type="text" name="video_number" onChange={e => fun3(e, indx, index)} id="" />
                        <input type="text" name="video_topic" onChange={e => fun3(e, indx, index)} id="" />
                        <input type="file" name="video_link" onChange={e => fun3(e, indx, index)} id="" />
                      </div>
                    )
                  })
                }


                <input type="text" placeholder="num of live class" name="module_liveClass" onChange={e => fun2(e, index)} id="" /><br />
              </div>
            )
          })
        }
        <p className="ml-[40%] mr-[40%] text-center hover:cursor-pointer border-2 border-black " onClick={fun1}>+ add module{mod_num + 1}</p>

        <input className=" bg-black p-4   text-white" type="submit" value="submit" />
      </form>

    </div>
  );
};

export default Create;