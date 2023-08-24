import { Landing } from "@/containers/index";
import Head from "next/head";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Tradeoxy Empowering Traders: Learn, Create, Innovate</title>
      </Head>
      <div className="flex flex-col space-y-8 pt-2">
        <Landing.Banner />
        <div className="pt-32 max-sm:pt-12">
          <Landing.BuildTestOptimize />
        </div>
        <Landing.MostTrusted />
        <Landing.JoinWaitlist />
        <Landing.UnmatchedToolsets />
        <Landing.MeetTeam />
        <Landing.JoinDiscord />
        <Landing.TradingCourses />
      </div>
    </>
  );
};

export default LandingPage;
