import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import { Formik, Form } from "formik";

interface Values {
  location: string;
  checkin: string;
  checkout: string;
  guests: number;
}

interface Props {
  onSubmit: (values: Values) => void;
}

interface APIResponse {
  data: Object[] | null;
  loading: boolean;
}

interface LocationDropdown {
  data: string[] | null;
  showDropdown: boolean;
}

const SearchForm: React.FC<Props> = ({ onSubmit }) => {
  const [listOfCountries, setListOfCountries] = useState<APIResponse>({
    data: null,
    loading: true
  });
  const [listOfSearchMatches, setListOfSearchMathes] = useState<
    LocationDropdown
  >({ data: null, showDropdown: false });

  const searchLocation = (location: string): void => {
    if (location.length > 1) {
      setListOfSearchMathes((prev) => ({ ...prev, showDropdown: true }));
      const searchResults: string[] = [];
      const searchMatches = listOfCountries.data.filter((country: Object) => {
        return country.name.toLowerCase().match(location.toLowerCase());
      });
      for (const match of searchMatches) {
        searchResults.push(match.name);
      }
      setListOfSearchMathes((prev) => ({ ...prev, data: searchResults }));
    } else {
      setListOfSearchMathes((prev) => ({ ...prev, showDropdown: false }));
    }
  };

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((responseJSON) => {
        setListOfCountries({ data: responseJSON, loading: false });
      });

    const today: string = new Date().toISOString().split("T")[0];
    document.getElementsByName("checkin")[0].setAttribute("min", today);
    const tomorrow: Date = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    document
      .getElementsByName("checkout")[0]
      .setAttribute("min", tomorrow.toISOString().split("T")[0]);

    document.getElementsByName("guests")[0].setAttribute("min", "0");
  }, []);

  return (
    <Formik
      initialValues={{
        location: "",
        checkin: "",
        checkout: "",
        guests: 0
      }}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <div className="search-section-div">
            <TextField
              placeholder="Country"
              name="location"
              value={values.location}
              onChange={(e) => {
                searchLocation(e.target.value);
                console.log(values.location);
                handleChange(e);
              }}
              onBlur={handleBlur}
            />
            {listOfSearchMatches.showDropdown ? (
              <ul className="guests-popup">
                {listOfSearchMatches.data.slice(0, 3).map((each, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      values.location = each;
                      setListOfSearchMathes((prev) => ({
                        ...prev,
                        showDropdown: false
                      }));
                    }}
                  >
                    {each}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="search-section-div">
            <TextField
              placeholder="Check in"
              type="date"
              name="checkin"
              value={values.checkin}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="search-section-div">
            <TextField
              placeholder="Check out"
              type="date"
              name="checkout"
              value={values.checkout}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="search-section-div">
            <TextField
              placeholder="Guests"
              type="number"
              name="guests"
              value={values.guests}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="search-section-div">
            <Button type="submit">submit</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;
