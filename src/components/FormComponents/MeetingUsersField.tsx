import { EuiComboBox, EuiFormRow } from "@elastic/eui";

const MeetingUsersField = ({
  label,
  options,
  onChange,
  selectedOptions,
  isClearable,
  placeholder,
  singleSelection = false,
}: {
  label: string;
  options: any;
  onChange: any;
  selectedOptions: any;
  isClearable: boolean;
  placeholder: string;
  singleSelection: any;
}) => {
  return (
    <EuiFormRow label={label}>
      <EuiComboBox
        options={options}
        onChange={onChange}
        selectedOptions={selectedOptions}
        singleSelection={singleSelection}
        placeholder={placeholder}
        isClearable={isClearable}
      />
    </EuiFormRow>
  );
};

export default MeetingUsersField;
