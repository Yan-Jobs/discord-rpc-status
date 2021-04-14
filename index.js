const rpc = require("discord-rpc");
const client = new rpc.Client({ transport: "ipc" });
client.on("ready", () => {
  console.log("works");
  client.request("SET_ACTIVITY", {
    pid: process.pid,
    activity: {
      details: "building a discord server...",
      assets: {
        large_image: "logo",
        large_text: "building a discord server...",
      },
      buttons: [
        { label: "My website", url: "https://www.yaniobs.me" },
        { label: "My GitHub", url: "https://GitHub.com/Yan-Jobs" },
      ],
    },
  });
});
client.login({ clientId: "831107233198505994" }).catch((e) => console.log(e));
