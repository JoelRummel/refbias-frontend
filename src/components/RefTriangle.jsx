import styled from 'styled-components';
import teamLogos from '../config/teamLogos';
import { ReactComponent as TriangleSVG } from '../resources/svg/ref_triangle.svg';
import PulsatingDot from './PulsatingDot';

const TriangleContainer = styled.div`
    position: relative;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size - 4}px;
    margin: 0 auto;
`;

const DotContainer = styled.div`
    position: absolute;
    top: calc(${({ pctTop }) => pctTop}% - 7.5px);
    left: calc(${({ pctLeft }) => pctLeft}% - 7.5px);
`;

const Label = styled.span`
    position: absolute;
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;
`;

const RefTriangle = ({ qualityScore, biasScore, away, home, size = 200, labels = true }) => {
    const qualityPct = (1 - (qualityScore / 2)) * 100;
    const biasPct = ((biasScore + 2) / 4) * 100;

    const logoSize = size / 2;

    return (
        <TriangleContainer size={size}>
            <TriangleSVG width={size} height={size} />
            <DotContainer pctTop={qualityPct} pctLeft={biasPct}>
                <PulsatingDot />
            </DotContainer>
            <img src={teamLogos[away]} alt="Away team logo" style={{ position: 'absolute', margin: 'auto 0', top: -(logoSize / 1.5), bottom: 0, right: `calc(100% - ${logoSize / 2}px)`, width: logoSize, height: logoSize }} />
            <img src={teamLogos[home]} alt="Home team logo" style={{ position: 'absolute', margin: 'auto 0', top: -(logoSize / 1.5), bottom: 0, left: `calc(100% - ${logoSize / 2}px)`, width: logoSize, height: logoSize }} />
            {labels && (
                <>
                    <Label style={{ top: '-20px', left: 0, right: 0, textAlign: 'center' }}>Good officiating</Label>
                    <Label style={{ bottom: '-20px', left: 0, right: 0, textAlign: 'center' }}>Bad officiating</Label>
                    <Label style={{ left: -100, right: '85%', bottom: '40%', textAlign: 'right' }}>Pro-{away} Bias</Label>
                    <Label style={{ right: -100, left: '85%', bottom: '40%', textAlign: 'left' }}>Pro-{home} Bias</Label>
                </>
            )}
        </TriangleContainer>
    );
};

export default RefTriangle;