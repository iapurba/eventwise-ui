import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

const CustomTab = styled(Tab)(({ theme }) => ({
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: '16px',
    padding: theme.spacing(2),
    '&.Mui-selected': {
        color: '#0D0F13',
    },
}));

interface TabItem {
    label: string;
    component: React.ReactNode;
};

interface UserProfileTabsProps {
    tabs: TabItem[];
    tabIndex: number;
    onTabChange: (newValue: number) => void;
};

const UserProfileTabs: React.FC<UserProfileTabsProps> = ({
    tabs,
    tabIndex,
    onTabChange
}) => {
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={tabIndex}
                    onChange={(e: any, i: number) => onTabChange(i)}
                    centered
                >
                    {tabs.map((item: TabItem, i: number) => (
                        <CustomTab key={i} label={item.label} />
                    ))}
                </Tabs>
            </Box>
            {tabs.map((item: TabItem, i: number) => (
                <CustomTabPanel key={i} value={tabIndex} index={i}>
                    {item.component}
                </CustomTabPanel>
            ))}
        </Box>
    );
};

export default UserProfileTabs;