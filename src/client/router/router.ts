import { createWebHashHistory, createRouter } from "vue-router";
import { Router } from "vue-router";

import { exampleRoutes } from "./example.route";
import { homeRoutes } from "./home.route";

export const router: Router = createRouter({
	// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
	history: createWebHashHistory(),
	routes: [
		...exampleRoutes,
		...homeRoutes
	], // short for `routes: routes`
});
