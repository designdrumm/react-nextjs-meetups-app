import MeetupConnect from "./MeetupConnect";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const result = MeetupConnect("insert", data);

    //console.log("Meetup inserted: " + result);
    
    if(result) {
      res.status(201).json({ message: "Meetup inserted!" });
    } else {
      res.status(201).json({ message: "Meetup NOT inserted!" });
    }
  }
};

export default handler;
