(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ee6c01e4"],{5319:function(t,e,a){"use strict";var s=a("d784"),n=a("825a"),i=a("7b0b"),r=a("50c4"),o=a("a691"),l=a("1d80"),c=a("8aa5"),d=a("14c3"),u=Math.max,m=Math.min,p=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,f=function(t){return void 0===t?t:String(t)};s("replace",2,(function(t,e,a,s){var g=s.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=s.REPLACE_KEEPS_$0,w=g?"$":"$0";return[function(a,s){var n=l(this),i=void 0==a?void 0:a[t];return void 0!==i?i.call(a,n,s):e.call(String(n),a,s)},function(t,s){if(!g&&b||"string"===typeof s&&-1===s.indexOf(w)){var i=a(e,t,this,s);if(i.done)return i.value}var l=n(t),p=String(this),v="function"===typeof s;v||(s=String(s));var h=l.global;if(h){var C=l.unicode;l.lastIndex=0}var $=[];while(1){var S=d(l,p);if(null===S)break;if($.push(S),!h)break;var y=String(S[0]);""===y&&(l.lastIndex=c(p,r(l.lastIndex),C))}for(var x="",A=0,k=0;k<$.length;k++){S=$[k];for(var E=String(S[0]),U=u(m(o(S.index),p.length),0),I=[],D=1;D<S.length;D++)I.push(f(S[D]));var j=S.groups;if(v){var L=[E].concat(I,U,p);void 0!==j&&L.push(j);var P=String(s.apply(void 0,L))}else P=_(E,p,U,I,j,s);U>=A&&(x+=p.slice(A,U)+P,A=U+E.length)}return x+p.slice(A)}];function _(t,a,s,n,r,o){var l=s+t.length,c=n.length,d=h;return void 0!==r&&(r=i(r),d=v),e.call(o,d,(function(e,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return a.slice(0,s);case"'":return a.slice(l);case"<":o=r[i.slice(1,-1)];break;default:var d=+i;if(0===d)return e;if(d>c){var u=p(d/10);return 0===u?e:u<=c?void 0===n[u-1]?i.charAt(1):n[u-1]+i.charAt(1):e}o=n[d-1]}return void 0===o?"":o}))}}))},"846e":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h2",[t._v("Betreuerdaten")]),a("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v("Bitte wählen Sie hier einen wissenschaftlichen Betreuer für Ihre PA II / PA III und geben Sie die Kontaktdaten Ihres Unternehmensbetreuers an.")]),t._l(t.courses,(function(e){return a("table",{key:e.id,staticClass:"table"},[t._m(0,!0),a("tbody",t._l(e.assignments,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(t.getType(e.name)))]),a("td",[t._v(t._s(new Date(1e3*parseInt(e.duedate)).toLocaleDateString()))]),t._m(1,!0),a("td",[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.changeData(e)}}},[t._v("Daten ändern")])])])})),0)])})),a("div",{ref:"modalStudents",staticClass:"modal fade",attrs:{id:"modalStudents",tabindex:"-1",role:"dialog","aria-labelledby":"modalStudents","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(2),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"container"},[a("form",[a("h6",[t._v("Unternehmensbetreuer")]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-md-4 mb-3"},[a("label",{attrs:{for:"validationServer01"}},[t._v("Vorname")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newCombination.corporateFirst,expression:"newCombination.corporateFirst"}],staticClass:"form-control",class:{"is-valid":t.newCombination["corporateFirstValid"],"is-invalid":!t.newCombination["corporateFirstValid"]},attrs:{type:"text",id:"validationServer01",placeholder:"Vorname",required:""},domProps:{value:t.newCombination.corporateFirst},on:{input:[function(e){e.target.composing||t.$set(t.newCombination,"corporateFirst",e.target.value)},function(e){""!=t.newCombination.corporateFirst.length?t.newCombination["corporateFirstValid"]=!0:t.newCombination["corporateFirstValid"]=!1}]}}),a("div",{staticClass:"valid-feedback"},[t._v("Sieht gut aus!")])]),a("div",{staticClass:"col-md-4 mb-3"},[a("label",{attrs:{for:"validationServer02"}},[t._v("Nachname")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newCombination.corporateLast,expression:"newCombination.corporateLast"}],staticClass:"form-control",class:{"is-valid":t.newCombination["corporateLastValid"],"is-invalid":!t.newCombination["corporateLastValid"]},attrs:{type:"text",id:"validationServer02",placeholder:"Nachname",required:""},domProps:{value:t.newCombination.corporateLast},on:{input:[function(e){e.target.composing||t.$set(t.newCombination,"corporateLast",e.target.value)},function(e){""!=t.newCombination.corporateLast.length?t.newCombination["corporateLastValid"]=!0:t.newCombination["corporateLastValid"]=!1}]}}),a("div",{staticClass:"valid-feedback"},[t._v("Sieht gut aus!")])]),a("div",{staticClass:"col-md-4 mb-3"},[a("label",{attrs:{for:"validationServerUsername"}},[t._v("E-Mail")]),a("div",{staticClass:"input-group"},[t._m(3),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newCombination.corporatepartnermail,expression:"newCombination.corporatepartnermail"}],staticClass:"form-control",class:{"is-valid":t.newCombination["corporatepartnermailValid"],"is-invalid":!t.newCombination["corporatepartnermailValid"]},attrs:{type:"text",id:"validationServerUsername",placeholder:"E-Mail","aria-describedby":"inputGroupPrepend3",required:""},domProps:{value:t.newCombination.corporatepartnermail},on:{input:[function(e){e.target.composing||t.$set(t.newCombination,"corporatepartnermail",e.target.value)},function(e){t.newCombination.corporatepartnermail.includes("@")?t.newCombination["corporatepartnermailValid"]=!0:t.newCombination["corporatepartnermailValid"]=!1}]}}),a("div",{staticClass:"invalid-feedback"},[t._v("Bitte tragen Sie die E-Mail Ihres Unternehmensbetreuers ein.")])])])]),a("hr"),a("h6",[t._v("Wissenschaftlicher Betreuer")]),a("div",{staticClass:"form-row"},[t._m(4),a("div",{staticClass:"col-md-6 mb-3"},[a("label",{attrs:{for:"supervisors"}},[t._v("Neuer wiss. Betreuer")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.newCombination.supervisorid,expression:"newCombination.supervisorid"}],staticClass:"form-control form-control-sm mt-2",attrs:{name:"supervisors",id:"supervisors"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.newCombination,"supervisorid",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"NULL"}}),t._l(t.supervisors,(function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.firstname)+" "+t._s(e.lastname))])}))],2)])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.saveData}},[t._v("Änderungen sichern")]),a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Schließen")])])])])]),a("Infotoast",{ref:"infotoastref",attrs:{message:t.toastmessage}}),a("Docusign",{ref:"docusigner"})],2)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Typ")]),a("th",{attrs:{scope:"col"}},[t._v("Deadline")]),a("th",{attrs:{scope:"col"}},[t._v("Abgabe erfolgt")]),a("th",{attrs:{scope:"col"}},[t._v("Betreuerdaten")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("span",{staticClass:"badge badge-success"},[t._v("Erfolgt")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("Dieser wissenschaftlichen Arbeit zugewiesene Betreuer")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text",attrs:{id:"inputGroupPrepend3"}},[t._v("@")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-6 mb-3"},[a("label",{attrs:{for:"supervisors"}},[t._v("Aktueller wiss. Betreuer")])])}],i=(a("ac1f"),a("5319"),a("bc3a")),r=a.n(i),o=a("1157"),l=a.n(o),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{position:"absolute",bottom:"50px",right:"50px"},attrs:{"aria-live":"polite","aria-atomic":"true"}},[a("div",{staticClass:"toast",attrs:{id:"infotoast","data-autohide":"true","data-delay":"5000"}},[t._m(0),a("div",{staticClass:"toast-body"},[t._v(t._s(t.message))])])])},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"toast-header"},[a("strong",{staticClass:"mr-auto"},[t._v("Hinweis")]),a("button",{staticClass:"ml-2 mb-1 close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}})])}],u={name:"Toast",props:{message:String},data:function(){return{}},methods:{open:function(){l()("#infotoast").toast("show")}}},m=u,p=a("2877"),v=Object(p["a"])(m,c,d,!1,null,null,null),h=v.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},g=[],b={name:"Docusign",props:{},data:function(){return{toastmessageDocu:"leer"}},components:{},methods:{signApi:function(t){""!=t&&window.open(t,"_blank")}}},w=b,_=Object(p["a"])(w,f,g,!1,null,null,null),C=_.exports,$={name:"Assign",components:{Infotoast:h,Docusign:C},data:function(){return{students:[],showModal:!1,supervisors:[],courses:[],selectedAssignment:"",toastmessage:"",url:"",currentUserData:{},newCombination:{corporateFirst:"",corporateLast:"",corporatepartnername:"",corporatepartnermail:"",assignid:0,studentid:0,studentname:"",supervisorid:"",supervisorname:""}}},props:{token:{type:String,default:""}},beforeCreate:function(){},mounted:function(){this.getSupervisors(),this.getCourses(),this.getCurrentUserInfo()},created:function(){},methods:{getCurrentUserInfo:function(){var t=this;this.$emit("loading","10%",!1);var e={headers:{"Content-Type":"application/json;charset=UTF-8"}};r.a.get("https://scientific-paper.swimdhbw.de//webservice/rest/server.php",{params:{wstoken:this.token,wsfunction:"core_webservice_get_site_info",moodlewsrestformat:"json"}},e).then((function(e){t.$emit("loading","90%",!1),e.exception||(t.currentUserData=e.data,console.log(t.currentUserData),t.$emit("loading","100%",!0))})).catch((function(e){console.log(e),t.$emit("loading","100%",!0),t.$emit("ajaxerror")}))},getType:function(t){if(!/\b.*Abgabe PA \d\b/.test(t))return"Ungültige Angabe";switch(t.substr(-1)){case"1":return"PA I";case"2":return"PA II";case"3":return"PA III";default:return"Ungültige Angabe"}},signature:function(t,e){var a=this;this.$emit("loading","10%",!1);var s={headers:{"Content-Type":"application/json;charset=UTF-8"}};r.a.get("https://scientific-paper.swimdhbw.de//webservice/rest/server.php",{params:{wstoken:this.token,wsfunction:"mod_assign_get_submissions",moodlewsrestformat:"json","assignmentids[0]":this.selectedAssignment}},s).then((function(s){a.$emit("loading","90%",!1);var n="";if(!s.exception&&1==s.data.assignments.length){for(var i=0;i<s.data.assignments[0].submissions.length;i++){var r=s.data.assignments[0].submissions[i];if(r.userid==e)for(var o=0;o<r.plugins.length;o++){var l=r.plugins[o];if("file"==l.type&&1==l.fileareas.length&&1==l.fileareas[0].files.length){var c=l.fileareas[0].files[0].fileurl,d=c.replace("webservice/","");n=d}}}""!=n?a.$refs.docusigner.signApi(n):(t.target.innerHTML="n.A.",t.target.disabled=!0),a.$emit("loading","100%",!0)}})).catch((function(t){console.log(t),a.$emit("loading","100%",!0),a.$emit("ajaxerror")}))},getSupervisorNameById:function(t){for(var e="Not found",a=0;a<this.supervisors.length;a++){var s=this.supervisors[a];s.id==t&&(e=s.firstname+" "+s.lastname)}return e},saveData:function(){var t=this;this.newCombination.studentid=this.currentUserData.userid,this.newCombination.studentname=this.currentUserData.fullname,this.newCombination.corporatepartnername=this.newCombination.corporateFirst+" "+this.newCombination.corporateLast,this.newCombination.supervisorname=this.getSupervisorNameById(this.newCombination.supervisorid);var e={changes:[this.newCombination]},a={variables:{dbchanges:{value:JSON.stringify(e),type:"String"}}};console.log(a),this.$emit("loading","10%",!1),r.a.post((Object({NODE_ENV:"production",VUE_APP_MOODEL_URL:"https://scientific-paper.swimdhbw.de/",BASE_URL:"/mod/spams/static/"}).VUE_APP_CAMUNDA_URL||"https://camunda.scientific-paper.swimdhbw.de/")+"engine-rest/process-definition/key/signing_ceremony/start",a,{headers:{"Content-type":"application/json"}}).then((function(e){t.$emit("loading","100%",!0),200==e.status?t.toastmessage="Die Zuordnung wurde erfolgreich angefordert.":t.toastmessage="Bei der Anforderung der Zuordnung ist ein Fehler aufgetreten.",t.$refs.infotoastref.open()}))},mapSupervisorName:function(t){for(var e="",a=0;a<this.supervisors.length;a++)this.supervisors[a].id==t&&(e=this.supervisors[a].firstname+" "+this.supervisors[a].lastname);return e},changeData:function(t){var e=this,a=t.course;this.selectedAssignment=t.id,this.$emit("loading","10%",!1),this.students=[];var s={headers:{"Content-Type":"application/json;charset=UTF-8"}};r.a.get("https://scientific-paper.swimdhbw.de//webservice/rest/server.php",{params:{wstoken:this.token,wsfunction:"core_enrol_get_enrolled_users",moodlewsrestformat:"json",courseid:a}},s).then((function(t){t.exception||(e.students=e.filterStudents(t.data),r.a.get("https://scientific-paper.swimdhbw.de//webservice/rest/server.php",{params:{wstoken:e.token,wsfunction:"local_spsupman_get_studenthassupervisor",moodlewsrestformat:"json"}},s).then((function(t){if(!t.exception){for(var a=0;a<t.data.length;a++)for(var s=0;s<e.students.length;s++)e.students[s].id==t.data[a].studentid&&t.data[a].assignmentid==e.selectedAssignment&&(e.students[s].currentSupervisor=e.mapSupervisorName(t.data[a].supervisorid));l()("#modalStudents").modal("show"),e.$emit("loading","100%",!0)}})).catch((function(t){console.log(t),e.$emit("loading","100%",!0),e.$emit("ajaxerror")})))})).catch((function(t){console.log(t),e.$emit("loading","100%",!0),e.$emit("ajaxerror")}))},getSupervisors:function(){var t=this;this.$emit("loading","10%",!1),this.supervisors=[];var e={headers:{"Content-Type":"application/json;charset=UTF-8"}};r.a.get("https://scientific-paper.swimdhbw.de//webservice/rest/server.php",{params:{wstoken:this.token,wsfunction:"local_spsupman_get_supervisors",moodlewsrestformat:"json"}},e).then((function(e){e.data.exception?(t.$emit("loading","100%",!0),t.$emit("ajaxerror")):(t.supervisors=e.data,t.$emit("loading","100%",!0))})).catch((function(e){console.log(e),t.$emit("loading","100%",!0),t.$emit("ajaxerror")}))},filterStudents:function(t){for(var e=[],a=0;a<t.length;a++){for(var s=!1,n=0;n<t[a].roles.length;n++)5==t[a].roles[n].roleid&&(s=!0);s&&(t[a].currentSupervisor="",t[a].changed=!1,t[a].newSupervisor="",e.push(t[a]))}return e},getCourses:function(){var t=this;this.$emit("loading","10%",!1);var e={headers:{"Content-Type":"application/json;charset=UTF-8"}};r.a.get("https://scientific-paper.swimdhbw.de//webservice/rest/server.php",{params:{wstoken:this.token,wsfunction:"mod_assign_get_assignments",moodlewsrestformat:"json"}},e).then((function(e){t.$emit("loading","100%",!0),e.exception||(t.courses=e.data.courses)})).catch((function(e){t.$emit("loading","100%",!0),t.$emit("ajaxerror"),console.log(e)}))}}},S=$,y=Object(p["a"])(S,s,n,!1,null,null,null);e["default"]=y.exports}}]);
//# sourceMappingURL=chunk-ee6c01e4.87da21d4.js.map