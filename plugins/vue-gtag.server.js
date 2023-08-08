// const vueGtag = defineNuxtPlugin((nuxtApp) => {
//   const preloadLinks = [
//     {
//       rel: "preload",
//       as: "script",
//       href: `https://www.googletagmanager.com/gtag/js?id=G-EZ3DBYCDJN`,
//     },
//     {
//       rel: "preconnect",
//       href: "https://www.google-analytics.com/",
//     },
//   ];
//   if (process.env.NODE_ENV === "production") {
//     console.log("server",nuxtApp);
//     if (typeof app.head === "function") {
//       console.error("We can't add the preload links if head is a function");
//     } else if (app.head) {
//       app.head.link.push(...preloadLinks);
//     } else {
//       app.head = {
//         link: preloadLinks,
//       };
//     }
//   } else {
//     console.log("not server");
//   }
// });
// export default vueGtag;
