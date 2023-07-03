const addAnswersToRecords = async ({ record, arrayText}) => {
    const mutation = `
        mutation {
            createAntwoord(input: $input){
                id
            }
        }
    `,
    convertToJson = JSON.parse(arrayText);
    console.log(arrayText);
    convertToJson.forEach(async e => {
        // if (Object.keys(e).length != 0){
        // }
        console.log('Vraag: ', e.Vraag)
        console.log('Antwoord: ', e.Antwoord);
        const {data, errors} = await gql (mutation, { input: {vraag: e.Vraag, antwoord: e.Antwoord, gebruiker: {id: record.id}}})
    });
}

export default addAnswersToRecords;