(function (d) {

    let notificationApiEnabled = !!window.Notification;

    if (notificationApiEnabled) {
        d.addEventListener("DOMContentLoaded", function (event) {
            d.getElementById("showNotificationButton").onclick = () => {
                const msg = d.getElementById('messageInput').value;
                showNotification(msg);
            }
        });

        if (Notification.permission === 'granted') {
            showNotification("already granted");
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission(permission => {
                if (permission === 'granted') {
                    showNotification("after permission request -> granted");
                } else {
                    console.log("after permission -> denied");
                }
            });
        }
    }

    function showNotification(message) {
        console.log("show notification from client:", message);
        var opts = {
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            icon: '/icon.png'
        };
        var n = new Notification("My Notification: " + message, opts);
        n.onclick = () => {
            console.log("notification clicked");
        };
    }



})(document);