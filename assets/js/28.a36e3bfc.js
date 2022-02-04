(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{570:function(e,t,s){e.exports=s.p+"assets/img/portal_sb_topic.5d0057c5.png"},571:function(e,t,s){e.exports=s.p+"assets/img/portal_sb_messages.d75707e7.png"},572:function(e,t,s){e.exports=s.p+"assets/img/portal_la_topic.caa62bc8.png"},573:function(e,t,s){e.exports=s.p+"assets/img/portal_la_trigger.691dfd67.png"},574:function(e,t,s){e.exports=s.p+"assets/img/portal_la_creatblob.9840af09.png"},575:function(e,t,s){e.exports=s.p+"assets/img/portal_la_sbsuccess.a08f3053.png"},576:function(e,t,s){e.exports=s.p+"assets/img/storage_explorer_la.56d522ff.png"},894:function(e,t,s){"use strict";s.r(t);var a=s(35),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"challenge-3-optional-messaging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#challenge-3-optional-messaging"}},[e._v("#")]),e._v(" Challenge 3 (optional): Messaging")]),e._v(" "),a("p",[e._v("⏲️ "),a("em",[e._v("Est. time to complete: 45 min.")]),e._v(" ⏲️")]),e._v(" "),a("h2",{attrs:{id:"here-is-what-you-will-learn-🎯"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn-🎯"}},[e._v("#")]),e._v(" Here is what you will learn 🎯")]),e._v(" "),a("p",[e._v("In this "),a("em",[e._v("optional")]),e._v(" challenge, you will get to know Azure messaging offerings to loosely connect services with each other. You will use "),a("em",[e._v("Azure Service Bus Topics")]),e._v(" as an example. "),a("em",[e._v("Azure Storage Queues")]),e._v(" will be used in the next "),a("RouterLink",{attrs:{to:"/day2/challenges/challenge-bo-2.html"}},[e._v("Break Out session")]),e._v(".")],1),e._v(" "),a("p",[e._v("In detail, we will use:")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("Azure Service Bus")]),e._v(" for pub/sub scenarios (Consumer/Producer pattern)")]),e._v(" "),a("li",[a("em",[e._v("Azure Logic Apps")]),e._v(" to subscribe to topics and process them")])]),e._v(" "),a("h2",{attrs:{id:"table-of-contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table Of Contents")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"#azure-service-bus-publish-subscriber-pattern"}},[e._v("Azure Service Bus Publish / Subscriber Pattern")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#play-time"}},[e._v("Play Time")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#azure-samples"}},[e._v("Azure Samples")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#cleanup"}},[e._v("Cleanup")])])]),e._v(" "),a("h2",{attrs:{id:"azure-service-bus-publish-subscriber-pattern"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#azure-service-bus-publish-subscriber-pattern"}},[e._v("#")]),e._v(" Azure Service Bus Publish / Subscriber Pattern")]),e._v(" "),a("h3",{attrs:{id:"create-an-azure-service-bus-namespace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-an-azure-service-bus-namespace"}},[e._v("#")]),e._v(" Create an Azure Service Bus Namespace")]),e._v(" "),a("p",[e._v("To use Azure Service Bus, you first need to create a "),a("em",[e._v("namespace")]),e._v(" with a globally unique name. As done before with other services:")]),e._v(" "),a("ul",[a("li",[e._v("create a resource group, e.g. "),a("em",[e._v("messaging-rg")]),e._v(" in West Europe")]),e._v(" "),a("li",[e._v("Click on "),a("strong",[e._v('"Create Resource"')])]),e._v(" "),a("li",[e._v("Search for "),a("em",[e._v('"Service Bus"')]),e._v(" and click on "),a("strong",[e._v('"Create"')])])]),e._v(" "),a("p",[e._v("Now fill out the form:")]),e._v(" "),a("ul",[a("li",[e._v("Give your Service Bus a unique name")]),e._v(" "),a("li",[e._v("Choose the Pricing Tier "),a("em",[e._v("Standard")]),e._v(".")])]),e._v(" "),a("p",[e._v("When the Service Bus is created, open it in the Azure Portal and add a new "),a("em",[e._v("Topic")]),e._v(":")]),e._v(" "),a("p",[a("img",{attrs:{src:s(570),alt:"portal_sb_topic",title:"portal_sb_topic"}})]),e._v(" "),a("p",[e._v("Give the "),a("em",[e._v("Topic")]),e._v(" a name, e.g. "),a("code",[e._v("message")]),e._v(" and leave the other parameters as proposed by Azure.")]),e._v(" "),a("p",[e._v("When the topic has been created:")]),e._v(" "),a("ul",[a("li",[e._v("Open it in the portal")]),e._v(" "),a("li",[e._v("create a "),a("em",[e._v("Subscription")]),e._v(" via the menu bar")]),e._v(" "),a("li",[e._v("Give it a name, e.g. "),a("em",[e._v("testsubscription")])]),e._v(" "),a("li",[e._v("Set the "),a("em",[e._v('"Max delivery count"')]),e._v(" to "),a("code",[e._v("10")])]),e._v(" "),a("li",[e._v("Leave all other parameters as proposed by the portal")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("📝 "),a("em",[e._v('"Max delivery count"')]),e._v(" defines how often Azure should try to deliver a message.")])]),e._v(" "),a("p",[e._v("When you created the "),a("strong",[e._v("Topic")]),e._v(" and the "),a("strong",[e._v("Subscription")]),e._v(" have been created, we need to copy the "),a("strong",[e._v("Connection String")]),e._v(" to our Service Bus")]),e._v(" "),a("ul",[a("li",[e._v("Go to "),a("strong",[e._v('"Shared Access Policy"')])]),e._v(" "),a("li",[e._v("Choose the "),a("strong",[e._v('"RootManagedSharedAccessKey"')]),e._v(" of the Service Bus ("),a("em",[e._v("not the topic!")]),e._v(")")]),e._v(" "),a("li",[e._v("Copy/note down the "),a("strong",[e._v("Primary Connection String")])])]),e._v(" "),a("h3",{attrs:{id:"add-a-producer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-a-producer"}},[e._v("#")]),e._v(" Add a Producer")]),e._v(" "),a("p",[e._v("Now open Visual Studio Code and open the folder "),a("code",[e._v("day2/challenges/sbtester")]),e._v(". This folder contains a sample application that can send messages to a Service Bus Topic, like the one we have just created.")]),e._v(" "),a("p",[e._v("Open "),a("code",[e._v("Program.cs")]),e._v(" and enter the connection string and the topic name to the predefined variables.")]),e._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("string")])]),e._v(" ServiceBusConnectionString "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<your_connection_string>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("string")])]),e._v(" TopicName "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<your_topic_name>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("Make yourself familiar with the code and examine, how messages are created and sent to Azure Service Bus. If you are done with that, run the sample application.")]),e._v(" "),a("p",[e._v("Open a terminal in the folder "),a("code",[e._v("day2/challenges/sbtester")]),e._v(" and execute:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ dotnet build "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" dotnet run\nMicrosoft "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("R"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" Build Engine version "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("16.4")]),e._v(".0+e901037fe "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" .NET Core\nCopyright "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" Microsoft Corporation. All rights reserved.\n\n  Restore completed "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("32.32")]),e._v(" ms "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" /Users/christiandennig/dev/azure-developer-college/day2/challenges/sbtester/sbtester.csproj.\n  sbtester -"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /Users/christiandennig/dev/azure-developer-college/day2/challenges/sbtester/bin/Debug/netcoreapp3.1/sbtester.dll\n\nBuild succeeded.\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" Warning"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" Error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\nTime Elapsed 00:00:01.29\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),e._v("\nPress ENTER key to "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exit")]),e._v(" after sending all the messages.\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),e._v("\nSending message: Message d31e0280-d300-4a91-8b98-c84b0746040a\nSending message: Message 76ef548c-9483-439e-8b1f-ee9c1580dc50\nSending message: Message 383b103b-ab00-4162-ae8c-9ad6dc67669e\nSending message: Message e855bbc0-e74c-4739-ba65-33754d5aedce\nSending message: Message 424f5f20-074c-45a4-9f67-97c7cf43d027\nSending message: Message 76b35c84-1fe0-48f7-a82c-a279db2e0fec\nSending message: Message 25ece212-5a4c-45e1-a04d-bc3ac07a9058\nSending message: Message 8f0feabe-40fc-405b-a46d-8a6901805152\nSending message: Message e9f1ca91-82c5-40db-ad3f-e5f483424556\nSending message: Message d61b256c-5c8c-482c-904a-63d322003c70\n")])])]),a("p",[e._v("🎉 "),a("em",[e._v("Congratulations")]),e._v(" - you have just sent your first 10 messages to an Azure Service Bus Topic. Check that the messages have arrived in the subscription queue.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(571),alt:"portal_sb_messages",title:"portal_sb_messages"}})]),e._v(" "),a("p",[e._v("So, now let's create the subscriber that picks up the messages and processes each message. We could use another console application, but that's more than boring! We will use an Azure Logic App..."),a("em",[e._v("Serverless Resprise")]),e._v("..., so to say!")]),e._v(" "),a("h3",{attrs:{id:"add-a-consumer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-a-consumer"}},[e._v("#")]),e._v(" Add a Consumer")]),e._v(" "),a("p",[e._v("In the Portal create a new "),a("em",[e._v("Azure Logic App")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("Press "),a("strong",[e._v('"Create a resource"')])]),e._v(" "),a("li",[e._v("Give it a unique name")]),e._v(" "),a("li",[e._v("Use the same resource group as for the Service Bus ("),a("em",[e._v("messaging-rg")]),e._v(")")]),e._v(" "),a("li",[e._v('Put it in "West Europe".')])]),e._v(" "),a("p",[e._v("When the Logic App has been deployed:")]),e._v(" "),a("ul",[a("li",[e._v("Open it in the Portal")]),e._v(" "),a("li",[e._v("Click on "),a("strong",[e._v('"Blank logic App"')]),e._v(" in the "),a("em",[e._v("Templates")]),e._v(" section")]),e._v(" "),a("li",[e._v("Search for "),a("strong",[e._v('"service bus topic"')]),e._v(" in the search box")]),e._v(" "),a("li",[e._v("Choose "),a("strong",[e._v('"When a message is received in a topic subscription (auto-complete)')]),e._v(".")])]),e._v(" "),a("p",[a("img",{attrs:{src:s(572),alt:"portal_la_topic",title:"portal_la_topic"}})]),e._v(" "),a("p",[e._v("Now give the connection a name and choose the Service Bus you created in the previous chapter. When the connection to the Service Bus is established, you can specify the "),a("em",[e._v("Topic")]),e._v(" and the "),a("em",[e._v("Subscription")]),e._v(" to use. Your Logic App should now look like this:")]),e._v(" "),a("p",[a("img",{attrs:{src:s(573),alt:"portal_la_trigger",title:"portal_la_trigger"}})]),e._v(" "),a("p",[e._v("You have just created the trigger connection between the Logic App and your Service Bus Topic/Subscription.")]),e._v(" "),a("p",[e._v("Now, it's up to you what to do now with the messages, regarding the 200+ connectors we have in Azure Logic Apps! You can follow along with the sample that takes messages and creates blobs on a Storage Account.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("📝 You can also connect e.g. your O365 Mail or Gmail account and send a few messages to your colleagues next to you or add them to a database, a SAP System, Salesforce, use Azure Cognitive Services to analyze sentiment. Imagine the possibilities - so, be creative 😃")])]),e._v(" "),a("p",[e._v("Here, we will follow the "),a("em",[e._v("boring path")]),e._v(" and put the messages in a storage account blob container.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("📝 If you have already deleted the Storage Account from the previous challenge, go and create a new one and add a container! You now know, how this is can be done.")])]),e._v(" "),a("p",[e._v("Back in the Logic App, you need to add a new step:")]),e._v(" "),a("ul",[a("li",[e._v("Click on the button "),a("strong",[e._v("New Step")])]),e._v(" "),a("li",[e._v('Enter "blob" in the search field')]),e._v(" "),a("li",[e._v("Select "),a("strong",[e._v('"Create Blob"')]),e._v(" from the suggested Actions")]),e._v(" "),a("li",[e._v("Enter a name for the "),a("em",[e._v("connection")]),e._v(" and choose the appropriate Storage Account")]),e._v(" "),a("li",[e._v("Click "),a("strong",[e._v('"Create"')]),e._v(".")])]),e._v(" "),a("p",[e._v("Configure the action:")]),e._v(" "),a("ul",[a("li",[e._v("Choose the container to store the messages to ("),a("em",[e._v("Folder Path")]),e._v(").")]),e._v(" "),a("li",[e._v("For the "),a("em",[e._v("blobname")]),e._v(", we simply let Azure create one for us. In the Expression tab, enter..."),a("code",[e._v("rand(100000,999999)")]),e._v(' ...followed by ".txt".')]),e._v(" "),a("li",[e._v("For "),a("em",[e._v("Blob Content")]),e._v(', choose the predefined field "Content". If that doesn\'t appear in the dropdown, switch to the Expression tab an enter '),a("code",[e._v("base64ToString(triggerBody()?['ContentData'])")])])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("📝 The message body is a "),a("em",[e._v("base64 encoded")]),e._v(" string we must decode first.")])]),e._v(" "),a("p",[e._v("The workflow in the designer should now look like that:")]),e._v(" "),a("p",[a("img",{attrs:{src:s(574),alt:"portal_la_creatblob",title:"portal_la_creatblob"}})]),e._v(" "),a("p",[e._v("Save the Logic App and click on the "),a("strong",[e._v('"Run"')]),e._v(" button in the command bar.")]),e._v(" "),a("p",[e._v("Now got back to the "),a("em",[e._v("sbtester")]),e._v(" app and run it again. A few seconds later, after the messages have been sent, you should see a successfully processed Service Bus message.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(575),alt:"portal_la_sbsuccess",title:"portal_la_sbsuccess"}})]),e._v(" "),a("p",[e._v("Also check the Storage Explorer and have a look at the files that have been written:")]),e._v(" "),a("p",[a("img",{attrs:{src:s(576),alt:"storage_explorer_la",title:"storage_explorer_la"}})]),e._v(" "),a("h2",{attrs:{id:"play-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#play-time"}},[e._v("#")]),e._v(" Play Time")]),e._v(" "),a("p",[e._v('You have seen how many connectors Azure Logic Apps has "under the hood". Take the same scenario and adjust the messages to your needs (e.g. send JSON) and connect to another service, maybe one outside of Azure? (Gmail, Outlook, O365, SAP, Twitter...?!)')]),e._v(" "),a("p",[e._v("🥳 "),a("strong",[e._v("Happy Hacking")]),e._v(" 🥳")]),e._v(" "),a("h2",{attrs:{id:"azure-samples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#azure-samples"}},[e._v("#")]),e._v(" Azure Samples")]),e._v(" "),a("p",[e._v("Azure LogicApps code samples:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/samples/browse/?expanded=azure&products=azure-logic-apps",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.microsoft.com/samples/browse/?expanded=azure&products=azure-logic-apps"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Azure Service Bus code samples:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/samples/browse/?expanded=azure&filter-products=service%20b&products=azure-service-bus",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.microsoft.com/samples/browse/?expanded=azure&filter-products=service b&products=azure-service-bus"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"cleanup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cleanup"}},[e._v("#")]),e._v(" Cleanup")]),e._v(" "),a("p",[e._v("Remove the sample resource group via:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("az group delete -n messaging-rg\n")])])]),a("p",[a("RouterLink",{attrs:{to:"/day2/challenges/03-challenge-serverless.html"}},[e._v("◀ Previous challenge")]),e._v(" | "),a("RouterLink",{attrs:{to:"/day2/"}},[e._v("🔼 Day 2")]),e._v(" | "),a("RouterLink",{attrs:{to:"/day2/challenges/05-challenge-bo-2.html"}},[e._v("Next challenge ▶")])],1)])}),[],!1,null,null,null);t.default=r.exports}}]);