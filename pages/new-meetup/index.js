import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const router = useRouter();
  const addmeetupHandler = async (enteredMeeupData) => {
    const response = await fetch("/api/new-meetup-api", {
      method: "POST",
      body: JSON.stringify(enteredMeeupData),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.replace("/");
  };
  return (
    <Fragment>
    <Head>
      <title>My New Meetup</title>
      <meta
        name="description"
        content="Creat a new meetup to connect through on My New Meetup!"
      />
    </Head>
      <NewMeetupForm onAddMeetup={addmeetupHandler} />
    </Fragment>
  );
};

export default NewMeetupPage;
