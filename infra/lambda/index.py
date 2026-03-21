import json
import boto3
import uuid
import os
from datetime import datetime

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(os.environ['TABLE_NAME'])

def handler(event, context):
    try:
        if event.get('requestContext').get('http').get('method') == 'OPTIONS':
             return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Allow-Methods': 'OPTIONS,POST'
                },
                'body': ''
            }

        body = json.loads(event.get('body', '{}'))
        item = {
            'id': str(uuid.uuid4()),
            'email': body.get('email'),
            'name': body.get('name'),
            'orgType': body.get('orgType'),
            'aumRange': body.get('aumRange'),
            'timestamp': datetime.utcnow().isoformat()
        }
        
        table.put_item(Item=item)

        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            'body': json.dumps({'message': 'Lead captured successfully', 'id': item['id']})
        }
    except Exception as e:
        print(e)
        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Origin': '*',
            },
            'body': json.dumps({'error': str(e)})
        }