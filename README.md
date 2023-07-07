# Dr Bard
This demo serves as a deployable reference implementation of a chatbot developed using [Dialogflow CX](https://cloud.google.com/dialogflow/cx/docs/basics), [PaLM API](https://cloud.google.com/vertex-ai/docs/generative-ai/start/quickstarts/api-quickstart) and [Apigee](https://cloud.google.com/apigee/docs/api-platform/get-started/what-apigee)

.gif of sample interaction with demo found below:
![Demo](demo.gif)

## Architecture
* [PaLM API](https://cloud.google.com/vertex-ai/docs/generative-ai/start/quickstarts/api-quickstart) endpoint, which allows users to interact with Google's PaLM large language model
* A [Dialogflow CX](https://cloud.google.com/dialogflow/cx/docs/basics) virtual agent that sends webhook calls to Apigee
* An [Apigee X](https://cloud.google.com/apigee/docs/api-platform/get-started/what-apigee) instance whcih serves as an API Gateway to the PaLM API
* A [Google Cloud Storage](https://cloud.google.com/storage) bucket is used to serve up the sample UI

## Deployment
Details on how the solution was deployed are found in the directories of the individual components:
1. [apigee](./apigee)
2. [dialogflow](./dialogflow)
3. [frontend](./frontend)
