import React from "react";
import { Button } from "@material-ui/core";

interface IProps {
  showAboutPage: boolean;
  setShowAboutPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const About: React.FC<IProps> = ({ showAboutPage, setShowAboutPage }) => {
  return (
    <div className="main about">
      <h2>About page</h2>
      <div>
        <span className="text-bg-white-mobile">
          This application was built with <strong>React</strong> and{" "}
          <strong>TypeScript</strong>. There's a form on the main page with 4
          fields. Changing the values in the input fields updates an object with
          interface Values which when completed correctly will submit the form
          and take the user to a new page. This page just displays the name of
          the selected country and it's only for demonstration purposes.
        </span>
      </div>
      <br />
      <div>
        <span className="text-bg-white-mobile">
          There's a function searchLocation() being called on every keystroke in
          the Country (Location) input field. It returns a maximum of 3 results
          that match the input against a database of all countries. This comes
          in JSON format after a <strong>fetch</strong> call to
          https://restcountries.eu/rest/v2/all. Clicking on a result in the
          popup box will populate the input field with the selected country
          name. An error will appear if there are 0 guests or any of the fields
          aren't completed.
        </span>
      </div>
      <br />
      <div>
        <span className="text-bg-white-mobile">
          Navigation between pages is done by managing boolean values in a
          number of <strong>useState hooks</strong> passed down with props,
          rendering different components with ternary operators.
        </span>
      </div>
      <br />
      <div>
        <span className="text-bg-white-mobile">
          Used <strong>Formik</strong> for forms and{" "}
          <strong>Material UI</strong> for buttons and input fields.
        </span>
      </div>

      <Button type="submit" onClick={() => setShowAboutPage(false)}>
        <span className="text-bg-white-mobile">Back to Main</span>
      </Button>
    </div>
  );
};

export default About;
