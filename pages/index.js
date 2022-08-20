import Head from "next/head";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "First Meetup",
//     image:
//       "https://assets.weforum.org/article/image/responsive_big_v2gQQH6Qq5EAJSemo1Yqie27aYBOHE4pSwA6jSkFHKg.jpg",
//     address: "555 Somewhere Dr., Some City, Some State 12345",
//     description: "This is a first meetup",
//   },
//   {
//     id: "m2",
//     title: "Second Meetup",
//     image:
//       "https://uni-span.com.au/wp-content/uploads/2018/02/2_Blog_UniSpan.jpeg",
//     address: "720 Somewhere Dr., Some City, Some State 54321",
//     description: "This is a second meetup",
//   },
// ];

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>My Meetups</title>
        <meta
          name="description"
          content="Connect with others through My Meetups and get stuff done!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

//Next.js functions
//Pre-renders on every request
// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;
//   //fetch api data, read file, etc
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

//Pre-renders on timed request
export const getStaticProps = async () => {
  //fetch api data, read file, etc
  const client = await MongoClient.connect(
    "mongodb+srv://reactapp:i3A0CTd0sOkUCiOd@cluster0.xzbywfk.mongodb.net/?retryWrites=true&w=majority"
  );
  //TODO: connetion error checking

  const db = client.db("meetup-app");

  const meetupsCollections = db.collection("meetups");

  const meetupsData = await meetupsCollections.find().toArray();

  return {
    props: {
      meetups: meetupsData.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
};

export default HomePage;
