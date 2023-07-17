// 外链
const InboundLink = ({
    className = null,
    href,
    children,
}: {
    className?: string;
    href: string;
    children;
}) => (
    <a
        className={className}
        rel="noopener noreferrer"
        target="_blank"
        href={href}
    >
        {children}
    </a>
);

export default InboundLink;
