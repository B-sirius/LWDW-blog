// 对话框盒，仿照了RPG游戏中的对话框样式
import styled from 'styled-components';

const DialogBox = ({
    className,
    children,
}: {
    className?: string;
    children;
}) => (
    <div className={className}>
        <div>{children}</div>
    </div>
);

const StyledDialogBox = styled(DialogBox)`
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    border: 1px solid var(--dialog-border-color);
    background-color: var(--dialog-bg-color);
    padding: 1px;

    & > div {
        display: flex;
        flex-direction: column;
        height: 100%;
        border: 1px solid ${({ theme }) => theme.dialogBorderColor};
        color: ${({ theme }) => theme.fontColor};
        padding: 10px;
    }
`;

export default StyledDialogBox;
