const { v4 } = require('uuid')
const AWS = require('aws-sdk')

const createUser = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient()

  const { name, surname } = JSON.parse(event.body)
  const createdAt = new Date().toISOString()
  const id = v4()

  const newUser = {
    id,
    name,
    surname,
    createdAt,
  }

  try {
    await dynamodb
      .put({
        TableName: 'Users',
        Item: newUser,
      })
      .promise()
  } catch (error) {
    console.log(error)
  }

  return {
    statusCode: 200,
    body: JSON.stringify(newUser),
  }
}

module.exports = {
  handler: createUser,
}
