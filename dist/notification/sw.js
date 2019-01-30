self.addEventListener('push', (e)=>{
    const  n = self.registration.showNotification("Notification from sw");
    e.waitUntil(n);
});