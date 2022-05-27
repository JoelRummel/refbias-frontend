import styled from "styled-components";
import RefTriangle from "../../components/RefTriangle";
import { teamsMap } from "../../config/teams";

const PageHeader = styled.h2`
    text-align: center;
    margin-bottom: 40px;
`;

const BreakdownHeader = styled.h2`
    text-align: center;
    margin-top: 60px;
    margin-bottom: 0px;
`;

const BreakdownContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const SmallTriangleHeader = styled.h3`
    text-align: center;
`;

const FandomColumn = styled.div`
    width: 33%;
    min-width: 230px;
    display: inline-block;
    margin-bottom: 40px;
`;

const ResultsPage = ({ home, away, results }) => {
    if (!results) return (
        <div>
            <PageHeader>
                {teamsMap[away].location} {teamsMap[away].mascot} vs. {teamsMap[home].location} {teamsMap[home].mascot}
            </PageHeader>
            <h4>LOADING...</h4>
        </div>
    );

    const { home: homeScores, away: awayScores, neutral: neutralScores, total } = results;
    return (
        <div>
            <PageHeader>
                {teamsMap[away].location} {teamsMap[away].mascot} vs. {teamsMap[home].location} {teamsMap[home].mascot}
            </PageHeader>
            <RefTriangle qualityScore={total.qualityScore} biasScore={total.biasScore} home={home} away={away} size={300} />
            <BreakdownHeader>FANDOM BREAKDOWN</BreakdownHeader>
            <BreakdownContainer>
                <FandomColumn>
                    <SmallTriangleHeader>{teamsMap[away].location} Fans</SmallTriangleHeader>
                    <RefTriangle qualityScore={awayScores.qualityScore} biasScore={awayScores.biasScore} home={home} away={away} size={150} labels={false} />
                </FandomColumn>
                <FandomColumn>
                    <SmallTriangleHeader>Neutral Fans</SmallTriangleHeader>
                    <RefTriangle qualityScore={neutralScores.qualityScore} biasScore={neutralScores.biasScore} home={home} away={away} size={150} labels={false} />
                </FandomColumn>
                <FandomColumn>
                    <SmallTriangleHeader>{teamsMap[home].location} Fans</SmallTriangleHeader>
                    <RefTriangle qualityScore={homeScores.qualityScore} biasScore={homeScores.biasScore} home={home} away={away} size={150} labels={false} />
                </FandomColumn>
            </BreakdownContainer>
        </div>
    );
};

export default ResultsPage;