import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        title={props.meetupData.title}
        image={props.meetupData.image}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
};

// Required function if page is dynamic and using getStaticProps
export const getStaticPaths = async () => {
  //fetch api data, read file, etc
  const client = await MongoClient.connect(
    "mongodb+srv://reactapp:i3A0CTd0sOkUCiOd@cluster0.xzbywfk.mongodb.net/?retryWrites=true&w=majority"
  );
  //TODO: connetion error checking

  const db = client.db("meetup-app");

  const meetupsCollections = db.collection("meetups");

  const meetupsData = await meetupsCollections.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetupsData.map((meetup) => ({
      params: {
        dynamicId: meetup._id.toString(),
      },
    })),
  };
};

export const getStaticProps = async (context) => {
  // fetch data for a single meetup

  const meetupId = context.params.dynamicId;

  const client = await MongoClient.connect(
    "mongodb+srv://reactapp:i3A0CTd0sOkUCiOd@cluster0.xzbywfk.mongodb.net/?retryWrites=true&w=majority"
  );
  //TODO: connetion error checking

  const db = client.db("meetup-app");

  const meetupsCollections = db.collection("meetups");

  const selectedMeetup = await meetupsCollections.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
    revalidate: 1,
  };
};

export default MeetupDetails;
