import Section from "./Section/Section";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Section title="Please leave feedback">
      {Object.keys(options).map((key) => (
        <button
          key={key}
          onClick={() => onLeaveFeedback(key)}
          type="button"
          style={{ textTransform: "capitalize" }}
        >
          {key}
        </button>
      ))}
    </Section>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
