Template.reportsOverview.helpers({
reports:function()
{
  return Cards.find({});
},
reportDuration:function(h,m,s){
  var returnMsg="";
  var day=H=M=S=mod=carry=0;

  if(s>=60)
  {
    mod=s%60;
    M=((s-mod)/60);
    S=mod;
  }else{
    S=s+S;
  }
  if(m>=60)
  {
    m=m+M;
    mod=(m)%60;
    H=((m-mod)/60);
    M=mod;
  }else {
    M=m+M;
  }
  if(h>=48)
  {
    h=h+H;
    mod=h%48;
    day=(h-mod)/48;
    H=mod;
  }else{
    H=h+H;
  }

  returnMsg= day<=0?"": (day +" D ");
  returnMsg=returnMsg + (H<=0?"":(H +" H "));
  returnMsg=returnMsg + (M<=0?"":(M + " M "));
  returnMsg=returnMsg + (S<=0?"":(S + " S "));
  return returnMsg;
}
});
