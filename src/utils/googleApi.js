import { googleAPIKey } from './keys'
const apiMapsUrl = "https://maps.googleapis.com/maps/api/js?key="+ googleAPIKey +"&libraries=places,geometry"

export function loadGoogleApi() {
    return new Promise(resolve => {
        var index  = window.document.getElementsByTagName("script")[0]
        var script = window.document.createElement("script")
        script.src = apiMapsUrl
        script.async = true
        script.defer = true
        index.parentNode.insertBefore(script, index)
        setTimeout(() =>  {resolve()} , 3000)
    })
}