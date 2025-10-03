import { useState } from "react"
import { FaApple, FaGoogle, FaMicrosoft, FaMarker } from "react-icons/fa"
// import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const Work = () => {
    const companies = [
        {
          name : "Apple",
          icon: <FaApple/>,
          details : [
            {
               title: "Senior Software Engineer",
               companyName: "@Apple",
               time: "Jan 2021 - Jun 2021", 
               location: "Cupertino, CA"
            }],
          works : [
            {
                mark: <FaMarker/>,
                desc : "Worked on the Apple Music team"
            },
            {
                mark: <FaMarker/>,
                desc : "Increased the revenue of the company from $80 billion to $1 Trillion"
            },
            {
                mark: <FaMarker/>,
                desc : "Built a new feature that allowed users to listen to music while they were sleeping"
            }
          ]
       },
        {
          name : "Google",
          icon: <FaGoogle/>,
          details : [ 
            {
              title: "Software Engineer",
              companyName: "@Google",
              time:  "Jan 2021 - Jun 2021",
              location: "Mountain View, CA"
            }],
          works : [
            {
                mark: <FaMarker/>,
                desc : "Worked on the Google Maps team"
            },
            {
                mark: <FaMarker/>,
                desc : "Helped people get lost from point A to point B in shortest time"
            },
            {
                mark: <FaMarker/>,
                desc : "Worked directly with Dijkstra to build the shortest path algorithm - but better."
            }
          ]
       },
       {
          name : "Microsoft",
          icon: <FaMicrosoft/>,
          details : [
            {
               title: "Software Engineer", 
               companyName: "@Microsoft", 
               time: "Jan 2021 - Jun 2021",
               location: "Redmond, WA"
            }
        ],
          works : [
            {
                mark: <FaMarker/>,
                desc : "Worked on the Microsoft Teams team"
            },
            {
                mark: <FaMarker/>,
                desc : "Carefully crafted the tune that plays when you are on a call with your boss"
            },
            {
                mark: <FaMarker/>,
                desc : "Built a new feature that allowed users to mute their mic with a single click"
            }
          ]
       },
       {
          name : "Netflix",
          icon: <FaMicrosoft/>,
          details : [
            {
               title:  "Software Engineer Intern",
               companyName: "@Netflix", 
               time: "Jan 2021 - Jun 2021",
               location: "Los Gatos, CA"
            }
            ],
          works : [
            {
                mark: <FaMarker/>,
                desc : "Worked on the Netflix team"
            },
            {
                mark: <FaMarker/>,
                desc : "Broke the prod on the first day itself"
            },
            {
                mark: <FaMarker/>,
                desc : "Coined the term Netflix and Chill - which is now used by millions of people"
            }
          ]
       }
    ]
     const [companyDetail, setCompanyDetail] = useState(0)

     const detail = companies[companyDetail].details[0]

   return (
    <div className="lg:ml-48">
        <div className="text-white flex flex-col gap-4">
            <h1 className="text-3xl font-semibold text-white">Work Experience</h1>
            <p className="text-gray-400 text-lg">I switch a lot of companies. it's mostly about the culture.</p>
        </div>
        <div className="flex gap-5 m-20">
            {/* <BackgroundBeamsWithCollision className="rounded-lg"> */}
              <div className="flex lg:flex-col gap-8 relative z-20 p-6">
                {companies.map((company, index) => (
                <div
                key={index}
                    onClick={() => setCompanyDetail(companyDetail === index? 0 : index)}
                    className={`flex items-center gap-2 rounded cursor-pointer transition-all ${companyDetail === index? "bg-[#3d3d3d] px-4 py-2 " : ""}`}>  
                    <button className="rounded-full p-1 bg-[#535353]">
                    {company.icon} 
                    </button>   
                    <button className="text-[#8f8f8f]">
                    {company.name}
                    </button>   
                </div>    
                ))}
              </div>
            {/* </BackgroundBeamsWithCollision> */}
            
            {/* details of selected company */}
            <div 
              className="flex flex-col gap-4 mb-4">
                <div className="flex flex-col gap-1 font-semibold">
                    <h1 className="font-bold text-white text-3xl">{detail.title}{" "}<small className="text-blue-400 text-2xl font-bold">{detail.companyName}</small></h1>
                    <h5 className="text-[16px] text-[#8f8f8f]">{detail.time}</h5>
                    <h5 className="text-[16px] text-[#8f8f8f]">{detail.location}</h5>
                </div>
              <div className="flex flex-col gap-2">
                 {companies[companyDetail].works.map((work, id) => (
                <div key={id} className="flex items-center gap-2 text-[15px] text-[#8f8f8f] font-semibold">
                   {work.mark}  {work.desc}
                </div>
                   ))}
              </div>
            </div>
        </div>
    </div>
   )
}

export default Work