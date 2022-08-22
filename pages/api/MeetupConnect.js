import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";

const MeetupConnect = async (process, insertData) => {
  const client = await MongoClient.connect(
    "mongodb+srv://reactapp:i3A0CTd0sOkUCiOd@cluster0.xzbywfk.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    }
  );
  //TODO: connetion error checking

  const meetupsCollections = await client
    .db("meetup-app")
    .collection("meetups");

  let meetupsData;

  switch (process) {
    case "find":
      if (insertData.length > 0) {
        if (insertData === "id") {
          meetupsData = await meetupsCollections.find({}, { _id: 1 }).toArray();
        } else if (insertData === "all") {
          meetupsData = await meetupsCollections.find().toArray();
        } else {
          meetupsData = await meetupsCollections.findOne({
            _id: ObjectId(insertData),
          });
        }
      }
      break;
    case "insert":
      meetupsData = await meetupsCollections.insertOne(insertData);
      break;
  }

  client.close();

  return meetupsData;
};

export default MeetupConnect;
