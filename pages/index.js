import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import MeetupConnect from "./api/MeetupConnect";

import MeetupList from "../components/meetups/MeetupList";

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

HomePage.propTypes = {
  meetups: PropTypes.array.isRequired,
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
  const meetupsData = await MeetupConnect("find", "all");

  return {
    props: {
      meetups: meetupsData.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
      })),
    },
    revalidate: 10,
  };
};

export default HomePage;
