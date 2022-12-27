import { EuiDatePicker, EuiFormRow } from "@elastic/eui";
import moment from "moment";

const MeetingDateField = ({
  selected,
  setStartDate,
}: {
  selected: moment.Moment;
  setStartDate: any;
}) => {
  return (
    <EuiFormRow>
      <EuiDatePicker
        selected={selected}
        onChange={(date) => setStartDate(date!)}
      />
    </EuiFormRow>
  );
};

export default MeetingDateField;
