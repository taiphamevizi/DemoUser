import firestore from '@react-native-firebase/firestore'

const usersCollectionRef = firestore().collection("users");

const extractSnapshots = (snapshots) => {
    let extracts = [];
    snapshots.forEach((documentSnapshot) => {
        extracts.push(documentSnapshot.data());
    });
    return extracts;
};

/**
 * Retrieve users documents in bactches of specified limit.
 * when last document id  provided, fetch documents after that
 * document (pagination-like fetching)
 * @param {String} lastDocId -  ID of last document in previous batch
 * @param {Number} limit -  limit of documents per batch
 *
 */

const getUsers = async ({ lastDocId, limit = 10 }) => {
    let docs = [];
    let newLastDocId = null;
    let error = null;
    let batch;
    let status ='undetermined';

    try {
        // In case lastDocId provided, start after that document, otherwise
        // Start on first document.

        if (lastDocId) {
            const lastDoc = await usersCollectionRef.doc(lastDocId).get();
            batch = usersCollectionRef
                .orderBy("createdAt", "desc")
                .startAfter(lastDoc)
                .limit(limit);
        } else {
            batch = usersCollectionRef.orderBy("createdAt", "desc").limit(limit);
        }

        status ='pending';
        const snapshots = await batch.get();

        newLastDocId = snapshots.docs[snapshots.docs.length - 1]?.data()?.id || null;

        docs = extractSnapshots(snapshots);
        status ='succeeded';

        return {
            status,
            error,
            docs,
            lastDocId: newLastDocId,
        };
    } catch (error) {
        status ='failed';
        return {
            status,
            error: error,
            docs,
            lastDocId: newLastDocId,
        };
    }
};

export default getUsers;