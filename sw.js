//Service Worker module
self.addEventListener("push", (event) => {
  try {
    console.log("Received a push message", event);

    var title = "Yay a message.";
    var body = "We have received a push message.";
    var icon = "/images/icon-192x192.png";
    var tag = "simple-push-demo-notification-tag";
    var data = {
      doge: {
        wow: "such amaze notification data",
      },
    };

    event.waitUntil(
      self.registration.showNotification(title, {
        body: body,
        icon: icon,
        tag: tag,
        data: data,
      })
    );
  } catch (error) {
    console.log("Service Wroker levele error occurred!", error);
  }
});
