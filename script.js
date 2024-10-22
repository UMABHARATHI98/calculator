function Calculate(){
    const cp=document.querySelector(".cp").value;
    const sp=document.querySelector(".sp").value;
    const ProfitLoss=document.querySelector(".loss");
    const percentage=document.querySelector(".lossPercentage");
    const nothing=document.querySelector(".nothing");
    ProfitLoss.innerHTML=" ";
    percentage.innerHTML=" ";
    nothing.innerHTML=" ";
    const diff=sp-cp;
    if(diff>0){
        const profit_percent=((diff/cp)*100).toFixed(2);
        ProfitLoss.innerHTML="It is a profit of: INR"+diff;
        percentage.innerHTML="Total profit Percentage :" +profit_percent;
    }
    else if(diff<0){
        const loss_percent=((Math.abs(diff)/cp)*100).toFixed(2);
        ProfitLoss.innerHTML="It is Loss of: INR "+Math.abs(diff);
        percentage.innerHTML="Total Loss Percentage :"+loss_percent;
    }
    else if(diff==0){
        nothing.innerHTML="No Profit No Loss";
    }

}