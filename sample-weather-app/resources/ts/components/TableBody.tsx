import React from 'react';
import moment from 'moment';
import { History } from '../../typescript-axios/model/history';
import { Historys } from '../../typescript-axios/model/historys';
import { Image} from 'react-bootstrap';

type Props = {
    datas: Historys,
    cityId: number
}

const TableBody: React.FC<Props> = ({ datas, cityId }) => {
    const dateConver = (date: string) => {
        if (date == moment(new Date()).format('DD/MM')) {
            return "Today";
        } else if (date == moment(new Date()).subtract(1, 'd').format('DD/MM')) {
            return "Yesterday";
        } else {
            return date;
        }
    };

    return (
        <tbody>
            {datas.map(( listValue: History, index: any ) => {
                if (listValue.city_id == cityId) {
                    return (
                        <tr key={index}>
                            <td>{dateConver(moment(listValue.date).format('DD/MM'))}</td>
                            <td>{listValue.main}<Image className="mb-2" width="32" height="32" src={`/assets/icon/${listValue.icon_id}.gif`} /></td>
                            <td>{listValue.temp_max}°C</td>
                            <td>{listValue.temp_min}°C</td>
                            <td>{listValue.wind_speed}m/s</td>
                            <td>{listValue.pressure}hPa</td>
                        </tr>
                    );
                }
            })}
        </tbody>
    )
}

export default TableBody