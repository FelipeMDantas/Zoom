export const generateMeetingID = () => {
  let meetingID = "";
  const chars = "R4Nd0mStR1Ng";
  const maxPos = chars.length;

  for (let i = 0; i < 8; i++) {
    meetingID += chars.charAt(Math.floor(Math.random() * maxPos));
  }

  return meetingID;
};
