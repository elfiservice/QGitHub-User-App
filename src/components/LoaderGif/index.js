import React from 'react'

const LoaderGif = (props) => {
    var url  = window.location.href; 
    let urlPath
    let domainUrl = url.split("/")[2]
    
    if(domainUrl.split(':')[0] === 'localhost') {
        urlPath = url.split("/")[2]
    } else if(domainUrl.split(':')[0] === 'elfiservice.github.io') {
        urlPath = url.split("/")[2] + '/QGitHub-User-App'
    } else {
        urlPath = url.split("/")[2]
    }
    let domain = `${url.split("/")[0]}//${urlPath}/assets/images/loader.gif`

    return (
        <div className={props.class ? props.class : "loader-gif"}>
            <img width="20%" src={domain} alt=""/>
        </div>
    )
}

export default LoaderGif