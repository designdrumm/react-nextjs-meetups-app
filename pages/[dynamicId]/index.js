import React, { Fragment } from "react";
import PropTypes from "prop-types";
import MeetupConnect from "../api/MeetupConnect";
import Head from "next/head";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <MeetupDetail
        title={props.title}
        image={props.image}
        address={props.address}
        description={props.description}
      />
    </Fragment>
  );
};

MeetupDetails.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string,
};

// Required function if page is dynamic and using getStaticProps
export const getStaticPaths = async () => {
  //fetch api data, read file, etc
  const MeetupConnectData = await MeetupConnect("find", "id");

  return {
    fallback: false,
    paths: MeetupConnectData.map((meetup) => ({
      params: {
        dynamicId: meetup._id.toString(),
      },
    })),
  };
};

export const getStaticProps = async (context) => {
  // fetch data for a single meetup
  const meetupId = context.params.dynamicId;
  const selectedMeetup = await MeetupConnect("find", meetupId);

  return {
    props: {
      id: selectedMeetup._id.toString(),
      title: selectedMeetup.title,
      address: selectedMeetup.address,
      image: selectedMeetup.image,
      description: selectedMeetup.description,
    },
    revalidate: 10,
  };
};

export default MeetupDetails;
