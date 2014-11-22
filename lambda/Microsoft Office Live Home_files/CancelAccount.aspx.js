function ProceedFromVerifyToReason()
{
    document.getElementById("Verify").style.display = "none";
    document.getElementById("Reason").style.display = "block";
}

function RevertFromReasonToVerify()
{
    document.getElementById("Verify").style.display = "block";
    document.getElementById("Reason").style.display = "none";
}

function ProceedFromReasonToConfirm()
{
    document.getElementById("Reason").style.display = "none";
    document.getElementById("Confirm").style.display = "block";
}

function ProceedFromVerifyToConfirm() {
    document.getElementById("Verify").style.display = "none";
    document.getElementById("Confirm").style.display = "block";
}

function ExitCancellation()
{
    window.location.href = "administration.aspx";
}

function ProceedFromConfirmToDone()
{
    var alternateEmail = document.getElementById("AlternateEmail").value.replace(/^\s+|\s+$/g, "");
    if (!IsValidEmail(alternateEmail) || alternateEmail == null || alternateEmail == "")
    {
        alert(document.getElementById("InvalidEmail").value);
        document.getElementById("AlternateEmail").focus();
        return;
    }
    
    document.getElementById("CancelAccount_Proceed3").disabled = "true";
    document.getElementById("CancelAccount_Exit3").disabled = "true";
        
    // get the reason(s) for cancelling
    var reasonForCancelling = "";
    var checkboxes = document.getElementsByTagName("input");
    var i;
    for (i = 0; i < checkboxes.length; i++)
    {
        var chk = checkboxes[i];
        if (chk.type == "checkbox" && chk.checked && chk.value != null)
        {
            reasonForCancelling += (chk.value + ";");
        }
    }
    reasonForCancelling += document.getElementById("CustomReason").innerHTML;
    
    var params = alternateEmail + "#" + reasonForCancelling;
    
    DeprovisionAccount(params);
}

function IsValidEmail(email)
{
    var regex = new RegExp("^([0-9a-zA-Z]+[-._+&])*[0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$");
    return regex.test(email);
}

function DeprovisionAccountCalled()
{
    document.getElementById("Confirm").style.display = "none";
    document.getElementById("Done").style.display = "block";
}

function textareaMaxLength(field, evt, limit) {
  var evt = (evt) ? evt : event;
  var charCode =
    (typeof evt.which != "undefined") ? evt.which :
   ((typeof evt.keyCode != "undefined") ? evt.keyCode : 0);

  if (!(charCode >= 13 && charCode <= 126)) {
    return true;
  }

  return (field.value.length < limit);
}
// CancelAccount Wizrd Steps Begin------
// Step10 Done move to step12
function ToCancellationStep10() {
    window.location.href = "CancelAccount12.aspx";
}
// CancelAccount Wizrd Steps End------
