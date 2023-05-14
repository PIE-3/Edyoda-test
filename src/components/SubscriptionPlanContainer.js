import SubscriptionContainer from "./SubscriptionContainer";
import "./SubscriptionPlanContainer.css";
import React, { useState } from "react";

const SubscriptionPlanContainer = () => {

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' }
  ];
  const [selectedOption, setSelectedOption] = useState(options[0].value);


  return (
    <div className="input-container">
      <div className="text-field-1">
        <img className="radio-button-icon1" alt="" src="/radio-button.svg" />
        <div className="text-container4">
          <div className="text15">{`12 Months Subscription `}</div>
          <div className="right-text-container">
            <div className="top-text1">
              <div className="text16">Total</div>
              <div className="text17">₹99</div>
            </div>
            <div className="bottom-tet">
              <div className="text18">₹8</div>
              <div className="text19">/mo</div>
            </div>
          </div>
        </div>
        <div className="tag">
          <div className="offer-expired">Offer expired</div>
        </div>
      </div>
      <div className="text-field-2">
        <img className="radio-button-icon1" alt="" src="/radio-button1.svg" />
        <div className="text-container4">
          <div className="text15">{`12 Months Subscription `}</div>
          <div className="right-text-container1">
            <div className="top-text1">
              <div className="text21">Total</div>
              <div className="text17">₹179</div>
            </div>
            <div className="bottom-tet">
              <div className="text18">₹15</div>
              <div className="text24">/mo</div>
            </div>
          </div>
        </div>
        <div className="tag1">
          <div className="recommended">Recommended</div>
        </div>
      </div>
      <SubscriptionContainer
        subscriptionDuration="6 Months Subscription "
        subscriptionPrice="₹149"
        subscriptionDurationPrice="₹25"
      />
      <SubscriptionContainer
        subscriptionDuration="3 Months Subscription "
        subscriptionPrice="₹99"
        subscriptionDurationPrice="₹33"
      />
    </div>
    // <div>
    //   {options.map(option => (
    //     <label key={option.value}>
    //       <input
    //         type="radio"
    //         value={option.value}
    //         checked={selectedOption === option.value}
    //         onChange={() => setSelectedOption(option.value)}
    //       />
    //       {option.label}
    //     </label>
    //   ))}
    // </div>

  );
};

export default SubscriptionPlanContainer;
