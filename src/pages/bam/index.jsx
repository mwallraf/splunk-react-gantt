import React from 'react';
import layout from '@splunk/react-page';
import { ThemeProvider } from 'styled-components';
import { themes as reactUIThemes } from '@splunk/react-ui/themes';
import DashboardCore, { themes as dashboardCoreThemes } from '@splunk/dashboard-core';
import EnterpriseViewOnlyPreset, {
    themes as presetThemes,
} from '@splunk/dashboard-presets/EnterpriseViewOnlyPreset';
import definition from './definition.json';
import BamGantt1Viz from './bam1';


const CustomPreset = {
    ...EnterpriseViewOnlyPreset,
    visualizations: {
        ...EnterpriseViewOnlyPreset.visualizations,
        'viz.bamgantt1': BamGantt1Viz
    },
};

const themeKey = 'enterpriseDark';
const theme = {
    ...presetThemes[themeKey],
    ...dashboardCoreThemes[themeKey],
    ...reactUIThemes[themeKey],
};
// use DashboardCore to render a simple dashboard
layout(
    <ThemeProvider theme={theme}>
        <DashboardCore
            width="100%"
            height="calc(100vh - 78px)"
            definition={definition}
            preset={CustomPreset}
        />
    </ThemeProvider>,
    {
        pageTitle: 'BAM VIZ TEST',
        hideFooter: true,
        layout: 'fixed',
    }
);
