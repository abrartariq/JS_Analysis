"use strict";
(function(){function c(g){var e=new $.Deferred();
var f=false;
function d(){if(!g){e.reject();
f=true
}else{if(g()){e.resolve();
f=true
}}if(!f){window.setTimeout(d,100)
}}d();
return e
}function a(){optimizely=optimizely||[];
function d(){var e={};
e.usertype=vp.getType();
e.visitnumber=vp.getVisitNumber();
e.kxsfdc=vp.getKruxSegment();
e.neustar=vp.getNeustarInfoForOmniture()?vp.getNeustarInfoForOmniture():"";
e.orgId=vp.OrgInfo.getID();
e.ptcsales=(digitalData.util.getElement("ptc.sales")?parseInt(digitalData.util.getElement("ptc.sales")*10000):"");
e.ptcservice=(digitalData.util.getElement("ptc.service")?parseInt(digitalData.util.getElement("ptc.service")*10000):"");
e.ptcplatform=(digitalData.util.getElement("ptc.platform")?parseInt(digitalData.util.getElement("ptc.platform")*10000):"");
e.ptcmarketing=(digitalData.util.getElement("ptc.marketing")?parseInt(digitalData.util.getElement("ptc.marketing")*10000):"");
return e
}optimizely.push({type:"user",attributes:d()})
}try{c(function(){return typeof optimizely==="object"&&typeof vp==="object"&&typeof digitalData==="object"
}).done(a)
}catch(b){console.log("Error initializing Optimizely.",b)
}}());