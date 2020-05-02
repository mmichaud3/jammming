(this.webpackJsonpjammming=this.webpackJsonpjammming||[]).push([[0],[,,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),i=a(8),s=a.n(i),o=(a(7),a(2)),l=a(3),u=a(1),h=a(4),m=a(5),p=(a(14),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={term:""},n.search=n.search.bind(Object(u.a)(n)),n.handleTermChange=n.handleTermChange.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"search",value:function(){this.props.onSearch(this.state.term)}},{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"render",value:function(){return c.a.createElement("div",{className:"SearchBar"},c.a.createElement("input",{placeholder:"Enter A Song, Album, or Artist",onChange:this.handleTermChange}),c.a.createElement("button",{onClick:this.search,className:"SearchButton"},"SEARCH"))}}]),a}(c.a.Component)),d=(a(15),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).addTrack=n.addTrack.bind(Object(u.a)(n)),n.removeTrack=n.removeTrack.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"renderAction",value:function(){return this.props.isRemoval?c.a.createElement("button",{className:"Track-action",onClick:this.removeTrack},"-"):c.a.createElement("button",{className:"Track-action",onClick:this.addTrack},"+")}},{key:"addTrack",value:function(){this.props.onAdd(this.props.track)}},{key:"removeTrack",value:function(){this.props.onRemove(this.props.track)}},{key:"render",value:function(){return c.a.createElement("div",{className:"Track"},c.a.createElement("div",{className:"Track-information"},c.a.createElement("h3",null," ",this.props.track.name),c.a.createElement("p",null," ",this.props.track.artist," | ",this.props.track.album)),this.renderAction())}}]),a}(c.a.Component)),f=(a(16),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"TrackList"},this.props.tracks.map((function(t){return c.a.createElement(d,{track:t,key:t.id,onAdd:e.props.onAdd,onRemove:e.props.onRemove,isRemoval:e.props.isRemoval})})))}}]),a}(c.a.Component)),v=(a(17),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"SearchResults"},c.a.createElement("h2",null,"Results"),c.a.createElement(f,{tracks:this.props.searchResults,onAdd:this.props.onAdd,isRemoval:!1}))}}]),a}(c.a.Component)),y=(a(18),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleNameChange=n.handleNameChange.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"handleNameChange",value:function(e){this.props.onNameChange(e.target.value)}},{key:"render",value:function(){return c.a.createElement("div",{className:"Playlist"},c.a.createElement("input",{defaultValue:"NewPlaylist",onChange:this.handleNameChange}),c.a.createElement(f,{tracks:this.props.playListTracks,onRemove:this.props.onRemove,isRemoval:!0}),c.a.createElement("button",{className:"Playlist-save",onClick:this.props.onSave},"SAVE TO SPOTIFY"))}}]),a}(c.a.Component)),k={getAccessToken:function(){if(n)return n;var e=window.location.href.match(/access_token=([^&]*)/),t=window.location.href.match(/expires_in=([^&]*)/);if(e&&t){n=e[1];var a=Number(t[1]);return window.setTimeout((function(){return n=""}),1e3*a),window.history.pushState("Access Token",null,"/"),n}var r="https://accounts.spotify.com/authorize?client_id=".concat("36c9f5b4f9204de386049ffe74664b15","&response_type=token&scope=playlist-modify-public&redirect_uri=").concat("https://mmichaud3.github.io/jammming");window.location=r},search:function(e){var t=k.getAccessToken();return fetch("https://api.spotify.com/v1/search?type=track&q=".concat(e),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).then((function(e){return e.tracks?e.tracks.items.map((function(e){return{id:e.id,name:e.name,artist:e.artists[0].name,album:e.album.name,uri:e.uri}})):[]}))},savePlaylist:function(e,t){if(e&&t.length){var a,n=k.getAccessToken(),r={Authorization:"Bearer ".concat(n)};return fetch("https://api.spotify.com/v1/me",{headers:r}).then((function(e){return e.json()})).then((function(n){return a=n.id,fetch("https://api.spotify.com/v1/users/".concat(a,"/playlists"),{headers:r,method:"POST",body:JSON.stringify({name:e})}).then((function(e){return e.json()})).then((function(e){var n=e.id;return fetch("https://api.spotify.com/v1/users/".concat(a,"/playlists/").concat(n,"/tracks"),{headers:r,method:"POST",body:JSON.stringify({uris:t})})}))}))}}},b=k;function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=c.a.createElement("title",null,"Group"),j=c.a.createElement("desc",null,"Created with Sketch."),T=c.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},c.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},c.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},c.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),c.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),c.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),c.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),c.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),N=function(e){var t=e.svgRef,a=e.title,n=E(e,["svgRef","title"]);return c.a.createElement("svg",O({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),void 0===a?g:a?c.a.createElement("title",null,a):null,j,T)},w=c.a.forwardRef((function(e,t){return c.a.createElement(N,O({svgRef:t},e))})),S=(a.p,function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={searchResults:[],playListName:"Mymix",playListTracks:[]},n.addTrack=n.addTrack.bind(Object(u.a)(n)),n.removeTrack=n.removeTrack.bind(Object(u.a)(n)),n.updatePlaylistName=n.updatePlaylistName.bind(Object(u.a)(n)),n.savePlaylist=n.savePlaylist.bind(Object(u.a)(n)),n.search=n.search.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("load",b.search(""))}},{key:"addTrack",value:function(e){var t=this.state.playListTracks;t.find((function(t){return t.id===e.id}))||(t.push(e),this.setState({playListTracks:t}))}},{key:"removeTrack",value:function(e){var t=this.state.playListTracks;t=t.filter((function(t){return t.id!==e.id})),this.setState({playListTracks:t})}},{key:"updatePlaylistName",value:function(e){this.setState({playListName:e})}},{key:"savePlaylist",value:function(){var e=this,t=this.state.playListTracks.map((function(e){return e.uri}));b.savePlaylist(this.state.playListName,t).then((function(){e.setState({playListName:"New Playlist",playListTracks:[]})}))}},{key:"search",value:function(e){var t=this;b.search(e).then((function(e){t.setState({searchResults:e})}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Crown \xa0",c.a.createElement(w,null)," \xa0Beats"),c.a.createElement("div",{className:"App"},c.a.createElement(p,{onSearch:this.search}),c.a.createElement("div",{className:"App-playlist"},c.a.createElement(v,{searchResults:this.state.searchResults,onAdd:this.addTrack}),c.a.createElement(y,{playListName:this.state.playListName,playListTracks:this.state.playListTracks,onRemove:this.removeTrack,onNameChange:this.updatePlaylistName,onSave:this.savePlaylist}))))}}]),a}(c.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.f29c5fc3.chunk.js.map