# Apigee
The apigee component of this demo. Consists of a single Apigee proxy which has been configured to handle requests sent from the Dialogflow CX agent. 

## Infra Details
* Project: `genai-healthcenter`
* Proxy: `dentalAI`
* Endpoint: https://api.dentalai.info/v1/dentalai
* LLM endpoint: https://us-central1-aiplatform.googleapis.com/v1/projects/apigeex-talanki/locations/us-central1/publishers/google/models/chat-bison@001:predict

## Deployment Steps
* zip up apiproxy bundle and import it via Apigee UI