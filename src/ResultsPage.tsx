import React from "react";
import { Button } from "@material-ui/core";

interface IProps {
  countryName: string;
  showResultsPage: boolean;
  setShowResultsPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResultsPage: React.FC<IProps> = ({
  countryName,
  showResultsPage,
  setShowResultsPage
}) => {
  return (
    <div className="results-page">
      <div>
        Search results for: <h2>{countryName}</h2>
      </div>
      <Button type="submit" onClick={() => setShowResultsPage(false)}>
        Back to Main
      </Button>
    </div>
  );
};

export default ResultsPage;
