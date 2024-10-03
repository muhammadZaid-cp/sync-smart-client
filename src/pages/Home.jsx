import React from "react";
import Header from "../components/header";
import AddToSlackCard from "../components/addToSlackCard";
import { BUILTINASSISTANTS, CUSTOMRECRUITERS } from "../constants";

function Home({ auth }) {
  console.log("auth", auth);
  return (
    <div className="h-screen">
      <Header authenticated={true} />
      <div className="relative pt-10 bg-customgray-2 h-screen">
        <div className="px-10 mt-10 overflow-scroll">
          <div className="grid grid-cols-4 flex flex-wrap gap-y-6 mt-4 mb-4">
            {CUSTOMRECRUITERS.map((assistant) => (
              <AddToSlackCard
                isSlack={false}
                text="Configure"
                title={assistant.title}
                description={assistant.description}
              />
            ))}
          </div>
          <h1 className="md:text-3xl text-2xl font-bold pt-10 ">
            Pre-Built AI Assistants Library
          </h1>
          <div className="grid grid-cols-4 flex flex-wrap gap-y-6 px-10  mt-8 pb-10 mb-10">
            {BUILTINASSISTANTS.map((assistant) => (
              <AddToSlackCard
                isSlack={true}
                text="Add to Slack"
                title={assistant.title}
                description={assistant.description}
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
