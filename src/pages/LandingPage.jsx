import React from "react";
import Header from "../components/header";
import FeatureBlock from "../components/featureBlock";
import {
  ASSISTANTDATA,
  DETIALINFODATA,
  FEATURESDATA,
  TITLE_1,
  TITLE_2,
  TITLE_3,
} from "../constants";
import Card from "../components/uiComponents/Card";
import Block from "../components/uiComponents/Blocks";
import DetailInfoCard from "../components/detailInfoCard";
import AssistantCard from "../components/assistantCard";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="pb-10">
      <Header />
      <div className="relative pt-10">
        <div style={{ height: "calc(50vh - 80px)" }}>
          <h1 className="lg:text-5xl md:text-4xl text-3xl text-center w-[80%] mx-auto font-bold bg-gradient-to-r from-[#2DB8D9] to-[#1C1F4A] text-transparent bg-clip-text mt-10 pt-10">
            Supercharge Your Workflow with AI-Powered Slack Assistant
          </h1>
          <p className="text-center text-[#0A0A0B] w-[70%] mx-auto mt-8">
            Automate tasks like crafting job descriptions, reviewing policies,
            and analyzing resumes – directly within Slack.
          </p>
          <div className="flex justify-center items-center mt-8">
            <Link
              to="/auth/signin"
              className="bg-gradient-to-r from-[#2DB8D9] to-[#1C1F4A] hover:bg-[length:200%_80%] text-customgray-2 px-8 py-3 rounded-sm"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="h-[50vh]">
          <img
            src="/assets/svgs/waves.svg"
            className="object-cover w-screen h-full"
          />
        </div>
      </div>
      <Block title={TITLE_1}>
        <Card className="mt-6">
          <div className="lg:w-[70%] w-[90%] mx-auto grid grid-cols-3">
            {FEATURESDATA.map((feature) => (
              <FeatureBlock
                key={feature.title}
                title={feature.title}
                description={feature.description}
                svg={feature.svg}
              />
            ))}
          </div>
        </Card>
      </Block>

      <Block title={TITLE_2}>
        {DETIALINFODATA.map((detailCard) => (
          <DetailInfoCard
            key={detailCard.title}
            title={detailCard.title}
            description={detailCard.description}
            svg={detailCard.svg}
            keyBenefits={detailCard.keyBenefits}
          />
        ))}
      </Block>

      <Block title={TITLE_3}>
        <div className="w-[80%] mx-auto grid grid-cols-6 mt-10">
          {ASSISTANTDATA.map((assistant) => (
            <AssistantCard
              key={assistant.title}
              title={assistant.title}
              designation={assistant.designation}
              description={assistant.description}
            />
          ))}
        </div>
      </Block>

      <p className="text-primary text-center py-10">
        Already boosting your work with AI?{" "}
        <Link to="/auth/signin">Sign In</Link>
      </p>
    </div>
  );
}

export default LandingPage;
