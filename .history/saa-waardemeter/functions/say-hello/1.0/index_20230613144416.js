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
  for (let i in convertToJson) {
    const {data1, errors} = await gql (mutation, { input: {optie: i.Value, vragenlijst: record.id}})
  }
};

export default sayHello;