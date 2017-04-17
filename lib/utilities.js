getDuration=function GetTimeLapsed(newdate,olddate)
{
  /*var d = new Date();
var old=new Date(1458325597912);
    document.getElementById("old").innerHTML = old;

    document.getElementById("demo").innerHTML = d;
    document.getElementById("time").innerHTML = difference;
*/
    var difference = newdate.getTime() - olddate.getTime();
    var hoursDifference = Math.floor(difference/1000/60/60);
    difference -= hoursDifference*1000*60*60
    var minutesDifference = Math.floor(difference/1000/60);
    difference -= minutesDifference*1000*60
    var secondsDifference = Math.floor(difference/1000);
    Session.set("HoursDifference",hoursDifference);
    Session.set("MinDifference",minutesDifference);
    Session.set("SecDifference",secondsDifference);
    //document.getElementById("t").innerHTML = minutesDifference +" min "+ secondsDifference +" sec";
}
deleteCard=function(id)
{
  Cards.update({_id:id},{$set:{isDeleted:true}});
  Cards.update({_id:id},{$set:{deletedOn:new Date()}});
}
buildparseConfig=function()
{
	return {
		delimiter: "",	// auto-detect
	newline: "",	// auto-detect
	header: false,
	dynamicTyping: false,
	preview: 0,
	encoding: "",
	worker: false,
	comments: false,
	step: undefined,
	complete: completeParsed,
	error: undefined,
	download: false,
	skipEmptyLines: false,
	chunk: undefined,
	fastMode: undefined,
	beforeFirstChunk: undefined,
	withCredentials: undefined
	};
}

completeParsed=function (results)
{
	//end = now();

	if (results && results.errors)
	{
		if (results.errors)
		{
			errorCount = results.errors.length;
		//	firstError = results.errors[0];
		}
		if (results.data && results.data.length > 0)
			var rowCount = results.data.length;
			var caseStage=null;
			for(i=1;i<results.data.length;i++)
			{
				if(results.data[i][2]!="" && results.data[i][2]!=undefined)
				{
				switch(results.data[i][2])
				{
					case "Open":
								caseStage=StageEnum.Progress;
								break;
					case "Verify":
								caseStage=StageEnum.Wait;
								break;
					default:
								caseStage=StageEnum.Progress;
								break;
				}
				InsertCard(results.data[i][0],results.data[i][1],Meteor.user()._id,caseStage);
			}else {
				break;
			}
			}
	}

	//printStats("Parse complete");
	console.log("    Results:", results);

	// icky hack
	//setTimeout(enableButton, 100);
}
InsertCard=function(caseNumber,customer,userId, cardStage)
{
	if(Cards.find({caseNumber:caseNumber}).fetch().length==0)
	{
			Cards.insert({
			caseNumber:caseNumber,
			customer: customer,
			createdOn: new Date(),
			switchDate:new Date(),
			createdBy: userId,
			stage: cardStage,
			isDeleted:false,
			deletedOn:null,
			owner:userId,
			progMin:0,
			progHour:0,
			progSec:0,
			waitMin:0,
			waitHour:0,
			waitSec:0,
			helpMin:0,
			helpHour:0,
			helpSec:0
		});//end of Cards.insert
	console.log("Card Insertion Successful");
	return true;
	}else {
	return false;
	}
}
