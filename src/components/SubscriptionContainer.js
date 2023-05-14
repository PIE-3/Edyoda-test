import "./SubscriptionContainer.css";
const SubscriptionContainer = ({
  subscriptionDuration,
  subscriptionPrice,
  subscriptionDurationPrice,
}) => {
  return (
    <div className="text-field-3">
      <img className="radio-button-icon" alt="" src="/radio-button2.svg" />
      <div className="text-container3">
        <div className="text10">{subscriptionDuration}</div>
        <div className="left-text-container">
          <div className="top-text">
            <div className="text11">Total</div>
            <div className="text12">{subscriptionPrice}</div>
          </div>
          <div className="bottom-text">
            <div className="text13">{subscriptionDurationPrice}</div>
            <div className="text14">/mo</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionContainer;
