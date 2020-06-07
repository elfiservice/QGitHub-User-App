(this["webpackJsonpqgithub-user-app"]=this["webpackJsonpqgithub-user-app"]||[]).push([[0],{36:function(e,t,a){e.exports=a(56)},43:function(e,t,a){},44:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),s=a.n(c),o=(a(41),a(42),a(43),a(12)),i=a(13),l=a(17),u=a(14),d=a(18),p=(a(44),a(16)),m="GET_CURRENT_USER_LOCATION";var v="https://maps.googleapis.com/maps/api/js?key=AIzaSyARC-a63vxOWRRAgpjnDYOndn_2fFLYhAo&libraries=places,geometry";var f=a(22),h=a(21),E=(a(49),function(e){return r.a.createElement("input",{className:e.className,"aria-label":e.placeholder,id:e.name,name:e.name,type:e.type?e.type:"text",placeholder:e.placeholder,value:e.value,onChange:e.onChange,required:e.required,autoFocus:e.autofocus,autoComplete:e.name,maxLength:e.maxlength?e.maxlength:""})}),g="SET_SEARCH_INPUT",D="HANDLER_SEARCH_LIST_OF_DEVS";var b=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"_searchBtnClicked",value:function(e){e.preventDefault(),this.props.searchDevOnGithub(this.props.searchData.searchInput)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"search-form-container"},r.a.createElement("form",{className:"search-form",onSubmit:function(t){e._searchBtnClicked(t)}},r.a.createElement(E,{className:"form-control",name:"search",placeholder:"Search by name or username",type:"search",value:this.props.searchData.searchInput,onChange:function(t){return e.props.handleInputChange(t.target.value)},required:!0}),r.a.createElement("button",{type:"submit",className:"submit btn btn-lg btn-success search-btn"},r.a.createElement("i",{className:"fa fa-search","aria-hidden":"true"})," Search on GitHub")))}}]),t}(n.Component);var w=Object(p.b)((function(e){return{searchData:e.searchData}}),{handleInputChange:function(e){return{type:g,query:e}},searchDevOnGithub:function(e){return{type:D,searchTerm:e}}})(b),O=(a(50),function(e){var t,a=window.location.href,n=a.split("/")[2];t="localhost"===n.split(":")[0]?a.split("/")[2]:"elfiservice.github.io"===n.split(":")[0]?a.split("/")[2]+"/QGitHub-User-App":a.split("/")[2];var c="".concat(a.split("/")[0],"//").concat(t,"/assets/images/loader.gif");return r.a.createElement("div",{className:e.class?e.class:"loader-gif"},r.a.createElement("img",{width:"20%",src:c,alt:""}))}),y=function(e){return r.a.createElement("div",{className:"search-result_msg-to-user"},e.children)},_=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"_mountContent",value:function(){var e=this.props.searchData.listOfDevs;return e?"searching"===e?r.a.createElement(y,null,r.a.createElement(O,null)):"error"===e?r.a.createElement(y,null,r.a.createElement("b",{className:"search-result_txt-muted"},"An error occurred while trying to access Github. Please try again later.")):e.length<=0?r.a.createElement(y,null,r.a.createElement("b",{className:"search-result_txt-muted"},"No devs found, try another name or username ;)")):r.a.createElement("ol",{className:"dev-list"},e.map((function(e){return r.a.createElement("li",{key:e.id,className:"dev-list-item"},r.a.createElement("div",{className:"dev-avatar",style:{backgroundImage:"url(".concat(e.avatar_url,")")}}),r.a.createElement("div",{className:"dev-name-more-details"},r.a.createElement("div",{className:"dev-details"},r.a.createElement("p",null,e.login)),r.a.createElement("div",{className:"dev-btn-more-details"},r.a.createElement(f.b,{className:"btn btn-primary",to:"/dev/"+e.login},"More Details"))))}))):r.a.createElement(y,null,r.a.createElement("i",{className:"search-result_txt-muted"},"Type a name or username that we'll search a Dev for you"))}},{key:"render",value:function(){return r.a.createElement("div",{id:"search-result-scroll",className:"search-result-content container-scroll"},r.a.createElement("div",{className:"messages content-scroll"},this._mountContent()))}}]),t}(n.Component);var x=Object(p.b)((function(e){return{searchData:e.searchData}}))(_),j=(a(52),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this._setHeightToResultSearchContainer(),window.addEventListener("resize",this._setHeightToResultSearchContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setHeightToResultSearchContainer)}},{key:"_setHeightToResultSearchContainer",value:function(){var e=window.innerWidth,t=window.innerHeight,a=252;e>769&&(a=150);var n=parseInt(100*(1-a/t));document.getElementById("search-result-scroll").style.height=n+"vh"}},{key:"render",value:function(){return r.a.createElement("div",{className:"home-container"},r.a.createElement(w,null),r.a.createElement(x,null))}}]),t}(n.Component)),k=(a(53),"HANDLER_SEARCH_SINGLE_DEV_DETAILS"),N="HANDLER_CALCULE_DISTANCE_BTW_USER_AND_DEV",L="HANDLER_DRAW_DISTANCE_BTW_USER_AND_DEV",S="RESET_DEV_DATA";a(54);var A=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement(f.b,{className:"info-card-dev-back-btn",to:"/"},r.a.createElement("i",{className:"fa fa-arrow-circle-o-left","aria-hidden":"true"})),r.a.createElement("header",null,r.a.createElement("div",{className:"dev-avatar",style:{backgroundImage:"url(".concat(e.devData.avatar_url,")")}}),r.a.createElement("h2",null,"This Dev call ",r.a.createElement("span",{className:"info-card-dev__color-blue"},e.devData.name)),r.a.createElement("p",null,"and your username is ",r.a.createElement("i",{className:"info-card-dev__color-blue"},e.devData.login),r.a.createElement("a",{title:"Link to develepor page in GitHub",rel:"noopener noreferrer",target:"_blank",href:e.devData.html_url},r.a.createElement("i",{className:"fa fa-link","aria-hidden":"true"}),"\xa0"))))},T=function(e){return r.a.createElement("div",{className:"card info-card-dev__map"},e.devData.location?r.a.createElement("div",null,r.a.createElement("h4",null,"Dev location"),e.distanceBtwUserAndDev&&r.a.createElement("p",null,"You are ",r.a.createElement("b",null,e.distanceBtwUserAndDev," Km")," away from this Dev",r.a.createElement("button",{className:"btn btn-primary",onClick:e.drawMapClick},"Draw")),r.a.createElement("div",{id:"map"})):"This Dev not sharing your location :(")},C=function(e){return r.a.createElement("div",{className:"card info-card-dev__bio"},r.a.createElement("h4",null,"About"),e.devData.bio?r.a.createElement("div",null,r.a.createElement("p",null,e.devData.bio),r.a.createElement("p",null,"And this Dev have a ",e.devData.public_repos," publics repos, ",e.devData.followers," followers and following ",e.devData.following," devs.")):r.a.createElement("div",null,r.a.createElement("p",null,"It's nothing to say about himself yet."),r.a.createElement("p",null,"but this Dev have a ",e.devData.public_repos," publics repos, ",e.devData.followers," followers and following ",e.devData.following," devs.")))},I=function(e){return r.a.createElement("div",{className:"card info-card-dev__list-of-sttared-repos"},e.reposSttaredList.length<=0?"This Dev not have any repo sttared :(":r.a.createElement("div",null,r.a.createElement("h4",null,"This Dev is following this ",e.reposSttaredList.length," repos"),r.a.createElement("ul",null,e.reposSttaredList.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("i",{className:"fa fa-star","aria-hidden":"true"})," ",e.name)})))))},U=function(e){var t=e.devDetailsData,a=t.devData,n=t.reposSttaredList,c=t.distanceBtwUserAndDev;return r.a.createElement("article",{className:"info-card-dev-container"},r.a.createElement("div",{className:"info-card-dev-flex"},r.a.createElement("div",{className:"info-card-dev-flex50"},r.a.createElement(A,{devData:a})),r.a.createElement("div",{className:"info-card-dev-flex50"},r.a.createElement(T,{devData:a,distanceBtwUserAndDev:c,drawMapClick:e.drawMapClick}))),r.a.createElement("div",{className:"info-card-dev-flex"},r.a.createElement("div",{className:"info-card-dev-flex50"},r.a.createElement(C,{devData:a})),r.a.createElement("div",{className:"info-card-dev-flex50"},r.a.createElement(I,{reposSttaredList:n}))))},R=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r))))._drawMapClick=function(e){if(e.preventDefault(),a.props.devDetailsData.distanceBtwUserAndDev){var t=a.props.appData.latLng,n=a.props.devDetailsData.positionOfDev;a.props.drawDistanceBtUserAndDev(t,n)}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.urlData.match.params.username;this.props.searchSingleDevOnGithub(e)}},{key:"componentWillUnmount",value:function(){this.props.resetDevData()}},{key:"componentDidUpdate",value:function(e){if((this.props.appData.latLng&&this.props.devDetailsData.positionOfDev)!==(e.appData.latLng&&e.devDetailsData.positionOfDev)&&this.props.appData.latLng&&this.props.devDetailsData.positionOfDev){var t=this.props.appData.latLng,a=this.props.devDetailsData.positionOfDev;this.props.calculeOfDistanceBtUserAndDev(t,a)}}},{key:"render",value:function(){return r.a.createElement("section",{className:"dev-details-container"},this.props.devDetailsData.devData?r.a.createElement(U,{devDetailsData:this.props.devDetailsData,drawMapClick:this._drawMapClick}):r.a.createElement("div",{className:"dev-details-loader"},r.a.createElement(O,null)))}}]),t}(n.Component);var B=Object(p.b)((function(e){return{devDetailsData:e.devDetailsData,appData:e.appData}}),{searchSingleDevOnGithub:function(e){return{type:k,username:e}},resetDevData:function(){return{type:S,data:!0}},calculeOfDistanceBtUserAndDev:function(e,t){return{type:N,coordinates:{userLatLng:e,devLatLng:t}}},drawDistanceBtUserAndDev:function(e,t){return{type:L,coordinates:{userLatLng:e,devLatLng:t}}}})(R),P=function(e){return r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",render:function(){return r.a.createElement(j,null)}}),r.a.createElement(h.b,{exact:!0,path:"/dev/:username",render:function(e){return r.a.createElement(B,{urlData:e})}}),r.a.createElement(h.a,{from:"*",to:"/"}))},M=function(e){return r.a.createElement("footer",null,"Developed by ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/elfiservice"},"Armando Jr. (elfiservice)"))},G=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;new Promise((function(e){var t=window.document.getElementsByTagName("script")[0],a=window.document.createElement("script");a.src=v,a.async=!0,a.defer=!0,t.parentNode.insertBefore(a,t),setTimeout((function(){e()}),3e3)})).then((function(t){e.props.getCurrentLocationOfUser()}))}},{key:"render",value:function(){var e=this.props.appData;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Quick GitHub Users"),r.a.createElement("p",null,"Your Currenty Location is ",r.a.createElement("code",null,null!==e.currentLocationOfUser?e.currentLocationOfUser:"getting current position..."))),r.a.createElement(f.a,null,r.a.createElement(P,null)),r.a.createElement(M,null),r.a.createElement("div",{id:"mapHidden"}))}}]),t}(n.Component);var H=Object(p.b)((function(e){return{appData:e.appData}}),{getCurrentLocationOfUser:function(){return{type:m}}})(G),q=a(15),V=function(e){return function(t){return function(a){console.group(a.type),console.log("The action: ",a);var n=t(a);return console.log("The new state: ",e.getState()),console.groupEnd(),n}}},W=a(35),F=a(3),z=a.n(F),K=a(6),Y=z.a.mark(ee),J=z.a.mark(ae),Q=z.a.mark(ne),X=z.a.mark(re),Z="SET_LOCATION_OF_USER",$="SET_LAT_LNG_OF_USER";function ee(){var e;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!navigator.geolocation){t.next=15;break}return t.next=3,Object(K.a)(te);case 3:if("object"!==typeof(e=t.sent)){t.next=11;break}return t.next=7,ae(e.nameOfTheCity);case 7:return t.next=9,ne(e.userLocation);case 9:t.next=13;break;case 11:return t.next=13,ae(e);case 13:t.next=18;break;case 15:return alert("Browser does not suport Geolocation!"),t.next=18,ae("a mistery :P");case 18:case"end":return t.stop()}}),Y)}function te(){return new Promise((function(e,t){navigator.geolocation.getCurrentPosition((function(t){!function(t,a){var n;if(void 0!==window.google){var r=new window.google.maps.LatLng(t,a);n=new window.google.maps.Map(document.getElementById("mapHidden"));var c={location:r,radius:"500",query:"restaurant"};new window.google.maps.places.PlacesService(n).textSearch(c,(function(t,a){if(a===window.google.maps.places.PlacesServiceStatus.OK){var n=t[0].formatted_address.split(",")[2];e({nameOfTheCity:n,userLocation:r})}else e("not found")}))}else e("Error trying Google Api")}(t.coords.latitude,t.coords.longitude)}),(function(e){return function(e){switch(e.code){case e.PERMISSION_DENIED:alert("Geolocation request denied! Please give the browser permission to access your location.");break;case e.POSITION_UNAVAILABLE:alert("Ops! Location information currently unavailable. Please try again later.");break;case e.TIMEOUT:alert("Timeout, maybe it's the Internet connection. Please try again later.");break;case e.UNKNOWN_ERROR:alert("Ops! An unknown error happened while trying to get your current location. Please try again. :)");break;default:alert("Ops! Something went wrong trying to locate you. Please try again.")}t("a mistery :P")}(e)}))}))}function ae(e){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(K.c)({type:Z,nameOfTheCity:e});case 2:case"end":return t.stop()}}),J)}function ne(e){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(K.c)({type:$,latLng:e});case 2:case"end":return t.stop()}}),Q)}function re(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.d)(m,ee);case 2:case"end":return e.stop()}}),X)}var ce="https://api.github.com",se={Accept:"application/json"},oe=function(e){return fetch("".concat(ce,"/search/users?q=fullname:").concat(e)).then((function(e){return e.json()}))},ie=function(e){return fetch("".concat(ce,"/search/users?q=user:").concat(e)).then((function(e){return e.json()}))},le=function(e){return fetch("".concat(ce,"/users/").concat(e),{headers:se}).then((function(e){return e.json()}))},ue=function(e){return fetch("".concat(ce,"/users/").concat(e,"/starred"),{headers:se}).then((function(e){return e.json()}))},de=z.a.mark(fe),pe=z.a.mark(he),me=z.a.mark(Ee),ve="SET_LIST_OF_DEVS";function fe(e){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(K.c)({type:ve,listOfDevs:e});case 2:case"end":return t.stop()}}),de)}function he(e){var t,a;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fe("searching");case 3:return n.next=5,Object(K.a)(oe,e.searchTerm);case 5:if(!((t=n.sent).total_count>0)){n.next=11;break}return n.next=9,fe(t.items);case 9:n.next=16;break;case 11:return n.next=13,Object(K.a)(ie,e.searchTerm);case 13:return a=n.sent,n.next=16,fe(a.items);case 16:n.next=22;break;case 18:return n.prev=18,n.t0=n.catch(0),n.next=22,fe("error");case 22:case"end":return n.stop()}}),pe,null,[[0,18]])}function Ee(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.d)(D,he);case 2:case"end":return e.stop()}}),me)}var ge=z.a.mark(je),De=z.a.mark(ke),be=z.a.mark(Ne),we=z.a.mark(Le),Oe=z.a.mark(Se),ye="SET_SINGLE_DEV_DATA",_e="SET_REPORS_STARRED_OF_DEV",xe="SET_POSITION_OF_DEV";function je(e){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(K.c)({type:ye,devData:e});case 2:case"end":return t.stop()}}),ge)}function ke(e){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(K.c)({type:_e,result:e});case 2:case"end":return t.stop()}}),De)}function Ne(e){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(K.c)({type:xe,position:e});case 2:case"end":return t.stop()}}),be)}function Le(e){var t,a,n;return z.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(K.a)(le,e.username);case 3:return t=r.sent,r.next=6,je(t);case 6:if(!t.location){r.next=12;break}return r.next=9,Object(K.a)(Ae,t.location);case 9:return a=r.sent,r.next=12,Ne(a);case 12:return r.next=14,Object(K.a)(ue,t.login);case 14:return n=r.sent,r.next=17,ke(n);case 17:r.next=22;break;case 19:r.prev=19,r.t0=r.catch(0),alert("Some error occured trying get details of dev., please try again later.");case 22:case"end":return r.stop()}}),we,null,[[0,19]])}function Se(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.d)(k,Le);case 2:case"end":return e.stop()}}),Oe)}function Ae(e){return new Promise((function(t,a){var n,r;void 0!==window.google?(r=new window.google.maps.Geocoder,n=new window.google.maps.Map(document.getElementById("map"),{zoom:8}),r.geocode({address:e},(function(e,a){"OK"===a?(n.setCenter(e[0].geometry.location),new window.google.maps.Marker({map:n,position:e[0].geometry.location}),t(e[0].geometry.location)):(alert("Geocode was not successful for the following reason: "+a),t("Error occured"))}))):t("Error on Google Api")}))}var Te=z.a.mark(Pe),Ce=z.a.mark(Me),Ie=z.a.mark(Ge),Ue=z.a.mark(He),Re="SET_DIST_BETWEEN_USER_AND_DEV",Be="DRAW_MAP";function Pe(e){var t;return z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(K.a)(qe,e.coordinates);case 2:return t=a.sent,a.next=5,Object(K.c)(t);case 5:case"end":return a.stop()}}),Te)}function Me(e){var t;return z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(K.a)(Ve,e.coordinates);case 2:return t=a.sent,a.next=5,Object(K.c)(t);case 5:case"end":return a.stop()}}),Ce)}function Ge(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.d)(N,Pe);case 2:case"end":return e.stop()}}),Ie)}function He(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.d)(L,Me);case 2:case"end":return e.stop()}}),Ue)}function qe(e){var t=e.userLatLng,a=e.devLatLng;return new Promise((function(e){var n=window.google.maps.geometry.spherical.computeDistanceBetween(t,a),r=parseInt(n/1e3);e({type:Re,distanceBtwUserAndDev:r})}))}function Ve(e){var t=e.userLatLng,a=e.devLatLng;return new Promise((function(e){var n,r,c,s=window.google.maps,o=new s.Map(document.getElementById("map"),{zoom:4,center:a});n=new s.Marker({map:o,position:t}),r=new s.Marker({map:o,position:a});var i=new s.LatLngBounds(n.getPosition(),r.getPosition());o.fitBounds(i),c=new s.Polyline({strokeColor:"#CC0099",strokeOpacity:1,strokeWeight:3,geodesic:!0,map:o});var l=[n.getPosition(),r.getPosition()];c.setPath(l);var u=s.geometry.spherical.computeHeading(l[0],l[1]);e({type:Be,heading:u})}))}var We=z.a.mark(Fe);function Fe(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.b)(re);case 2:return e.next=4,Object(K.b)(Ee);case 4:return e.next=6,Object(K.b)(Se);case 6:return e.next=8,Object(K.b)(Ge);case 8:return e.next=10,Object(K.b)(He);case 10:case"end":return e.stop()}}),We)}var ze=a(9),Ke={currentLocationOfUser:null,latLng:null};var Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return Object(ze.a)({},e,{currentLocationOfUser:t.nameOfTheCity});case $:return Object(ze.a)({},e,{latLng:t.latLng});default:return e}},Je={searchInput:"",listOfDevs:null};var Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(ze.a)({},e,{searchInput:t.query});case ve:return Object(ze.a)({},e,{listOfDevs:t.listOfDevs});default:return e}},Xe={devData:null,positionOfDev:null,reposSttaredList:[],distanceBtwUserAndDev:null,drawMap:null};var Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ye:return Object(ze.a)({},e,{devData:t.devData});case xe:return Object(ze.a)({},e,{positionOfDev:t.position});case _e:return Object(ze.a)({},e,{reposSttaredList:t.result});case Re:return Object(ze.a)({},e,{distanceBtwUserAndDev:t.distanceBtwUserAndDev});case Be:return Object(ze.a)({},e,{drawMap:t.heading});case S:return Object(ze.a)({},e,{devData:null,positionOfDev:null,reposSttaredList:[],distanceBtwUserAndDev:null,drawMap:null});default:return e}},$e=Object(q.c)({appData:Ye,searchData:Qe,devDetailsData:Ze}),et=Object(W.a)(),tt=Object(q.a)(V,et),at=Object(q.e)($e,tt);et.run(Fe);var nt=at;s.a.render(r.a.createElement(p.a,{store:nt},r.a.createElement(H,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.8d1b586d.chunk.js.map