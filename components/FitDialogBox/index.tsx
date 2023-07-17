import styled from 'styled-components';
import StyledDialogBox from 'components/DialogBox';

const FitDialogBox = styled(StyledDialogBox)`
    font-size: 22px;
    width: fit-content;

    & > div {
        width: fit-content;
    }
`;

export default FitDialogBox;
