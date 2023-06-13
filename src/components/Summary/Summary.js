import {SummaryDiv} from "./Summary.styled";

const Summary = ({ monthlyRecord }) => {

  let dis = 0,
    hour = 0,
    min = 0,
    sec = 0,
    totalHour = 0,
    totalMin = 0,
    totalSec = 0,
    totalPaceMin = 0,
    totalPaceSec = 0;
  
  if(monthlyRecord.length > 0){
    monthlyRecord.forEach((e) => {

        dis += Number(e.distance);
        hour += Number(e.time.split(":")[0]);
        min += Number(e.time.split(":")[1]);
        sec += Number(e.time.split(":")[2]);
      });
      let totalTime = hour === 0 ? min * 60 + sec : hour * 60 * 60 + min * 60 + sec;

      totalHour = Math.floor(totalTime / 3600);
      totalMin = Math.floor((totalTime % 3600) / 60);
      totalSec = Math.floor((totalTime % 3600) % 60);
      totalPaceMin = Math.floor(totalTime / dis / 60);
      totalPaceSec = Math.floor((totalTime / dis) % 60);

    
  }
  
  // console.log(min+Math.floor(sec/60), parseInt(sec % 60), min* 60 + sec , dis, Math.floor((min* 60 + sec)/dis/60),Math.floor((min* 60 + sec)/dis%60));

  const titles = [];
  const sumTitle = ["킬로미터", "러닝", "평균 페이스", "시간"];

  return (
    <SummaryDiv className="summary">
     
        <div className="memo">
          <div>{dis}</div>
          <div>킬로미터</div>
        </div>
        <div className="memo">
          <div>{monthlyRecord.length}</div>
          <div>러닝</div>
        </div>
        <div className="memo">
          <div>{`${totalPaceMin}'${totalPaceSec}"`}</div>
          <div>평균 페이스</div>
        </div>
        <div className="memo">
          <div>{`${totalHour}:${totalMin}:${totalSec}`}</div>
          <div>시간</div>
        </div>
       
     
    </SummaryDiv>
  );
};

export default Summary;
