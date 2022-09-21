const AWS = require('aws-sdk')

const getUsers = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient()

  let users

  try {
    const results = await dynamodb.scan({ TableName: 'Users' }).promise()
    users = results.Items
  } catch (error) {
    console.log(error)
  }

  return {
    statusCode: 200,
    body: JSON.stringify(users),
  }
}

module.exports = {
  handler: getUsers,
}
