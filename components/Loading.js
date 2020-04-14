import React from "react";
import { SkeletonPage, SkeletonBodyText, SkeletonDisplayText } from "@shopify/polaris";

export const LoadingScreen = () =>{
  return (
    <SkeletonPage primaryAction>
      <SkeletonBodyText />
    </SkeletonPage>
  );
};

export const LoadingText = () =>{
  return (
    <SkeletonDisplayText size="medium" />
  );
};
