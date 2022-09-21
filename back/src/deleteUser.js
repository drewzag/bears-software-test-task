const AWS = require('aws-sdk')

const deleteUser = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient()
  const { id } = event.pathParameters

  await dynamodb
    .delete({
      TableName: 'Users',
      Key: { id },
    })
    .promise()

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'User deleted',
    }),
  }
}

module.exports = {
  handler: deleteUser,
}
