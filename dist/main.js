(function(d){
    let serviceWorkerEnabled = !!navigator.serviceWorker;

    d.getElementById('serviceWorkedEnabledBox').innerHTML = serviceWorkerEnabled 
                        ? 'Yes' : 'No'
})(document);