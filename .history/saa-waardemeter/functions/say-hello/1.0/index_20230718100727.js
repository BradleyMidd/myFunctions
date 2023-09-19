const sayHello = async ({
  record, jsonText
}) => {
  const mutation = `
    mutation {
      createOptie(input: $input){
        id
      }
    }
  `,
  convertToJson = JSON.parse(jsonText)
  console.log("Convert to JSON: ", convertToJson);
  convertToJson.forEach(async e => {
    const {data, errors} = await gql (mutation, { input: {optie: e.Value, vragenlijst: {id: record.data.id}}})
  });

};

export default sayHello;