const AWS = require('aws-sdk')

const updateUser = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient()
  const { id } = event.pathParameters

  const { name, surname } = JSON.parse(event.body)

  await dynamodb
    .update({
      TableName: 'Users',
      Key: { id },
      UpdateExpression: 'set #name = :name, #surname = :surname',
      ExpressionAttributeNames: {
        '#name': 'name',
        '#surname': 'surname',
      },
      ExpressionAttributeValues: {
        ':name': name,
        ':surname': surname,
      },
      ReturnValues: 'ALL_NEW',
    })
    .promise()

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'User updated',
    }),
  }
}

module.exports = {
  handler: updateUser,
}
