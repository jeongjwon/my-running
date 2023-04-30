import styled from 'styled-components';

export const SummaryDiv = styled.div`
    background: lightgray;
    padding: 0.5rem;
    /* border: 0.1rem solid #2e2e2e; */
    margin-bottom: 2rem;
    border-radius: 0.8rem;
    > .row{
        justify-content: space-around;
    }
`;
const Summary = () => {
    const titles = [];
    const sumTitle = ['킬로미터', '러닝', '평균 페이스', '시간'];

    return(
        <SummaryDiv className="summary">
            <div className="row">
                {sumTitle.map((item, idx) => ( 
                    <span key={idx}>{item}</span>
                ))}
            </div>
            <div className="row">
                
            </div>
        </SummaryDiv>
    );
}

export default Summary;