import { EuiFlexGroup, EuiForm, EuiSpacer } from "@elastic/eui";
import moment from "moment";
import { useState } from "react";
import CreateMeetingButtons from "../components/FormComponents/CreateMeetingButtons";
import MeetingNameField from "../components/FormComponents/MeetingNameField";
import MeetingUsersField from "../components/FormComponents/MeetingUsersField";
import Header from "../components/Header";
import MeetingDateField from "../components/MeetingDateField";
import useAuth from "../hooks/useAuth";
import { FieldErrorType } from "../utils/Types";
import useFetchUsers from "../utils/useFetchUsers";

const OneOnOneMeeting = () => {
  useAuth();
  const [users] = useFetchUsers();

  const [meetingName, setMeetingName] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [startDate, setStartDate] = useState(moment());
  const [showErrors, setShowErrors] = useState<{
    meetingName: FieldErrorType;
    meetingUser: FieldErrorType;
  }>({
    meetingName: {
      show: false,
      message: [],
    },
    meetingUser: {
      show: false,
      message: [],
    },
  });

  const onUserChange = (selectedOptions: any) => {
    setSelectedUsers(selectedOptions);
  };

  const validateForm = () => {
    let errors = false;

    if (!meetingName.length) {
      showErrors.meetingName.show = true;
      showErrors.meetingName.message = ["Please enter a meeting name."];
      errors = true;
    } else {
      showErrors.meetingName.show = false;
      showErrors.meetingName.message = [];
    }
    setShowErrors(showErrors);

    return errors;
  };

  const createMeeting = () => {
    if (!validateForm()) {
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", flexDirection: "column" }}>
      <Header />
      <EuiFlexGroup justifyContent="center" alignItems="center">
        <EuiForm>
          <MeetingNameField
            label="Meeting Name"
            placeholder="Meeting Name"
            value={meetingName}
            setMeetingName={setMeetingName}
            isInvalid={showErrors.meetingName.show}
            error={showErrors.meetingName.message}
          />
          <MeetingUsersField
            label="Invite User"
            options={users}
            onChange={onUserChange}
            selectedOptions={selectedUsers}
            singleSelection={{ asPlainText: true }}
            isClearable={false}
            placeholder="Select a user"
          />
          <MeetingDateField selected={startDate} setStartDate={setStartDate} />
          <EuiSpacer />
          <CreateMeetingButtons createMeeting={createMeeting} />
        </EuiForm>
      </EuiFlexGroup>
    </div>
  );
};

export default OneOnOneMeeting;
