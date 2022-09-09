import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { API_BASE_URL } from "../config/constants";

function NewMeetupPage() {
  function addMeetupHandler(meetupData) {
    fetch(API_BASE_URL + "meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
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
