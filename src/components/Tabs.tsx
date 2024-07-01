"use client";

import { useEffect, useState } from "react";

import { Accordion, Cards, RadioGroup } from "@/sections";

import { Alert, Combobox, Dialog, TextArea } from ".";
import Skeleton from "./Skeleton";

type TabProps = {
  label: string;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

const TabTrigger = ({ label, activeTab, setActiveTab }: TabProps) => (
  <div
    className={`${activeTab === label.toLowerCase() ? "bg-background text-foreground shadow" : ""} inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`}
    onClick={() => setActiveTab(label.toLowerCase())}
  >
    {label}
  </div>
);

const TabContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="mt-2 h-12">{children}</div>;
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<string>("cards");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <Skeleton className="h-9 w-24 rounded p-1" />
      ) : (
        <div className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
          <TabTrigger
            label="Cards"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabTrigger
            label="Data"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      )}
      {loading ? (
        <Skeleton className="mx-auto mt-2 h-12 w-screen max-w-screen-xl p-1" />
      ) : (
        <>
          {activeTab === "cards" ? (
            <TabContent>
              <Cards />
            </TabContent>
          ) : (
            <TabContent>
              <div className="grid w-full grid-cols-2 grid-rows-1 items-center gap-4">
                <Accordion />
                <div>
                  <Alert
                    variant="default"
                    title="Heads up!"
                    description="You can add components to your app using the cli."
                  />
                  <div className="flex justify-center gap-10 pt-5">
                    <TextArea placeholder="Type your message here." />
                  </div>
                  <div className="flex h-5 items-center space-x-4 pt-10 text-sm">
                    <RadioGroup />
                    <Dialog />
                    <Combobox />
                  </div>
                </div>
              </div>
            </TabContent>
          )}
        </>
      )}
    </div>
  );
};

export default Tabs;
