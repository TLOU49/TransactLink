import { CiSettings } from "react-icons/ci"
import Automation from '../assets/Automation.png'
import Centralization from '../assets/Centralization.png'
import Insights from '../assets/Insights.png'
import Organization from '../assets/Organization.png'

const Steps = () => {
  const steps = [
    { name: "Step 1: Centralization", image: <img src={Centralization} alt="centralization" className='' width={120} /> },
    { name: "Step 2: Organisation", image: <img src={Organization} className='p-2' width={200} /> },
    { name: "Step 3: Automation", image: <img src={Automation} className='p-2' width={100} /> },
    { name: "Step 4: Insights", image: <img src={Insights} className='p-2' width={150} /> },
  ]

  return (
    <div className=' bg-black mx-6 px-4 w-auto h-fit flex justify-center py-6 overflow-x-auto rounded-b'>
      <div className="flex flex-wrap items-center justify-center w-5/6 gap-x-6">
  {steps.map((step, index) => (
    <div
      key={index}
      className="sm:w-1/2 md:w-1/3 h-60 text-gray-800 flex flex-col bg-white mx-1 my-2 text-center items-center justify-center py-4 rounded min-w-[200px] transform transition duration-300 hover:scale-105 hover:shadow-lg"
    >
      <p className="text-[20px] font-bold">{step.name}</p>
      {step.image}
    </div>
  ))}
  </div>
</div>

  )
}

export default Steps
