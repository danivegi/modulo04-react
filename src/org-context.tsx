import React from "react";

interface OrgContextValue {
  org: string;
  setOrg: (org: string) => void;
  page: number;
  setPage: (page: number) => void;
}

const OrgContext = React.createContext<OrgContextValue | null>(null);

export const OrgProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [org, setOrg] = React.useState("lemoncode");
  const [page, setPage] = React.useState(1);

  return (
    <OrgContext.Provider value={{ org, setOrg, page, setPage }}>
      {children}
    </OrgContext.Provider>
  );
};

export const useOrg = () => {
  const context = React.useContext(OrgContext);
  if (!context) {
    throw new Error("useOrg must be used within an OrgProvider");
  }
  return context;
};