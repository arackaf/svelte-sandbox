import App from "./src/AppServer";

import { Client, setDefaultClient } from "./src/micro-graphql-react/index";

const client = new Client({
  endpoint: "https://mylibrary.io/graphql-public"
});

setDefaultClient(client);

const app = new App({
	target: document.getElementById("home"),
	props: {},
	hydrate: true
});