import { getTime } from "../../services/date";

const ClockLabel = () => {
  return <label label={getTime()} />;
};

export default ClockLabel;
