
var PASS="whatgrows";
(function(){
  if(document.body.dataset.gated==="1"){
    var ok=localStorage.getItem("gsPathwayPass")===PASS;
    if(!ok){document.getElementById("gate").hidden=false;document.getElementById("content").style.display="none";}
  }
})();
function tryPass(){
  var v=document.getElementById("passin").value.trim().toLowerCase();
  var fb=document.getElementById("passfb");
  if(v===PASS){localStorage.setItem("gsPathwayPass",PASS);location.reload();}
  else{fb.hidden=false;fb.textContent="That\u2019s not it \u2014 check the text from Shar\u00e9a, or visit the Checkpoint.";fb.className="fb no";}
}
document.addEventListener("change",function(e){
  if(e.target.type!=="radio")return;
  var qq=e.target.closest(".qq");if(!qq)return;
  var fb=qq.querySelector(".fb");var c=parseInt(qq.dataset.c,10);
  var v=parseInt(e.target.value,10);
  fb.hidden=false;
  if(v===c){fb.textContent="Right. Keep moving, traveler.";fb.className="fb ok";}
  else{fb.textContent="Not quite \u2014 look back at the lesson and try again.";fb.className="fb no";}
});
