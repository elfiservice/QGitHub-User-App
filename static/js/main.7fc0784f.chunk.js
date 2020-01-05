(this["webpackJsonpqgithub-user-app"]=this["webpackJsonpqgithub-user-app"]||[]).push([[0],{30:function(e,t,a){e.exports=a(49)},37:function(e,t,a){},38:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),c=a.n(o),i=(a(35),a(36),a(37),a(7)),l=a(8),s=a(11),u=a(9),d=a(12),m=(a(38),a(10)),p="SET_LOCATION_OF_USER",v="SET_LAT_LNG_OF_USER";function h(e){return{type:p,nameOfTheCity:e}}var f="https://maps.googleapis.com/maps/api/js?key=AIzaSyARC-a63vxOWRRAgpjnDYOndn_2fFLYhAo&libraries=places,geometry";var g=a(17),D=a(16),E=(a(43),function(e){return r.a.createElement("input",{className:e.className,"aria-label":e.placeholder,id:e.name,name:e.name,type:e.type?e.type:"text",placeholder:e.placeholder,value:e.value,onChange:e.onChange,required:e.required,autoFocus:e.autofocus,autoComplete:e.name,maxLength:e.maxlength?e.maxlength:""})}),b="https://api.github.com",w={Accept:"application/json"},y=function(e){return fetch("".concat(b,"/search/users?q=fullname:").concat(e)).then((function(e){return e.json()}))},O=function(e){return fetch("".concat(b,"/search/users?q=user:").concat(e)).then((function(e){return e.json()}))},_=function(e){return fetch("".concat(b,"/users/").concat(e),{headers:w}).then((function(e){return e.json()}))},N=function(e){return fetch("".concat(b,"/users/").concat(e,"/starred"),{headers:w}).then((function(e){return e.json()}))},j="SET_SEARCH_INPUT",S="SET_LIST_OF_DEVS";function k(e){return{type:S,listOfDevs:e}}var A=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"_searchBtnClicked",value:function(e){e.preventDefault(),this.props.searchDevOnGithub(this.props.searchData.searchInput)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"search-form-container"},r.a.createElement("form",{className:"search-form",onSubmit:function(t){e._searchBtnClicked(t)}},r.a.createElement(E,{className:"form-control",name:"search",placeholder:"Search by name or username",type:"search",value:this.props.searchData.searchInput,onChange:function(t){return e.props.handleInputChange(t.target.value)},required:!0}),r.a.createElement("button",{type:"submit",className:"submit btn btn-lg btn-success search-btn"},r.a.createElement("i",{className:"fa fa-search","aria-hidden":"true"})," Search on GitHub")))}}]),t}(n.Component);var L=Object(m.b)((function(e){return{searchData:e.searchData}}),{handleInputChange:function(e){return{type:j,query:e}},searchDevOnGithub:function(e){return function(t){t(k("searching")),setTimeout((function(){return y(e).then((function(a){0===a.total_count?t(function(e){return function(t){return O(e).then((function(e){t(k(e.items))})).catch((function(e){return t(k("error"))}))}}(e)):t(k(a.items))})).catch((function(e){return t(k("error"))}))}),1500)}}})(A),T=(a(44),function(e){var t,a=window.location.href,n=a.split("/")[2];t="localhost"===n.split(":")[0]?a.split("/")[2]:"elfiservice.github.io"===n.split(":")[0]?a.split("/")[2]+"/QGitHub-User-App":a.split("/")[2];var o="".concat(a.split("/")[0],"//").concat(t,"/assets/images/loader.gif");return r.a.createElement("div",{className:e.class?e.class:"loader-gif"},r.a.createElement("img",{width:"20%",src:o,alt:""}))}),C=function(e){return r.a.createElement("div",{className:"search-result_msg-to-user"},e.children)},I=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"_mountContent",value:function(){var e=this.props.searchData.listOfDevs;return e?"searching"===e?r.a.createElement(C,null,r.a.createElement(T,null)):"error"===e?r.a.createElement(C,null,r.a.createElement("b",{className:"search-result_txt-muted"},"An error occurred while trying to access Github. Please try again later.")):e.length<=0?r.a.createElement(C,null,r.a.createElement("b",{className:"search-result_txt-muted"},"No devs found, try another name or username ;)")):r.a.createElement("ol",{className:"dev-list"},e.map((function(e){return r.a.createElement("li",{key:e.id,className:"dev-list-item"},r.a.createElement("div",{className:"dev-avatar",style:{backgroundImage:"url(".concat(e.avatar_url,")")}}),r.a.createElement("div",{className:"dev-name-more-details"},r.a.createElement("div",{className:"dev-details"},r.a.createElement("p",null,e.login)),r.a.createElement("div",{className:"dev-btn-more-details"},r.a.createElement(g.b,{className:"btn btn-primary",to:"/dev/"+e.login},"More Details"))))}))):r.a.createElement(C,null,r.a.createElement("i",{className:"search-result_txt-muted"},"Type a name or username that we'll search a Dev for you"))}},{key:"render",value:function(){return r.a.createElement("div",{id:"search-result-scroll",className:"search-result-content container-scroll"},r.a.createElement("div",{className:"messages content-scroll"},this._mountContent()))}}]),t}(n.Component);var U=Object(m.b)((function(e){return{searchData:e.searchData}}))(I),B=(a(46),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this._setHeightToResultSearchContainer(),window.addEventListener("resize",this._setHeightToResultSearchContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setHeightToResultSearchContainer)}},{key:"_setHeightToResultSearchContainer",value:function(){var e=window.innerWidth,t=window.innerHeight,a=252;e>769&&(a=150);var n=parseInt(100*(1-a/t));document.getElementById("search-result-scroll").style.height=n+"vh"}},{key:"render",value:function(){return r.a.createElement("div",{className:"home-container"},r.a.createElement(L,null),r.a.createElement(U,null))}}]),t}(n.Component)),P=(a(47),"SET_SINGLE_DEV_DATA"),M="SET_POSITION_OF_DEV",R="SET_REPORS_STARRED_OF_DEV",x="RESET_DEV_DATA",G="SET_DIST_BETWEEN_USER_AND_DEV",H="DRAW_MAP";function q(e){return{type:P,devData:e}}function W(e){return{type:M,position:e}}a(48);var F=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement(g.b,{className:"info-card-dev-back-btn",to:"/"},r.a.createElement("i",{className:"fa fa-arrow-circle-o-left","aria-hidden":"true"})),r.a.createElement("header",null,r.a.createElement("div",{className:"dev-avatar",style:{backgroundImage:"url(".concat(e.devData.avatar_url,")")}}),r.a.createElement("h2",null,"This Dev call ",r.a.createElement("span",{className:"info-card-dev__color-blue"},e.devData.name)),r.a.createElement("p",null,"and your username is ",r.a.createElement("i",{className:"info-card-dev__color-blue"},e.devData.login),r.a.createElement("a",{title:"Link to develepor page in GitHub",rel:"noopener noreferrer",target:"_blank",href:e.devData.html_url},r.a.createElement("i",{className:"fa fa-link","aria-hidden":"true"}),"\xa0"))))},V=function(e){return r.a.createElement("div",{className:"card info-card-dev__map"},e.devData.location?r.a.createElement("div",null,r.a.createElement("h4",null,"Dev location"),e.distanceBtwUserAndDev&&r.a.createElement("p",null,"You are ",r.a.createElement("b",null,e.distanceBtwUserAndDev," Km")," away from this Dev",r.a.createElement("button",{className:"btn btn-primary",onClick:e.drawMapClick},"Draw")),r.a.createElement("div",{id:"map"})):"This Dev not sharing your location :(")},z=function(e){return r.a.createElement("div",{className:"card info-card-dev__bio"},r.a.createElement("h4",null,"About"),e.devData.bio?r.a.createElement("div",null,r.a.createElement("p",null,e.devData.bio),r.a.createElement("p",null,"And this Dev have a ",e.devData.public_repos," publics repos, ",e.devData.followers," followers and following ",e.devData.following," devs.")):r.a.createElement("div",null,r.a.createElement("p",null,"It's nothing to say about himself yet."),r.a.createElement("p",null,"but this Dev have a ",e.devData.public_repos," publics repos, ",e.devData.followers," followers and following ",e.devData.following," devs.")))},K=function(e){return r.a.createElement("div",{className:"card info-card-dev__list-of-sttared-repos"},e.reposSttaredList.length<=0?"This Dev not have any repo sttared :(":r.a.createElement("div",null,r.a.createElement("h4",null,"This Dev is following this ",e.reposSttaredList.length," repos"),r.a.createElement("ul",null,e.reposSttaredList.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("i",{className:"fa fa-star","aria-hidden":"true"})," ",e.name)})))))},Y=function(e){var t=e.devDetailsData,a=t.devData,n=t.reposSttaredList,o=t.distanceBtwUserAndDev;return r.a.createElement("article",{className:"info-card-dev-container"},r.a.createElement("div",{className:"info-card-dev-flex"},r.a.createElement("div",{className:"info-card-dev-flex50"},r.a.createElement(F,{devData:a})),r.a.createElement("div",{className:"info-card-dev-flex50"},r.a.createElement(V,{devData:a,distanceBtwUserAndDev:o,drawMapClick:e.drawMapClick}))),r.a.createElement("div",{className:"info-card-dev-flex"},r.a.createElement("div",{className:"info-card-dev-flex50"},r.a.createElement(z,{devData:a})),r.a.createElement("div",{className:"info-card-dev-flex50"},r.a.createElement(K,{reposSttaredList:n}))))},J=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r))))._drawMapClick=function(e){if(e.preventDefault(),a.props.devDetailsData.distanceBtwUserAndDev){var t=a.props.appData.latLng,n=a.props.devDetailsData.positionOfDev;a.props.drawDistanceBtUserAndDev(t,n)}},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.urlData.match.params.username;this.props.searchSingleDevOnGithub(e)}},{key:"componentWillUnmount",value:function(){this.props.resetDevData()}},{key:"componentDidUpdate",value:function(e){if((this.props.appData.latLng&&this.props.devDetailsData.positionOfDev)!==(e.appData.latLng&&e.devDetailsData.positionOfDev)&&this.props.appData.latLng&&this.props.devDetailsData.positionOfDev){var t=this.props.appData.latLng,a=this.props.devDetailsData.positionOfDev;this.props.calculeOfDistanceBtUserAndDev(t,a)}}},{key:"render",value:function(){return r.a.createElement("section",{className:"dev-details-container"},this.props.devDetailsData.devData?r.a.createElement(Y,{devDetailsData:this.props.devDetailsData,drawMapClick:this._drawMapClick}):r.a.createElement("div",{className:"dev-details-loader"},r.a.createElement(T,null)))}}]),t}(n.Component);var Q=Object(m.b)((function(e){return{devDetailsData:e.devDetailsData,appData:e.appData}}),{searchSingleDevOnGithub:function(e){return function(t){setTimeout((function(){return _(e).then((function(e){var a;t(q(e)),e.location&&t((a=e.location,function(e){var t,n;void 0!==window.google?(n=new window.google.maps.Geocoder,t=new window.google.maps.Map(document.getElementById("map"),{zoom:8}),n.geocode({address:a},(function(a,n){"OK"===n?(t.setCenter(a[0].geometry.location),new window.google.maps.Marker({map:t,position:a[0].geometry.location}),e(W(a[0].geometry.location))):(alert("Geocode was not successful for the following reason: "+n),e(W("Error occured")))}))):e(W("Error on Google Api"))})),t(function(e){return function(t){return N(e).then((function(e){t({type:R,result:e})})).catch((function(e){t({type:R,result:[{name:"API error"}]})}))}}(e.login))}))}),1500)}},setSingleDevData:q,resetDevData:function(){return{type:x,data:!0}},calculeOfDistanceBtUserAndDev:function(e,t){return function(a){var n=window.google.maps.geometry.spherical.computeDistanceBetween(e,t),r=parseInt(n/1e3);a({type:G,distanceBtwUserAndDev:r})}},drawDistanceBtUserAndDev:function(e,t){return function(a){var n,r,o,c=window.google.maps,i=new c.Map(document.getElementById("map"),{zoom:4,center:t});n=new c.Marker({map:i,position:e}),r=new c.Marker({map:i,position:t});var l=new c.LatLngBounds(n.getPosition(),r.getPosition());i.fitBounds(l),o=new c.Polyline({strokeColor:"#CC0099",strokeOpacity:1,strokeWeight:3,geodesic:!0,map:i});var s=[n.getPosition(),r.getPosition()];o.setPath(s);var u=c.geometry.spherical.computeHeading(s[0],s[1]);a({type:H,heading:u})}}})(J),X=function(e){return r.a.createElement(D.d,null,r.a.createElement(D.b,{exact:!0,path:"/",render:function(){return r.a.createElement(B,null)}}),r.a.createElement(D.b,{exact:!0,path:"/dev/:username",render:function(e){return r.a.createElement(Q,{urlData:e})}}),r.a.createElement(D.a,{from:"*",to:"/"}))},Z=function(e){return r.a.createElement("footer",null,"Developed by ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/elfiservice"},"Armando Jr. (elfiservice)"))},$=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;new Promise((function(e){var t=window.document.getElementsByTagName("script")[0],a=window.document.createElement("script");a.src=f,a.async=!0,a.defer=!0,t.parentNode.insertBefore(a,t),setTimeout((function(){e()}),3e3)})).then((function(t){e.props.getCurrentLocationOfUser()})),fetch("https://github.com/login/oauth/authorize",{method:"GET",headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.props.appData;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Quick GitHub Users"),r.a.createElement("p",null,"Your Currenty Location is ",r.a.createElement("code",null,null!==e.currentLocationOfUser?e.currentLocationOfUser:"getting current position..."))),r.a.createElement(g.a,null,r.a.createElement(X,null)),r.a.createElement(Z,null),r.a.createElement("div",{id:"mapHidden"}))}}]),t}(n.Component);var ee=Object(m.b)((function(e){return{appData:e.appData}}),{getCurrentLocationOfUser:function(){return navigator.geolocation?function(e){return navigator.geolocation.getCurrentPosition((function(t){var a,n;e((a=t.coords.latitude,n=t.coords.longitude,function(e){var t;if(void 0!==window.google){var r=new window.google.maps.LatLng(a,n);t=new window.google.maps.Map(document.getElementById("mapHidden"));var o={location:r,radius:"500",query:"restaurant"};new window.google.maps.places.PlacesService(t).textSearch(o,(function(t,a){if(a===window.google.maps.places.PlacesServiceStatus.OK){var n=t[0].formatted_address.split(",")[2];e(h(n)),e({type:v,latLng:r})}else e(h("not found"))}))}else e(h("Error trying Google Api"))}))}),(function(t){return function(e,t){switch(e.code){case e.PERMISSION_DENIED:alert("Geolocation request denied! Please give the browser permission to access your location.");break;case e.POSITION_UNAVAILABLE:alert("Ops! Location information currently unavailable. Please try again later.");break;case e.TIMEOUT:alert("Timeout, maybe it's the Internet connection. Please try again later.");break;case e.UNKNOWN_ERROR:alert("Ops! An unknown error happened while trying to get your current location. Please try again. :)");break;default:alert("Ops! Something went wrong trying to locate you. Please try again.")}return t(h("a mistery :P"))}(t,e)}))}:(alert("Browser does not suport Geolocation!"),h("a mistery :P"))}})($),te=a(15),ae=a(4),ne={currentLocationOfUser:null,latLng:null};var re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(ae.a)({},e,{currentLocationOfUser:t.nameOfTheCity});case v:return Object(ae.a)({},e,{latLng:t.latLng});default:return e}},oe={searchInput:"",listOfDevs:null};var ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(ae.a)({},e,{searchInput:t.query});case S:return Object(ae.a)({},e,{listOfDevs:t.listOfDevs});default:return e}},ie={devData:null,positionOfDev:null,reposSttaredList:[],distanceBtwUserAndDev:null,drawMap:null};var le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(ae.a)({},e,{devData:t.devData});case M:return Object(ae.a)({},e,{positionOfDev:t.position});case R:return Object(ae.a)({},e,{reposSttaredList:t.result});case G:return Object(ae.a)({},e,{distanceBtwUserAndDev:t.distanceBtwUserAndDev});case H:return Object(ae.a)({},e,{drawMap:t.heading});case x:return Object(ae.a)({},e,{devData:null,positionOfDev:null,reposSttaredList:[],distanceBtwUserAndDev:null,drawMap:null});default:return e}},se=Object(te.c)({appData:re,searchData:ce,devDetailsData:le}),ue=function(e){return function(t){return function(a){console.group(a.type),console.log("The action: ",a);var n=t(a);return console.log("The new state: ",e.getState()),console.groupEnd(),n}}},de=a(29),me=Object(te.a)(ue,de.a),pe=Object(te.d)(se,me);c.a.render(r.a.createElement(m.a,{store:pe},r.a.createElement(ee,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.7fc0784f.chunk.js.map