import React, { useEffect, useState } from "react";
import Header from "../components/header";
import AddToSlackCard from "../components/addToSlackCard";
import { BUILTINASSISTANTS, CUSTOMRECRUITERS } from "../constants";
import { getAllAssistants } from "../api/assistant";

function Home({ auth }) {

  const [assistants, setAssistants] = useState([])
  useEffect(() => {

    const fetchAssistants = () => {
      getAllAssistants().then((res) => {
        setAssistants(res.assistants)
      }).catch((err) => {
        console.warn(err)
      })

    }

    fetchAssistants()
  }, [])
  return (
    <div className="h-screen">
      <Header authenticated={true} />
      <div className="relative pt-10 bg-customgray-2 h-screen">
        <div className="px-10 mt-10 overflow-scroll">
          {
            assistants?.length === 0 &&
            <h1 className="md:text-2xl text-xl font-normal pt-10 ">
              No assistants have been added yet.
            </h1>}
          <div className="grid grid-cols-4 flex flex-wrap gap-y-6 mt-4 mb-4">
            {assistants?.length > 0 && assistants.map((assistant) => (
              <AddToSlackCard
                assistant={assistant}
                key={assistant.title}
                isSlack={false}
                text="Configure"
              />
            ))}
          </div>
          <h1 className="md:text-3xl text-2xl font-bold pt-10 ">
            Pre-Built AI Assistants Library
          </h1>
          <div className="grid grid-cols-4 flex flex-wrap gap-y-6 md:px-10 px-0  mt-8 pb-10 mb-10">
            {BUILTINASSISTANTS.map((assistant) => (
              <AddToSlackCard
                assistant={assistant}
                isSlack={true}
                key={assistant.title}
                text="Add to Slack"
              />
            ))}
          </div>
        </div>

        <div className="h-[50vh] fixed bottom-0">
          <img
            src="/assets/svgs/waves.svg"
            className="object-cover w-screen h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
