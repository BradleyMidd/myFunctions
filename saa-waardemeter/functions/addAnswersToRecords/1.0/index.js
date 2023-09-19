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
            if(e.Antwoord == "true"){
                e.Antwoord = "Ja"
            }
            const {data, errors} = await gql (mutation, { input: {vraag: e.Vraag, antwoord: e.Antwoord, is_nummer: e.isNummer, gebruiker: {id: record.data.id}}})
        }
    });
}

export default addAnswersToRecords;