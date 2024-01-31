import React, { useEffect } from "react";
import { ResourceBannr } from "../components/resources/ResourceBannr";
import RecentResource from "../components/resources/RecentResource";
import TrendingResource from "../components/resources/TrendingResource";

const Resources = ({ resourceData, trendingResourceData }) => {
  useEffect(() => {
    window.scrollTo(1, 1);
  }, []);

  return (
    <>
      <ResourceBannr bannrData={resourceData} />
      <RecentResource dataOfResource={resourceData} />
      <TrendingResource trendingData={trendingResourceData} />
    </>
  );
};

export default Resources;
