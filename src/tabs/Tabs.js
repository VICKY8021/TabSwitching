import * as React from 'react';
// import PropTypes from 'prop-types';
import { Description } from '@material-ui/icons';
import './Tabs.css';
import { Box, Tab, Tabs, Typography } from '@material-ui/core';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
// };

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Center() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="tab">
            <Box sx={{ width: '100%' }} className='tab_main'>
                <Box sx={{}}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                    >
                        <Tab className="tab_label" icon={<Description />} label="Confirmation" {...a11yProps(0)} />
                        <Tab className="tab_label" icon={<Description />} label="Statements" {...a11yProps(1)} />
                        <Tab className="tab_label" icon={<Description />} label="Transcripts" {...a11yProps(2)} />
                        <Tab className="tab_label" icon={<Description />} label="Tex forms" {...a11yProps(3)} />
                        <Tab className="tab_label" icon={<Description />} label="Fund documents" {...a11yProps(4)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    Confirmation
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Statements
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Transcripts
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Tex forms
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Fund documents
                </TabPanel>
            </Box>
        </div>
    );
}