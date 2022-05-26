import styled from 'styled-components';
import { ReactComponent as TriangleSVG } from '../resources/svg/ref_triangle.svg';
import PulsatingDot from './PulsatingDot';

const TriangleContainer = styled.div`
    position: relative;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size - 4}px;
`;

const DotContainer = styled.div`
    position: absolute;
    top: calc(${({ pctTop }) => pctTop}% - 7.5px);
    left: calc(${({ pctLeft }) => pctLeft}% - 7.5px);
`;

const RefTriangle = ({ qualityScore, biasScore, size = 200 }) => {
    const qualityPct = (1 - (qualityScore / 2)) * 100;
    const biasPct = ((biasScore + 2) / 4) * 100;

    return (
        <TriangleContainer size={size}>
            <TriangleSVG width={size} height={size} />
            <DotContainer pctTop={qualityPct} pctLeft={biasPct}>
                <PulsatingDot />
            </DotContainer>
        </TriangleContainer>
    );
};

export default RefTriangle;