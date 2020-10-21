import App from "./src/App";

import { Client, setDefaultClient } from "./src/graphql/index";

const client = new Client({
  endpoint: "https://mylibrary.io/graphql-public"
});

setDefaultClient(client);

const app = new App({
	target: document.getElementById("home"),
	props: {}
});