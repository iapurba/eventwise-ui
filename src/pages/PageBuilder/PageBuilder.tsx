import { PageHeaderText, PageHeaderWrapper, PageWrapper } from "./PageBuilder.styles";

interface PageBuilderProps {
    id: string;
    title?: string;
    children: React.ReactNode;
}

const PageBuilder: React.FC<PageBuilderProps> = ({ id, title, children }) => {
    return (
        <PageWrapper id={id}>
            {title &&
                <PageHeaderWrapper pb={3}>
                    <PageHeaderText>{title}</PageHeaderText>
                </PageHeaderWrapper>
            }
            {children}
        </PageWrapper>
    );
};

export default PageBuilder;