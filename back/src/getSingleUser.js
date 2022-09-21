const AWS = require('aws-sdk')

const getSingleUser = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient()
  const { id } = event.pathParameters

  let user

  try {
    const result = await dynamodb
      .get({
        TableName: 'Users',
        Key: { id },
      })
      .promise()
    user = result.Item
  } catch (error) {
    console.log(error)
  }

  return {
    statusCode: 200,
    body: JSON.stringify(user),
  }
}

module.exports = {
  handler: getSingleUser,
}
