import React from 'react';
import BaseVisualization from '@splunk/dashboard-visualizations/common/BaseVisualization';
import Gantt from './components/Gantt';



// static data for our gantt chart
const data = {
  data: [
    { id: 1, text: 'Task #1', start_date: '2019-04-15', duration: 3, progress: 0.6 },
    { id: 2, text: 'Task #2', start_date: '2019-04-18', duration: 3, progress: 0.4 }
  ],
  links: [
    { id: 1, source: 1, target: 2, type: '0' }
  ]
};

const currentZoom = 'Hours';



const BamGantt1Viz = ({ options, width, height, dataSources }) => {

    return (
        <Gantt
            tasks={data}
            zoom={currentZoom}
        />
    );

};

BamGantt1Viz.propTypes = BaseVisualization.propTypes;

BamGantt1Viz.defaultProps = {
    ...BaseVisualization.defaultProps,
    height: 500,
    width: 600,
};

export default BamGantt1Viz;
