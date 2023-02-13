// 对话框链接，带有高亮可点击的标题栏（在RPG中，标题栏位置一般是显示人物名字的）

import styled from 'styled-components';
import StyledDialogBox from 'components/DialogBox';
import FitDialogBox from 'components/FitDialogBox';
import Link from 'next/link';

const DialogTitle = styled(FitDialogBox)`
    & > div {
        color: ${({ theme }) => theme.fontHighlightColor};
    }
`;

const DialogLink = ({ className, title, href, children }) => (
    <div className={className}>
        <DialogTitle>
            {
                href
                    ? (
                        <Link href={href}>
                            {title}
                        </Link>
                    )
                    : (title)
            }
        </DialogTitle>
        <StyledDialogBox>
            {children}
        </StyledDialogBox>
    </div>
)

const StyledDialogLink = styled(DialogLink)`
    flex-direction: column;
`

export default StyledDialogLink;
