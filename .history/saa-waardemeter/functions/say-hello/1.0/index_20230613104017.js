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
  `
  for (let i in json) {
    const {data, errors} = await gql (mutation, { input: {optie: i.Value, vragenlijst: id}})
  }
};

export default sayHello;