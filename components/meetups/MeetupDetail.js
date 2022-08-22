import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

import classes from "./MeetupDetail.module.css";

const MeetupDetail = (props) => {
  return (
    <section className={classes.details}>
        <div className={classes.image}>
          <Image src={props.image} alt={props.title} layout="fill" />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
      </div>
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
