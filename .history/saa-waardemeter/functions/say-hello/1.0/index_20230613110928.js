const sayHello = async ({
  selectedRecord: {
    data: { id },
  }, json
}) => {
  const mutation = `
    mutation {
      createOptie(input: $input){
        id
      }
    }
  `,
  convertToJson = JSON.parse(json)
  for (let i in convertToJson) {
    const {data1, errors} = await gql (mutation, { input: {optie: i.Value, vragenlijst: id}})
  }
};

export default sayHello;