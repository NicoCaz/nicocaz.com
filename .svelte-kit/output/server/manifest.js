export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt","sitemap.xml"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.DrDFXX7l.js",app:"_app/immutable/entry/app.BSsWzniD.js",imports:["_app/immutable/entry/start.DrDFXX7l.js","_app/immutable/chunks/nscNBvaV.js","_app/immutable/chunks/CSZe_CwA.js","_app/immutable/chunks/C5ZCQ5AW.js","_app/immutable/entry/app.BSsWzniD.js","_app/immutable/chunks/CSZe_CwA.js","_app/immutable/chunks/M9VdSTBd.js","_app/immutable/chunks/C5ZCQ5AW.js","_app/immutable/chunks/DlMdsMaq.js","_app/immutable/chunks/4ZF7Q9fc.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/experience",
				pattern: /^\/experience\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
