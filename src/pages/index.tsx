import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import Profiles from "../utils/Profiles.json"

const Index = () => {

  return (
    <Main
      meta={
        <Meta
          title="StudentsRadar"
          description="Get your student profile up online and get to know other people."
        />
      }
    >

<div className='grid grid-cols-1 md:grid-cols-2 gap-2  justify-items-center'>
{Profiles.map((val, index) => (

<div key={index} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
  <br />
    <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" style={{objectFit: "cover"}}src={val.avatarUrl} alt={val.fullName}/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{val.fullName}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{val.hobbies[1]}</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
            <a href={`profile/${val.id}`} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:green-800">View Profile</a>
            
        </div>
    </div>
</div>
))}
</div>
    </Main>
  );
};

export default Index;
