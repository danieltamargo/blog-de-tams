export class CustomNotification {
  constructor(
    id,
    type,
    title,
    message,
    duration = 5000,
    expiresAutomatically = true,
  ) {
    this.id = id;
    this.type = type;
    this.title = title;
    this.message = message;
    this.duration = duration;
    this.expiresAutomatically = expiresAutomatically;
  }

  static createCustomNotification({
    id,
    type,
    title,
    message,
    duration = 5000,
    expiresAutomatically = true,
  }) {
    return new CustomNotification(
      String(this.idCounter),
      type,
      title,
      message,
      duration,
      expiresAutomatically,
    );
  }

  get notificationId() {
    return "notification-" + this.id;
  }

  show() {
    const notificationDiv = document.createElement("div");
    notificationDiv.id = this.notificationId;
    notificationDiv.classList.add("custom-notification", this.type);
    notificationDiv.style = `--custom-notification-duration: ${this.duration}ms`;
    notificationDiv.innerHTML = `
            <div class="alert-content">
                <h3>${this.title}</h3>
                <p>${this.message}</p>
            </div>
        `;
    window.CustomNotificationManager.alertsContainerDiv.appendChild(
      notificationDiv,
    );

    setTimeout(() => {
      this.delete();
    }, this.duration);
  }

  delete() {
    try {
      window.CustomNotificationManager.removeNotificatonById(this.id);
      document.getElementById(this.notificationId)?.remove();
    } catch (error) {
      console.error(error);
    }
  }
}

export class CustomNotificationManager {
  idCounter = 0;
  notifications = [];
  alertsContainerDiv = null;

  constructor() {
    this.refreshAlertsContainerDiv();
  }

  refreshAlertsContainerDiv() {
    let alertsContainerDiv = document.querySelector(".custom-notification-container");

    if (!alertsContainerDiv) {
      alertsContainerDiv = document.createElement("div");
      alertsContainerDiv.classList.add("custom-notification-container");
      document.body.appendChild(alertsContainerDiv);
    }

    this.alertsContainerDiv = alertsContainerDiv;
  }

  removeNotificatonById(id) {
    this.notifications = this.notifications.filter((notification) => {
      notification.id !== id;
    });
  }

  addNotification({
    type,
    title,
    message,
    duration = 5000,
    expiresAutomatically = true,
  }) {
    this.idCounter++;
    const notification = CustomNotification.createCustomNotification({
      id: String(this.idCounter),
      type,
      title,
      message,
      duration,
      expiresAutomatically,
    });

    this.notifications.push(notification);
    notification.show();
  }

  addInfoNotification({
    title,
    message,
    duration = 5000,
    expiresAutomatically = true,
  }) {
    this.addNotification({
      type: "info",
      title,
      message,
      duration,
      expiresAutomatically,
    });
  }

  addSuccessNotification({
    title,
    message,
    duration = 5000,
    expiresAutomatically = true,
  }) {
    this.addNotification({
      type: "success",
      title,
      message,
      duration,
      expiresAutomatically,
    });
  }

  addWarningNotification({
    title,
    message,
    duration = 5000,
    expiresAutomatically = true,
  }) {
    this.addNotification({
      type: "warning",
      title,
      message,
      duration,
      expiresAutomatically,
    });
  }

  addErrorNotification({
    title,
    message,
    duration = 5000,
    expiresAutomatically = true,
  }) {
    this.addNotification({
      type: "error",
      title,
      message,
      duration,
      expiresAutomatically,
    });
  }
}