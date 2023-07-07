# Frontend
The frontend component of this demo, which consists of a GCS bucket that [hosts a static website](https://cloud.google.com/storage/docs/hosting-static-website) which contains an embedded [Dialogflow Messenger](https://cloud.google.com/dialogflow/cx/docs/concept/integration/dialogflow-messenger).

## Infra Details
* Project: `genai-healthcenter`
* Bucket: `genai-ce-hackathon-2023`
* Endpoint: https://www.dentalai.info

## Deployment Steps
```
# cd into this folder
cd ./frontend

# copy over files to bucket
gsutil cp ./* gs://genai-ce-hackathon-2023/
```
