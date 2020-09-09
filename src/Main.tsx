import React, { useState } from "react";
import SearchForm from "./SearchForm";
import ResultsPage from "./ResultsPage";

interface ErrorMessage {
  errorMessage: string;
  appear: boolean;
}

const Main: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>({
    errorMessage: "Please complete all fields",
    appear: false
  });
  const [thisCountry, setThisCountry] = useState<string>("");
  const [showResultsPage, setShowResultsPage] = useState<boolean>(false);

  return (
    <div className="main">
      <h1>Book your next adventure!</h1>
      {showResultsPage ? (
        <ResultsPage
          countryName={thisCountry}
          showResultsPage={showResultsPage}
          setShowResultsPage={setShowResultsPage}
        />
      ) : (
        <div>
          {errorMessage.appear ? (
            <div className="errorMessage">{errorMessage.errorMessage}</div>
          ) : null}
          <div className="search-section">
            <SearchForm
              onSubmit={({ location, checkin, checkout, guests }) => {
                if (location && checkin && checkout && guests > 0) {
                  setThisCountry(location);
                  setErrorMessage((prev) => ({ ...prev, appear: false }));
                  setShowResultsPage(true);
                  console.log(location, checkin, checkout, guests);
                } else {
                  setErrorMessage((prev) => ({ ...prev, appear: true }));
                }
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
