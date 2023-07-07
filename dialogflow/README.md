# Dialogflow
The Dialogflow component of this demo. The `GenAI-Healthcenter.blob` file is an export of the current Dialogflow CX agent that has been deployed as part of the https://www.dentalai.info demo

## Infra Details
* Project: `genai-healthcenter`

## Deployment Steps
1. Create a Dialogflow CX agent following the [quickstart](https://cloud.google.com/dialogflow/cx/docs/quick/build-agent#create-agent) with the following parameters:
2. Once the agent has been created, will be in the agent editing pane. Click on the `Agent` drop down on the top nav bar and click on `View all agents`
3. Find the agent you just created, click on the corresponding kebab menu (3 vertical dots), and then select `Restore`
4. Select the `Upload` option, drag the `GenAI-Healthcenter.blob` into the window, and select `Restore`
5. Enable integration with Dialogflow messenger
  * Click on the `Manage` tab on the upper left corner
  * Click on `Integrations`
  * Click on the `Connect` button for Dialogflow Messenger
  * If prompted, select `Enable`
  * A window with a `<script>` will appear. Copy the contents of the `agent-id` value

### Change Apigee Endpoint
If one wants to update the Apigee endpoint the request goes to:
* Click on the `Manage` tab on the upper left corner
* Click on `Webhooks`
* Click on the `apigee` webhook
* Update the hostname/IP with your publically accessible Apigee hostname
  * change just the hostname, leave the path as-is
* Click `Save`