import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    // * map으로 1~12월간의 지출 값에 대한 새로운 배열을 생성
    const dataPointValues = props.dataPoints.map((dataPoint) => {
        return dataPoint.value;
    });
    // * 해당 배열에서 가장 큰 값을 maximum 값으로 설정
    const totalMaximum = Math.max(...dataPointValues);

    console.log(totalMaximum);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => {
                return <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label}></ChartBar>;
            })}
        </div>
    );
};

export default Chart;
