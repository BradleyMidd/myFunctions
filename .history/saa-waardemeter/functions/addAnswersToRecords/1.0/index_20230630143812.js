const addAnswersToRecords = async ({ record, arrayText}) => {
    const mutation = `
        mutation {
            createAntwoord(input: $input){
                id
            }
        }
    `,
    convertToJson = JSON.parse(arrayText);
    convertToJson.forEach(async e => {
        if (Object.keys(e).length != 0){
            const {data, errors} = await gql (mutation, { input: {vraag: e.Vraag, antwoord: e.Antwoord, gebruiker: {id: record.id}}})
        }
    });
}

export default addAnswersToRecords;