//Service Worker module
self.addEventListener("push", (event) => {
  try {
    const notification = new Notification("Hello There, how you doing???", {
      body: "This is detailed text ",
    });
    notification.close(() => {
      alert("Please don't forget to act on the object");
    });
  } catch (error) {
    console.log("Service Wroker levele error occurred!", error);
  }
  // if (!(self.Notification && self.Notification.permission === "granted")) {
  //   //DO not proceed further is permission is not granted to show the notification
  //   return;
  // }
  // const data = event.data?.json() ?? {};
  // const title = data.title || "Something Has Happened";
  // const message =
  //   data.message || "Here's something you might want to check out.";
  // const icon = "./public/new-notification.png";

  // const notification = new self.Notification(title, {
  //   body: message,
  //   tag: "simple-push-demo-notification",
  //   icon,
  // });

  // notification.addEventListener("click", () => {
  //   clients.openWindow(
  //     "https://example.blog.com/2015/03/04/something-new.html"
  //   );
  // });
});
