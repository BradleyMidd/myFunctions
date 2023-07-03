const sayHello = async ({
  record, jsonText
}) => {
  console.log(JSON.stringify(record).substring(0,2000));
  console.log(jsonText);

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

  // for (let i in convertToJson) {
  //   console.log("i: ", i);
  //   console.log("i.value: ", i.Value);
  //   console.log("record.id: ", record.id);
  //   const {data, errors} = await gql (mutation, { input: {optie: i.Value, vragenlijst: {id: record.id}}})
  // }
};

export default sayHello;