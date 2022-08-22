import React from "react";
import PropTypes from "prop-types";
import Image from 'next/image';

import classes from './MeetupDetail.module.css';

const MeetupDetail = (props) => {
  return (
    <section className={classes.detail}>
      <Image 
        src={props.image}
        alt={props.title}
        layout={"fill"}
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
};

MeetupDetail.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MeetupDetail;
