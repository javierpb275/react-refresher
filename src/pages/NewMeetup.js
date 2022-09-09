import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { API_BASE_URL } from "../config/constants";
import { useHistory } from "react-router-dom";

function NewMeetupPage() {
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    fetch(API_BASE_URL + "meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
