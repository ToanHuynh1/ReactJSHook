import './Nav.scss'
import { useEffect, useState } from 'react'
import useGet from '../customize/get'
import moment from 'moment'

const Covid = () => 
{
    // const today = new Date(new Date().setHours(0,0,0,0))

    // const priorDate = moment().subtract(30,'days')

    const today = moment().startOf('day').toISOString(true)
    const priorDate =  moment().startOf('day').subtract(31,'days').toISOString(true)

    const {data:dataCovid, isLoading, isError} = useGet(`https:/api.covid19api.com/country/vietnam?from=${priorDate}to=${today}`, true)

    console.log(dataCovid)
return (
    <>
    <h2>Covid-19 in VietNam</h2>
    <table>
  
        <thead>
            <tr>
                <th>Confirmed</th>
                <th>Active</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Data</th>
            </tr>
     
        </thead>

        <tbody>
            {isError === false &&  isLoading === false && dataCovid && dataCovid.length > 0 && dataCovid.map(item => {
                return (
                <tr key={item.ID}>
                    <td>{item.Confirmed}</td>
                    <td>{item.Active}</td>
                    <td>{item.Confirmed}</td>
                    <td>{item.Recovered}</td>
                    <td>{item.Date}</td>
                </tr>
                )
            })}

            {isLoading == true && 
                <tr>
                    <td colSpan='5' style={{textAlign: 'center'}}>
                        Loading ... 
                    </td>
                </tr>
            }
             {isError == true && 
                <tr>
                    <td colSpan='5' style={{textAlign: 'center'}}>
                        Error ... 
                    </td>
                </tr>
            }
        </tbody>
    </table>
    </>
)
}

export default Covid