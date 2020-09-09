import React from "react";

interface Values {
  location: string;
  checkin: string;
  checkout: string;
  guests: number;
}

interface Props {
  onSubmit: (values: Values) => void;
}

const SearchForm: React.FC<Props> = ({ onSubmit }) => {
  const [location, setLocation] = React.useState("");
  const [checkin, setCheckin] = React.useState("");
  const [checkout, setCheckout] = React.useState("");
  const [guests, setGuests] = React.useState(0);
  const [guestsPopup, setGuestsPopup] = React.useState(false);
  const [submitObject, setSubmitObject] = React.useState<SubmitObject>({
    location: "",
    checkin: "",
    checkout: "",
    guests: 0
  });

  const handleLocation = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLocation(e.target.value);
    setSubmitObject((prev) => ({ ...prev, location: location }));
  };

  const handleCheckin = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCheckin(e.target.value);
    setSubmitObject((prev) => ({ ...prev, checkin: checkin }));
  };

  const handleCheckout = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCheckout(e.target.value);
    setSubmitObject((prev) => ({ ...prev, checkout: checkout }));
  };

  const showGuestsPopup = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ): void => {
    setGuestsPopup(!guestsPopup);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setGuestsPopup(false);
    const testdiv = document.querySelector(".testdiv");
    testdiv.innerHTML = JSON.stringify(submitObject);
  };
  return (
    <form onSubmit={(values) => handleSubmit(values)}>
      <div className="search-section-location">
        <label htmlFor="location">Location</label>
        <input
          name="location"
          type="text"
          value={location}
          onChange={handleLocation}
        />
      </div>
      <div className="search-section-checkin-date">
        <label htmlFor="checkin-date">Check in</label>
        <input
          name="checkin-date"
          type="date"
          value={checkin}
          onChange={handleCheckin}
        />
      </div>
      <div className="search-section-checkout-date">
        <label htmlFor="checkout-date">Check out</label>
        <input
          name="checkout-date"
          type="date"
          value={checkout}
          onChange={handleCheckout}
        />
      </div>
      <div className="search-section-guests">
        <label htmlFor="guests">Guests</label>
        <input
          name="guests"
          type="input"
          value={guests}
          readOnly
          onClick={showGuestsPopup}
        />
        {guestsPopup ? (
          <div className="guests-popup">
            <div
              className="arrow decrement"
              onClick={() => {
                if (guests > 0) {
                  setGuests((prev) => prev - 1);
                  setSubmitObject((prev) => ({ ...prev, guests: guests }));
                }
              }}
            ></div>
            <div className="guests-popup-number noselect">{guests}</div>

            <div
              className="arrow increment"
              onClick={() => {
                setGuests((prev) => prev + 1);
                setSubmitObject((prev) => ({ ...prev, guests: guests }));
              }}
            ></div>
          </div>
        ) : null}
      </div>
      <div className="search-section-submit">
        <input name="checkout-date" type="submit" value="Search" />
      </div>
      <pre>{JSON.stringify(submitObject, null, 2)}</pre>
    </form>
  );
};

export default SearchForm;
