// ==UserScript==
// @name Phish-me, Spam You
// @namespace Evil Tools Of Evil
// @match https://excel.officeapps.live.com/x/_layouts/xlform.aspx?ui=en-US&rs=en-US&hid=*WOPISrc=https%3A%2F%2Fwopi.onedrive.com%2Fwopi%2Ffiles%2F1299051320C3873E%21113&sc=host%3D%26qt%3DFolders&mscc=1&wdFormId=%7b573C3764-E34A-45DB-8EE6-8D8C672404A8%7d
// @grant none
// @run-at       document-idle
// ==/UserScript==

function Sleep(condition, func) {
  if (condition()){
    func()
  }
  else {
    setTimeout(_=>Sleep(condition, func))
  }
}


Sleep(
  _=>!($("#Question0 #QuestionAnswerElement")[0]===undefined),
  _=>{
    $("#Question0 #QuestionAnswerElement").val("Other")[0].dispatchEvent(new Event('change'))
    $("#Question1 #QuestionAnswerElement").val(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15))[0].dispatchEvent(new Event('change'))
    $("#Question2 #QuestionAnswerElement").val(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15))[0].dispatchEvent(new Event('change'))
    $("#m_submitButton").click()
    Sleep(
      _=>!($("#ewrform-messagearea")[0]===undefined),
      _=>{location.reload()}
    )
  }
)
