const addAnswersToRecords = async ({ record, arrayText}) => {
    const mutation = `
        mutation {
            createAntwoord(input: $input){
                id
            }
        }
    `,
    stringToArray = JSON.stringify(arrayText),
    convertToJson = JSON.parse(stringToArray);
    convertToJson.forEach(async e => {
        if (Object.keys(e).length != 0){
            if(e.Antwoord == "true"){
                e.Antwoord = "Ja"
            }
            const {data, errors} = await gql (mutation, { input: {vraag: e.Vraag, antwoord: e.Antwoord, gebruiker: {id: record.data.id}}})
        }
    });
}

export default addAnswersToRecords;