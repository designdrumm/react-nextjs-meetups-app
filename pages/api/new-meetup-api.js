import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
    if(req.method === 'POST') {
        const data = req.body;

        //const { title, image, address, description } = data;

        const client = await MongoClient.connect('mongodb+srv://reactapp:i3A0CTd0sOkUCiOd@cluster0.xzbywfk.mongodb.net/?retryWrites=true&w=majority');
        //TODO: connetion error checking

        const db = client.db("meetup-app");

        const meetupsCollections = db.collection('meetups');

        const result = await meetupsCollections.insertOne(data);
        //TODO: insert error checking

        console.log(result);

        client.close();

        res.status(201).json({ message: "Meetup inserted!" });
    }
};

export default handler;